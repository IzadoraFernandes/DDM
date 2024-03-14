/*
h) Use o reduce para contar quantos usuários estão ativos.

*/
var Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
var UsersFilter = Users.reduce(function (i, U) { return (i + Number(U.ativo)); }, 0);
console.log("Quantidade de usuários ativos: ", UsersFilter);
