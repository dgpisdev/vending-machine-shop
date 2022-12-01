function submitForm() {
  const yourName = document.getElementById("name-input").value;
  const emailAdress = document.getElementById("email-input").value;
  const phoneNumber = document.getElementById("tel-input").value;
  const subjectMessage = document.getElementById("subject-input");
  const yourMessage = document.getElementById("text-area").value;
  const redMessage = "Trebuie sa completezi toate campurile obligatorii!";
  const greenMessage = "Mesajul dumneavoastra a fost transmis cu succes!";
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var x = document.getElementById("completat-corect");
  var y = document.getElementById("completat-gresit");
  x.className = "show";
  y.className = "show";
  if ((yourName == "") | (emailAdress == "") | (yourMessage == "")) {
    document.getElementById("completat-gresit").innerHTML = redMessage;
    setTimeout(function () {
      y.className = y.className.replace("show", "");
    }, 10000);
  } else if (emailAdress.match(mailformat)) {
    document.getElementById("completat-corect").innerHTML = greenMessage;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("text-area").value = "";
    document.getElementById("tel-input").value = "";
    document.getElementById("subject-input").value = "";
    document.getElementById("completat-gresit").innerHTML = "";
  } else {
    document.getElementById("completat-gresit").innerHTML =
      "Adresa de e-mail introdusa nu este valida!";
    setTimeout(function () {
      y.className = y.className.replace("show", "");
    }, 10000);
  }
}
