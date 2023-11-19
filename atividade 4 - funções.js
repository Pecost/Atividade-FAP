function saudacao() {
    console.log("Bem-vindo ao gerenciador de tarefas!");
}

function adicionarTarefa(lista, tarefa) {
    lista.push(tarefa);
    return lista;
}

const removerTarefa = (lista, indice) => {
    if (indice >= 0 && indice < lista.length) {
        lista.splice(indice, 1);
    }
    return lista;
}

saudacao();

let listaTarefas = ["Estudar JavaScript", "Fazer compras", "Limpar o quarto"];

console.log("Tarefas atuais:", listaTarefas);
listaTarefas = adicionarTarefa(listaTarefas, "Preparar o jantar");
console.log("Tarefas após adicionar:", listaTarefas);
listaTarefas = removerTarefa(listaTarefas, 1);
console.log("Tarefas após remover:", listaTarefas);