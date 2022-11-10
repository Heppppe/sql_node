function verify() {
  let imie = document.getElementById("imie").value;
  let nazwisko = document.getElementById("nazwisko").value;
  let wiek = document.getElementById("wiek").value;
  let email = document.getElementById("email").value;
  let pesel = document.getElementById("pesel").value;
  let m = document.getElementById("m").checked;
  let w = document.getElementById("w").checked;
  let telefon = document.getElementById("telefon").value;
  let klasa = document.getElementById("klasa").value;
  let tytol = document.getElementById("tytol").value;
  let wydawca = document.getElementById("wydawca").value;
  let isbn = document.getElementById("isbn").value;
  let numer = document.getElementById("numer").value;

  let alrt = "";

  if (imie == "") {
    alrt += "Podaj imię<br>";
    document.getElementById("imie").style.background = "red";
  } else document.getElementById("imie").style.background = "white";
  if (nazwisko == "") {
    alrt += "Podaj nazwisko<br>";
    document.getElementById("nazwisko").style.background = "red";
  } else document.getElementById("nazwisko").style.background = "white";
  if (((wiek < 1 || wiek > 200) && wiek != "") || isNaN(parseInt(wiek))) {
    alrt += "Nieprawidłowy wiek<br>";
    document.getElementById("wiek").style.background = "red";
  } else document.getElementById("wiek").style.background = "white";
  if (!email.includes("@")) {
    alrt += "Nieprawidłowy email<br>";
    document.getElementById("email").style.background = "red";
  } else document.getElementById("email").style.background = "white";

  if (!m && !w) {
    alrt += "Podaj płeć<br>";
    document.getElementById("plec").style.background = "red";
  } else document.getElementById("plec").style.background = "white";
  if (pesel.length != 11) {
    alrt += "Niepoprawny pesel<br>";
    document.getElementById("pesel").style.background = "red";
  }
  string = pesel.toString();
  pesel = parseInt(pesel);
  if (
    (Math.round((pesel / 10) % 2) == 0 && m) ||
    (Math.round((pesel / 10) % 2) == 1 && w)
  ) {
    alrt += "Niepoprawna płeć w Peselu<br>";
    document.getElementById("pesel").style.background = "red";
  }
  wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  suma = 0;
  for (let i = 0; i < 10; i++) {
    suma += string[i] * wagi[i];
  }
  if ((suma % 10 != 0 && string[10] == 0) || string[10] != 10 - (suma % 10)) {
    alrt += "Niepoprawna suma kontrolna peselu<br>";
    document.getElementById("pesel").style.background = "red";
  } else document.getElementById("pesel").style.background = "white";

  if (telefon < 100000000 || telefon > 999999999 || isNaN(parseInt(telefon))) {
    alrt += "Niepoprawny telefon<br>";
    document.getElementById("telefon").style.background = "red";
  } else document.getElementById("telefon").style.background = "white";
  if (!tytol) {
    alrt += "Podaj tytół<br>";
    document.getElementById("tytol").style.background = "red";
  } else document.getElementById("tytol").style.background = "white";
  if (!wydawca) {
    alrt += "Podaj wydawce<br>";
    document.getElementById("wydawca").style.background = "red";
  } else document.getElementById("wydawca").style.background = "white";
  if (!isbn) {
    alrt += "Podaj ISBN<br>";
    document.getElementById("isbn").style.background = "red";
  } else document.getElementById("isbn").style.background = "white";
  if (!numer) {
    alrt += "Podaj numer ewidencyjny";
    document.getElementById("numer").style.background = "red";
  } else document.getElementById("numer").style.background = "white";

  let wypluwacz = document.getElementById("wypluwacz");
  if (alrt == "")
    wypluwacz.innerHTML =
      "<marquee scrollamount='20'><h1>I o to chodziło! właśnie tak! To są odpowiedzi na 6, Udało ci się wypożyczyć książkę: " +
      tytol +
      "</h1></marquee>";
  else {
    let wiadomsci = [
      "<h1>Zakręciłeś się, jak słoik ogórków na Zime!</h1><br>",
      "<h1>Przywaliłeś jak dzik w sosnę</h1><br>",
      "<h1>Źle, pała!</h1><br>",
    ];
    wypluwacz.innerHTML = wiadomsci[Math.floor(Math.random() * 3)] + alrt;
  }
  return;
}
