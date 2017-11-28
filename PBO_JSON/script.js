function loadJSON(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("appliction/json");   // Dateityp
    xobj.open('GET', 'test.json', true);
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
    document.getElementById("name").innerHTML = myJSON.modul[0].name;
    document.getElementById("art").appendChild = myJSON.modul[0].art;
    // Variante 2

    for(var x in myJSON.modul){
        //console.log(x);
        para = document.createElement("p");
        para.innerHTML = myJSON.modul[x].name + myJSON.modul[x].credits;

        container.appendChild(para);
    }




    //console.log(myJSON.modul.art);

    });

