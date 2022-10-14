const pratos = document.querySelectorAll('.prato');
const bebidas = document.querySelectorAll('.bebida')
const sobremesas = document.querySelectorAll('.sobremesa')

const botao = document.querySelector('.botao')


let prato = '';
let bebida = '';
let sobremesa = '';

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
            prato = element.children[1].innerText;
            element.classList.add('selecionado');
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
            bebida = element.children[1].innerText;
            element.classList.add('selecionado');
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
            sobremesa = element.children[1].innerText;
            element.classList.add('selecionado');
        }
    });
});


//if (prato != '' && bebida != '' && sobremesa != '') {
//    console.log(prato)
//    console.log(bebida)
//    console.log(sobremesa)
//    botao.innerHTML.classList.add('liberado')
//    botao.addEventListener('click')
//}
//else {
//    botao.classList.remove('liberado')
//}
