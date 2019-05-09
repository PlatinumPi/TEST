const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/blogposts", { useNewUrlParser: true }
);

const blogSeed = [
  {
    title: "Computer Science",
    author: "Alex Davey",
    post:
      "Today I will be going over some of the things you should have when starting your computer science courses as well as some tips and tricks that helped me. ",
    date: new Date(Date.now())
  },
  {
    title: "Games I've been Playing",
    author: "Charles Muller",
    post:
      "Lately I've been playing a lot of survival RPG gamnes and would like to talk about a couple of them in depth and rank a few of my favorites.",
    date: new Date(Date.now())
  },
  {
    title: "My Vacation",
    author: "Emily Smith",
    post:
      "Last week my family and I went on a road trip to the Grand Canyon. We drove for over 8 hours but it was worth it once we got there. ",
    date: new Date(Date.now())
  },

];

db.Blog
  .remove({})
  .then(() => db.Blog.collection.insertMany(blogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
