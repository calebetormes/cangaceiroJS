var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade'),
];
console.log(campos); //verificando conteudo do array testedr

/*seleciona o elemento "tbody" dentro da primeira tabela encontrada no 
HTML e armazena em uma variável chamada "tbody"*/
var tbody = document.querySelector('table tbody');

// Adiciona um evento de submit ao primeiro formulário encontrado no HTML
document.querySelector('.form').addEventListener('submit', function(event) {
        alert('oi');// Mostra uma caixa de diálogo "oi" quando o formulário é enviado 
    }
);