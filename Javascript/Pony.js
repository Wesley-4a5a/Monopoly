// JavaScript File

// Random Vars
var vakje = 0;

//Player Namen
var Player1;
var Player2;
var Player3;
var Player4;

//Player Initialen
var P1I;
var P2I;
var P3I;
var P4I;

// Player Style
// var P1 = '<div id="P1" style="margin: -3vh 0 0 1vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:blue; text-align:center; font-size: 1.5vh; color: white;">' + P1I + '</div>';
// var P2 = '<div id="P2" style="margin: -3vh 0 0 4.5vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:red; text-align:center; font-size: 1.5vh; color: white;">' + P2I + '</div>';
// var P3 = '<div id="P3" style="margin: 1vh 0 0 1vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:green; text-align:center; font-size: 1.5vh; color: white;">' + P3I + '</div>';
// var P4 = '<div id="P4" style="margin: 1vh 0 0 4.5vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:orange; text-align:center; font-size: 1.5vh; color: white;">' + P4I + '</div>';

// var LogP1 ='<span style="color:blue;">' + Player1 + '</span>';
// var LogP2 ='<span style="color:red;">' + Player2 + '</span>';
// var LogP3 ='<span style="color:green;">' + Player3 + '</span>';
// var LogP4 ='<span style="color:orange;">' + Player4 + '</span>';

// Player Positions
var CurPosP1 = 0;
var CurPosP2 = 0;
var CurPosP3 = 0;
var CurPosP4 = 0;

// Player Turn
var Turn = 0;
var CurPTurn = 1;

// Player Money
var MoneyP1 = 1500000;
var MoneyP2 = 1500000;
var MoneyP3 = 1500000;
var MoneyP4 = 1500000;

var Dices;

var BankRTurn;
var BankruptP1 = false;
var BankruptP2 = false;
var BankruptP3 = false;
var BankruptP4 = false;


//JailCheck
var JailP1 = 0;
var JailP2 = 0;
var JailP3 = 0;
var JailP4 = 0;

//AddJackpot
var Jackpot = 0;

//Kaart Randomizer
var Kaart = Math.floor((Math.random() * 15) + 1);

// On Page Load
function Load()
{
console.log("Geen problemen onload.")

}

//Spelregels
function Spelregels()
{
    document.getElementById("Spelregels").style.visibility = "visible";
}

function Hideregels()
{
    document.getElementById("Spelregels").style.visibility = "hidden";
}

//Start game & Player namen
function Choosename()
{
    Player1 = document.getElementById("P1Name").value;
    P1I = document.getElementById("P1Ini").value;
    Player2 = document.getElementById("P2Name").value;
    P2I = document.getElementById("P2Ini").value;
    Player3 = document.getElementById("P3Name").value;
    P3I = document.getElementById("P3Ini").value;
    Player4 = document.getElementById("P4Name").value;
    P4I = document.getElementById("P4Ini").value;
    if (Player1 == "" || Player2 == "" || Player3 == "" || Player4 == ""){
        alert("Vul naam in bruh");
    }
    else{
    Player1 = '<span style="color:blue;">' + Player1 + '</span>';
    Player2 = '<span style="color:red;">' + Player2 + '</span>';
    Player3 = '<span style="color:green;">' + Player3 + '</span>';
    Player4 = '<span style="color:orange;">' + Player4 + '</span>';
    
    P1 = '<div id="P1" style="margin: -3vh 0 0 1vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:blue; text-align:center; font-size: 1.5vh; color: white;">' + P1I + '</div>';
    P2 = '<div id="P2" style="margin: -3vh 0 0 4.5vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:red; text-align:center; font-size: 1.5vh; color: white;">' + P2I + '</div>';
    P3 = '<div id="P3" style="margin: 1vh 0 0 1vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:green; text-align:center; font-size: 1.5vh; color: white;">' + P3I + '</div>';
    P4 = '<div id="P4" style="margin: 1vh 0 0 4.5vh; position:absolute; padding:0; width:2.5vh; height:2.5vh; border:1px solid black; border-radius: 5px; background-color:orange; text-align:center; font-size: 1.5vh; color: white;">' + P4I + '</div>';
    
    
    document.getElementById(vakje).innerHTML += P1;
    document.getElementById(vakje).innerHTML += P2;
    document.getElementById(vakje).innerHTML += P3;
    document.getElementById(vakje).innerHTML += P4;
    
    document.getElementById("NaamP1").innerHTML = Player1;
    document.getElementById("NaamP2").innerHTML = Player2;
    document.getElementById("NaamP3").innerHTML = Player3;
    document.getElementById("NaamP4").innerHTML = Player4; 
    
    document.getElementById("NaamP11").innerHTML = Player1;
    document.getElementById("NaamP22").innerHTML = Player2;
    document.getElementById("NaamP33").innerHTML = Player3;
    document.getElementById("NaamP44").innerHTML = Player4; 
    
    document.getElementById("MoneyP1").innerHTML = " $" + MoneyP1.toLocaleString();
    document.getElementById("MoneyP2").innerHTML = " $" + MoneyP2.toLocaleString();
    document.getElementById("MoneyP3").innerHTML = " $" + MoneyP3.toLocaleString();
    document.getElementById("MoneyP4").innerHTML = " $" + MoneyP4.toLocaleString();
    
    document.getElementById("Startgame").style.visibility = "hidden";
    document.getElementById("HUD").style.visibility = "visible";
    document.getElementById("Log").style.visibility = "visible";
    document.getElementById("D1").style.visibility = "visible";
    document.getElementById("D2").style.visibility = "visible";
    document.getElementById("RollDice").style.visibility = "visible";
    document.getElementById("Log").style.visibility = "visible";
    document.getElementById("EndTurn").style.visibility = "visible";
    document.getElementById("PlayerData").style.visibility = "visible";
    document.getElementById("PlayerData").style.visibility = "visible";
    }
}

// Roll Dice



function RollDice() 
{
        Turn++;
    Turn = ((Turn >= 5) ? 1 : Turn);

    var Dice1;
    var dice = Math.floor((Math.random() * 6) + 1);
    document.getElementById("D1").value = dice;
    Dice1 = dice;
    dice = Math.floor((Math.random() * 6) + 1);
    document.getElementById("D2").value = dice;
    Dices = Dice1 + dice;
    //Dices = 8; //Force die dice..
    switch (CurPTurn) {
        case 1:
            vakje = CurPosP1 + Dices;
            break;
        case 2:
            vakje = CurPosP2 + Dices;
            break;
        case 3:
            vakje = CurPosP3 + Dices;
            break;
        case 4:
            vakje = CurPosP4 + Dices;
            break;
    }
    LogRolledDice(Dices);
    PlacePlayer();
    document.getElementById("EndTurn").style.zIndex = 10;
    document.getElementById("RollDice").disabled = true;
    HUD();
    DMoney();
}

function ShowBankrupt()
{
    //Waarschijnlijk niet nodig meer.
}

