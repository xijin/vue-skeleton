/**
 * 当前登录的用户信息
 * @return {[type]} [description]
 */
exports.index = function () {
    var util = require('../util');
    return  {
        status: 301,
        data: {
            "phone": "13342423432",
            "openId": "dfsfs"
        },
        msg: 'err'
    };
}