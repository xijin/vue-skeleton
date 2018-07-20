exports.index = function () {
    // 活动，查询我的收入
    var incomeRecords = [];
    for (var i = 0; i < 5; i++) {
        incomeRecords.push({
            "name": "张三haaaaaaaaaaaaaaaaaaa" + i, //客户姓名
            "buyTime": new Date().getTime(),//购买时间
            "money": 100 + i//订单金额，分
        });
    }
    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
            generalIncome: 520,
            showAmount: 1000,
            orderId: 1,
            incomeRecords: incomeRecords
        },
        msg: 'err'
    };
}



