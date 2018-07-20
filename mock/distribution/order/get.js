
exports.index = function () {

    var data = {
        "money": 520, //订单金额，分
        "commodityType": 1, // 商品类型，1：0-2岁，2：2-4岁，3：4-6岁
        "addressId": 123, // 地址id
        "province": "湖北省", // 省
        "city": "武汉市", // 市
        "district": "洪山区",  // 区
        "address": "街道口群光广场", // 详细地址
        "name": "xxx", // 收货人姓名
        "mobile": "133xxxxx" // 收货人电话
    };
    return {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: Math.random() > 0.5? data: null ,
        msg: 'err'
    };
}