const vetor = [1,2,3,4,5,6];

const soma = vetor.reduce((estado, item) => estado + item);

console.log(soma);

const carrinho = [
    {id: 1, preco: 2, qtd: 2},
    {id: 2, preco: 3, qtd: 1}
]

const subtotal = item => item.preco * item.qtd;

const total = carrinho
                .map(subtotal)
                .reduce((soma, subtotal) => subtotal + soma, 0)

console.log(total);