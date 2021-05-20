const emailET = document.getElementById('emailET');
const passET = document.getElementById('passET');
const nombreET = document.getElementById('nombreET');
const natIdET = document.getElementById('natIdET');
const paisET = document.getElementById('paisET');
const regBtn = document.getElementById('regBtn');


const db = firebase.database();
const auth = firebase.auth();


auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log('Loggged');
    } else {
        console.log('NOT Loggged');
    }
});


regBtn.addEventListener('click', ()=>{
    
    // 1. Matriculamos
    auth.createUserWithEmailAndPassword(emailET.value, passET.value).then(
        (data) => {

            // 2. Registro de datos
            let user = {
                id: data.user.uid,
                nombre: nombreET.value,
                email: emailET.value,
                pais: paisET.value,
                natID: natIdET.value
            };

            db.ref('users/'+user.id).set(user).then(
                ()=>{
                    // 3. Luego de que los datos están registrados
                    window.location.href = 'home.html';
                }
            );

        }
    ).catch(
        (error) => {
            alert(error.code+", "+error.message);
        }
    );
    //PROMISES
});


