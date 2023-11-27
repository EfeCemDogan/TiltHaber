// express
const express = require("express");
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// node modulles
const path = require("path");

// routes
const userRoutes = require("./TiltHaber.Admin/routes/user");
const adminRoutes = require("./TiltHaber.Admin/routes/admin");
const authRoutes = require("./TiltHaber.Admin/routes/auth");

// custom modules
const sequelize = require("./TiltHaber.Admin/data/db");
const dummyData = require("./TiltHaber.Admin/data/dummy-data");

// template engine
app.set("view engine", "ejs");

// models
const Category = require("./TiltHaber.Admin/models/category");
const Blog = require("./TiltHaber.Admin/models/blog");
const User = require("./TiltHaber.Admin/models/user");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "hello world",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    store: new SequelizeStore({
        db: sequelize
    })
}));



app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "/TiltHaber/public")));
app.use("/static", express.static(path.join(__dirname, "/TiltHaber/views")));
// app.set('/views', path.join(__dirname, 'views'));

app.use("/admin", adminRoutes);
app.use("/account", authRoutes);
app.use(userRoutes); 




Blog.belongsTo(User, {
    foreignKey: {
        allowNull: true
    }
});
User.hasMany(Blog);

Blog.belongsToMany(Category, { through: "blogCategories"});
Category.belongsToMany(Blog, { through: "blogCategories"});

(async () => {
    // await sequelize.sync({ force: true });
    // await dummyData();
})();

app.listen(3000, function() {
    console.log("listening on port 3000");
});