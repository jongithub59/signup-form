const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')
const validateButton = document.querySelector('button')
const passwordError = document.getElementById('passwd-error')

validateButton.addEventListener('click', validatePassword)


function validatePassword() {
    //sets varables equal to what's in the password fields 
    let password1 = password.value
    let password2 = passwordConfirm.value
    //checks that both password fields are not empty
    if (password1 != "" && password2 != "") {
        if (password1 != password2) { //checks that passwords match
            passwordError.textContent = '*Passwords do not match'
            passwordConfirm.classList.add('invalid')
            password.classList.add('invalid')
        } else { //both password do match
            passwordConfirm.classList.remove('invalid')
            password.classList.remove('invalid')
            passwordConfirm.classList.add('match')
            password.classList.add('match')
        }
    //error message when one field is empty
    } else passwordError.textContent = '*Please fill both password fields'
}
