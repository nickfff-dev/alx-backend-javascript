function getPaymentTokenFromAPI(success) {
 if (success) {
    return new Promise((resolve) =>{ resolve({data: 'Successful response from the API' })});
 }
 // Do nothing if success is false
}

module.exports = getPaymentTokenFromAPI;
