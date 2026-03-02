document.addEventListener("keydown", function (e) {
  if (e.key === "n") {
    document.body.style.backgroundColor = "black";
    var elemento = document.getElementById("texto", "texto2");
    elemento.style.color = "white";
  } else if (e.key === "d") {
    document.body.style.backgroundColor = "white";
    var elemento = document.getElementById("texto");

    elemento.style.color = "black";
  }
});

//de mudar de cor com qualquer tecla
document.getElementById("meuInput").style.color = cores[indiceCor];

//mudar de cor com uma recla em especifico
document.addEventListener("keydown", function (e) {
  const textoOriginal = e.key;
  const textoMinusculo = textoOriginal.toLowerCase();
  if (textoMinusculo === "r") {
    document.body.style.backgroundColor = "red";
    console.log(e.key);
    document.getElementById("texto").innerHTML = "<h2>Vermelho</h2>";
    console.log("rgb(255, 0, 0)");
  }
  //vermelho
  else if (textoMinusculo === "g") {
    document.body.style.backgroundColor = "green";
    console.log(e.key);
    document.getElementById("texto").innerHTML = "<h2>Verde</h2>";
    console.log("rgb(0, 255, 0)");
  }
  //verde
  else if (textoMinusculo === "b") {
    document.body.style.backgroundColor = "blue";
    console.log(e.key);
    document.getElementById("texto").innerHTML = "<h2>Azul</h2>";
    console.log("rgb(0, 0, 255)");
  }
  //azul
  else if (textoMinusculo === "y") {
    document.body.style.backgroundColor = "yellow";
    console.log(e.key);
    document.getElementById("texto").innerHTML = "<h2>Amarelo</h2>";
    console.log("rgb(255, 255, 0)");
  }
  //amarelo
  else if (textoMinusculo === "p") {

    document.body.style.backgroundColor = "purple";
    console.log(e.key);
    document.getElementById("texto").innerHTML = "<h2>Roxo</h2>";

    console.log("rgb(128, 0, 128)");
  }
  //roxo
  else if (textoMinusculo === "x") {
    document.body.style.backgroundColor = "transparent";
    console.log(e.key);
  }
  //sem cor
});
