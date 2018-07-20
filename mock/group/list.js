exports.index = function () {
    var util = require('../util');
    return  {
        code: 200,
        data: {
            data: [{
                id: 1,
                name: '运营一群',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "startDate": new Date().getTime(),
                qrcodeUrl: '//img.gsxservice.com/48395225_aolifhy1.png'
            }, {
                id: 1,
                name: '运营一群',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "startDate": new Date().getTime(),
                qrcodeUrl: '//img.gsxservice.com/48395225_aolifhy1.png'
            }, {
                id: 1,
                name: '运营一群',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "startDate": new Date().getTime(),
                qrcodeUrl: '//img.gsxservice.com/48395225_aolifhy1.png'
            }, {
                id: 1,
                name: '运营一群',
                cover: '//img.gsxservice.com/48395225_aolifhy1.png',
                "startDate": new Date().getTime(),
                qrcodeUrl: '//img.gsxservice.com/48395225_aolifhy1.png'
            }],
            page: {
                pageNum: 1,
                pageSize: 10,
                count: 30
            }
        }
    };
}