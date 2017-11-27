function loadJSON(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("appliction/json");   // Dateityp
    xobj.open('GET', 'process.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // .open will NOT return a value but simply returns
            //undefined in async mode so use a callback
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}



loadJSON(function (response) {
    var myJSON = JSON.parse(response);
    // Variante 1
    document.getElementById("container").innerHTML = myJSON.system.id;




    //console.log(myJSON.system.id);

    });
