exports.index = function () {
    var util = require('../util');
    return  {
        code: 200,
        data: {
            data: [{
                id: 1,
                name: 'Caught a Fish',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "lessonNo": "第一课",
                status: 1 // 1 已开课 2 未开课
            }, {
                id: 2,
                name: '0 - 2 岁课程哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "lessonNo": "第一课",
                status: 1 // 1 已开课 2 未开课
            }, {
                id: 3,
                name: '0 - 2 岁课程哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "lessonNo": "第一课",
                status: 1 // 1 已开课 2 未开课
            }, {
                id: 4,
                name: ' Day 3 Once I Caught a Fish Alive',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "lessonNo": "第一课",
                status: 1 // 1 已开课 2 未开课
            }, {
                id: 5,
                name: ' Day 3 does a kangaroo has a mother too?',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "lessonNo": "第一课",
                status: 1 // 1 已开课 2 未开课
            }],
            page: {
                pageNum: 1,
                pageSize: 10,
                count: 30
            }
        }
    };
}