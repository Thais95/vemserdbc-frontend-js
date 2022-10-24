function login() {
    let email = document.getElementById('user-email').value;
    let password = document.getElementById('user-password').value;

    let errMsg = document.getElementById('err-msg');
    let successMsg = document.getElementById('success-msg');

    const userEmail = 'admin@mail.com'
    const userPassword = 'senha123'

    console.log(email)
    console.log(password)

    try {
        if(email == '' && password == '') throw 'Campo de email e senha vazios';
        if(email == '') throw 'Campo de email vazio';
        if(password == '') throw 'Campo de senha vazio';
        if(email != userEmail || password != userPassword) throw 'Email ou senha inválidos';
        successMsg.innerText = 'Login efetuado com sucesso!'
    }
    catch(err) {
        errMsg.innerText = err
    }
}