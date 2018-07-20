/**
 * 保存订单信息
 * @return {[type]} [description]
 */
exports.index = function () {
    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
            "appId":"wx200385d843c73ab6",
            "timeStamp":"1477919105",
            "nonceStr":"i07n2s2vohmi0uzfruo5022imur3c82o",
            "package":"prepay_id=wx201610312105059424d18e0d0112183835",
            "signType":"MD5",
            "paySign":"925E1BE0C0DF54778804F364EAF3D2E2"
        },
        msg: 'err'
    };
}
