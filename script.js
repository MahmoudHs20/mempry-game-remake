var cards = document.getElementsByClassName("card");
cards = Array.from(cards);

cards.map(card => {
  card.onclick = function() {
    card.firstElementChild.style.display = "none";
    card.classList.add("show");
    setTimeout(function() {
      card.classList.remove("show");
    }, 2000);
  };
});
