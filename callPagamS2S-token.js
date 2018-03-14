/** Async version */

var soap = require('soap');
var url = 'https://sandbox.gestpay.net/gestpay/gestpayws/WSs2s.asmx?WSDL';

soap.createClientAsync(url)
    .then((client) => {
        return client.callPagamS2SAsync({
            shopLogin: 'GESPAY65987',
            uicCode: '242',
            amount: '13.07',
            shopTransactionId: 'abcdef',
            tokenValue: '47L76F84UBQK2026'
        });
    }).then((result) => {
        console.log(result);
    });