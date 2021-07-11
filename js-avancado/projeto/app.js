
// pegar o input
//Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente pelo quantidade de paginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log('Produtividade','/História brasileira','/Américas',
    'Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe')

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)

    console.table(retorno)
}
else{
    const LivrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas)
    console.log('Essa sao todos os livros disponiveis:')
    console.table(LivrosOrdenados)
}