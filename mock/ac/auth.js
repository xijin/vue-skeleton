
exports.index = function (data) {
    var jsSHA = require('jssha');
    var token = "babyabc";
    var signature = data.signature;
    var timestamp = data.timestamp;
    var echostr   = data.echostr;
    var nonce     = data.nonce;
    var oriArray = new Array();
        oriArray[0] = nonce;
        oriArray[1] = timestamp;
        oriArray[2] = token;
        oriArray.sort();

    var original = oriArray.join('');
    var shaObj = new jsSHA(original, 'TEXT');
    var scyptoString = shaObj.getHash('SHA-1', 'HEX');
    return  (scyptoString == signature) ? echostr: '';
}