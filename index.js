const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const path = require("path");
const userRoutes = require("./TiltHaber.Admin/routes/user");
const adminRoutes = require("./TiltHaber.Admin/routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "/TiltHaber/public")));
app.use("/static", express.static(path.join(__dirname, "/TiltHaber/views")));
// app.set('/views', path.join(__dirname, 'views'));

app.use("/admin", adminRoutes);
app.use(userRoutes); 

const sequelize = require("./TiltHaber.Admin/data/db");
const dummyData = require("./TiltHaber.Admin/data/dummy-data");
const Category = require("./TiltHaber.Admin/models/category");
const Blog = require("./TiltHaber.Admin/models/blog");
const User = require("./TiltHaber.Admin/models/user")

Blog.belongsToMany(Category, { through: "blogCategories"});
Category.belongsToMany(Blog, { through: "blogCategories"});

(async () => {
    await sequelize.sync({ force: true });
    await dummyData();
})();

app.listen(3000, function() {
    console.log("listening on port 3000");
});