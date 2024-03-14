/*
j) Use o método find para encontrar o primeiro usuário que esteja inativo.
*/
var Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
var userEncontrado = Users.find(function (user) { return user.ativo === false; });
console.log("Usuário encontrado:", userEncontrado);