function BankruptCheck()
{
    var Gameover;
    var Bericht = document.getElementById("Message");
    var MoneyCP1 = document.getElementById("MoneyP1").innerHTML;
    var MoneyCP2 = document.getElementById("MoneyP2").innerHTML;
    var MoneyCP3 = document.getElementById("MoneyP3").innerHTML;
    var MoneyCP4 = document.getElementById("MoneyP4").innerHTML;

    if (MoneyCP1 == "Failliet" && MoneyCP2 == "Failliet"  && MoneyCP3 == "Failliet" && MoneyCP4 == "Failliet")
    {
        Gameover = "Niemand heeft gewonnen, Iedereen is failliet";
        Bericht.style.visibility = "visible"; 
        Bericht.innerHTML = Gameover;
    }
    else if ((MoneyP1 < 0 || MoneyP1 == "Failliet") && (CurPTurn == 4))
    {
        BankruptP1 = true;
        Turn = 1;
        CurPTurn = 1;
        document.getElementById("MoneyP1").innerHTML = "Failliet";
        possie = document.getElementById("P1");
        possie.outerHTML = "";
        document.getElementById("FaillietP1").innerHTML += P1;
        BankruptCheck();
        WinCheck();
        for (i=0; i<40; i++)
        {
            if(Eigenaar[i] == 1){
                 Eigenaar[i] = "%";
                 Straten[i] = 0;
                 document.getElementById(i).innerHTML = "";
                 document.getElementById("P1Str").innerHTML = "";
                 document.getElementById("P1Stat").innerHTML = "";
                 document.getElementById("P1Nut").innerHTML = "";
            }   
        }
    }
    else if ((MoneyP2 < 0 || MoneyP2 == "Failliet") && (CurPTurn == 1))
    {
        BankruptP2 = true;
        Turn = 2;
        CurPTurn = 2;    
        document.getElementById("MoneyP2").innerHTML = "Failliet";
        possie = document.getElementById("P2");
        possie.outerHTML = "";
        document.getElementById("FaillietP1").innerHTML += P2;
        BankruptCheck();
        WinCheck();
        for (i=0; i<40; i++)
        {
            if(Eigenaar[i] == 2){
                 Eigenaar[i] = "%";
                 Straten[i] = 0;
                 document.getElementById(i).innerHTML = "";
                 document.getElementById("P2Str").innerHTML = "";
                 document.getElementById("P2Stat").innerHTML = "";
                 document.getElementById("P2Nut").innerHTML = "";
            }   
        }
    }
    else if ((MoneyP3 < 0 || MoneyP3 == "Failliet") && (CurPTurn == 2))
    {
        BankruptP3 = true;
        Turn = 3;
        CurPTurn = 3;
        document.getElementById("MoneyP3").innerHTML = "Failliet";
        possie = document.getElementById("P3");
        possie.outerHTML = "";
        document.getElementById("FaillietP1").innerHTML += P3;
        BankruptCheck();
        WinCheck();
        for (i=0; i<40; i++)
        {
            if(Eigenaar[i] == 3){
                 Eigenaar[i] = "%";
                 Straten[i] = 0;
                 document.getElementById(i).innerHTML = "";
                 document.getElementById("P3Str").innerHTML = "";
                 document.getElementById("P3Stat").innerHTML = "";
                 document.getElementById("P3Nut").innerHTML = "";
            }   
        }
    }
    else if ((MoneyP4 < 0 || MoneyP4 == "Failliet") && (CurPTurn == 3))
    {
        BankruptP4 = true;
        Turn = 4;
        CurPTurn = 4;
        document.getElementById("MoneyP4").innerHTML = "Failliet";
        var possie = document.getElementById("P4");
        possie.outerHTML = "";
        document.getElementById("FaillietP1").innerHTML += P4;
        BankruptCheck();
        WinCheck();    
        for (i=0; i<40; i++)
        {
            if(Eigenaar[i] == 4){
                 Eigenaar[i] = "%";
                 Straten[i] = 0;
                 document.getElementById(i).innerHTML = "";
                 document.getElementById("P4Str").innerHTML = "";
                 document.getElementById("P4Stat").innerHTML = "";
                 document.getElementById("P4Nut").innerHTML = "";
            }   
        }
    }
    else
    {
        //
    }
}



function EndTurn()
{
    BankruptCheck();
    WinCheck();
    CurPTurn++;
    CurPTurn = ((CurPTurn == 5) ? 1 : CurPTurn);
    HUD();
    document.getElementById("EndTurn").style.zIndex = 0;
    document.getElementById("RollDice").disabled = false;
    
    document.getElementById("Message").style.visibility = "hidden";
    document.getElementById("RefuseB").style.visibility = "hidden";
    document.getElementById("KoopB").style.visibility = "hidden";
    document.getElementById("Okay").style.visibility = "hidden";
    DMoney();
    WinCheck();
    ShowBankrupt();
    // JailCheck(); 
}

function WinCheck()
{
    var MoneyCP1 = document.getElementById("MoneyP1").innerHTML;
    var MoneyCP2 = document.getElementById("MoneyP2").innerHTML;
    var MoneyCP3 = document.getElementById("MoneyP3").innerHTML;
    var MoneyCP4 = document.getElementById("MoneyP4").innerHTML;
    
    var Gameover;
    var Bericht = document.getElementById("Message");
    

    if (MoneyCP2 == "Failliet" && MoneyCP3 == "Failliet" && MoneyCP4 == "Failliet")
    {
        Gameover = Player1 + " heeft gewonnen!";
        Bericht.style.visibility = "visible"; 
        Bericht.innerHTML = Gameover;
    }
    else if (MoneyCP1 == "Failliet" && MoneyCP3 == "Failliet" && MoneyCP4 == "Failliet")
    {
        Gameover = Player2 + " heeft gewonnen!";
        Bericht.style.visibility = "visible"; 
        Bericht.innerHTML = Gameover;
    }
    else if (MoneyCP1 == "Failliet" && MoneyCP2 == "Failliet" &&  MoneyCP4 == "Failliet")
    {
        Gameover = Player3 + " heeft gewonnen!";
        Bericht.style.visibility = "visible";
        Bericht.innerHTML = Gameover;
    }
    else if (MoneyCP1 == "Failliet" && MoneyCP2 == "Failliet"  && MoneyCP3 == "Failliet")
    {
        Gameover = Player4 + " heeft gewonnen!";
        Bericht.style.visibility = "visible"; 
        Bericht.innerHTML = Gameover;
    }

}

//Vakje Checker
var Straten =
[];

for (var i = 0; i < 41; i++) 
{
    Straten.push(0);
}
console.log(Straten);



// Eigenaar array dingy
var Eigenaar =
[];

for (var i = 0; i < 40; i++) 
{
    Eigenaar.push("%");
}
console.log(Eigenaar);

