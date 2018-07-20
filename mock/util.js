/**
 * mock 数据接口
 * @author zhanwentao@baijiahulian.com
 */
module.exports = {
    /**
     * 返回0到n之间的随机数
     * @param {number} n 随机数的上限
     * @returns {number} 随机数
     */
    getNum: function (n) {
        var num = Math.floor(Math.random() * 10);
        return num % (n + 1);
    },
    getDefinitions: function () {
        return [
            {"definition":"low","type":"mp4","size":647510},
            {"definition":"std","type":"mp4","size":1112782},
            {"definition":"high","type":"mp4","size":1782229},
            {"definition":"low","type":"flv","size":663329},
            {"definition":"std","type":"flv","size":1128789},
            {"definition":"high","type":"flv","size":1798732},
            {"definition":"low","type":"m3u8","size":723456},
            {"definition":"std","type":"m3u8","size":1199104},
            {"definition":"high","type":"m3u8","size":1884160}
        ];
    }
}