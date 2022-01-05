// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

// // signup
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // get email & password
//     const email = signupForm['signup-email'].value
//     const password = signupForm['signup-password'].value

//     //sign up user
//     createUserWithEmailAndPassword(auth, email, password).then(cred => {
//         console.log(cred.user.email)
//     })
// })