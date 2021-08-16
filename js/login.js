// get element by id button
document.getElementById('login-submit').addEventListener('click', function(){
    // get user email value
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // if consdition matched or not
    if (userEmail == 'ruhul120@gmail.com' && userPassword == 'secret pass') {
        console.log('valid user')
        window.location.href = 'banking-details.html'
    }
    else{
        console.log('invalid user name and password');
    }
    
})