function VakCheck()
{
    switch (vakje){
        
        case 1:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Wiltz: Wiltz je wiltz Kopen?");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 2: case 17: case 33:
            AlgemeenKaart();
            break;
        case 3:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Remich: Nee?");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 4:
            RemMoney(200000); 
            Belasting(200000);
            AddJackpot(200000);
            break;
        case 5: case 15: case 25: case 35:
            if(Straten[vakje] == 0)
             {
            DisplayKoop("Wil je dit station kopen? 200.000 Euro's.");
            KoopVis();
            }
            else
            {
            Station();
            }
            break;
        case 6:
            if(Straten[vakje] == 0)
            {
            DisplayKoop("Nice: Nice is Nice!");
            KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 7: case 22: case 36:
            KansKaart();
            break;
        case 8:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Lyon");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 9:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Parijs");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 10:
            if(CurPTurn == 1 && JailP1 == 1){
                Jailmessage();
            }
            else if(CurPTurn == 2 && JailP2 == 1){
                Jailmessage();
            }
            else if(CurPTurn == 3 && JailP3 == 1){
                Jailmessage();
            }
            else if(CurPTurn == 4 && JailP4 == 1){
                Jailmessage();
            }
            break;
        case 11:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Bern");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 12: case 28:
            if((Straten[vakje] == 0) && (vakje == 12))
            {
                DisplayKoop("Kerncentrale Dodewaard");
                KoopVis();
            }
            else if((Straten[vakje] == 0) && (vakje == 28))
            {
                DisplayKoop("Fukushima");
                KoopVis();
            }
            else
            {
                var curpos = Straatnaam[vakje];
                var betaal;
                if (Eigenaar[12] == Eigenaar[28])
                {
                    betaal = window[curpos][2];
                    
                }
                else
                {
                    betaal = window[curpos][1];
                }
                betaal.toString();
                betaal = betaal * Dices;
                RemMoney(betaal);
            }
            break;
        case 13:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Basel: Basilmarket");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 14:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Zurich: Neem een Rennie");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 16:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Doorn: Wilt u uw Keizershuis kopen");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 18:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Maarssen: Blijf van mijn huis af");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 19:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Ypecolsga: Als je het kan vinden!");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 20:
                WinJackpot();
            break;
        case 21:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Valencia");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 23:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Barcelona");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 24:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Madrid");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 26:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Malmo: Marlmoro");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 27:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Uppsala");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 29:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Orebro");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 30:
                Jail();
            break;
        case 31:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Milaan");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 32:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Genua");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 34:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Bari: Rijden in je Ferrari");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 37:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Hoeryong: Welkom in Noord Korea");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        case 38:
            RemMoney(100000); 
            Belasting(100000);
            AddJackpot(100000);
            break;
        case 39:
            if(Straten[vakje] == 0)
            {
                DisplayKoop("Pyong-Yang: Chilling with Kim Yong Un");
                KoopVis();
            }
            else
            {
                Rent();
            }
            break;
        default:
            //
    }
}

//Rent
function Rent()
{
    var curpos = Straatnaam[vakje];
    var REnte = Straten[vakje];
    var betaal = window[curpos][REnte];
    var Eigenaartje = Eigenaar[vakje];
    betaal.toString();  
    
    if (Eigenaar[vakje] == Turn)
    {
        
    }
    else 
    {
        switch (Eigenaar[vakje]) {
            case 1:
                if(BankruptP1 == true)
                {
                    //
                }
                else if(BankruptP1 == false)
                {
                RemMoney(betaal);    
                MoneyP1 = MoneyP1 + betaal;
                document.getElementById("MoneyP1").innerHTML = " $" + MoneyP1.toLocaleString();
                LogRent(betaal, Eigenaartje);
                }
                break;
            case 2:
                if(BankruptP2 == true)
                {
                    //
                }
                else if(BankruptP2 == false)
                {
                RemMoney(betaal);
                MoneyP2 = MoneyP2 + betaal;
                document.getElementById("MoneyP2").innerHTML = " $" + MoneyP2.toLocaleString();
                LogRent(betaal, Eigenaartje);
                }
                break;
            case 3:
                if(BankruptP3 == true)
                {
                    //
                }
                else if(BankruptP3 == false)
                {
                RemMoney(betaal);    
                MoneyP3 = MoneyP3 + betaal;
                document.getElementById("MoneyP3").innerHTML = " $" + MoneyP3.toLocaleString();
                LogRent(betaal, Eigenaartje);
                }
                break;
            case 4:
                if(BankruptP4 == true)
                {
                    //
                }
                else if(BankruptP4 == false)
                {
                RemMoney(betaal);
                MoneyP4 = MoneyP4 + betaal;
                document.getElementById("MoneyP4").innerHTML = " $" + MoneyP4.toLocaleString();
                LogRent(betaal, Eigenaartje);
                }
                break;
                
        }
    }
}


var clicknummer;
var clickplaats;

//Huizen kopen
function HuisKopen(Prijs, Naam, Nummer)
{
    var straat = Straatnaam[Nummer];
    clicknummer = Nummer; 
    clickplaats = Naam;
    
    if (Straten[Nummer] == 5 && Eigenaar[Nummer] == CurPTurn){
        window[straat][1];
        RemMoney(Prijs);
        Straten[Nummer]++;
        LogHuis(Naam);
        var msg = "Hotelske gebouwt, Goed bezig!"; 
        document.getElementById("Message").style.visibility = "visible";
        document.getElementById("Message").innerHTML = msg;   
        document.getElementById("Okay").style.visibility = "visible";
        Plaatshotelicoon(Nummer);
    }
    else if (Straten[Nummer] >= 6 && Eigenaar[Nummer] == CurPTurn){
        Straten[Nummer] = 6;
        var msg = "Rustig aan, Limiet aan huizen bereikt"; 
        document.getElementById("Message").style.visibility = "visible";
        document.getElementById("Message").innerHTML = msg;   
        document.getElementById("Okay").style.visibility = "visible";        
    }
    else if (Straten[Nummer] >= 1 && Eigenaar[Nummer] == CurPTurn){     
        window[straat][1];
        RemMoney(Prijs);
        Straten[Nummer]++;
        LogHuis(Naam);
        var msg = "Huuske gekocht, geld zat?"; 
        document.getElementById("Message").style.visibility = "visible";
        document.getElementById("Message").innerHTML = msg;   
        document.getElementById("Okay").style.visibility = "visible";
        Plaatshuisicoon(Nummer);
    }
    else if (Eigenaar[Nummer] != "%" && Eigenaar[Nummer] != CurPTurn){
        BiedingInfo(Nummer);
    }
    else{
        var msg = "Bruh deze stad is niet eens van jou wat probeer je te bouwen"; 
        document.getElementById("Message").style.visibility = "visible";
        document.getElementById("Message").innerHTML = msg;   
        document.getElementById("Okay").style.visibility = "visible";
        }
}
               
               
    // webkit-box-shadow: 0px 0px 25px 0px rgba(199,255,212,1); moz-box-shadow: 0px 0px 25px 0px rgba(199,255,212,1); box-shadow: 0px 0px 25px 0px rgba(199,255,212,1);
               
function Plaatshuisicoon(Nummer)
{
    var Huisnummer = Straten[Nummer] - 1;
    if (Nummer >= 0 && Nummer <= 10)
    { 
        document.getElementById(Nummer).innerHTML += '<span class="Huis" style="position: absolute; margin-top: -5.8vh; margin-left: 0.4vh; background-color:#00CC00; width: 1.5vh; height: 2vh; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';
    }
    else if (Nummer >= 11 && Nummer <= 20)
    {
        document.getElementById(Nummer).innerHTML += '<span class="Huis" style="position: absolute; margin-top: 1.2vh; margin-left: 9.7vh; background-color:#00CC00; width: 1.5vh; height: 2vh; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';        
    }
    else if (Nummer >= 21 && Nummer <= 30)
    {
        document.getElementById(Nummer).innerHTML += '<span class="Huis" style="position: absolute; margin-top: 3.8vh; margin-left: 0.2vh; background-color:#00CC00; width: 1.5vh; height: 2h; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';        
    }
    else if (Nummer >= 31 && Nummer <= 40)
    {
        document.getElementById(Nummer).innerHTML += '<span class="Huis" style="position: absolute; margin-top: 1vh; margin-left: 0.3vh; background-color:#00CC00; width: 1.5vh; height: 2vh; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';        
    }
}
   
