document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = [];

    let form = event.target;


    //userName
    let username = form.querySelector('[name="username"]').value;

    if(username.length < 5){
        errors.username = 'Min 5 letters';
    }

    //password
    let password = form.querySelector('[name="password"]').value;
    let password2 = form.querySelector('[name="password2"]').value;

    if(password.length < 5){
        errors.password = 'invalid password - min 5 letters';
    }
    if(password != password2){
        errors.password = 'Password do not match';
    }

    //checkbox 
    let agreeTerms = form.querySelector('[name="agree"]').checked;

    if(!agreeTerms)
        errors.agree = 'You must agree all terms that we have!';

    //radio
    let Gender = false;

    form.querySelectorAll('[name="Gender"]').forEach(element => {
        if(element.checked)
            Gender = true;        

    });

    if(!Gender)
        errors.Gender = 'please select radio';



    //errors
    form.querySelectorAll('.error-text').forEach(element => {
        element.textContent = ' ';
    });

    for(let name in errors){
        let errorPlaceHolder = document.getElementById('error_' + name);

        if(errorPlaceHolder){
            errorPlaceHolder.textContent = errors[name];
        }
    }

    if(Object.keys(errors).length === 0){
        form.submit(); 
    }
    console.log(errors);
});
