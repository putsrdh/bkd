document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = 'Kata sandi tidak cocok!';
    } else {
        message.textContent = 'Pendaftaran berhasil!';
        message.style.color = 'green';
    }
});
