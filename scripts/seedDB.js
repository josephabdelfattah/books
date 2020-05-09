const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Gone with the Wind",
    authors: ["Margaret Mitchell"],
    description:
      "'My dear, I don't give a damn.' Margaret Mitchell’s page-turning, sweeping American epic has been a classic for over eighty years. Beloved and thought by many to be the greatest of the American novels, Gone with the Wind is a story of love, hope and loss set against the tense historical background of the American Civil War. The lovers at the novel’s centre – the selfish, privileged Scarlett O’Hara and rakish Rhett Butler – are magnetic: pulling readers into the tangled narrative of a struggle to survive that cannot be forgotten. WINNER OF NATIONAL BOOK AWARD AND PULITZER PRIZE 'For sheer readability I can think of nothing it must give way before' - The New Yorker 'What makes some people come through catastrophes and others, apparently just as able, strong, and brave, go under?’ Margaret Mitchell",
    image: "http://books.google.com/books/content?id=01KdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=01KdDwAAQBAJ&source=gbs_api"
  },
  {
    title: "Lone Girl Flyer",
    authors: ["Anthony Masters"],
    description:
      "'My dear, I don't give a damn.' Margaret Mitchell’s page-turning, sweeping American epic has been a classic for over eighty years. Beloved and thought by many to be the greatest of the American novels, Gone with the Wind is a story of love, hope and loss set against the tense historical background of the American Civil War. The lovers at the novel’s centre – the selfish, privileged Scarlett O’Hara and rakish Rhett Butler – are magnetic: pulling readers into the tangled narrative of a struggle to survive that cannot be forgotten. WINNER OF NATIONAL BOOK AWARD AND PULITZER PRIZE 'For sheer readability I can think of nothing it must give way before' - The New Yorker 'What makes some people come through catastrophes and others, apparently just as able, strong, and brave, go under?’ Margaret Mitchell",
    image: "http://books.google.com/books/content?id=vey8xQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=vey8xQEACAAJ&dq=%22Lone+girl%22&hl=&source=gbs_api"
   }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
