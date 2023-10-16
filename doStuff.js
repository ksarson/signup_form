function submitForm() {
    const form = document.getElementById('account-form');

    // Perform custom validation only for passwords
    const password = form.querySelector('#password').value;
    const confirmPassword = form.querySelector('#password-confirm').value;

    if (password !== confirmPassword) {
        // Display an error message or take any other necessary actions
        console.log('Passwords do not match');
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
