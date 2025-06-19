document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const testDate = document.getElementById('testDate');
    const notes = document.getElementById('notes');
    const message = document.getElementById('message');

    // Reset styles
    [fullName, email, phone, testDate].forEach(field => field.classList.remove('invalid'));

    let valid = true;

    // Validation
    if (!fullName.value.trim()) {
        fullName.classList.add('invalid');
        valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('invalid');
        valid = false;
    }

    if (!/^\d{10}$/.test(phone.value)) {
        phone.classList.add('invalid');
        valid = false;
    }

    if (!testDate.value) {
        testDate.classList.add('invalid');
        valid = false;
    }

    if (valid) {
        message.style.color = 'green';
        message.textContent = 'Registration successful!';
        // Clear fields
        [fullName, email, phone, testDate, notes].forEach(field => field.value = '');
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fix the errors highlighted in red.';
    }
});
