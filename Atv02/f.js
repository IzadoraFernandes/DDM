/*
f) Utilize o método forEach para imprimir o nome de cada usuário e seu status
(ativo/inativo).

*/
var Users = [
    { id: 1, nome: "João", idade: 25, ativo: true },
    { id: 2, nome: "Maria", idade: 30, ativo: false },
    { id: 3, nome: "Pedro", idade: 28, ativo: true },
    { id: 4, nome: "Ana", idade: 22, ativo: true }
];
var UsersFilter = Users.forEach(function (user) {
    console.log("Nome do Usu\u00E1rio: ".concat(user.nome, " - Status: ").concat(user.ativo ? 'Ativo' : 'Inativo', " "));
});
