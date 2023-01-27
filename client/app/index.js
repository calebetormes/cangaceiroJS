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
        event.preventDefault();

        // Cria uma nova linha na tabela
        var tr =  document.createElement('tr');
    
        // Itera sobre cada elemento na array "campos"
        campos.forEach(function(campo) {
            
            var td = document.createElement('td');// Cria uma nova célula na tabela          
            td.textContent = campo.value;// Atribui o valor do campo atual à célula
            tr.append(td);// Adiciona a célula à linha
        });s


        // nova td que armazenará o volume da negociação 
        var tdVolume = document .createElement( 'td' );

        tr.append(tdVolume);
        tbody.append(tr);

    });





var tdvolume = document.createElement('td');