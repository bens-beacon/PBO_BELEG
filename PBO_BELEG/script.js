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
    document.getElementById("name").innerHTML = myJSON.system.name;
    document.getElementById("footer").innerHTML = myJSON.system.contact;
    document.getElementById("footer").appendChild = myJSON.system.email;

    for (x in myJSON.process.childs)
    {
        para = document.createElement("p");
        para.innerHTML = myJSON.process.childs[x].id;
        container.appendChild(para);
    }


    //console.log(myJSON.system.id);

    });
