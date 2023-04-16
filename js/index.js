
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//logar no sistema
document.getElementById("login-form").addEventListener ("submit", function(e) {
    e.preventDefault();

    const email= document.getElementById("email-input").value;
    const password= document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email)

    if(!account) {
        alert("Opps Verifique o usuario ou a senha");
        return;
    }

    if(account) {

        if(account.password !== password) {
        alert("Opps Verifique o usuario ou a senha");
            return;
        }
        window.location.href = "home.html";
    }

    saveSession(email, checkSession);

    

});

//criar conta
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email= document.getElementById("email-creat-input").value;
    const password= document.getElementById("password-creat-input").value;

    if(email.length <5) {
        alert("Preencha com um e-mail valido");
        return;
    }

    if(password.length <4) {
        alert("Preencha a senha com no minimo 4 digitos");
        return;
    }

    saveAccount ({
            login: email,
            password: password,
            transaction:[]

    });
    myModal.hide ();
alert("Conta criada com sucesso.");
});
function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html" ;
    }
}

function saveAccount (data) {
    localStorage.setItem(data.login, JSON.stringify(data)); 
}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key)

    if(account){
        return JSON.parse(account);
}
    return"";
}

