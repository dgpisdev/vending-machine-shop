// contact
function submitForm() {
  const numeInput = document.getElementById("nume-input").value;
  const adresaEmail = document.getElementById("email-input").value;
  const numarTelefon = document.getElementById("tel-input").value;
  const subiectMesaj = document.getElementById("subiect-input");
  const textArea = document.getElementById("text-area").value;
  const completatGresit = "Trebuie sa completezi toate campurile obligatorii!";
  const completatCorect = "Mesajul dumneavoastra a fost transmis cu succes!";
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var x = document.getElementById("completat-corect");
  var y = document.getElementById("completat-gresit");
  x.className = "show";
  y.className = "show";
  if ((numeInput == "") | (adresaEmail == "") | (textArea == "")) {
    document.getElementById("completat-gresit").innerHTML = completatGresit;
    setTimeout(function () {
      y.className = y.className.replace("show", "");
    }, 5000);
  } else if (adresaEmail.match(mailformat)) {
    document.getElementById("completat-corect").innerHTML = completatCorect;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
    document.getElementById("nume-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("text-area").value = "";
    document.getElementById("tel-input").value = "";
    document.getElementById("subiect-input").value = "";
    document.getElementById("completat-gresit").innerHTML = "";
  } else {
    document.getElementById("completat-gresit").innerHTML =
      "Adresa de e-mail introdusa nu este valida!";
    setTimeout(function () {
      y.className = y.className.replace("show", "");
    }, 5000);
  }
}

// inregistrare si autentificare
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  location.replace("../index.html");
}

function autentificare() {
  const numeUtilizator = document.getElementById("nume-utilizator").value;
  const parolaUtilizator = document.getElementById("parola").value;
  if ((numeUtilizator == "") | (parolaUtilizator == "")) {
    document.getElementById("overlay").style.display = "none";
  } else {
    document.getElementById("overlay").style.display = "block";
    event.preventDefault();
  }
}

function inregistrare() {
  const nume = document.getElementById("nume").value;
  const prenume = document.getElementById("prenume").value;
  const numeUtilizator = document.getElementById("nume-utilizator").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("numar").value;
  const parola = document.getElementById("parola").value;
  const repetaParola = document.getElementById("repeta-parola");
  if (
    (nume == "") |
    (prenume == "") |
    (numeUtilizator == "") |
    (email == "") |
    (telefon == "") |
    (parola == "") |
    (repetaParola == "")
  ) {
    document.getElementById("overlay").style.display = "none";
  } else {
    document.getElementById("overlay").style.display = "block";
    event.preventDefault();
  }
}
