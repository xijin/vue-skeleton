exports.index = function () {
    // 打call活动当前登录的用户信息
    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
            "avatar": "http://172.21.135.1:7768/static/img/bg/avatar.jpg",
            "nickname": '昔堇haaaaaaaaaaaaaaaaaaaaaaaa', // 1 已上传 2 未上传 3 已确认
            "commodityType": 1, // 商品类型，1：0-2岁，2：2-4岁，3：4-6岁，0：未购买
            "sex": 1, // 1 男 2 女
            "orderCount": 17001,
            "oldMoney": 498,
            "newMoney": 880, //现在订单价格，分
            "courseStartDay": new Date().getTime() ,// 开课时间
            "sendGoodsDay": new Date().getTime(),// 发货时间
            "deliveryMoney": 500 ,// 运费，分
            "sharedMoney": 250 ,// 分享一次分成的钱，分
            "minWithdrawalMoney": 100 // 最小提现金额
        },
        msg: 'err'
    };
}
