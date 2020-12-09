var mob = document.getElementById("mob"),
  address = document.getElementById("address"),
  errorMsg = document.getElementById("errMsg"),
  done = document.getElementById("done"),
  mainBox = document.querySelector(".login-cont"),
  title = document.querySelector(".modal-title"),
  prize = document.getElementById("hidden"),
  clapping = document.getElementById("clapping");
var status = false;

window.onload = () => {
  prize.value = sessionStorage.getItem("prize");
  clapping.play();
  console.log(sessionStorage.getItem("lang"));
  if (sessionStorage.getItem("lang") === "ar") {
    title.textContent = `اسكمل بياناتك الشخصية <br />
    لاستلام الجائزة`;
    done.textContent = "تم";
    mob.setAttribute("placeholder", "رقم الجوال");
    address.setAttribute("placeholder", "العنوان");
  } else {
    title.innerHTML = `Fill this information <br />
    to recieve the prize`;
    done.textContent = "Done";
    mob.setAttribute("placeholder", "Phone number");
    address.setAttribute("placeholder", "Adress");
  }
};

function NumChecker(e) {
  let num = Array.from(e.value);
  console.log(num.length);

  if (num.length > 10) {
    errorMsg.textContent =
      sessionStorage.getItem("lang") === "ar"
        ? "عذرا رقم الجوال يجب أن يتألف من 10 أرقام"
        : "Phone Number must be 10 nums";
    status = false;
  } else {
    num.forEach((n) => {
      if (!(parseInt(n) >= 0 && parseInt(n) <= 9)) {
        errorMsg.textContent =
          sessionStorage.getItem("lang") === "ar"
            ? "!!!ادخل رقك الجوال بطريقة صحيحة"
            : "Enter Correct phone number";
        status = false;
      } else {
        errorMsg.textContent = "";
        if (num.length === 10) {
          status = "true";
        }
      }
    });
  }
}

mob.onkeyup = function () {
  NumChecker(mob);
};

done.onclick = function () {
  if (status === "true") {
    mainBox.innerHTML =
      sessionStorage.getItem("lang") === "ar"
        ? `<h2 style="color: black; background: azure; padding:40px;text-align: center;">تم استلام بياناتك بنجاح <br/> سوف نتواصل معك بأقرب وقت <br/>🏆 لاستلام الجائزة
    <a href="./index.html" class="btn btn-block"style="margin-top: 30px; background: #db2979;
    color: azure;" >العودة الى اللعبة</a>
  </h2>`
        : `<h2 style="color: black; background: azure; padding:40px;text-align: center;">We recieved your info <br/> We will contact with you soon <br/>🏆 to get the prize
  <a href="./index.html" class="btn btn-block"style="margin-top: 30px; background: #db2979;
  color: azure;" >Back to the game</a>
</h2>`;
  } else {
    errorMsg.textContent =
      sessionStorage.getItem("lang") === "ar"
        ? "ادخل بياناتك بشكل صحيح ثم اضغط تم"
        : "Enter correct data!";
  }
};
