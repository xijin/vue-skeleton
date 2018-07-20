/**
 * 获取短信验证码
 * @return {[type]} [description]
 */
exports.index = function () {
    var util = require('../util');
    return  {
        status: 200,
        data: {
            phone: '15522432433',
            imageSecurityCode: '1324'
        }
    };
}