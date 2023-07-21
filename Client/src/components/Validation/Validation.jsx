const validation = (userData) => {
   const errors = {};

   if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'This is not a valid email';
}
if(!userData.email){ // es igual a decir userData.email.length === ''
    errors.email = 'You must enter an email address';
}
if(userData.email.length > 35){
    errors.email = 'The email address should not contain more than 35 characters'
}

if(!/.*\d+.*/.test(userData.password)){
    errors.password = 'Password must contain at least one number'
}

if(userData.password.length < 6 || userData.password.length > 10){
    errors.password = 'Password must contain between 6 to 10 characters'
}

    return errors;
}

export default validation;