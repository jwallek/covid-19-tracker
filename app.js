const countryList = [

    "Global",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo (Kinshasa)",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Romania",
    "Russian",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "US",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ]; 

var menuSelect = document.getElementById("country-selector");
var getCountry = document.getElementById("get-country");

var deathData = document.getElementById("deaths");
var confirmedData= document.getElementById("confirmed");
var recoveredData= document.getElementById("recovered");
var populationData =document.getElementById("population");
var dataArrayDeaths= [];
var labelArrayDeaths = [];
var dataArrayConfirmed = [];
var labelArrayConfirmed = [];
var dataArrayRecovered = [];
var labelArrayRecovered = [];



var selectedCountry = countryList[0];

document.addEventListener("DOMContentLoaded", function() {
    getFacts();
    getGlobalDeaths();
    getGlobalConfirmed();
    getGlobalRecovered();
     
  });


 


for (let i = 0; i < countryList.length; i++){
    $("#country-selector").append('<option value="' + i + '">' + countryList[i] + '</option>');
}

getCountry.addEventListener("click", getFacts);

function getFacts() {
$("#country").html("");
$("#deaths").html("");
$("#confirmed").html("");
$("#recovered").html("");
$("#population").html("");
var selectElement =  document.querySelector('#country-selector');  
var country = selectElement.value;
selectedCountry = countryList[country];
$.getJSON(`https://covid-api.mmediagroup.fr/v1/cases?country=${selectedCountry}`, function(data){
var confirmed = data.All.confirmed;
var deaths = data.All.deaths;
var recovered = data.All.recovered;
var population = data.All.population;

populationData.append(population);
confirmedData.append(confirmed);
deathData.append(deaths);
recoveredData.append(recovered);

      
   

})


}

function getGlobalDeaths() {
$.getJSON(`https://covid-api.mmediagroup.fr/v1/history?country=${selectedCountry}&status=deaths`,function(data){
    var x =data.All.dates;

      for(const[key, value] of Object.entries(x)){
        dataArrayDeaths.unshift(`${key}`);
        labelArrayDeaths.unshift(`${value}`);
      }
      
    })
    
}

function getGlobalConfirmed() {
    $.getJSON(`https://covid-api.mmediagroup.fr/v1/history?country=${selectedCountry}&status=confirmed`,function(data){
        var x =data.All.dates;
    
          for(const[key, value] of Object.entries(x)){
            dataArrayConfirmed.unshift(`${key}`);
              labelArrayConfirmed.unshift(`${value}`);
              
          }  
          
        })
    }
    function getGlobalRecovered() {
        $.getJSON(`https://covid-api.mmediagroup.fr/v1/history?country=${selectedCountry}&status=recovered`,function(data){
            var x =data.All.dates;
        
              for(const[key, value] of Object.entries(x)){
                  dataArrayRecovered.unshift(`${key}`);
                  labelArrayRecovered.unshift(`${value}`);
              }
            })
        }















