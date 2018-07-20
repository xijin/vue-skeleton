exports.index = function () {
    return  {
      "code": 200, // 返回值。200：成功，400：参数错误，401：未授权，500：服务端错误
      "msg": "success",
      "data": {
        "avatar": "//img.gsxservice.com/54456454_aqsj5qai.png", // 用户头像
        "nickname": "zzzz", // 用户昵称
        "studyDays": 3, // 开始学习的天数
        "completedTaskCount": 8, // 累计完成的任务数量
        "totalTaskCount": 20 // 总任务数量
      }
    }
}