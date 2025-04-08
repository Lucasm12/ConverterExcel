function closeTutorial() {
    document.getElementById('tutorialModal').classList.remove('active');
}

function gerarExcel() {
    const inputData = document.getElementById("inputData").value;
    const linhas = inputData.split("\n").map(linha => linha.split("|"));
    
    const cabecalho = [
        "Sequencial de Registro", "Tipo de Registro", "Plano", "Código do Beneficiário", "Nome Completo",
        "CPF do Beneficiário", "RG/RNE do Beneficiário", "Órgão Expedidor", "Nome da Mãe", "Data Nascimento",
        "Sexo", "CNS", "Estado Civil", "Logradouro", "Numero", "Complemento", "Bairro", "Cidade", "UF", "CEP",
        "Tipo de Telefone 1", "DDD Telefone 1", "Telefone 1", "Ramal Telefone 1", "Tipo de Telefone 2", "DDD Telefone 2",
        "Telefone 2", "Ramal Telefone 2", "Servidor Publico", "Tipo de Movimentação", "Valor da Mensalidade",
        "Data da Operação", "Data de Inicio Vigência", "Motivo de Cancelamento", "Forma de Pagamento", "Banco",
        "Agencia", "Conta Corrente", "Tipo de Conta", "Código do Vendedor", "Código do Gerente", "Código da Loja",
        "Código da Regional", "Contrato", "Locacao", "E-mail", "Dia Cobrança", "Grau de parentesco",
        "Vinculo CPF Titular", "Código do Beneficiário Titular", "Funcional/Matricula", "Centro de Custo",
        "Carteirinha", "Natureza Documento Identificação", "Data Expedição", "Passaporte Carteira Civil",
        "Atividade Principal Desenvolvida", "ID Registro Remessa", "Em branco", "Em branco"
    ];
    
    const ws = XLSX.utils.aoa_to_sheet([cabecalho, ...linhas]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Dados");
    XLSX.writeFile(wb, "dados.xlsx");
} 