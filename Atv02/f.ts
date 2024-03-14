/*
f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
(ativo/inativo).

*/

let Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
let UsersFilter = Users.forEach(function (user) {
    console.log(`Nome do Usuário: ${user.nome} - Status: ${user.ativo ? 'Ativo' : 'Inativo'} `);
});