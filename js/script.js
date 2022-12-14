const pratos = document.querySelectorAll('.prato');
const bebidas = document.querySelectorAll('.bebida')
const sobremesas = document.querySelectorAll('.sobremesa')
const confirmar = document.querySelector('.confirmar')
const nomeItem = document.querySelectorAll('.nome_itens')
const precosItens = document.querySelectorAll('.preco_itens')

const botao = document.querySelector('.botao')
const btnFechar = document.querySelector('.btn_confirme')
const btnCancelar = document.querySelector('.btn_cancelar')
const precoTotal = document.querySelector('.preco_total')

let pedido = [];
let precos = [];
let precosNumber = [];
let total;

let nome = "";
let endereco = "";

const fecharPedido = () => {
    if (nome == "") {
        nome = prompt('Qual o seu nome?');
        endereco = prompt('Qual o endereço?');
    }

    let i = 0;
    nomeItem.forEach(element => {
        element.innerText = pedido[i];
        i = i + 1;
    })
    let j = 0;
    precosItens.forEach(preco => {
        preco.innerHTML = precos[j];
        precosNumber[j] = Number(precos[j].replace(',', '.'));
        j = j + 1;
    })
    total = String((precosNumber[0] + precosNumber[1] + precosNumber[2]).toFixed(2))
    precoTotal.innerHTML = "R$ " + total.replace('.', ',');

    confirmar.classList.remove('escondido');

    let msg = `Olá, gostaria de fazer o pedido:
- Prato: ${pedido[0]}
- Bebida: ${pedido[1]}
- Sobremesa: ${pedido[2]}
Total: R$ ${total.replace('.',',')};

Nome: ${nome}
Endereço: ${endereco}`;

    //Cancelar o pedido
    btnCancelar.addEventListener('click', () => {
        confirmar.classList.add('escondido');
    })
    //Fechar o pedido
    btnFechar.addEventListener('click', () => {
        window.location.href = `https://wa.me/5573998434908?text=${encodeURIComponent(msg)}`
        console.log('pedido fechado');
    })

}

const check = () => {
    if (pedido[0] && pedido[1] && pedido[2]) {
        botao.classList.add('liberado');
        botao.innerText = 'Fechar pedido';

        botao.addEventListener('click', fecharPedido)
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
            precos[0] = (element.children[3].innerHTML).slice(3);
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
            precos[1] = (element.children[3].innerHTML).slice(3);
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
            precos[2] = (element.children[3].innerHTML).slice(3);
            element.classList.add('selecionado');
            check();
        }
    })
});