function Plaatshotelicoon(Nummer)
{

    var Huisnummer = Straten[Nummer] - 1;
    if (Nummer >= 0 && Nummer <= 10)
    { 
        document.getElementById(Nummer).innerHTML += '<span class="Hotel" style="position: absolute; margin-top: -5.8vh; margin-left: 0.4vh; background-color:red; width: 1.5vh; height: 2vh; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';
    }
    else if (Nummer >= 11 && Nummer <= 20)
    {
        document.getElementById(Nummer).innerHTML += '<span class="Hotel" style="position: absolute; margin-top: 1.2vh; margin-left: 9.7vh; background-color:red; width: 1.5vh; height: 2vh; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';        
    }
    else if (Nummer >= 21 && Nummer <= 30)
    {
        document.getElementById(Nummer).innerHTML += '<span class="Hotel" style="position: absolute; margin-top: 3.8vh; margin-left: 0.2vh; background-color:red; width: 1.5vh; height: 2h; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';        
    }
    else if (Nummer >= 31 && Nummer <= 40)
    {
        document.getElementById(Nummer).innerHTML += '<span class="Hotel" style="position: absolute; margin-top: 1vh; margin-left: 0.3vh; background-color:red; width: 1.5vh; height: 2vh; z-index: 5; color:white; text-align:center; border: white 1px groove; font-size: 2vh;">' + Huisnummer + '</span>';        
    }
}

function BiedingInfo(Nummer)
{
        var msg = "Wilt u deze straat over kopen? Inclusief Huizen en Hotels";
        document.getElementById("Message").style.visibility = "visible";
        document.getElementById("Message").innerHTML = msg;   
        document.getElementById("Bieden").style.visibility = "visible";
        document.getElementById("Akkoord").style.visibility = "visible";
        document.getElementById("NietAkkoord").style.visibility = "visible";
}
    
    var plaatsp1;
    var plaatsp2;
    var plaatsp3;
    var plaatsp4;
    
                                                                                 
function Akkoord()
{
    var Bod = document.getElementById("Bieden").value; 
    RemMoney(Bod);
    var BodCon = parseInt(Bod, 10)
    var Eigenur = Eigenaar[clicknummer];
    var overkoop;
    var overkoop2;
    document.getElementById("Message").style.visibility = "hidden";
    document.getElementById("Bieden").style.visibility = "hidden";
    document.getElementById("Akkoord").style.visibility = "hidden";
    document.getElementById("NietAkkoord").style.visibility = "hidden";
    
    switch (Eigenur) {
        case 1:
            MoneyP1 += BodCon;
            document.getElementById("MoneyP1").innerHTML = " $" + MoneyP1.toLocaleString();
            overkoop = document.getElementById("P1Str").innerHTML; 
            overkoop2 = overkoop.replace(clickplaats, "");
            document.getElementById("P1Str").innerHTML = overkoop2;
            break;
        case 2:
            MoneyP2 += BodCon;
            document.getElementById("MoneyP2").innerHTML = " $" + MoneyP2.toLocaleString();
            overkoop = document.getElementById("P2Str").innerHTML; 
            overkoop2 = overkoop.replace(clickplaats, "");
            document.getElementById("P2Str").innerHTML = overkoop2;
            break;
        case 3:
            MoneyP3 += BodCon;
            document.getElementById("MoneyP3").innerHTML = " $" + MoneyP3.toLocaleString();
            overkoop = document.getElementById("P3Str").innerHTML; 
            overkoop2 = overkoop.replace(clickplaats, "");
            document.getElementById("P3Str").innerHTML = overkoop2;
            break;
        case 4:
            MoneyP4 += BodCon;
            document.getElementById("MoneyP4").innerHTML = " $" + MoneyP4.toLocaleString();
            overkoop = document.getElementById("P4Str").innerHTML; 
            overkoop2 = overkoop.replace(clickplaats, "");
            document.getElementById("P4Str").innerHTML = overkoop2;
            break;
    }
    switch (CurPTurn) {
        case 1:
            Eigenaar[clicknummer] = 1;
            document.getElementById("P1Str").innerHTML += clickplaats;
            break;
        case 2:
            Eigenaar[clicknummer] = 2;
            document.getElementById("P2Str").innerHTML += clickplaats;
            break;
        case 3:
            Eigenaar[clicknummer] = 3;
            document.getElementById("P3Str").innerHTML += clickplaats;
            break;            
        case 4:
            Eigenaar[clicknummer] = 4;
            document.getElementById("P4Str").innerHTML += clickplaats;
            break;            
    }
    LogOverkoop(Straatnaam[clicknummer]);
}

function LogOverkoop(Plaats)
{
    var Text;
    var Log = document.getElementById("Log");
    var Locatie = Plaats;
    var Loggie = '<span style="color:purple;">' + Locatie + '</span>';
    switch (CurPTurn) {
        case 1:
            Text = Player1 + " heeft " + Loggie + " over gekocht. [Inclusief huizen]" + "<br>";
            break;
        case 2:
            Text = Player2 + " heeft " + Loggie + " over gekocht. [Inclusief huizen]" + "<br>";
            break;
        case 3:
            Text = Player3 + " heeft " + Loggie + " over gekocht. [Inclusief huizen]" + "<br>";
            break;
        case 4:
            Text = Player4 + " heeft " + Loggie + " over gekocht. [Inclusief huizen]" + "<br>";
            break;
    }
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}

function Station()
{   
    var Eigenaartje = Eigenaar[vakje];
    var curpos = Straatnaam[vakje];
    var betaal;
    
    if (Eigenaar[5] == Eigenaar[15] && Eigenaar[25] == Eigenaar[35] && Eigenaar[25] == Eigenaar[5] && Eigenaar[15] == Eigenaar[35])
        {
            betaal = window[curpos][4];
            LogRent(betaal, Eigenaartje);
        }
    else if (Eigenaar[5] == Eigenaar[15] || Eigenaar[25] == Eigenaar[35] || Eigenaar[5] == Eigenaar[25] || Eigenaar[5] == Eigenaar[35])
    {
        betaal = window[curpos][2];
        LogRent(betaal, Eigenaartje);
    }
    else
    {
        betaal = window[curpos][1];
        LogRent(betaal, Eigenaartje);
    }
    betaal.toString();
    RemMoney(betaal);
    Stationrent();
}

function Stationrent()
{
//
}


//Jackpot

function WinJackpot(){
    AddMoney(Jackpot);
    Jackpotlog(Jackpot);
    document.getElementById("Message").style.visibility = "visible";
    switch (CurPTurn) {
        case 1:
            document.getElementById("Message").innerHTML = Player1 + " heeft de Jackpot van $ " + Jackpot + " gewonnen.";
            break;
        case 2:
            document.getElementById("Message").innerHTML = Player2 + " heeft de Jackpot van $ " + Jackpot + " gewonnen.";
            break;
        case 3:
            document.getElementById("Message").innerHTML = Player3 + " heeft de Jackpot van $ " + Jackpot + " gewonnen.";
            break;
        case 4:
            document.getElementById("Message").innerHTML = Player4 + " heeft de Jackpot van $ " + Jackpot + " gewonnen.";
            break;
        default:
    }            
    document.getElementById("Okay").style.visibility = "visible";
    Jackpot = 0;
}

function AddJackpot(Geld)
{
    Jackpot += Geld;
}

    function Jackpotlog(Random)
    {
        var money = Random;
        var Text;
        var Log = document.getElementById("Log");
        money = '<span style="color:purple;">$' + money + '</span>';
        

                   switch (Turn) {
                    case 1:
                        Text = Player1 + " heeft " + money + " gewonnen in de Jackpot." + "<br>";
                        break;
                    case 2:
                        Text = Player2 + " heeft " + money + " gewonnen in de Jackpot." + "<br>";
                        break;
                    case 3:
                        Text = Player3 + " heeft " + money + " gewonnen in de Jackpot." + "<br>";
                        break;
                    case 4:
                        Text = Player4 + " heeft " + money + " gewonnen in de Jackpot." + "<br>";
                        break;
                     }
            
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
                     
    }
