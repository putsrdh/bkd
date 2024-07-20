document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (password !== confirmPassword) {
        message.textContent = 'Kata sandi tidak cocok!';
    } else {
        message.textContent = 'Pendaftaran berhasil!';
        message.style.color = 'green';
    }
});