
   
    fetch(`https://restcountries.com/v2/all`)
        .then((res) => res.json())//data from Api
        .then((data) => populationData(data))//data from json


var details=document.querySelector(".countryId");


        function populationData(countryName) {
           for( let data of countryName){
         
            let optioninput=document.createElement("option");
            optioninput.value=data.name;
            optioninput.text=data.name;
            details.append(optioninput);

           }

        }
        

        function fetchdata(){
            
            var x=details.value;
            console.log(x);
            fetch(`https://restcountries.com/v2/name/${x}?fullText=true`)
            .then((res) => res.json())
            .then((data) => countrydata(data))
           
        }


        function countrydata(countryName) {
            
            let cap = countryName[0].capital;
            let countname = countryName[0].name;
            let currencyName = countryName[0].currencies[0].code;
            let currencySymbol = countryName[0].currencies[0].symbol;
            let language = countryName[0].languages[0].name;
            let population = countryName[0].population;
            document.getElementById("CountName").innerHTML = countname;
            document.getElementById("CurrencyName").innerHTML = currencyName;
            document.getElementById("CurrencySymbols").innerHTML = currencySymbol;
            document.getElementById("Population").innerHTML = population;
            document.getElementById("capital").innerHTML = cap;
            document.getElementById("language").innerHTML = language;
            var flagimage= document.getElementById("flagim");
            flagimage.src=countryName[0].flag;
        }