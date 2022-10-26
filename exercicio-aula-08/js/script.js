// Exercício 01
async function doubleNum(num) {
    return new Promise(resolve => { 
        setTimeout(() => {
            resolve(num * 2);
        }, 4000);
    })
}

async function getNum() {
    let num = document.getElementById('num').value;

    num = await doubleNum(num);

    document.getElementById('num-container').insertAdjacentHTML('beforeend', `O dobro do seu número é ${num}`);
}


// Exercício 02
async function sumNum(x){
    let a = await doubleNum(10);
    let b = await doubleNum(30);
    let c = await doubleNum(25);

    return parseInt(x) + a + b + c;
}

async function getX() {
    let x = document.getElementById('num2').value;

    x = await sumNum(x);

    document.getElementById('num2-container').insertAdjacentHTML('beforeend', `A nova soma do seu número é ${x}`);
}


// Exercício 03
let messages = [
    {
        self: true,
        text: 'Oi'
    },
    {
        self: false,
        text: 'Tudo bom?'
    },
    {
        self: true,
        text: 'Tudo ótimo! E você?'
    },
    {
        self: false,
        text: 'Tudo bem também'
    },
    {
        self: true,
        text: 'Daora'
    }];

async function sendMsg(message) {

    return new Promise(resolve => { 
        setTimeout(() => {
            resolve (document.getElementById('msg-container').insertAdjacentHTML('beforeend', `
            <div class="${message.self ? 'bg-light':'bg-dark text-light'} rounded p-2" style="width: 200px">${message.text}</div> <br>
            `));
        }, 2000);
    })
}

async function startChat() {
    for(const msg of messages) {
        await sendMsg(msg);
    }
}