//

function HUD()
{
    var Turncheck;
    switch (CurPTurn) {
        case 1:
            Turncheck = Player1;
            break;
        case 2:
            Turncheck = Player2;
            break;
        case 3:
            Turncheck = Player3;
            break;
        case 4:
            Turncheck = Player4;
            break;
    }
    var JPC = document.getElementById("JPHUD");
    JPC.innerHTML = "$ " + Jackpot;
    var TD = document.getElementById("TurnHUD");
    TD.innerHTML = Turncheck;
    
}


//Log Huis

function LogHuis(Naam)
{
    var Text;
    var Log = document.getElementById("Log");
    var Locatie = Naam;
    var Loggie = '<span style="color:purple;">' + Locatie + '</span>';
    switch (CurPTurn) {
        case 1:
            Text = Player1 + " heeft op " + Loggie + " een huis gekocht." + "<br>";
            break;
        case 2:
            Text = Player2 + " heeft op " + Loggie + " een huis gekocht." + "<br>";
            break;
        case 3:
            Text = Player3 + " heeft op " + Loggie + " een huis gekocht." + "<br>";
            break;
        case 4:
            Text = Player4 + " heeft op " + Loggie + " een huis gekocht." + "<br>";
            break;
    }
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}
                                                                                                
//Kans Kaart
function KansKaart()
{
    var Kansrandom = Math.floor((Math.random() * 15) + 1);
    var msg = Kans[Kansrandom]; 
    var KansPlaats = KansMoney[Kansrandom];
    document.getElementById("Message").style.visibility = "visible";
    document.getElementById("Message").innerHTML = msg;
    document.getElementById("Okay").style.visibility = "visible";
    var money = KansMoney[Kansrandom];
    if (Kansrandom <= 5){
        RemMoney(money);
        KanslogRem(Kansrandom);
        AddJackpot(money);
    }
    else if (Kansrandom >= 6 && Kansrandom <= 8){
        AddMoney(money);
        KanslogAdd(Kansrandom);
    }
    else if (Kansrandom >=9 && Kansrandom <= 16){
         var Player = "P" + CurPTurn;
         var possie = document.getElementById(Player);
         possie.outerHTML = "";
         delete possie;
         
         switch(CurPTurn){
        case  1:
            document.getElementById(KansPlaats).innerHTML += P1;
            if ((CurPosP1 > KansPlaats) && (Kansrandom != 13))
            {
                AddMoney(200000);
                LogStart(200000);
            }
            CurPosP1 = KansPlaats;
            break;
        case  2:
            document.getElementById(KansPlaats).innerHTML += P2;
            if ((CurPosP2 > KansPlaats) && (Kansrandom != 13))
            {
                AddMoney(200000);
                LogStart(200000);
            }
            CurPosP2 = KansPlaats;
            break;
        case  3:
            document.getElementById(KansPlaats).innerHTML += P3;
            if ((CurPosP3 > KansPlaats) && (Kansrandom != 13))
            {
                AddMoney(200000);
                LogStart(200000);
            }
            CurPosP3 = KansPlaats;
            break;
        case  4:
            document.getElementById(KansPlaats).innerHTML += P4;
            if ((CurPosP4> KansPlaats) && (Kansrandom != 13))
            {
                AddMoney(200000);
                LogStart(200000);
            }
            CurPosP4 = KansPlaats;
            break;
         }
    }
}


function Jail()
{
    var Player = "P" + CurPTurn;
    var possie = document.getElementById(Player);
    possie.outerHTML = "";
    delete possie;
    switch(CurPTurn){
        case  1:
            document.getElementById("10").innerHTML += P1;
            CurPosP1 = 10;
            JailP1 = 1;
            Jailmessage();
            break;
        case  2:
            document.getElementById("10").innerHTML += P2;
            CurPosP2 = 10;
            JailP2 = 1;
            Jailmessage();
            break;
        case  3:
            document.getElementById("10").innerHTML += P3;
            CurPosP3 = 10;
            JailP3 = 1;
            Jailmessage();
            break;
        case  4:
            document.getElementById("10").innerHTML += P4;
            CurPosP4 = 10;
            JailP4 = 1;
            Jailmessage();
            break;
    }
}

function JailCheck()
{
    switch (CurPTurn) {
        case 4:
            if(JailP1 == 1)
            {
            Jailmessage();
            }
            break;
        case 1:
            if(JailP2 == 1)
            {
            Jailmessage();
            }
            break;
        case 2:
            if(JailP3 == 1)
            {
            Jailmessage();
            }
            break;
        case 3:
            if(JailP4 == 1)
            {
            Jailmessage();
            }
            break;
    }
}

function Jailmessage()
{    
    var msg = "Je zit in de gevangenis, Betaal $50.000 om eruit te komen. Nee, niks te willen."; 
    document.getElementById("Message").style.visibility = "visible";
    document.getElementById("Message").innerHTML = msg;   
    document.getElementById("Betaal").style.visibility = "visible";

}

function Betaalon(){
    RemMoney(50000);
    switch(CurPTurn){
        case  1:
            JailP1 = 0;
            break;
        case  2:
            JailP2 = 0;
            break;
        case  3:
            JailP3 = 0;
            break;
        case  4:
            JailP4 = 0;
            break;
    }
    document.getElementById("Betaal").style.visibility = "hidden";
    document.getElementById("Skip").style.visibility = "hidden";
    document.getElementById("Message").style.visibility = "hidden";
    EndTurn();
    DMoney();
}

// function Skip(){
//     document.getElementById("Betaal").style.visibility = "hidden";
//     document.getElementById("Skip").style.visibility = "hidden";
//     document.getElementById("Message").style.visibility = "hidden";
//         CurPTurn++;
//     CurPTurn = ((CurPTurn == 5) ? 1 : CurPTurn);
//     HUD();
//     document.getElementById("EndTurn").style.zIndex = 0;
//     document.getElementById("RollDice").disabled = false;
    
//     document.getElementById("Message").style.visibility = "hidden";
//     document.getElementById("RefuseB").style.visibility = "hidden";
//     document.getElementById("KoopB").style.visibility = "hidden";
//     document.getElementById("Okay").style.visibility = "hidden";
// }

//Algemeen Fonds
function AlgemeenKaart()
{
    var Algrandom = Math.floor((Math.random() * 15) + 1);
    var msg = AlgemeenFonds[Algrandom]; 
    window.AlgemeenMoney[Algrandom];
    document.getElementById("Message").style.visibility = "visible";
    document.getElementById("Message").innerHTML = msg;   
    document.getElementById("Okay").style.visibility = "visible";
    var possie;
    var money = AlgemeenMoney[Algrandom];
    var player = "P"+Turn;
    
    if (Algrandom >= 1 && Algrandom <= 7){
        AddMoney(money);
        AlgemeenlogAdd(Algrandom);
    }
    else if (Algrandom >= 8 && Algrandom <= 15){
        RemMoney(money);
        AlgemeenlogRem(Algrandom);
        AddJackpot(money);
    }
}

