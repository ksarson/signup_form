function submitForm() {
    const form = document.getElementById('account-form');

    // Perform custom validation only for passwords
    const password = document.getElementById('password');
    const passwordVal = form.querySelector('#password').value;
    const confirmPassword = document.getElementById('password-confirm');
    const confirmPasswordVal = form.querySelector('#password-confirm').value;
    const passwordMatch = document.getElementById('password-match');

    password.style.border = 'solid rgba(0, 0, 0, 0.2) 2px';
    confirmPassword.style.border = 'solid rgba(0, 0, 0, 0.2) 2px';
    passwordMatch.style.visibility = 'hidden';

    if (passwordVal !== confirmPasswordVal) {
        // Display an error message or take any other necessary actions
        password.style.border = 'solid red 2px';
        confirmPassword.style.border = 'solid red 2px';
        passwordMatch.style.visibility = 'visible';
        return;
    }

    // If custom validation passes, manually submit the form
    form.submit();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('account-form');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        submitForm();
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });
});
