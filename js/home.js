const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userNatid = document.getElementById('userNatid');
const userCountry = document.getElementById('userCountry');
const signoutBtn = document.getElementById('signoutBtn');


const db = firebase.database();
const auth = firebase.auth();



auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log('Loggged');
        console.log(user.uid);
        db.ref('users/'+user.uid).once('value', (data)=>{
                console.log(data.val());
                userName.innerHTML = data.val().nombre;
                userEmail.innerHTML = data.val().email;
                userNatid.innerHTML = data.val().natID;
                userCountry.innerHTML = data.val().pais;
            }
        );
    } else {
        console.log('NOT Loggged');
        window.location.href = 'login.html';
    }
});


signoutBtn.addEventListener('click', ()=>{
    auth.signOut();
    //Cambiando nuestro auth state
});