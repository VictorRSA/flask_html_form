function myFunction() {
    var x =document.getElementById("firstname_lastname");
    var text = "";
    var i;
    for(i=0; i <x.lenght ;i++){
        text= text+ x.elements[i].value+ "<br>";
    }
    document.getElementById("demo").innerHTML=text;
  }