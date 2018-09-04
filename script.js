function funcao(){
    var mat = 16 -document.getElementById('MAT').value;
    var port =16 - document.getElementById ('pot').value;
    var his = 16 - document.getElementById('his').value;
    var art = 16 - document.getElementById('art').value;
    var edu =16 - document.getElementById('edu').value;

    document.getElementById("resultado1").innerHTML= "você precisa tirar" + MAT;
    document.getElementById("resultado2").innerHTML= "você precisa tirar" + port;
    document.getElementById("resultado3").innerHTML= "você precisa tirar" + his;
    document.getElementById("resultado4").innerHTML= "você precisa tirar" + art;
    document.getElementById("resultado5").innerHTML= "você precisa tirar" + edu;

}
