//1

const extractNumbers = (str) => {
    return str.match(/\d/g).map(Number)
}

console.log(extractNumbers("a1fg5hj6")) // вернёт [1, 5, 6]

//2

function fibonacci(a, b) {
    if (a > 144) {
        return;
    }

    console.log(a)
    setTimeout(function() {
        fibonacci(b,a + b)
    }, 1000)
}

fibonacci(0, 1)

//3

async function fetchTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        products.forEach(product => {
            console.log(product.title)
        })
    } catch (error) {
        console.error('error', error)
    }
}

fetchTitles()

//4

const buttons = document.querySelector('#buttons')

buttons.onclick = (event) => {
    document.body.style.backgroundColor = event.target.textContent
}

//5

const block = document.querySelector('#block')
const blockButton = document.querySelector('#block_button')

blockButton.onclick = () => {
    if (block.style.display === 'none') {
        block.style.display = 'block'
    } else {
        block.style.display = 'none'
    }
}

//6

const counterBlock = document.querySelector('#counter')

let num = 0

const counter = () => {
    if (num < 100) {
        setTimeout(() => {
            num++;
            counterBlock.innerHTML = num
            counter();
        }, 1)
    }
}
counter()

//7

const fetchButton = document.querySelector('#fetch_button');

fetchButton.onclick = async () => {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('error', error)
    }
}