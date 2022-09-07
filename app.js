// local reviews data
const reviews = [
  {
    id: 1,
    name: "Kiran Bhandari",
    job: "9849495678",
    img: "./images/kiran.jpg",
    
    text:
      "Whether you are having a rough day and need a pick-me-up to assure yourself that it's all going to be OK, or whether you are just looking for a mission statement for the day",
  },
  {
    id: 2,
    name: "Kamal Pandey",
    job: "9811493094",
    img: "./images/kamal.jpg",
   
    text:
      "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
  },
  {
    id: 3,
    name: "Bishal Pandey ",
    job: "9847020741",
    img: "./images/bishal.jpg",
    text:
      "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
  },
  {
    id: 4,
    name: "Kushal Kharel",
    job: "9848149809",
    img: "./images/kushal.jpg",
    text:
      "You can be everything. You can be the infinite amount of things that people are.",
  },
  {
    id: 5,
    name: "Naman Basnet",
    job: "9811918406",
    img: "./images/naman.jpg",
    text:
      "You define your own life. Don't let other people write your script",
  },
  {
    id: 6,
    name: "Karan Shrees",
    job: "9864569840",
    img: "./images/karan.jpg",
    text:
      "You define your own life. Don't let other people write your script",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
