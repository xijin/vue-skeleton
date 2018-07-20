exports.index = function () {
    // 打call活动当前登录的用户信息
    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
            "avatar": "http://172.21.135.1:7768/static/img/bg/avatar.jpg",
            "confirm": 2, // 1 已上传 2 未上传 3 已确认
            "sharingToken": "dsf234535435"
        },
        msg: 'err'
    };
}
