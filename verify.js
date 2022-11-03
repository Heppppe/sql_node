function verify()
{
    let imie = document.getElementById('imie').value
    let nazwisko = document.getElementById('nazwisko').value
    let wiek = document.getElementById('wiek').value
    let email = document.getElementById('email').value
    let pesel = document.getElementById('pesel').value
    let m = document.getElementById('m').checked
    let w = document.getElementById('w').checked
    let telefon = document.getElementById('telefon').value
    let klasa = document.getElementById('klasa').value
    let tytol = document.getElementById('tytol').value
    let wydawca = document.getElementById('wydawca').value
    let isbn = document.getElementById('isbn').value
    let numer = document.getElementById('numer').value

    let alrt = "";

    if(imie == "")
    {
        alrt+="Podaj imię\n"
        document.getElementById('imie').style.background = "red"
    }
    else
    document.getElementById('imie').style.background = "white"
    if(nazwisko == "")
    {
        alrt+="Podaj nazwisko\n"
        document.getElementById('nazwisko').style.background = "red"
    }
    else
    document.getElementById('nazwisko').style.background = "white"
    if((wiek < 1 || wiek>200) && wiek != "" || isNaN(wiek))
    {
        alrt+="Nieprawidłowy wiek\n"
        document.getElementById('wiek').style.background = "red"
    }
    else
    document.getElementById('wiek').style.background = "white"
    if(!email.includes("@"))
    {
        alrt+="Nieprawidłowy email\n"
        document.getElementById('email').style.background = "red"
    }
    else
    document.getElementById('email').style.background = "white"
    
    if(!m && !w)
    {
        alrt+="Podaj płeć\n"
        document.getElementById('plec').style.background = "red"
    }
    else
    document.getElementById('plec').style.background = "white"
    if(pesel.length !=11)
    {
        alrt+="Niepoprawny pesel\n"
        document.getElementById('pesel').style.background = "red"
    }
    string = pesel.toString()
    pesel = parseInt(pesel)
    if((Math.round((pesel/10)%2) == 0 && m) || (Math.round((pesel/10)%2) == 1 && w))
    {
        alrt+="Niepoprawna płeć w Peselu\n"
        document.getElementById('pesel').style.background = "red"
    }
    wagi = [1,3,7,9,1,3,7,9,1,3]
    suma = 0
    for(let i = 0; i<10; i++)
    {
        suma+= string[i]*wagi[i]
    }
    if((suma%10 != 0 && string[10]==0) || string[10] != 10-(suma%10)){
        alrt+="Niepoprawna suma kontrolna peselu\n"
        document.getElementById('pesel').style.background = "red"
    }
    else
    document.getElementById('pesel').style.background = "white"

    if(telefon < 100000000 || telefon > 999999999 || isNaN(telefon))
    {
        alrt+="Niepoprawny telefon\n"
        document.getElementById('telefon').style.background = "red"
    }
    else
    document.getElementById('telefon').style.background = "white"
    if(!tytol){
        alrt+="Podaj tytół\n"
        document.getElementById('tytol').style.background = "red"
    }
    else
    document.getElementById('tytol').style.background = "white"
    if(!wydawca){
        alrt+="Podaj wydawce\n"
        document.getElementById('wydawca').style.background = "red"
    }
    else
    document.getElementById('wydawca').style.background = "white"
    if(!isbn){
        alrt+="Podaj ISBN\n"
        document.getElementById('isbn').style.background = "red"
    }
    else
    document.getElementById('isbn').style.background = "white"
    if(!numer){
        alrt+="Podaj numer ewidencyjny"
        document.getElementById('numer').style.background = "red"
    }
    else
    document.getElementById('numer').style.background = "white"

    if(alrt == "")
        alert("Zweryfikowano!")
    else
        alert(alrt)
    return
}