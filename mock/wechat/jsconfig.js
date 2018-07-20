exports.index = function () {
    // 打call活动当前登录的用户信息
    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
          appId: 'wx0805cfeb81a70bf0',
          timestamp: new Date().getTime(),
          nonceStr: 'nonceStr',
          signature: 'signature'
        },
        msg: 'err'
    };
}
