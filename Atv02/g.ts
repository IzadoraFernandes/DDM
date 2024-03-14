/*
g) Utilize o método reduce para calcular a idade total dos usuários.

*/

let Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
let UsersFilter = Users.reduce((i,U) => (i + U.idade), 0);
console.log("Idades somadas: ",UsersFilter);    