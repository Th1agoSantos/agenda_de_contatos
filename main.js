document.getElementById('formularioContato').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome.trim() && telefone.trim()) {
        const tabela = document.getElementById('tabelaContatos');
        const novaLinha = tabela.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone = novaLinha.insertCell(1);

        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
