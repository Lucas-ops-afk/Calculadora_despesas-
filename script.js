let saldo = 0;

document.getElementById("btn").addEventListener('click', function() {
    const nome = document.getElementById('text').value;
    const valor = parseFloat(document.getElementById('value').value);

    if(nome && !isNaN(valor) && valor > 0) {
        const lista = document.getElementById('lista-produtos');
        const item = document.createElement('li');
        item.textContent = `${nome}  R$ ${valor.toFixed(2)}`;
        lista.appendChild(item);

        saldo += valor;
        document.getElementById('saldo').textContent = saldo.toFixed(2);

        document.getElementById('text').value = '';
        document.getElementById('value').value = '';
    }
});