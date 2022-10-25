

function exercicio01(){
var a = 10;
var b = 20;
var aux = 0;

console.log("A varável 'a' possui o valor " + a + ", a variável 'b' possui o valor " + b);
    aux = a;
    a = b;
    b = aux;

console.log("A varável 'a' possui o valor " + a + ", a variável 'b' possui o valor " + b);

}

function exercicio02(){
var num = 0;
var aux = 0;

    num = prompt("Digite um número: ");
        aux = num - 1;
        console.log('O antecessor de ' + num + ", é " + aux);
}

function exercicio03(){
var base = 0;
var altura = 0;
var resultado = 0;

    base = prompt("Digite a base do retângulo");
    altura = prompt("Digite a altura do retângulo");
    
    if (base == altura){
        console.log("Hmmmm...Acho que isso é um quadrado :(");
    }else{
        resultado = (base * altura);

        console.log("A área do retângulo é: " + resultado);
    }   

}

function exercicio04(){
var anos = 0;
var meses = 0;
var dias = 0;
var resultado = 0;

    anos = parseInt(prompt("Digite a sua idade EX.:36"));
    meses = parseInt(prompt("Digite quantos meses completos você tem EX.:07"));
    dias = parseInt(prompt("Digite o dia do seu nascimento EX.:19"));

    resultado = (anos * 365) + (meses * 30) + dias;

console.log("Você ja teve " + resultado + " dias de vida");

}

function exercicio05(){
var nulos = 0;
var brancos = 0;
var validos = 0;
var eleitoresTotal = 0;
var auxNulos = 0;
var auxBrancos = 0;
var auxValidos = 0;

    nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
    brancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
    validos = parseInt(prompt("Digite a quantidade de votos validos: "));

    eleitoresTotal = nulos + brancos + validos;

    auxNulos = (nulos/eleitoresTotal)*100;
    auxBrancos = (brancos/eleitoresTotal)*100;
    auxValidos = (validos/eleitoresTotal)*100;

console.log(nulos + " votos nulos, " + brancos + " votos brancos, "+ validos +" votos válidos e " + eleitoresTotal + " eleitores no total.");
console.log(auxNulos + "% votos nulos, " + auxBrancos + "% votos brancos e " + auxValidos + "% votos válidos");

}

function exercicio06(){
var salario = 0;
var aumento = 0;
var novoSalario = 0;

    salario = parseFloat(prompt("Salário Atual: "));
    aumento = parseFloat(prompt("Digite a % do reajuste"));

    aux = salario/100;
    novoSalario = salario + (aux*aumento);

    console.log(novoSalario);

}

function exercicio07(){
var distribuidor, imp, final, fabrica = 0;

fabrica = parseFloat(prompt("Digite o valor de fábrica do veículo, R$: "));

imp = (fabrica/100)*28;
distribuidor = (fabrica/100)*45;
final = fabrica + imp + distribuidor;

console.log("O valor final ficou em R$" + final);

}

function exercicio08(){
var n1, n2, n3, total, media = 0;

n1 = parseFloat(prompt("Digite a nota 1:"));
n2 = parseFloat(prompt("Digite a nota 2:"));
n3 = parseFloat(prompt("Digite a nota 3:"));

total = n1 + n2 + n3;

media = total/3;

console.log("A média foi: " + media);

}

function exercicio09(){
var compra, total

compra = parseInt(prompt("Quantas maçãs deseja comprar? "))
if (compra<=11){
    total = compra*1.30;
}else{
    total = compra*1;
}

console.log("Na compra de " + compra + " maçãs, o custo total foi de R$" + total);
}

function exercicio10(){
var fixo, vendas, comissao, aux, total

fixo = parseFloat(prompt("Digite o sálario fixo: "));
vendas = parseFloat(prompt("Digite o valor total de vendas: "));

if (vendas<= 1500){
   comissao = (vendas/100)*3;
    total = fixo + comissao;
}else{
    comissao = (1500/100)*3;
    aux = ((vendas - 1500)/100)*5;
    total = fixo + aux + comissao;
}

console.log("O valor total junto a comissoes foi de R$" + total);

}

function exercicio11(){
var conta, saldo, debito, credito, saldoAtual = 0;

conta = parseInt(prompt("Digite o número da conta: "));
saldo = parseFloat(prompt("Digite o saldo da saldo: "));
debito = parseFloat(prompt("Digite o saldo da debito: "));
credito = parseFloat(prompt("Digite o saldo da credito: "));

saldoAtual = saldo - debito + credito;
if (saldoAtual>=0){
    console.log("Saldo Positivo! Você possui R$" + saldoAtual);
}else{
    console.log("Saldo Negativo :( ... Seu saldo atual é de R$ " + saldoAtual);
}
}

function exercicio12(){
var num1 = 0;
var msg = "";

num1 = parseInt(prompt("Informe um número entre 1 e 10: "));

console.log("Tabuado do" + num1 + ":\n");

for (i = 0; i<=10; i++ ){

msg += num1 + " x " + i + " = " + (num1) * (i) +"\n";

}

console.log(msg + "\n");

}

function exercicio13(){
var n, i = 0;
msg = "";

n = parseInt(prompt("Digite um número: "))

for (i = 0; i <= n; i++){
    msg =+ i + "\n";
}

console.log(msg + "\n");



}


//Chamando as funções
//exercicio01();
//exercicio02();
//exercicio03();
//exercicio04();
//exercicio05();
//exercicio06();
//exercicio07();
//exercicio08();
//exercicio09();
//exercicio10();
//exercicio11();
//exercicio12();
exercicio13();