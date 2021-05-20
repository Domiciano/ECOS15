const emailET = document.getElementById('emailET');
const passET = document.getElementById('passET');
const loginBtn = document.getElementById('loginBtn');

const db = firebase.database();
const auth = firebase.auth();

loginBtn.addEventListener('click', ()=>{
    auth.signInWithEmailAndPassword(emailET.value, passET.value)
    .then(
        ()=>{
            //irnos para el home
            window.location.href = 'home.html';
        }
    )
    .catch(
        (error) => {
            alert(error.code+", "+error.message);
        }
    );

});

