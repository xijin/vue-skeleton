exports.index = function () {
    var url = "http://172.21.135.1:7768/static/img/bg/avatar.jpg";
    var rankingList = [{
        sex: 1, // 2 女 1男 0 未知
        "nickname": "八宝aaaaa",
        "avatar": url, // 用户头像
        "callNum": 100000, //打call总次数
        "callUserNum": 10, //打call人数
        "rank": 1, // 名次
    }, {
        "nickname": "八宝2",
        "avatar": url, // 用户头像
        "callNum": 9, //打call总次数
        "callUserNum": 7, //打call人数
        "rank": 2, // 名次
      }, {
        "nickname": "八宝3aaaaaaaaaaa",
        "avatar": url, // 用户头像
        "callNum": 9, //打call总次数
        "callUserNum": 7, //打call人数
        "rank": 3, // 名次
      }, {
        "nickname": "八宝4",
        "avatar": url, // 用户头像
        "callNum": 9, //打call总次数
        "callUserNum": 7, //打call人数
        "rank": 4, // 名次
      }];

    var resources = {
        "id": 24, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 5, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接
        "content": { // 视频音频类型为结构体
          "videoId": "133243",
          "token": "dsfsfdsfdsfdsfdsfdsf", // 播放器token
          "cover": "http://sfsdfdsf/dfdsfd", // 视频截图
          "length": 342424 // 视频时长
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    };

    return  {
        status: 200, // 200：成功，400：参数错误，401：未授权，500：服务端错误
        data: {
            "avatar": "http://172.21.135.1:7768/static/img/bg/avatar.jpg", // 用户头像
            "callNum": 10, //打call总次数
            "callUserNum": 10, //打call人数
            "rank": "3", // 打开分享页面用的token
            rankingList: rankingList,
        },
        msg: 'err'
    };
}
