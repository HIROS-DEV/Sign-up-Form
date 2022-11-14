const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');
const passwordSpan = document.querySelector('.password-span');

let password;
let confirmPassword;

function comparePassword(password, confirmPassword) {
	if (password === confirmPassword) {
        passwordSpan.textContent = "";
    } else {
        passwordSpan.textContent = '* Passwords do not match';
    }
}

passwordInput.addEventListener('input', (e) => {
	password = e.target.value;
	if (e.target.value.length >= 6) {
		passwordInput.classList.remove('error');
		comparePassword(password, confirmPassword);
	} else {
		passwordInput.classList.add('error');
	}
});

confirmPasswordInput.addEventListener('input', (e) => {
	confirmPassword = e.target.value;
	if (e.target.value.length >= 6) {
		confirmPasswordInput.classList.remove('error_confirm');
		comparePassword(password, confirmPassword);
	} else {
		confirmPasswordInput.classList.add('error_confirm');
	}
});