//Kans Log
    function KanslogAdd(Random)
    {
        var money = KansMoney[Random];
        var Text;
        var Log = document.getElementById("Log");
        money = '<span style="color:purple;">$' + money + '</span>';
        

                   switch (Turn) {
                    case 1:
                        Text = Player1 + " heeft " + money + " gekregen." + "<br>";
                        break;
                    case 2:
                        Text = Player2 + " heeft " + money + " gekregen." + "<br>";
                        break;
                    case 3:
                        Text = Player3 + " heeft " + money + " gekregen." + "<br>";
                        break;
                    case 4:
                        Text = Player4 + " heeft " + money + " gekregen." + "<br>";
                        break;
                     }
            
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
                     
    }
                  
    function KanslogRem(Random)
    {           
        var money = KansMoney[Random];
        var Text;
        var Log = document.getElementById("Log");
        money = '<span style="color:purple;">$' + money + '</span>';
        
                switch (Turn) {
                case 1:
                    Text = Player1 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                case 2:
                    Text = Player2 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                case 3:
                    Text = Player3 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                case 4:
                    Text = Player4 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                }
        
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
                
        }

//Algemeen Log
    function AlgemeenlogAdd(Random)
    {
        var money = AlgemeenMoney[Random];
        var Text;
        var Log = document.getElementById("Log");
        money = '<span style="color:purple;">$' + money + '</span>';
        

                   switch (Turn) {
                    case 1:
                        Text = Player1 + " heeft " + money + " gekregen." + "<br>";
                        break;
                    case 2:
                        Text = Player2 + " heeft " + money + " gekregen." + "<br>";
                        break;
                    case 3:
                        Text = Player3 + " heeft " + money + " gekregen." + "<br>";
                        break;
                    case 4:
                        Text = Player4 + " heeft " + money + " gekregen." + "<br>";
                        break;
                     }
            
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
                     
    }
                  
    function AlgemeenlogRem(Random)
    {           
        var money = AlgemeenMoney[Random];
        var Text;
        var Log = document.getElementById("Log");
        money = '<span style="color:purple;">$' + money + '</span>';
        
                switch (Turn) {
                case 1:
                    Text = Player1 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                case 2:
                    Text = Player2 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                case 3:
                    Text = Player3 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                case 4:
                    Text = Player4 + " heeft " + money + " moeten betalen." + "<br>";
                    break;
                }
        
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
                
        }

//Visible koop maken
function KoopVis()
{
    document.getElementById("Message").style.visibility = "visible";
    document.getElementById("RefuseB").style.visibility = "visible";
    document.getElementById("KoopB").style.visibility = "visible";
}

//Kopen & Niet Kopen    
function Koop()
{
    var curpos = Straatnaam[vakje];
    var Huislog = Straten[vakje];
    var betaal = window[curpos][0];
    betaal.toString();
    RemMoney(betaal);
    Straten[vakje] = 1;
    Eigenaar[vakje] = Turn;
    LogKoop();
    document.getElementById("Message").style.visibility = "hidden";
    document.getElementById("RefuseB").style.visibility = "hidden";
    document.getElementById("KoopB").style.visibility = "hidden";
    switch (CurPTurn) {
        case 1:
            P1Own.push(curpos);
            break;
        case 2:
            P2Own.push(curpos);
            break;
        case 3:
            P3Own.push(curpos);
            break;            
        case 4:
            P4Own.push(curpos);
            break;
    }
    
    Stratenschema();
}

var P1Own =
[];

var P2Own =
[];

var P3Own =
[];

var P4Own =
[];


    function Stratenschema() {
    var curpos = Straatnaam[vakje];
    var Huislog = Straten[vakje];
    var Eigenure = Eigenaar[vakje];
    Huislog = Huislog - 1;
    if (vakje == 5 || vakje == 15 || vakje == 25 || vakje == 35 )
    {
        switch (CurPTurn) {
        case 1:
            document.getElementById("P1Stat").innerHTML += curpos + "<br>";
            break;
        case 2:
            document.getElementById("P2Stat").innerHTML += curpos + "<br>";
            break;
        case 3:
            document.getElementById("P3Stat").innerHTML += curpos + "<br>";
            break;
        case 4:
            document.getElementById("P4Stat").innerHTML += curpos + "<br>";
            break;
        }
    }
    else if (vakje == 12 || vakje == 28)
    {
        switch (Turn) {
        case 1:
            document.getElementById("P1Nut").innerHTML += curpos + "<br>";
            break;
        case 2:
            document.getElementById("P2Nut").innerHTML += curpos + "<br>";
            break;
        case 3:
            document.getElementById("P3Nut").innerHTML += curpos + "<br>";
            break;
        case 4:
            document.getElementById("P4Nut").innerHTML += curpos + "<br>";
            break;
        }
    }
    else{
        switch (Turn) {
        case 1:
            document.getElementById("P1Str").innerHTML += curpos + "<br>";
            break;
        case 2:
            document.getElementById("P2Str").innerHTML += curpos + "<br>";
            break;
        case 3:
            document.getElementById("P3Str").innerHTML += curpos + "<br>";
            break;
        case 4:
            document.getElementById("P4Str").innerHTML += curpos + "<br>";
            break;
        }
    }
}


function Refuse()
{
    document.getElementById("Message").style.visibility = "hidden";
    document.getElementById("RefuseB").style.visibility = "hidden";
    document.getElementById("KoopB").style.visibility = "hidden";
    document.getElementById("Bieden").style.visibility = "hidden";
    document.getElementById("Akkoord").style.visibility = "hidden";
    document.getElementById("NietAkkoord").style.visibility = "hidden";
}

function DisplayKoop(message)
{
    document.getElementById("Message").innerHTML = message;
}
    
    
// Display, Add & Remove Money
function DMoney()
{
    switch (CurPTurn) {
        case 1:
            document.getElementById("MoneyP1").innerHTML = " $" + MoneyP1.toLocaleString();
            break;
        case 2:
            document.getElementById("MoneyP2").innerHTML = " $" + MoneyP2.toLocaleString();
            break;
        case 3:
            document.getElementById("MoneyP3").innerHTML = " $" + MoneyP3.toLocaleString();
            break;
        case 4:
            document.getElementById("MoneyP4").innerHTML = " $" + MoneyP4.toLocaleString();
            break;
        }
}
function AddMoney(Ammount)
{
    switch (CurPTurn) {
        case 1:
            MoneyP1 += Ammount;
            DMoney();
            break;
        case 2:
            MoneyP2 += Ammount;
            DMoney();
            break;
        case 3:
            MoneyP3 += Ammount;
            DMoney();
            break;
        case 4:
            MoneyP4 += Ammount;
            DMoney();
            break;    
    }
}
function RemMoney(Ammount)
{
    switch (CurPTurn) {
        case 1:
            MoneyP1 -= Ammount;
            DMoney();
            break;
        case 2:
            MoneyP2 -= Ammount;
            DMoney();
            break;
        case 3:
            MoneyP3 -= Ammount;
            DMoney();
            break;
        case 4:
            MoneyP4 -= Ammount;
            DMoney();
            break;    
    }
}

// Place Players & Remove prev
function PlacePlayer() 
{
    var possie;
    
    switch (Turn) {
        case 1:
            Start();
            possie = document.getElementById("P1");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(vakje).innerHTML += P1;
            CurPosP1 = vakje;
            VakCheck();
            break;
        case 2:
            Start();
            possie = document.getElementById("P2");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(vakje).innerHTML += P2;
            CurPosP2 = vakje;
            VakCheck();
            break;
        case 3:
            Start();
            possie = document.getElementById("P3");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(vakje).innerHTML += P3;
            CurPosP3 = vakje;
            VakCheck();
            break;
        case 4:
            Start();
            possie = document.getElementById("P4");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(vakje).innerHTML += P4;
            CurPosP4 = vakje;
            VakCheck();
            break;
    }
} 

