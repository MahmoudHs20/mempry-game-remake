var cards = document.getElementsByClassName("card"),
  loginBtn = document.getElementById("login"),
  endScreen = document.querySelector(".endScreen"),
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
  clapping = document.getElementById("clapping"),
  backmusic = document.getElementById("backmusic");
var wrapper = document.querySelector(".wrapper");
var imagesInDescover = document.querySelectorAll(".wrapper .img");
var pics1 = [
  "./images/s1.jpg",
  "./images/s2.jpg",
  "./images/s3.jpg",
  "./images/s4.jpg",
  "./images/s5.jpg",
  "./images/s6.jpg",
  "./images/s7.jpg",
  "./images/s8.jpg",
  "./images/s9.jpg",
  "./images/s10.jpg",
  "./images/s11.jpg",
  "./images/s12.jpg",
  "./images/s13.jpg",
  "./images/s14.jpg",
  "./images/s15.jpg",
  "./images/s16.jpg",
  "./images/s17.jpg",
  "./images/s18.jpg",
  "./images/s19.jpg",
  "./images/s1.jpg",
];
var pics2 = [
  "./images/group2/t1.jpg",
  "./images/group2/t2.jpg",
  "./images/group2/t3.jpg",
  "./images/group2/t4.jpg",
  "./images/group2/t5.jpg",
  "./images/group2/t6.jpg",
  "./images/group2/t7.jpg",
  "./images/group2/t8.jpg",
  "./images/group2/t9.jpg",
  "./images/group2/t10.jpg",
  "./images/group2/t11.jpg",
  "./images/group2/t12.jpg",
  "./images/group2/t13.jpg",
  "./images/group2/t14.jpg",
  "./images/group2/t15.jpg",
  "./images/group2/t16.jpg",
  "./images/group2/t17.jpg",
  "./images/group2/t18.jpg",
  "./images/group2/t19.jpg",
  "./images/group2/t1.jpg",
];
/** More about product */

var btns = document.querySelectorAll(".moreAbout");
var infoPage = document.querySelector(".product-info");
var closeMore = document.querySelector(".closeMore");

btns = Array.from(btns);

closeMore.onclick = () => {
  wrapper.style.display = "none";
};
/** */
var pics = pics2;
// pics = shuffleArray(pics);
var defaultBack = "./blankback.png";
//                               //
backmusic.play();

window.onload = function () {
  countDown();
  btns.forEach((btn) => {
    btn.onclick = () => {
      infoPage.classList.toggle("slideIn");
    };
  });
  more.onclick = function () {
    if ((Window, innerWidth < 500)) {
      window.scrollBy(0, 720);
    } else {
      side.classList.toggle("showSide");
      console.log(side);
    }
  };
  winners.onclick = () => {
    winnersBox.style.top = "0";
  };
  closeWinners.onclick = () => {
    winnersBox.style.top = "-110%";
  };
};
cards = Array.from(cards);
var pair = [
  { index: null, value: null },
  { index: null, value: null },
];
var num = document.querySelector(".counterSpan");
var tries = 0;

function countDown() {
  var n = 1;
  num.parentElement.style.visibility = "visible";
  num.classList.add("animate");
  setInterval(function () {
    if (n === 3) num.textContent = "GO";
    else num.textContent = ++n;
  }, 2000);
  setTimeout(() => {
    num.parentElement.style.display = "none";
  }, 7200);
}
confetti.maxCount = 40;
function compare() {
  // pics = shuffleArray(pics);
  tries = 0;
  if (pair[0].value === pair[1].value) {
    sessionStorage.setItem("prize", pair[0].value);
    setTimeout(() => {
      endScreen.style.visibility = "visible";
      confetti.start();
      winSound.play();
      clapping.play();
      backmusic.pause();
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
    }, 5000);
    setTimeout(() => {
      loseSond.play();
      setTimeout(() => {
        cards[pair[0].index].lastElementChild.setAttribute("src", defaultBack);
        cards[pair[1].index].lastElementChild.setAttribute("src", defaultBack);
        cards[pair[0].index].firstElementChild.style.display = "block";
        cards[pair[1].index].firstElementChild.style.display = "block";
        cards[pair[0].index].querySelector(".views").style.visibility =
          "hidden";
        cards[pair[1].index].querySelector(".views").style.visibility =
          "hidden";
        pair = [
          { index: null, value: null },
          { index: null, value: null },
        ];
      }, 4900);
    }, 2000);
  }
}

cards.map((card) => {
  card.onclick = function () {
    card.lastElementChild.setAttribute("src", pics[cards.indexOf(card)]);
    if (tries === 0 && pair[0].value === null && pair[1].value === null) {
      card.firstElementChild.style.display = "none";
      card.classList.add("show");
      card.querySelector(".views").style.visibility = "visible";
      tries += 1;
      card.setAttribute("show", "");
      pair[0].value = card.lastElementChild.getAttribute("src");
      pair[0].index = cards.indexOf(card);
      setTimeout(function () {
        card.classList.remove("show");
      }, 5000);
    } else if (pair[1].value === null && tries === 1) {
      card.lastElementChild.setAttribute("src", pics[cards.indexOf(card)]);
      if (!card.hasAttribute("show")) {
        card.firstElementChild.style.display = "none";
        card.classList.add("show");
        card.querySelector(".views").style.visibility = "visible";
        cards[pair[0].index].removeAttribute("show");
        tries = 0;
        pair[1].value = card.lastElementChild.getAttribute("src");
        pair[1].index = cards.indexOf(card);
        setTimeout(function () {
          card.classList.remove("show");
        }, 5000);
        compare();
      }
    }
  };
});
loginBtn.onclick = function () {
  loginPage.style.visibility =
    city.value && password.value && username.value && age.value
      ? "hidden"
      : "visiable";
};

// Shuffle Fucntion

function shuffle() {
  let images = [];
  let i = 0;
  cards.map((card) => {
    images.push(card.lastElementChild.getAttribute("src"));
  });
  images = shuffleArray(images);
  cards.forEach((card) => {
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
