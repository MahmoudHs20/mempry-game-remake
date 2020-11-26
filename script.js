window.onload = function() {
  console.log("Loading Done");
};
var cards = document.getElementsByClassName("card"),
  loginBtn = document.getElementById("login"),
  restart = document.querySelector(".restart"),
  loginPage = document.getElementById("loginPage"),
  city = document.getElementById("city"),
  password = document.getElementById("password"),
  username = document.getElementById("username"),
  age = document.getElementById("age"),
  winSound = document.getElementById("winSound"),
  loseSond = document.getElementById("loseSond");
cards = Array.from(cards);
var pair = [
  { index: null, value: null },
  { index: null, value: null }
];
var num = document.querySelector(".counterSpan");
var tries = 0;
function countDown() {
  var n = 1;
  num.parentElement.style.visibility = "visible";
  num.classList.add("animate");
  setInterval(function() {
    if (n === 3) num.textContent = "GO";
    else num.textContent = ++n;
  }, 2000);
  setTimeout(() => {
    num.parentElement.style.display = "none";
  }, 7200);
}
function compare() {
  tries = 0;
  if (pair[0].value === pair[1].value) {
    setTimeout(() => {
      restart.parentElement.parentElement.style.visibility = "visible";
      winSound.play();
    }, 1200);
  } else {
    setTimeout(() => {
      loseSond.play();
      setTimeout(() => {
        cards[pair[0].index].firstElementChild.style.display = "block";
        cards[pair[1].index].firstElementChild.style.display = "block";
        pair = [
          { index: null, value: null },
          { index: null, value: null }
        ];
      }, 3500);
    }, 1200);
  }
}

cards.map(card => {
  card.onclick = function() {
    if (tries === 0 && pair[0].value === null && pair[1].value === null) {
      card.firstElementChild.style.display = "none";
      card.classList.add("show");
      tries += 1;
      card.setAttribute("show", "");
      pair[0].value = card.lastElementChild.getAttribute("src");
      pair[0].index = cards.indexOf(card);
      setTimeout(function() {
        card.classList.remove("show");
      }, 2000);
    } else if (pair[1].value === null && tries === 1) {
      if (!card.hasAttribute("show")) {
        card.firstElementChild.style.display = "none";
        card.classList.add("show");
        cards[pair[0].index].removeAttribute("show");
        tries = 0;
        pair[1].value = card.lastElementChild.getAttribute("src");
        pair[1].index = cards.indexOf(card);
        setTimeout(function() {
          card.classList.remove("show");
        }, 2000);
        compare();
      }
    }
  };
});
loginBtn.onclick = function() {
  loginPage.style.visibility =
    city.value && password.value && username.value && age.value
      ? "hidden"
      : "visiable";
  countDown();
};
restart.onclick = function() {
  restart.parentElement.parentElement.style.visibility = "hidden";
  cards[pair[0].index].firstElementChild.style.display = "block";
  cards[pair[1].index].firstElementChild.style.display = "block";
  pair = [
    { index: null, value: null },
    { index: null, value: null }
  ];
  shuffle();
};

// Shuffle Fucntion

function shuffle() {
  let images = [];
  let i = 0;
  cards.map(card => {
    images.push(card.lastElementChild.getAttribute("src"));
  });
  images = shuffleArray(images);
  cards.forEach(card => {
    card.lastElementChild.setAttribute("src", images[i++]);
  });
}
function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
