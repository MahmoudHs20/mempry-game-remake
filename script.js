var cards = document.getElementsByClassName("card"),
  loginBtn = document.getElementById("login"),
  goContinue = document.querySelector(".continue"),
  more = document.querySelector(".more"),
  winners = document.querySelector(".show-winners"),
  winnersBox = document.querySelector(".winners-container"),
  closeWinners = document.querySelector(".close-winners"),
  side = document.querySelector(".siide"),
  loginPage = document.getElementById("loginPage"),
  city = document.getElementById("city"),
  password = document.getElementById("password"),
  username = document.getElementById("username"),
  age = document.getElementById("age"),
  winSound = document.getElementById("winSound"),
  loseSond = document.getElementById("loseSond"),
  backmusic = document.getElementById("backmusic");
var wrapper = document.querySelector(".wrapper");
var imagesInDescover = document.querySelectorAll(".wrapper .img");

//                               //
window.onload = function() {
  backmusic.play();
  countDown();
};
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
confetti.maxCount = 40;
function compare() {
  tries = 0;
  if (pair[0].value === pair[1].value) {
    sessionStorage.setItem("prize", pair[0].value);
    setTimeout(() => {
      goContinue.parentElement.parentElement.style.visibility = "visible";
      confetti.start();
      winSound.play();
      cards[pair[0].index].classList.remove("show");
      cards[pair[1].index].classList.remove("show");
      cards[pair[0].index].querySelector(".views").style.visibility = "hidden";
      cards[pair[1].index].querySelector(".views").style.visibility = "hidden";
    }, 2000);
  } else {
    imagesInDescover[0].style.backgroundImage = `url(${pair[0].value})`;
    imagesInDescover[1].style.backgroundImage = `url(${pair[1].value})`;
    setTimeout(() => {
      wrapper.style.display = "block";
    }, 6300);
    setTimeout(() => {
      loseSond.play();
      setTimeout(() => {
        cards[pair[0].index].firstElementChild.style.display = "block";
        cards[pair[1].index].firstElementChild.style.display = "block";
        cards[pair[0].index].querySelector(".views").style.visibility =
          "hidden";
        cards[pair[1].index].querySelector(".views").style.visibility =
          "hidden";
        pair = [
          { index: null, value: null },
          { index: null, value: null }
        ];
      }, 4900);
    }, 2000);
  }
}
winners.onclick = () => {
  winnersBox.style.top = "0";
};
closeWinners.onclick = () => {
  winnersBox.style.top = "-110%";
};
cards.map(card => {
  card.onclick = function() {
    if (tries === 0 && pair[0].value === null && pair[1].value === null) {
      card.firstElementChild.style.display = "none";
      card.classList.add("show");
      card.querySelector(".views").style.visibility = "visible";
      tries += 1;
      card.setAttribute("show", "");
      pair[0].value = card.lastElementChild.getAttribute("src");
      pair[0].index = cards.indexOf(card);
      setTimeout(function() {
        card.classList.remove("show");
      }, 5000);
    } else if (pair[1].value === null && tries === 1) {
      if (!card.hasAttribute("show")) {
        card.firstElementChild.style.display = "none";
        card.classList.add("show");
        card.querySelector(".views").style.visibility = "visible";
        cards[pair[0].index].removeAttribute("show");
        tries = 0;
        pair[1].value = card.lastElementChild.getAttribute("src");
        pair[1].index = cards.indexOf(card);
        setTimeout(function() {
          card.classList.remove("show");
        }, 5000);
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
};
/*restart.onclick = function() {
  restart.parentElement.parentElement.style.visibility = "hidden";
  cards[pair[0].index].firstElementChild.style.display = "block";
  cards[pair[1].index].firstElementChild.style.display = "block";
  pair = [
    { index: null, value: null },
    { index: null, value: null }
  ];
  shuffle();
}; */
more.onclick = function() {
  if ((Window, innerWidth < 500)) {
    window.scrollBy(0, 720);
  } else {
    side.classList.toggle("showSide");
    console.log(side);
  }
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
/** More about product */

var btns = document.querySelectorAll(".moreAbout");
var infoPage = document.querySelector(".product-info");
var closeMore = document.querySelector(".closeMore");

btns = Array.from(btns);
btns.forEach(btn => {
  btn.onclick = () => {
    infoPage.classList.toggle("slideIn");
  };
});
closeMore.onclick = () => {
  wrapper.style.display = "none";
};
/** */
