/**
 * 活动-查询收货地址
 * @return {[type]} [description]
 */
exports.index = function () {
    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
            "id": 123, // id
            "province": "湖北省", // 省
            "city": "武汉市", // 市
            "district": "洪山区",  // 区
            "address": "街道口群光广场", // 详细地址
            "name": "xxx", // 收货人姓名
            "mobile": "133xxxxx" // 收货人电话
        },
        msg: 'err'
    };
}