function KaartMove(Plaats) 
{
    var possie;
    switch (Turn) {
        case 1:
            possie = document.getElementById("P1");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(Plaats).innerHTML += P1;
            CurPosP1 = Plaats;
            break;
        case 2:
            possie = document.getElementById("P2");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(Plaats).innerHTML += P2;
            CurPosP2 = Plaats;
            break;
        case 3:
            possie = document.getElementById("P3");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(Plaats).innerHTML += P3;
            CurPosP3 = Plaats;
            break;
        case 4:
            possie = document.getElementById("P4");
            possie.outerHTML = "";
            delete possie;
            document.getElementById(Plaats).innerHTML += P4;
            CurPosP4 = Plaats;
            break;
    }
} 



//Langs Start
function Start()
{
    if (vakje > 39)
    {
        vakje = vakje - 40;
        if (vakje == 0)
        {
            PlacePlayer();
            AddMoney(400000);
            LogStart(400000);
        }
        else
        {
            PlacePlayer();
            AddMoney(200000);
            LogStart(200000);
        }
    }
}

function LogStart(Amount){
    var Text;
    var Log = document.getElementById("Log");
    Amount = '<span style="color:purple;">$' + Amount + '</span>';
    switch (Turn) {
        case 1:
            Text = Player1 + " is langs start gegaan en heeft een uitkering van " + Amount + " ontvangen." + "<br>";
            break;
        case 2:
            Text = Player2 + " is langs start gegaan en heeft een uitkering van " + Amount + " ontvangen." + "<br>";
            break;
        case 3:
            Text = Player3 + " is langs start gegaan en heeft een uitkering van " + Amount + " ontvangen." + "<br>";
            break;
        case 4:
            Text = Player4 + " is langs start gegaan en heeft een uitkering van " + Amount + " ontvangen." + "<br>";
            break;
    }
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}




    
//Logs
function LogRent(Rent, Eigenaar)
{
    var Text;
    var Log = document.getElementById("Log");
    var Huurpay;
    Rent = '<span style="color:purple;">$' + Rent + '</span>';
    if (Eigenaar == 1){
        Huurpay = Player1;
    }
    else if (Eigenaar == 2){
        Huurpay = Player2;
    }
    else if (Eigenaar == 3){
        Huurpay = Player3;
    }
    else if (Eigenaar == 4){
        Huurpay = Player4;
    }
    switch (Turn) {
        case 1:
            Text = Player1 + " heeft " + Rent + " huur moeten betalen aan " + Huurpay + "<br>";
            break;
        case 2:
            Text = Player2 + " heeft " + Rent + " huur moeten betalen aan " + Huurpay + "<br>";
            break;
        case 3:
            Text = Player3 + " heeft " + Rent + " huur moeten betalen aan " + Huurpay + "<br>";
            break;
        case 4:
            Text = Player4 + " heeft " + Rent + " huur moeten betalen aan " + Huurpay + "<br>";
            break;
    }
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}

function LogKoop()
{
    var Text;
    var Log = document.getElementById("Log");
    var Loggie = '<span style="color:purple;">' + Straatnaam[vakje] + '</span>';
    switch (Turn) {
        case 1:
            Text = Player1 + " heeft " + Loggie + " gekocht." + "<br>";
            break;
        case 2:
            Text = Player2 + " heeft " + Loggie + " gekocht" + "<br>";
            break;
        case 3:
            Text = Player3 + " heeft " + Loggie + " gekocht" + "<br>";
            break;
        case 4:
            Text = Player4 + " heeft " + Loggie + " gekocht." + "<br>";
            break;
    }
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}

function Belasting(Belast)
{
    var Text;
    var Log = document.getElementById("Log");
    Belast = '<span style="color:purple;">$' + Belast + '</span>';
    switch (Turn) {
        case 1:
            Text = Player1 + " heeft " + Belast + " moeten betalen." + "<br>";
            break;
        case 2:
            Text = Player2 + " heeft " + Belast + " moeten betalen." + "<br>";
            break;
        case 3:
            Text = Player3 + " heeft " + Belast + " moeten betalen." + "<br>";
            break;
        case 4:
            Text = Player4 + " heeft " + Belast + " moeten betalen." + "<br>";
            break;
    }
    document.getElementById("Message").style.visibility = "visible";
    document.getElementById("Okay").style.visibility = "visible";
    document.getElementById("Message").innerHTML = "Belasting komt je halen!!! :)" + " gaat je " + Belast;
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}

function Okay()
{
    document.getElementById("Message").style.visibility = "hidden";
    document.getElementById("Okay").style.visibility = "hidden";
}

function LogRolledDice(Dices)
{
    var Text;
    var Log = document.getElementById("Log");
    var Loggie = '<span style="color:purple;">' + Dices + '</span>';
    switch (Turn) {
        case 1:
            Text = Player1 + " heeft " + Loggie + " gerold." + "<br>";
            break;
        case 2:
            Text = Player2 + " heeft " + Loggie + " gerold." + "<br>";
            break;
        case 3:
            Text = Player3 + " heeft " + Loggie + " gerold." + "<br>";
            break;
        case 4:
            Text = Player4 + " heeft " + Loggie + " gerold." + "<br>";
            break;
    }
    Log.innerHTML += Text;
    Log.scrollTop = Log.scrollHeight; 
}
    
//Straatnummers

var Straatnaam =
[
    "Start",
    "Wiltz",
    "Algemeen Fonds",
    "Remich",
    "Inkomsten Belasting",
    "KrakowGlowny",
    "Nice",
    "Kans",
    "Lyon",
    "Parijs",
    "Jail",
    "Bern",
    "Dodewaard",
    "Basel",
    "Zurich",
    "KyivPasAzhyrskyi",
    "Doorn",
    "Algemeen Fonds",
    "Maarssen",
    "Ypecolsga",
    "Free Perking",
    "Valencia",
    "Kans",
    "Barcelona",
    "Madrid",
    "MadridAtocha",
    "Malmo",
    "Uppsala",
    "Fukushima",
    "Orebro",
    "Ga naar Jail",
    "Milaan",
    "Genua",
    "Algemeen Fonds",
    "Bari",
    "OberhausenHauptbahnhof",
    "Kans",
    "Hoeryong",
    "Belasting",
    "Pyongyang"
];




// Straten
var Wiltz =
[
    60000,
    2000,
    10000,
    30000,
    90000,
    160000,
    250000
    
];    
    
var Remich =
[
    60000,
    4000,
    20000,
    60000,
    180000,
    320000,
    450000
    
];
    
var Nice =
[
    100000,
    6000,
    30000,
    90000,
    270000,
    400000,
    550000
    
];

var Lyon =
[
    100000,
    6000,
    30000,
    90000,
    270000,
    400000,
    550000
    
];

var Parijs =
[
    120000,
    8000,
    40000,
    100000,
    300000,
    450000,
    600000
    
];

var Bern =
[
    140000,
    10000,
    50000,
    150000,
    450000,
    625000,
    750000
    
];

var Basel =
[
    140000,
    10000,
    50000,
    150000,
    450000,
    625000,
    750000
    
];

var Zurich =
[
    160000,
    12000,
    60000,
    180000,
    500000,
    700000,
    900000
    
];

