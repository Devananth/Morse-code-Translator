var translateInput = document.querySelector("#translate-ip");

var btnTranslate = document.querySelector("#translate-btn");

var outputDiv = document.querySelector("#translate-op");

var serverUrl = "https://api.funtranslations.com/translate/morse.json";

/* Mock URL
 
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

*/

btnTranslate.addEventListener("click" , clickHandler);

function constructUrl(text)
{
    return serverUrl + "?text=" + text;
}

function errorHandler(error)
{
    console.log("error occured");
    alert("Something went wrong in the server , Please try again later");
}

function clickHandler(){

    console.log("Clicked");
    
    var inputTxt = translateInput.value;

    var finalUrl = constructUrl(inputTxt);

    fetch(finalUrl)
        .then(response => response.json())
        .then(json => console.log(outputDiv.innerText = json.contents.translated))
        .catch(errorHandler);
}
