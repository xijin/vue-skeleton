exports.index = function () {
    return  {
        "code":  200, // 返回值。200：成功，400：参数错误，401：未授权，500：服务端错误
        "msg": "success",
        "data": [
          {
            "id": 1, // 物料id
            "token": "dsfsfwe24324fdasf", // 获取物料接口需要的token
            "name": "我们的地球1我们是一个地球是一个呀", // 分集名称
            "cover": "http://img.gsxservice.com/61746084_ouy08pno.png",//封面图片
            "order": 1, // 序号
            "completedTasks": [1,2,3,4], // 该用户已完成的任务类型。任务类型。1：亲子预习，2：家长课件，3：亲子互动，4：亲子作业，5：家长小课堂，6：直播，7：总复习，8：毕业典礼
            "wordCount": 3, // 单词数量
            "sentenceCount": 2, // 句子数量
            "gameCount": 1, // 游戏数量
            "target": "2.学会和宝贝玩walking walking的游戏。*我们一起学猫叫", // 课程目标，换行分隔。
            "status": 1,  // 课程状态，1：已开始，2：未开始
            "trainingCampLessonType": 1, // 集训营课程类型，1：日常课程，2：直播，3：总复习，4：毕业典礼
            "beforeClassUrl": "https://www.babyabc100.com/decorate.html#/template?id=496&token=NjQ4XzE3NThhMzYyNzdlZmMwY2RjNTFlNGRmMjRlMjBmYjk5",// 课前预习url
            "pronunciationUrl": "http://dfsfdsf/dsfdsfsdf", // 发音示范url
            "interactionUrl": "http://172.21.135.1:7868/body/index.html", // 亲子互动url
            "homeworkUrl":"http://dfsfdsf/dsfdsfsdf" // 家庭作业url
          },
          {
            "id": 1, // 物料id
            "token": "dsfsfwe24324fdasf", // 获取物料接口需要的token
            "name": "我们的地球2", // 分集名称
            "cover": "http://img.gsxservice.com/60009606_yqmmobyt.png",//封面图片
            "order": 2, // 序号
            "completedTasks": [1,2,3], // 该用户已完成的任务类型。任务类型。1：亲子预习，2：家长课件，3：亲子互动，4：亲子作业，5：家长小课堂，6：直播，7：总复习，8：毕业典礼
            "wordCount": 3, // 单词数量
            "sentenceCount": 2, // 句子数量
            "gameCount": 1, // 游戏数量
            "target": "1.学习这首歌。*2.学会和宝贝玩walking walking的游戏。", // 课程目标，换行分隔。
            "status": 1, // 课程状态，1：已开始，2：未开始
            "trainingCampLessonType": 1, // 集训营课程类型，1：日常课程，2：直播，3：总复习，4：毕业典礼
            "beforeClassUrl": "http://sdfsfdsfs/dfsdfdsfd",// 课前预习url
            "pronunciationUrl": "http://dfsfdsf/dsfdsfsdf", // 发音示范url
            "interactionUrl": "http://dsfsdfsf/sdfsdf", // 亲子互动url
            "homeworkUrl":"http://dfssfsfd/sfdsfdsf" // 家庭作业url
          },
          {
            "id": 1, // 物料id
            "token": "dsfsfwe24324fdasf", // 获取物料接口需要的token
            "name": "我们的地球3", // 分集名称
            "cover": "http://img.gsxservice.com/59733403_a5ett9rc.jpeg",//封面图片
            "order": 3, // 序号
            "completedTasks": [1,2,3], // 该用户已完成的任务类型。任务类型。1：亲子预习，2：家长课件，3：亲子互动，4：亲子作业，5：家长小课堂，6：直播，7：总复习，8：毕业典礼
            "wordCount": 3, // 单词数量
            "sentenceCount": 2, // 句子数量
            "gameCount": 1, // 游戏数量
            "target": "1.学习这首歌。*2.学会和宝贝玩walking walking的游戏。", // 课程目标，换行分隔。
            "status": 1, // 课程状态，1：已开始，2：未开始
            "trainingCampLessonType": 1, // 集训营课程类型，1：日常课程，2：直播，3：总复习，4：毕业典礼
            "beforeClassUrl": "http://sdfsfdsfs/dfsdfdsfd",// 课前预习url
            "pronunciationUrl": "http://dfsfdsf/dsfdsfsdf", // 发音示范url
            "interactionUrl": "http://dsfsdfsf/sdfsdf", // 亲子互动url
            "homeworkUrl":"http://dfssfsfd/sfdsfdsf" // 家庭作业url
          },
          {
            "id": 1, // 物料id
            "token": "dsfsfwe24324fdasf", // 获取物料接口需要的token
            "name": "复习", // 分集名称
            "cover": "http://img.gsxservice.com/58196990_jrbyp8dl.jpeg",//封面图片
            "order": 4, // 序号
            "completedTasks": [], // 该用户已完成的任务类型。任务类型。1：亲子预习，2：家长课件，3：亲子互动，4：亲子作业，5：家长小课堂，6：直播，7：总复习，8：毕业典礼
            "wordCount": 3, // 单词数量
            "sentenceCount": 2, // 句子数量
            "gameCount": 1, // 游戏数量
            "target": "1.学习这首歌。\n2.学会和宝贝玩walking walking的游戏。", // 课程目标，换行分隔。
            "status": 1, // 课程状态，1：已开始，2：未开始
            "trainingCampLessonType": 3, // 集训营课程类型，1：日常课程，2：直播，3：总复习，4：毕业典礼
            "beforeClassUrl": "",// 课前预习url
            "pronunciationUrl": "http://dfsfdsf/dsfdsfsdf", // 发音示范url
            "interactionUrl": "http://dsfsdfsf/sdfsdf", // 亲子互动url
            "homeworkUrl":"http://dfssfsfd/sfdsfdsf" // 家庭作业url
          },
          {
            "id": 1, // 物料id
            "token": "dsfsfwe24324fdasf", // 获取物料接口需要的token
            "name": "我们的地球6", // 分集名称
            "cover": "http://img.gsxservice.com/55761365_qfmag6fi.png",//封面图片
            "order": 5, // 序号
            "completedTasks": [], // 该用户已完成的任务类型。任务类型。1：亲子预习，2：家长课件，3：亲子互动，4：亲子作业，5：家长小课堂，6：直播，7：总复习，8：毕业典礼
            "wordCount": 3, // 单词数量
            "sentenceCount": 2, // 句子数量
            "gameCount": 1, // 游戏数量
            "target": "1.学习这首歌。\n2.学会和宝贝玩walking walking的游戏。", // 课程目标，换行分隔。
            "status": 1, // 课程状态，1：已开始，2：未开始
            "trainingCampLessonType": 4, // 集训营课程类型，1：日常课程，2：直播，3：总复习，4：毕业典礼
            "beforeClassUrl": "",// 课前预习url
            "pronunciationUrl": "", // 发音示范url
            "interactionUrl": "", // 亲子互动url
            "homeworkUrl":"" // 家庭作业url
          }
        ]
    }
}