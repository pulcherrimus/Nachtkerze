function checkPassword() {
    var password = document.getElementById('admin-password').value;
    if (password === 'Blankenese10?') {
        document.getElementById('password-prompt').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert('Incorrect password. Access denied.');
    }
}

function generateCode() {
    var tokenAmount = document.getElementById('token-amount').value;
    var code = generateRandomCode();
    var generatedCode = { code: code, tokens: tokenAmount, redeemed: false };
    var generatedCodes = JSON.parse(localStorage.getItem('generatedCodes')) || [];
    generatedCodes.push(generatedCode);
    localStorage.setItem('generatedCodes', JSON.stringify(generatedCodes));
    document.getElementById('code-display').innerText = 'Generated Code: ' + code;
}

function generateRandomCode() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var code = '';
    for (var i = 0; i < 16; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}
