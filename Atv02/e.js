/*
e) Use o método map para aumentar a idade de todos os usuários em 1 ano.
*/
var Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
var UsersFilter = Users.map(function (usuario) { return usuario.idade + 1; });
console.log(UsersFilter);
