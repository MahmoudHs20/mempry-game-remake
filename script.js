var cards = document.getElementsByClassName("card"),
  loginBtn = document.getElementById("login"),
  loginPage = document.getElementById("loginPage"),
  city = document.getElementById("city"),
  password = document.getElementById("password"),
  username = document.getElementById("username"),
  age = document.getElementById("age"),
  winSound = document.getElementById("winSound"),
  loseSond = document.getElementById("loseSond");

var pair = [
  { index: null, value: null },
  { index: null, value: null }
];
var tries = 0;
function compare() {
  tries = 0;
  console.log("DONE");
}
cards = Array.from(cards);
cards.map(card => {
  card.onclick = function() {
    card.firstElementChild.style.display = "none";
    card.classList.add("show");
    setTimeout(function() {
      card.classList.remove("show");
      pair[tries].value = card.lastElementChild.getAttribute("src");
      pair[tries].index = cards.indexOf(card);
      if (tries === 1) {
        compare();
        return;
      }
      tries += 1;
    }, 2000);
  };
});
loginBtn.onclick = function() {
  loginPage.style.visibility =
    city.value && password.value && username.value && age.value
      ? "hidden"
      : "visiable";
};
