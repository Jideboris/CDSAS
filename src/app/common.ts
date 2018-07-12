import * as CryptoJS from 'crypto-js'


const key = CryptoJS.enc.Utf8.parse('7061737323313233')
const iv = CryptoJS.enc.Utf8.parse('7061737323313233')
var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("It works"), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

console.log('Encrypted :' + encrypted);
console.log('Key :' + encrypted.key);
console.log('Salt :' + encrypted.salt);
console.log('iv :' + encrypted.iv);
console.log('Decrypted : ' + decrypted);
console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

export function encrypt(source) {
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(source), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    return encrypted
}
export function decrypt(encrypted) {
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8)
}