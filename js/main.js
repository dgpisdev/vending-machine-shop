// contact
function submitForm() {
  const numeInput = document.getElementById("nume-input").value;
  const adresaEmail = document.getElementById("email-input").value;
  const numarTelefon = document.getElementById("tel-input").value;
  const subiectMesaj = document.getElementById("subiect-input").value;
  const textArea = document.getElementById("text-area").value;
  const mesajNume = "Nu uita sa te prezinti!";
  const mesajEmail = "Adresa de e-mail introdusa nu este valida!";
  const mesajTelefon = "Trebuie sa introduci un numar de telefon valid!";
  const mesajSubiect = "Mesajul tau nu are subiect!";
  const mesajText = "Dezvolta subiectul inainte de a trimite mesajul.";
  const mesajTrimis = "Mesajul dumneavoastra a fost transmis cu succes!";
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var x = document.getElementById("afisare-mesaj");
  x.className = "show";
  if ((numeInput == "") | (numeInput.length < 3)) {
    document.getElementById("afisare-mesaj").innerHTML = mesajNume;
  } else if (!adresaEmail.match(mailformat)) {
    document.getElementById("afisare-mesaj").innerHTML = mesajEmail;
  } else if ((numarTelefon.length < 10) | (numarTelefon.length > 10)) {
    document.getElementById("afisare-mesaj").innerHTML = mesajTelefon;
  } else if ((subiectMesaj == "") | (subiectMesaj.length < 5)) {
    document.getElementById("afisare-mesaj").innerHTML = mesajSubiect;
  } else if ((textArea == "") | (textArea.length < 15)) {
    document.getElementById("afisare-mesaj").innerHTML = mesajText;
  } else {
    document.getElementById("afisare-mesaj").innerHTML = mesajTrimis;
    document.getElementById("afisare-mesaj").style.color = "#009933";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1500);
    document.getElementById("nume-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("text-area").value = "";
    document.getElementById("tel-input").value = "";
    document.getElementById("subiect-input").value = "";
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
  const repetaParola = document.getElementById("repeta-parola").value;
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
