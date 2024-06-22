function verificar() {
    var data = new Date() // Detectando uma nova data 
    var ano = data.getFullYear() // pegando apenas o ano da data 
    var fano = window.document.getElementById("textano") // ligando a variável fano ao id no html "textano"
    var fanon = Number(fano.value) // convertendo a variável texto em número para o cálculo da idade
    var res = window.document.getElementById("res") // ligando a variável res ao id no arquivo html "res"
    var img = window.document.getElementById('homem')
   

    if (fanon == 0 || fanon > ano ) { // se o ano digitado for igual a 0 e o ano digitado foi maior que o ano atual 
        window.alert('Erro, revise os dados novamente') //mostre na tela um alerta de erro
    }else { // se não
        var idade = ano - fanon // var idade recebe o ano atual menos o ano digitado
        var fsex = window.document.getElementsByName("radsex") // variável fsex vai ser ligado as bolinhas de sexo no html
        var genero = "" // genero inicialmente vai receber uma string vazia

        if(fsex[0].checked) { // se o fsex (bolinha) tiver na posição 0 que é o meu primeiro botão
            genero = "Homen"
        } else if (fsex[1].checked) { // se não, se o fsex tiver na posição 1 
            genero = "Mulher"
            img.src = 'mulher.png'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` // substituindo a var resposta ligada a div no meu html pela resposta encontrada 
    }
    }
