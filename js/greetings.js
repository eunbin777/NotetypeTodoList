const loginWindow = document.querySelector("#login_window");
const loginInput = document.querySelector(".login_input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginWindow.style.display = "none";
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginWindow.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    loginWindow.style.display="none";
    paintGreetings(savedUsername);
}
