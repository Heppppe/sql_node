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

    if(imie = "")
    {
        alert("Podaj imię")
        return 0
    }
    if(nazwisko = "")
    {
        alert("Podaj nazwisko")
        return 0
    }
    if(wiek < 1 || wiek>200 || wiek == '')
    {
        alert("Nieprawidłowy wiek")
        return 0
    }
    if(!email.includes("@"))
    {
        alert("Nieprawidłowy email")
        return 0
    }
    
    if(!m && !w)
    {
        alert("Podaj płeć")
        return 0
    }
    if(pesel.length !=11)
    {
        alert("Niepoprawny pesel")
        return 0
    }
    string = pesel.toString()
    pesel = parseInt(pesel)
    if((Math.round((pesel/10)%2) == 0 && m) || (Math.round((pesel/10)%2) == 1 && w))
    {
        alert("Niepoprawna płeć w Peselu")
        return 0
    }
    wagi = [1,3,7,9,1,3,7,9,1,3]
    suma = 0
    for(let i = 0; i<10; i++)
    {
        suma+= string[i]*wagi[i]
    }
    if((suma%10 != 0 && string[10]==0) || string[10] != 10-(suma%10)){
        alert("Niepoprawna suma kontrolna peselu")
        return 0
    }

    if(telefon < 100000000 || telefon > 999999999)
    {
        alert("Niepoprawny telefon")
        return 0
    }
    if(!tytol){
        alert("Podaj tytol")
        return 0
    }
    if(!wydawca){
        alert("Podaj wydawce")
        return 0
    }
    if(!isbn){
        alert("Podaj ISBN")
        return 0
    }
    if(!numer){
        alert("Podaj numer ewidencyjny")
        return 0
    }


    alert("Zweryfikowano!")
    return 0
}