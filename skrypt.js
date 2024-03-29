
var indeks = 1;
function dodaj() {

    var tytul = document.getElementById("tytul").value;
    var rezyser = document.getElementById("rezyser").value;
    var rok = document.getElementById("rok").value;
    var tabelka = document.getElementById("tabelka");
    var wiersz = tabelka.insertRow(-1);
    var komorka1 = wiersz.insertCell(0);
    var komorka2 = wiersz.insertCell(1);
    var komorka3 = wiersz.insertCell(2);
    var komorka4 = wiersz.insertCell(3);

    komorka1.innerHTML = indeks;
    komorka2.innerHTML = tytul;
    komorka3.innerHTML = rezyser;
    komorka4.innerHTML = rok;
    indeks++;
}

function dodajDoListy()
{
    var lista = document.getElementById("lista");
    var li = document.createElement("li");
    var napis = document.getElementById("wejscie").value;
    li.textContent = napis;
    lista.appendChild(li);
}

function usunZListy()
{
    var lista = document.getElementById("lista");
    var ostatni_element = lista.lastElementChild;
    lista.removeChild(ostatni_element);
}


function usunWszystko()
{
    var lista = document.getElementById("lista");
    Array.from(lista.children).forEach(li => lista.removeChild(li));
}

function oblicz()
{
    var wartosc = Math.floor(parseFloat(document.getElementById("wejscie").value));
    var z = document.getElementById("z").value;
    var na = document.getElementById("na").value;

    if(z == "1")
    {
        wartosc = wartosc * 1;
    }
    if(z == "2")
    {
        wartosc = wartosc * 3.4;
    }
    if(z == "3")
    {
        wartosc = wartosc * 4.2;
    }
    if(z == "3")
    {
        wartosc = wartosc * 1.04;
    }

    if(na == "1")
    {
        document.getElementById("koniec").innerHTML = wartosc;
    }
    if(na == "2")
    {
        document.getElementById("koniec").innerHTML = wartosc/3.4;
    }
    if(na == "3")
    {
        document.getElementById("koniec").innerHTML = wartosc/4.2;
    }
    if(na == "4")
    {
        document.getElementById("koniec").innerHTML = wartosc/1.04;
    }


}
