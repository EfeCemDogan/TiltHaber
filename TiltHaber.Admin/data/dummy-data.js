const Category = require("../models/category");
const Blog = require("../models/blog");
const slugField = require("../helpers/slugfield");
const User = require("../models/user");
const bcrypt = require("bcrypt");

async function populate() {
    const count = await Category.count();

    if(count == 0) { 

        const categories = await Category.bulkCreate([
            { name: "Web Geliştirme",url: slugField("Web Geliştirme"), },
            { name: "Mobil Geliştirme",url: slugField("Mobil Geliştirme"), },
            { name: "Programlama",url: slugField("Programlama"), }
        ]);

        const blogs = await Blog.bulkCreate([
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.1"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            },
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.2"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            },
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.3"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            },
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.4"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            }
            ,
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.5"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            }
            ,
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.6"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            }
            ,
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.7"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            }
            ,
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.8"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            }
            ,
            {
                baslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                url: slugField("Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.9"),
                altbaslik: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                aciklama: "Toyota CEO'su Bozkurt: Bugün araç varsa hemen al diyorum yakınlarıma bile. Piyasada %30-35 daralma olabilir.",
                resim: "1-img.jpeg",
                anasayfa: true,
                onay: true
            }
        ]);

        const users = await User.bulkCreate([
            {fullname: "efe", email: "efecmdgn@gmail.com", password: await bcrypt.hash("123123", 10)},
            {fullname: "eren", email: "erenalagoz@gmail.com", password: await bcrypt.hash("123123", 10)},
        ]);

        await categories[0].addBlog(blogs[0]);
        await categories[0].addBlog(blogs[1]);
        await categories[0].addBlog(blogs[2]);
        await categories[0].addBlog(blogs[3]);
        await categories[0].addBlog(blogs[4]);
        await categories[0].addBlog(blogs[5]);
        await categories[0].addBlog(blogs[6]);
        await categories[1].addBlog(blogs[7]);
        await categories[1].addBlog(blogs[8]);

        await categories[1].addBlog(blogs[2]);
        await categories[1].addBlog(blogs[3]);

        await categories[2].addBlog(blogs[2]);
        await categories[2].addBlog(blogs[3]);

        await blogs[0].addCategory(categories[1]);
    }

}

module.exports = populate;