// ARRAYS

// 1

function somaArray(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma += numero
    }

    console.log('A soma dos numero que estão no array é = ' + soma)
}

//2
function maiorNumero(numeros) {
    let maior = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }

    console.log('O maior número do array é = ' + maior)
}

//3
function mediaArray(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma += numero
    }

    let media = soma / numeros.length

    console.log('A media dos numeros do Array é = ' + media)
}

// OBJETOS

//1
function contarPropriedades(objeto) {
    const propriedades = Object.keys(objeto).length

    console.log('O numero de propriedades dentro do objeto é = ' + propriedades)
}

//2
function juntarObjetos(objeto, objeto2) {
    const objetos_unidos = { ...objeto, ...objeto2 }

    console.log(objetos_unidos)
}

//3
function encontrarPropriedade(objeto, chave) {

    if (objeto.hasOwnProperty(chave)) {
        return objeto[chave]
    }
}

// PROMISES

//1
function delayedPromise() {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise executada após 1 segundo de sua invocação')
        }, 1000)
    })

        .then((result) => {
            console.log(result)
        })
}

//2
function fetchData(url) {
    return new Promise((resolve) => {
        fetch(url)
            .then(response => {

                response.json()
                    .then(data => {
                        resolve(data)
                    })
            })

            .then(data => {
                console.log('Dados obtidos:', data)
            })
    })

}

//3
function gerarNumeroAleatorio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numero_aleatorio = Math.random()
            resolve(numero_aleatorio)
        }, 2000)
    })

        .then(numero => {
            console.log('Número aleatório gerado:', numero)
        })
}

// TIMEOUT

//1
function executarAposTempo(milissegundos) {

    function banana() {
        console.log('banana')
    }

    setTimeout(() => {
        banana()
    }, milissegundos)
}


//2
function cancelarExecucao() {
    let time
    function iniciarTimeout() {
        time = setTimeout(() => {
            console.log("Este timeout será cancelado")
        }, 5000)
    }
    iniciarTimeout()

    clearTimeout(time)
    console.log('timeout cancelado')
}


//3
function intervaloPersonalizado(milissegundos) {

    function executar() {
        fun()
        setTimeout(executar, milissegundos)
    }

    setTimeout(executar, milissegundos)
}

function fun() {
    console.log(`BANANA`)
}


// INTERVAL

//1
let inter

function contadorInterva() {
    let cont = 1
    inter = setInterval(function () {
        if (cont <= 10) {
            console.log(cont)
            cont++
        } else {
            clearInterval(inter)
        }
    }, 1000)
}

//2
function pararContador() {
    if (inter) {
        clearInterval(inter)
        console.log('Contador parado.')
    }
}

//3
function gerarNumerosAleatorios() {
    let inte = setInterval(() => {
        const numero_aleatorio = Math.random()

        console.log(numero_aleatorio)
    }, 500)
}


// DESESTRUTURAÇÃO E ARRAYS


//1
function primeiroEUltimo(arr) {
    const ult = arr[arr.length - 1]
    const pri = arr[0]

    console.log(`Primeiro elemento = ${pri} | Ultimo elemento = ${ult}`)
}

//2
function extrairInfo(arr) {
    const idade = arr.map(objeto => objeto.idade)
    return idade
}

//3
function separarArrays(arr) {
    const numpar = []
    const numimp = []

    for (const numero of arr) {
        if (numero % 2 === 0) {
            numpar.push(numero)
        } else {
            numimp.push(numero)
        }
    }
    return [numpar, numimp]
}


// DESESTRUTURAÇÃO E OBJETOS

//1
function infoPessoa(pessoa) {
    const { nome, idade, cidade } = pessoa
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`
}

//2
function desestruturarUsuario(usuario) {
    const { id, email } = usuario
    const novobj = { id, email }

    return novobj
}

//3
function informacoesLivro(livro) {
    const { titulo, autor, ano } = livro
    return `O livro ${titulo} foi escrito por ${autor} em ${ano}`
}


// REST E SPREAD

//1
function concatenarArrays(...arrays) {
    return [].concat(...arrays)
}

//2
function somaNumeros(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0)
}

//3
function mesclarObjetos(...objetos) {
    return objetos.reduce((result, obj) => ({ ...result, ...obj }), {})
}
