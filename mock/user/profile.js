/** 
 * 用户中心
 * @return {[type]} [description]
 */
exports.index = function () {
    var util = require('../util');
    return  {
        status: 401,
        "data": {
            phone: "13342423432",
            avatar: "http://dfsfs", // 用户头像
            learnedCourseNumber: 1, // 已学习的课程数
            learnedLessonNumber: 3 // 已学习的课节数
        },
        msg: 'err'
    };
}