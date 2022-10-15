const pratos = document.querySelectorAll('.prato');
const bebidas = document.querySelectorAll('.bebida')
const sobremesas = document.querySelectorAll('.sobremesa')

const botao = document.querySelector('.botao')

let pedido = [];

const fecharPedido = () => {

}

const check = () => {
    if (pedido[0] && pedido[1] && pedido[2]) {
        console.log('pode pedir')
        botao.classList.add('liberado')
        botao.innerText = 'Fechar pedido';

        botao.addEventListener('click', fecharPedido)
        console.log(pedido)
    }
}

// Selecionando o Prato
pratos.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('selecionado')) {
            return
        }
        if (element.classList.contains('prato')) {
            pratos.forEach(element => {
                if (element.classList.contains('selecionado')) {
                    element.classList.remove('selecionado');
                }
            })
            pedido[0] = element.children[1].innerText;
            element.classList.add('selecionado');
            check();
        }
    });
});
// Selecionando a Bebida
bebidas.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('selecionado')) {
            return
        }
        if (element.classList.contains('bebida')) {
            bebidas.forEach(element => {
                if (element.classList.contains('selecionado')) {
                    element.classList.remove('selecionado');
                }
            })
            pedido[1] = element.children[1].innerText;
            element.classList.add('selecionado');
            check();
        }
    });
});
// Selecionando a Sobremesa
sobremesas.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('selecionado')) {
            return
        }
        if (element.classList.contains('sobremesa')) {
            sobremesas.forEach(element => {
                if (element.classList.contains('selecionado')) {
                    element.classList.remove('selecionado');
                }
            })
            pedido[2] = element.children[1].innerText;
            element.classList.add('selecionado');
            check();
        }
    })
});


