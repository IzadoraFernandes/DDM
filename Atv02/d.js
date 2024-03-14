/*
d) A partir do array de usuarios criado anteriormente, use o método map para criar um novo
array que contém apenas os nomes dos usuários.

*/
var Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
var UsersFilter = Users.filter(function (usuario) { return usuario.idade > 25; });
console.log(UsersFilter.map(function (user) { return user.nome; })); //ret
