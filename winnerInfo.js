var mob = document.getElementById("mob"),
  errorMsg = document.getElementById("errMsg"),
  done = document.getElementById("done"),
  mainBox = document.querySelector(".login-cont");
var status = false;

function NumChecker(e) {
  let num = Array.from(e.value);
  console.log(num.length);

  if (num.length > 10) {
    errorMsg.textContent = "عذرا رقم الجوال يجب أن يتألف من 10 أرقام";
    status = false;
  } else {
    num.forEach(n => {
      if (!(parseInt(n) >= 0 && parseInt(n) <= 9)) {
        errorMsg.textContent = "!!!ادخل رقك الجوال بطريقة صحيحة";
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

mob.onkeyup = function() {
  NumChecker(mob);
};

done.onclick = function() {
  if (status === "true") {
    console.log("done");
    mainBox.innerHTML = `<h2 style="color: black; background: azure; padding:40px;text-align: center;">تم استلام بياناتك بنجاح <br/> سوف نتواصل معك بأقرب وقت <br/>🏆 لاستلام الجائزة
    <a href="./index.html" class="btn btn-block"style="margin-top: 30px; background: #db2979;
    color: azure;" >العودة الى اللعبة</a>
  </h2>`;
  } else {
    errorMsg.textContent = "ادخل بياناتك بشكل صحيح ثم اضغط تم";
  }
};
