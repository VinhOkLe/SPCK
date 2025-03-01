import {auth} from "./config.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"

const signIn = async ()=>{
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const reqMessage = document.getElementById('req-message');
    if (!email || !password){
        reqMessage.innerText = `Please fill in all`
        return;
    }
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        const userEmail = result.user.email;
        console.log("Login successfull: ", userEmail);
        window.location.href = 'index.html' 
    }catch(error){
        console.log("Error during login up: ", e.message);
        alert("Login failed: "+ e.message)
    }
}

const signUp = async () =>{
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const reqMessage = document.getElementById('req-message');
    if (!email || !password || !confirmPassword){
        reqMessage.innerText = `Please fill in all`
        return;
    }
    if (password != confirmPassword){
        alert("Password does not match !");
        return;
    }
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const userEmail = result.user.email;
        console.log("Login successfull: ", userEmail);
        alert('Account created successfully !')
        window.location.href = 'login.html' 
    }catch(error){
        console.log("Error during sign up: ", e.message);
        alert("Signup failed: "+ e.message)
    }
}

export const handleSignOut = async()=>{
    try{
        await signOut(auth);
        document.getElementById('avatar-action-container').innerHTML = `<i class="fa-regular fa-user"></i>`
        window.location.href='login.html';
    }catch(error){
        console.log("Error: ", error.message)
    }
}

if(document.getElementById('signup-form')){
    document.getElementById('signup-form').addEventListener('submit', (event)=>{
        event.preventDefault();
        signUp();
    })
}
if(document.getElementById('login-form')){
    document.getElementById('login-form').addEventListener('submit', (event)=>{
        event.preventDefault();
        signIn();
    })
}