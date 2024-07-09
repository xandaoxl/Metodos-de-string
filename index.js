// https://www.alura.com.br/artigos/strings-com-javascript-o-que-sao-e-como-manipular
var a = 'allan'
// console.log(a)
// console.log('chuchu'.toUpperCase())
// console.log('casa'.length)
// console.log('cachorro'.length)
// console.log(('casa'+'casa').length)
// console.log('abc'.charAt(2))
// console.log('abcd ´abcd'.lastIndexOf('bc'))
// console.log('Abcd'.toLowerCase())

let frase= "Mergulhando em tecnologia."
// console.log(frase.substring(15))
// console.log(frase.substring(0, 13))
// console.log(frase.substring(3, 1)) // erro
// console.log(frase.slice(0,11)) 



let comunicacao = " Olá, sr. nome_usuario, nome_usuario informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
// console.log(comunicacao.replaceAll("nome_usuario","André"));


var chuchu1 = 'chuchu1'
var chuchu2 = 'chuchu2'

// console.log(chuchu1+chuchu2)
//           012345678901234567890123456789
// var login = "   andre@ema      ilteste.com      ";
// console.log(login.trim())
// console.log(login.replaceAll(' ', ''))
// console.log(login.substring(3,12)+login.substring(18, 29))
// nallan

let linguagens = "Java script,Java,C#,PHP";

if(linguagens.toLowerCase().replaceAll(" ", "").indexOf("javascript") != -1) {
    console.log("Tem JavaScript na lista!")
} else {
    console.log("Não tem JavaScript na lista...")
}

var nomeCompleto = ' allAn Arauj o'

function primeiroNome(canela){
    var variavelParaEncontrarOEspaco = canela.trim().indexOf(' ')
    var a = canela.trim().toLowerCase().substring(0,variavelParaEncontrarOEspaco)
    return a.charAt(0).toUpperCase()+a.substring(1)    
}
function segundoNome(cachorro){
    var b = cachorro.trim().substring(6)
    return b.replaceAll(' ', '')
}
// console.log(primeiroNome(nomeCompleto)) // Allan
// console.log(segundoNome(nomeCompleto)) // Araujo


console.log(primeiroNome('a a')) // Joao