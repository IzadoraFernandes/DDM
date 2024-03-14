/*
c) Utilize o método filter para criar uma lista de usuários com idade maior que 25 anos.
*/

let Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
let UsersFilter = Users.filter(usuario => usuario.idade  > 25);
console.log(UsersFilter);