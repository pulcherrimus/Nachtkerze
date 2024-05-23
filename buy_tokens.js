function redeemGiftCard() {
    var code = document.getElementById('gift-card-input').value;
    var redeemedCodes = JSON.parse(localStorage.getItem('redeemedCodes')) || []; // Track redeemed codes
    var generatedCodes = JSON.parse(localStorage.getItem('generatedCodes')) || [];
    var matchingCode = generatedCodes.find(c => c.code === code && !redeemedCodes.includes(code)); // Check if code is unredeemed
    if (matchingCode) {
        var currentTokenCount = parseInt(localStorage.getItem('tokenCount')) || 0;
        localStorage.setItem('tokenCount', currentTokenCount + parseInt(matchingCode.tokens));
        alert('Gift card redeemed successfully! You got ' + matchingCode.tokens + ' tokens.');
        redeemedCodes.push(code); // Mark code as redeemed
        localStorage.setItem('redeemedCodes', JSON.stringify(redeemedCodes)); // Update redeemed codes list

        // Reload the page to reflect the updated token count
        location.reload();
    } else {
        alert('Invalid or already redeemed gift card code.');
    }
}
