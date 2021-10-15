// 1. Declare uma variavel de nome weight 


let weigh;

//2. que tipo de dado e a variavel acima?
console.log(typeof weigh)


/* 
    3. Declare uma variavel e atribua valores para cada
    um dos dados:
        *name: String
        *age: Number (integer)
        *stars: Number (float)
        *isSucribed: Bolean

*/

//let name = "Otavio"
//let age = 20
//let stars = 2.2 
//let isSubscribed = false


/*
    4.A variavel student abaixo e de que tipo de dado?
    
    4.1 Atribua a ela as mesmas propriedades e valores 
    do exercicio 3
    
    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos
        valores de cada propriedade do objeto
*/



let student = {
    name: "Otavio",
    age: 15,
    weight: 30.2,
    isSubscribed: false,
}



//console.log(name)

//console.log(student.name + " de idade " + student.age + " pesa " + student.weight + " kg");
//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);


/*
    5. Declare uma variavel do tipo Array, de nome
    students e atribua a ela nenhnum valor, ou seja, 
    somente o array vazio
*/

let students = []

/*
    6. Reatribua valor para a variavel acima colocando
    dentro dela o objeto student da questão 4. (Não
    copiar e colocar o objeto, mas usar o objeto criado e
    inserir ela no Array)
*/

students[{
    student
}]
console.log(students)

/*
    7. Coloque no console o valor da posição zero do
    Array acima
*/
//console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do 
    Array students
*/

const pablo = {
    name: "Pablito",
    age: 20,
    weight: 30.2,
    isSubscribed: true,
}
students[1] = pablo
console.log(students)


/*
    9. Sem rodar o codigo responda qual e a resposta do
    codigo abaixo e por que?? Apos sua resposta, rode o
    codigo e veja se voce acertou.

    console.log(a)
    var a = 1 

*/

console.log(a)
var a = 1 