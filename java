// Banco de dados fictício
let bancoDeDados = [];

// Função para adicionar um registro
function adicionarRegistro(nome, idade, cargo) {
    const registro = {
        id: bancoDeDados.length + 1,
        nome: joao pedro;
        idade: 14 
        cargo: iniciar em progamaçao;
    };
    bancoDeDados.push(registro);
    console.log("Registro adicionado com sucesso!");
}

// Função para visualizar todos os registros
function visualizarRegistros() {
    console.log("Registros no Banco de Dados:");
    bancoDeDados.forEach((registro) => {
        console.log(`ID: ${registro.id}, Nome: ${registro.nome}, Idade: ${registro.idade}, Cargo: ${registro.cargo}`);
    });
}

// Função para remover um registro pelo ID
function removerRegistro(id) {
    const index = bancoDeDados.findIndex((registro) => registro.id === id);
    if (index !== -1) {
        bancoDeDados.splice(index, 1);
        console.log(`Registro com ID ${id} removido com sucesso!`);
    } else {
        console.log(`Registro com ID ${id} não encontrado!`);
    }
}

// Exemplo de uso das funções
adicionarRegistro("João Silva", 30, "Gerente");
adicionarRegistro("Maria Oliveira", 25, "Assistente");
visualizarRegistros();
removerRegistro(1);
visualizarRegistros(); 