var Doorn =
[
    180000,
    14000,
    70000,
    200000,
    550000,
    700000,
    900000
    
];

var Maarssen =
[
    180000,
    14000,
    70000,
    550000,
    700000,
    320000,
    950000
    
];

var Ypecolsga =
[
    200000,
    16000,
    220000,
    450000,
    600000,
    800000,
    1000000
    
];

var Valencia =
[
    200000,
    18000,
    90000,
    250000,
    700000,
    875000,
    1050000

];

var Barcelona =
[
    220000,
    18000,
    90000,
    250000,
    700000,
    875000,
    1050000
    
];

var Madrid =
[
    240000,
    20000,
    100000,
    300000,
    750000,
    925000,
    1100000
    
];

var Malmo =
[
    260000,
    22000,
    110000,
    330000,
    800000,
    975000,
    1150000
    
];

var Uppsala =
[
    260000,
    22000,
    110000,
    330000,
    800000,
    975000,
    1150000
    
];

var Orebro =
[
    280000,
    24000,
    120000,
    360000,
    850000,
    1025000,
    1200000
    
];

var Milaan =
[
    300000,
    26000,
    130000,
    309000,
    900000,
    1100000,
    1275000
    
];

var Genua =
[
    300000,
    26000,
    130000,
    390000,
    900000,
    1100000,
    1275000
    
];

var Bari =
[
    320000,
    26000,
    150000,
    450000,
    1000000,
    1200000,
    1400000
    
];

var Hoeryong =
[
    350000,
    35000,
    175000,
    500000,
    1100000,
    1300000,
    1500000
    
];

var Pyongyang =
[
    400000,
    50000,
    200000,
    600000,
    1400000,
    1700000,
    2000000
    
];

//Kernbommen
var Fukushima =
[
    150000,
    4000,
    10000
];

var Dodewaard =
[
    150000,
    4000,
    10000
];


//Station
var KrakowGlowny =
[
    200000,
    25000,
    50000,
    100000,
    200000
];

var MadridAtocha = 
[
    200000,
    25000,
    50000,
    100000,
    200000
];

var OberhausenHauptbahnhof = 
[
    200000,
    25000,
    50000,
    100000,
    200000
];

var KyivPasAzhyrskyi =
[
    200000,
    25000,
    50000,
    100000,
    200000
];

var Kans =[
    "",
    "Boete voor te snel rijden $ 15.000",
    "Betaal schoolgeld $ 150.000",
    "Aangehouden wegens dronkenschap $ 20.000 boete",
    "Repareer uw huizen. Betaal $ 75.000 aan de aannemer",
    "U wordt aangeslagen voor straatgeld. $ 40.000",
    "U hebt een kruiswoordpuzzel gewonnen en ontvangt $ 100.000",
    "De bank betaalt u $ 50.000 dividend",
    "Uw bouwverzekering vervalt, u ontvangt $ 150.000",
    "Ga verder naar Start",
    "Ga drie plaatsen terug",
    "Ga verder naar Doorn. Indien u langs Start komt, ontvangt u $ 200.000",
    "Reis naar station Kyiv-Pas-Azhyrskyi en indien u langs Start komt, ontvangt u $ 200.000",
    "Ga direct naar de gevangenis. Ga niet langs Start. U ontvangt geen $ 200.000",
    "Ga verder naar de Bari. Indien u langs Start komt ontvangt u $ 200.000",
    "Ga verder naar Pyongyang",
    "Free Perking! Ga naar de Jackpot."

];

var KansMoney =
[
    "",
    15000, //remove
    150000, //remove
    20000, //remove
    75000, //remove
    40000, //remove
    100000, //add
    50000, //add
    150000, //add
    0,
    3,
    16,
    15,
    10,
    34,
    39,
    20
];

var AlgemeenFonds =[
    "",
    "U erft $ 100.000",
    "U ontvangt rente van 7% preferente aandelen $ 25.000",
    "Een vergissing van de bank, u ontvangt $ 200.000",
    "U krijgt geld terug van de belastingdienst, u ontvangt $ 20.000",
    "Lijfrente vervalt, u ontvangt $ 100.000",
    "U hebt de tweede prijs in een schoonheidswedstrijd gewonnen en ontvangt $ 10.000. PS: Je blijft lelijk.",
    "Door verkoop van uw ziel ontvangt u $ 50.000",
    "Donatie aan Unicef $ 25.000",
    "Betaal uw doktersrekening $ 50.000",
    "Betaal uw verzekeringspremie $ 50.000",
    "Betaal uw energierekening $ 75.000",
    "Betaal het ziekenhuis $ 100.000",
    "Betaal $ 10.000 boete.",
    "Laat uw hond inslapen $ 10.000",
    "Uw huis is verbrand, Koop een nieuwe $100.000",
    "U wint $ 1.000.000 maar word beroofd."
];

var AlgemeenMoney = 
[
    "",
    100000, //add
    25000,
    200000,
    20000,
    100000,
    10000,
    50000, //add
    25000, //rem
    50000, 
    50000,
    75000,
    100000,
    10000, 
    10000, 
    100000, //rem
    0
];










// Back Ups


// var Kans =[
//     "",
//     "Boete voor te snel rijden $ 15.000",
//     "Betaal schoolgeld $ 150.000",
//     "Aangehouden wegens dronkenschap $ 20.000 boete",
//     "Repareer uw huizen. Betaal voor elk huis $ 25.000, betaal voor elk hotel $ 100.000",
//     "U wordt aangeslagen voor straatgeld. $ 40.000 per huis, $ 115.000 per hotel",
//     "U hebt een kruiswoordpuzzel gewonnen en ontvangt $ 100.000",
//     "De bank betaalt u $ 50.000 dividend",
//     "Uw bouwverzekering vervalt, u ontvangt $ 150.000",
//     "Ga verder naar Start",
//     "Ga drie plaatsen terug",
//     "Ga verder naar Doorn. Indien u langs Start komt, ontvangt u $ 200.000",
//     "Reis naar station Kyiv-Pas-Azhyrskyi en indien u langs Start komt, ontvangt u $ 200.000",
//     "Ga direct naar de gevangenis. Ga niet langs Start. U ontvangt geen $ 200.000",
//     "Ga verder naar de Herestraat. Indien u langs Start komt ontvangt u $ 200.000",
//     "Ga verder naar Pyongyang",
//     "Verlaat de gevangenis zonder te betalen"

// ];



// var AlgemeenFonds =[
//     "",
//     "U erft $ 100.000",
//     "U ontvangt rente van 7% preferente aandelen $ 25.000",
//     "Een vergissing van de bank in uw voordeel, u ontvangt $ 200.000",
//     "Restitutie inkomstenbelasting, u ontvangt $ 20.000",
//     "Lijfrente vervalt, u ontvangt $ 100.000",
//     "U hebt de tweede prijs in een schoonheidswedstrijd gewonnen en ontvangt $ 10.000",
//     "Door verkoop van effecten ontvangt u $ 50.000",
//     "Betaal uw doktersrekening $ 50.000",
//     "Betaal uw verzekeringspremie $ 50.000",
//     "Betaal uw energierekening $ 75.000",
//     "Betaal het hospitaal $ 100.000",
//     "Betaal $ 10.000 boete.",
//     "Ga terug naar Wiltz",
//     "Ga direct naar de gevangenis. Ga niet langs Start, u ontvangt geen $ 200.000",
//     "Ga verder naar Start",
//     "U bent jarig en ontvangt van iedere speler $ 10.000"
// ];
