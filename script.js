/*HTML linguagem de marcação, CSS estilização e Javascript lógica. Os três em conjunto são utilizados para compor uma página web*/

/*Utilizei o método getElementById para ler o elemento do HTML, o .value para trazer o valor digitado no elemento, o parseFloat para converter o valor de string para float. Já a função storeValue irá rodar sempre que o botão "enviar" for clicado.*/
//Todo código dentro da função só será rodado se for chamado. Neste caso foi acionado via botão

function storeValue () {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  console.log(nota1);
  
  var nota2 = parseFloat(document.getElementById("nota2").value);
  console.log(nota2);
  
  var nota3 = parseFloat(document.getElementById("nota3").value);
  console.log(nota3);

  var nota4 = parseFloat(document.getElementById("nota4").value);
  console.log(nota4);
  
  var media = (nota1 + nota2 + nota3 + nota4)/4;
  
 console.log ("Sua média foi: " + media);
 if (media >= 7) {
 document.getElementById("outputnota").innerHTML = "Aprovado: " + media;  
 } else {
 document.getElementById("outputnota").innerHTML = "Reprovado: " + media;;  
}
}

  


//desafio laço de decisão simples
/*incrementei com o o método para interir o resultado na página HTML com o método document.getElementById("").innerHTML = ""*/



//desafio: realizar o calculo dentro do console.log
//console.log ("Média é: " + ((nota1 + nota2 + nota3 + nota4)/4));

//desafio realizar outro tipo de conversor
/*var real = 45
var dolar = real / 5
console.log ('O valor em real corresponde a ' + dolar + "$ dólares");*/

/**Escrever resultado na página ok
*Estrutura de decisão para identificar se o aluno foi aprovado ou não OK
*Fazer as contas em console.log  OK
*Fazer algum outro tipo de conversor Ok
*Estilizar o fundo Ok
*Entrar com os dados na página ok não consegui armazenar de forma prática.*/