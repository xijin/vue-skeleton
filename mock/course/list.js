exports.index = function () {
    var util = require('../util');
    return  {
        code: 200,
        data: {
            data: [{
                id: 1,
                name: '0 - 2 岁课程',
                cover: '//img.gsxservice.com/55761365_qfmag6fi.png'
            }, {
                id: 2,
                name: '0 - 2 岁课程',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png'
            }, {
                id: 3,
                name: '0 - 2 岁课程',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png'
            }, {
                id: 4,
                name: '0 - 2 岁课程',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png'
            }],
            page: {
                pageNum: 1,
                pageSize: 10,
                count: 30
            }
        }
    };
}