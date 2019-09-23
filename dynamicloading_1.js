
  var caller = "";

function showCustomer(str, caller) {
    var xhr =  new XMLHttpRequest();
    this.responseType = 'text';
    xhr.onreadystatechange  =  function() {
        
        var ourData = xhr.response;
        if (this.readyState == 4 && this.status == 200) {//if result successful
            ourData = xhr.responseText.split(":");
            update(ourData, str, caller);
            console.log(ourData+ " hell");
        }
        
    };

    switch (caller){
        case "contact":
            xhr.open("GET", "getcontact.php", true);
            break;
        case "home":
            xhr.open("GET", "getname.php", true);//other php files here
            break;
        default:
    }
    xhr.setRequestHeader("Content-type", "text/plain");
    xhr.send();
}

  function update(ourData, str, caller){
    var newstr = str.split(":");
    switch (caller){
        case "contact":
                document.getElementById(newstr[0]).innerHTML = "<strong>"+ourData[0]+ "</strong>";
                document.getElementById(newstr[1]).innerHTML = "<strong>"+ourData[1]+ "</strong>";
                document.getElementById(newstr[2]).innerHTML =  ourData[2].toUpperCase()+" ";
                document.getElementById(newstr[3]).innerHTML =  ourData[3];
                break;
        case "home":
                document.getElementById(newstr[0]).innerHTML = "<strong>"+ourData[1].toUpperCase()+ "</strong>";
                break;
        default:
    } 
   
}
