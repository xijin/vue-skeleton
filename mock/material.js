/**
 *
    物料详情
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var util = require('./util');
    // 页面物料
    // return {"code":200,"msg":"success","data":{"id":365,"name":"不同格式音频视频物料","materialType":3,"category":1,"templateType":1,"ugc":2,"phone":"","wechat":"","thumbnail":null,"courseId":null,"materialOrder":0,"status":1,"createTime":1524897955000,"updateTime":1524898290000,"validUrlNum":null,"resources":[{"id":1763,"createTime":1524897884000,"updateTime":1524898290000,"resourceType":4,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":0,"videoUploadInfo":"","videoId":166537,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166537,"token":null,"cover":null,"musicUrl":"http://test-dyd-video.wenzaizhibo.com/269ff27181cf59770f08643c14bb736b/5b11a9f2/00-upload/video-test/161765_882b6b0be4f5b28a617432995a500004_KFWun7oZ.mp4?fid=166537","length":8,"originDefinition":null,"definitions":[{"definition":"low","type":"mp4","size":238058},{"definition":"std","type":"mp4","size":401610},{"definition":"high","type":"mp4","size":633188},{"definition":"low","type":"flv","size":243473},{"definition":"std","type":"flv","size":407055},{"definition":"high","type":"flv","size":638633},{"definition":"low","type":"m3u8","size":266608},{"definition":"std","type":"m3u8","size":434672},{"definition":"high","type":"m3u8","size":669296}],"score":null,"tips":null}},{"id":1756,"createTime":1524897817000,"updateTime":1524898290000,"resourceType":4,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":1,"videoUploadInfo":"","videoId":166530,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166530,"token":null,"cover":null,"musicUrl":"http://test-dal-video.wenzaizhibo.com/0f272ac1b765eecb32387f549b468ffc/5b11a9f2/00-upload/video-test/165421_d6a075bf5b97a9ebffeb8f74da3a6304_n7OEy7mk.mp4?fid=166530","length":2,"originDefinition":null,"definitions":[{"definition":"low","type":"mp4","size":13231},{"definition":"low","type":"flv","size":14243},{"definition":"low","type":"m3u8","size":13920}],"score":null,"tips":null}},{"id":1764,"createTime":1524897946000,"updateTime":1524898290000,"resourceType":4,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":2,"videoUploadInfo":"","videoId":166538,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166538,"token":null,"cover":null,"musicUrl":"http://test-dal-video.wenzaizhibo.com/752d4bb0ddd4fbbc185a244c37128532/5b11a9f2/00-upload/video-test/161452_1f90ac7971d9365e22128d01ba9ebc2d_Px2gHycU.mp4?fid=166538","length":16,"originDefinition":null,"definitions":[{"definition":"low","type":"mp4","size":489236},{"definition":"std","type":"mp4","size":834533},{"definition":"high","type":"mp4","size":1373851},{"definition":"low","type":"flv","size":501293},{"definition":"std","type":"flv","size":847580},{"definition":"high","type":"flv","size":1387160},{"definition":"low","type":"m3u8","size":547104},{"definition":"std","type":"m3u8","size":902448},{"definition":"high","type":"m3u8","size":1453456}],"score":null,"tips":null}},{"id":1757,"createTime":1524897824000,"updateTime":1524898290000,"resourceType":4,"status":1,"transcodingStatus":20,"url":"","materialId":365,"resourceOrder":3,"videoUploadInfo":"","videoId":166531,"transcodingResult":"","content":null},{"id":1759,"createTime":1524897859000,"updateTime":1524898290000,"resourceType":5,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":4,"videoUploadInfo":"","videoId":166533,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166533,"token":"xH7T5Ab_Z3CiP5Q8aPxKfuAEKS7bpmr9MBl7sIpfBTzG0XSrZrrLxpqPtQiv1o7I","cover":"https://test-imgs.genshuixue.com/00-upload/image-test/161779_d51a7249e0219d109e3ea326f63422bb_Tinh4YQE.jpg","musicUrl":null,"length":8,"originDefinition":"super","definitions":[{"definition":"low","type":"mp4","size":241892},{"definition":"std","type":"mp4","size":407967},{"definition":"high","type":"mp4","size":649405},{"definition":"low","type":"flv","size":247363},{"definition":"std","type":"flv","size":413460},{"definition":"high","type":"flv","size":654898},{"definition":"low","type":"m3u8","size":271312},{"definition":"std","type":"m3u8","size":440496},{"definition":"high","type":"m3u8","size":687536}],"score":null,"tips":null}},{"id":1761,"createTime":1524897864000,"updateTime":1524898290000,"resourceType":5,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":5,"videoUploadInfo":"","videoId":166535,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166535,"token":"j2fmpnNHP-QPaVaKIogAUQngT6U0-wCC5sxtBpkTaD8DOuRjDrqsxGOq-y7-VeBX","cover":"https://test-imgs.genshuixue.com/00-upload/image-test/161793_0dbfc48bcdeb14b8017c1ecd9560a5a6_7DobE5hT.jpg","musicUrl":null,"length":8,"originDefinition":"super","definitions":[{"definition":"low","type":"mp4","size":241231},{"definition":"std","type":"mp4","size":405662},{"definition":"high","type":"mp4","size":642367},{"definition":"low","type":"flv","size":246662},{"definition":"std","type":"flv","size":411115},{"definition":"high","type":"flv","size":647812},{"definition":"low","type":"m3u8","size":269792},{"definition":"std","type":"m3u8","size":439200},{"definition":"high","type":"m3u8","size":678320}],"score":null,"tips":null}},{"id":1758,"createTime":1524897854000,"updateTime":1524898290000,"resourceType":5,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":6,"videoUploadInfo":"","videoId":166532,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166532,"token":"gcMT4QmqgRCiP5Q8aPxKfmWObNFVr-9RMBl7sIpfBTzG0XSrZrrLxpqPtQiv1o7I","cover":null,"musicUrl":null,"length":3,"originDefinition":"low","definitions":[{"definition":"low","type":"mp4","size":15478},{"definition":"low","type":"flv","size":16746},{"definition":"low","type":"m3u8","size":16368}],"score":null,"tips":null}},{"id":1760,"createTime":1524897861000,"updateTime":1524898290000,"resourceType":5,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":7,"videoUploadInfo":"","videoId":166534,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166534,"token":"sHHpFXBftXYPaVaKIogAUXLRmMXLNxLe5sxtBpkTaD8DOuRjDrqsxGOq-y7-VeBX","cover":null,"musicUrl":null,"length":7,"originDefinition":"low","definitions":[{"definition":"low","type":"mp4","size":31976},{"definition":"low","type":"flv","size":35422},{"definition":"low","type":"m3u8","size":34608}],"score":null,"tips":null}},{"id":1762,"createTime":1524897865000,"updateTime":1524898290000,"resourceType":5,"status":1,"transcodingStatus":20,"url":"","materialId":365,"resourceOrder":8,"videoUploadInfo":"{\"upload_url\":\"http:\\/\\/test-upload-video.wenzaizhibo.com\\/upload?fid=166536&ts=1524897865103&token=1eeec1f4f0cc65015e367d4f21cf658e\",\"video_id\":166536}","videoId":166536,"transcodingResult":"{\"content\":\"\",\"file_md5\":\"b1ac374c4b7707bacacf63a831f91170\",\"length\":null,\"now_definition\":null,\"origin_definition\":null,\"preface_url\":null,\"qid\":\"201804281444349937441539\",\"sign\":\"771bbd5ba6bacf9fa08e65e4d236f974\",\"status\":20,\"timestamp\":1524897874,\"total_size\":32024,\"total_transcode_size\":null,\"video_id\":166536}","content":null},{"id":1765,"createTime":1524898216000,"updateTime":1524898290000,"resourceType":5,"status":1,"transcodingStatus":100,"url":"","materialId":365,"resourceOrder":9,"videoUploadInfo":"","videoId":166539,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":166539,"token":"8YaUMNa4sqAPaVaKIogAURAfZopRbK8c5sxtBpkTaD8DOuRjDrqsxGOq-y7-VeBX","cover":"https://test-imgs.genshuixue.com/00-upload/image-test/161765_1e715def0f449f968fab4db0a4d9dd24_7elAGalC.jpg","musicUrl":null,"length":8,"originDefinition":"super","definitions":[{"definition":"low","type":"mp4","size":238058},{"definition":"std","type":"mp4","size":401610},{"definition":"high","type":"mp4","size":633188},{"definition":"low","type":"flv","size":243473},{"definition":"std","type":"flv","size":407055},{"definition":"high","type":"flv","size":638633},{"definition":"low","type":"m3u8","size":266608},{"definition":"std","type":"m3u8","size":434672},{"definition":"high","type":"m3u8","size":669296}],"score":null,"tips":null}}],"happyReadType":null,"publishDay":null,"imageUrl":null,"beforeClassUrl":null,"pronunciationUrl":null,"interactionUrl":null,"homeworkUrl":null}};
    // 视频物料
    return {"code":200,"msg":null,"data":{"id":303,"name":"测试播放","materialType":1,"category":1,"templateType":1,"ugc":2,"phone":"","wechat":"","thumbnail":null,"courseId":0,"materialOrder":0,"status":1,"createTime":1522500070000,"updateTime":1522500070000,"validUrlNum":0,"resources":[{"id":1230,"createTime":1522500068000,"updateTime":1522500122000,"resourceType":5,"status":1,"transcodingStatus":100,"url":"","materialId":303,"resourceOrder":0,"videoUploadInfo":"","videoId":164888,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":164888,"token":"vPWOYqz48XsPaVaKIogAUa2U4FeX49frfM9uMdkJR0xCIgeD8ceNTmOq-y7-VeBX","cover":"https://test-imgs.genshuixue.com/00-upload/image-test/163718_a51539a71e6fc2f1a3b29efe88dfefd3_8clRIj2l.jpg","musicUrl":null,"length":60,"originDefinition":"std","definitions":[{"definition":"low","type":"mp4","size":1700026},{"definition":"std","type":"mp4","size":2888880},{"definition":"low","type":"flv","size":1747534},{"definition":"std","type":"flv","size":2934676},{"definition":"low","type":"m3u8","size":1911856},{"definition":"std","type":"m3u8","size":3126176}],"score":0,"tips":null}}],"happyReadType":0,"publishDay":null,"imageUrl":null,"beforeClassUrl":null,"pronunciationUrl":null,"interactionUrl":null,"homeworkUrl":null}};
    return {
    "code": 200,
    "data": {
        "category": 1,
        "courseId": 0,
        "createTime": 1517473290000,
        "id": 4,
        "materialOrder": 0,
        "materialType": 3,
        "name": "页面物料名称",
        "phone": "",
        "resources": [{
            "content": {
                "cover": "",
                "imgUrl": "",
                "length": 0,
                "musicUrl": null,
                "text": "页面物料标题",
                "token": "",
                "videoId": 0
            },
            "createTime": 1517473291000,
            "id": 18,
            "materialId": 4,
            "resourceOrder": 0,
            "resourceType": 1,
            "status": 1,
            "transcodingResult": null,
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 0,
            "videoUploadInfo": null
        }, {
            "content": {
                "cover": "",
                "imgUrl": "",
                "length": 0,
                "musicUrl": null,
                "text": "页面物料标题",
                "token": "",
                "videoId": 0
            },
            "createTime": 1517473291000,
            "id": 19,
            "materialId": 4,
            "resourceOrder": 1,
            "resourceType": 7,
            "status": 1,
            "transcodingResult": null,
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 0,
            "videoUploadInfo": null
        }, {
            "content": {
                "cover": "",
                "imgUrl": "",
                "length": 0,
                "musicUrl": null,
                "text": "1页面物料标题\n2页面物料标题\n3页面物料标题\n         4页面物料标题",
                "token": "",
                "videoId": 0
            },
            "createTime": 1517473291000,
            "id": 20,
            "materialId": 4,
            "resourceOrder": 2,
            "resourceType": 2,
            "status": 1,
            "transcodingResult": null,
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 0,
            "videoUploadInfo": null
        }, {
            "content": {
                "cover": null,
                "imgUrl": "http:\/\/img.gsxservice.com\/48288270_pe0lxm8z.gif",
                "length": 0,
                "musicUrl": null,
                "text": null,
                "token": null,
                "videoId": 0
            },
            "createTime": 1517472948000,
            "id": 7,
            "materialId": 4,
            "resourceOrder": 3,
            "resourceType": 3,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 0,
            "updateTime": 1517476641000,
            "url": null,
            "videoId": 0,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": "http:\/\/img.gsxservice.com\/48288292_ti7wr14p.jpeg",
                "length": 0,
                "musicUrl": null,
                "text": null,
                "token": null,
                "videoId": 0
            },
            "createTime": 1517473001000,
            "id": 8,
            "materialId": 4,
            "resourceOrder": 4,
            "resourceType": 3,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 0,
            "updateTime": 1517476641000,
            "url": null,
            "videoId": 0,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": "http:\/\/img.gsxservice.com\/48288314_fsukc1g1.gif",
                "length": 0,
                "musicUrl": null,
                "text": null,
                "token": null,
                "videoId": 0
            },
            "createTime": 1517473014000,
            "id": 9,
            "materialId": 4,
            "resourceOrder": 5,
            "resourceType": 3,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 0,
            "updateTime": 1517476641000,
            "url": null,
            "videoId": 0,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": null,
                "length": 36,
                "musicUrl": "http:\/\/dal-video.wenzaizhibo.com\/1f8e554af36e436646a7bd6eb6fc8488\/5a75b959\/00-x-upload\/video\/100001376_662d11c827fecc3a20396134285e1f39_ZRDEW6aY.mp4?fid=100001787",
                "text": null,
                "token": null,
                "videoId": 100001787
            },
            "createTime": 1517473023000,
            "id": 10,
            "materialId": 4,
            "resourceOrder": 6,
            "resourceType": 4,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001787,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": null,
                "length": 36,
                "musicUrl": "http:\/\/dal-video.wenzaizhibo.com\/4d595f4ff58c493b9304c9c8d5dd5abe\/5a75b959\/00-x-upload\/video\/100001381_5ca9b25c5beded533869f0482cd68ea9_Y3CNDLgy.mp4?fid=100001789",
                "text": null,
                "token": null,
                "videoId": 100001789
            },
            "createTime": 1517473049000,
            "id": 12,
            "materialId": 4,
            "resourceOrder": 7,
            "resourceType": 4,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001789,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": null,
                "length": 36,
                "musicUrl": "http:\/\/dal-video.wenzaizhibo.com\/733658f542e793f85afc5c18a1b23311\/5a75b959\/00-x-upload\/video\/100001379_5af62e1ff697c2a21297db602d235a63_9KHlTqGi.mp4?fid=100001788",
                "text": null,
                "token": null,
                "videoId": 100001788
            },
            "createTime": 1517473036000,
            "id": 11,
            "materialId": 4,
            "resourceOrder": 8,
            "resourceType": 4,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001788,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": null,
                "length": 36,
                "musicUrl": "http:\/\/dal-video.wenzaizhibo.com\/733658f542e793f85afc5c18a1b23311\/5a75b959\/00-x-upload\/video\/100001379_5af62e1ff697c2a21297db602d235a63_9KHlTqGi.mp4?fid=100001793",
                "text": null,
                "token": null,
                "videoId": 100001793
            },
            "createTime": 1517473198000,
            "id": 16,
            "materialId": 4,
            "resourceOrder": 9,
            "resourceType": 4,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001793,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": null,
                "imgUrl": null,
                "length": 36,
                "musicUrl": "http:\/\/dal-video.wenzaizhibo.com\/4d595f4ff58c493b9304c9c8d5dd5abe\/5a75b959\/00-x-upload\/video\/100001381_5ca9b25c5beded533869f0482cd68ea9_Y3CNDLgy.mp4?fid=100001794",
                "text": null,
                "token": null,
                "videoId": 100001794
            },
            "createTime": 1517473211000,
            "id": 17,
            "materialId": 4,
            "resourceOrder": 10,
            "resourceType": 4,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001794,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": "http:\/\/imgs.genshuixue.com\/00-x-upload\/image\/100001314_8d69b53dacfdff1f3bc88663a7fafdfc_tsBrMzJK.jpg",
                "imgUrl": null,
                "length": 8,
                "musicUrl": null,
                "text": null,
                "token": "LoEAd6WbwRGAHLpdS6MZ4dLV4kxc5fd_W4loYk2-6cOx2Ky7-cmSGSou22apgAA0",
                "videoId": 100001790,
                definitions: util.getDefinitions()
            },
            "createTime": 1517473088000,
            "id": 13,
            "materialId": 4,
            "resourceOrder": 11,
            "resourceType": 5,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001790,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": "http:\/\/imgs.genshuixue.com\/00-x-upload\/image\/100001359_9a3f3c345bec44e2ba10c703ac4a050f_xTHtStIW.jpg",
                "imgUrl": null,
                "length": 8,
                "musicUrl": null,
                "text": null,
                "token": "3O3NFxHt6HiAHLpdS6MZ4dLV4kxc5fd_HBISdHNBU3Cx2Ky7-cmSGSou22apgAA0",
                "videoId": 100001791,
                definitions: util.getDefinitions()
            },
            "createTime": 1517473102000,
            "id": 14,
            "materialId": 4,
            "resourceOrder": 12,
            "resourceType": 5,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001791,
            "videoUploadInfo": ""
        }, {
            "content": {
                "cover": "http:\/\/imgs.genshuixue.com\/00-x-upload\/image\/100001340_c3782cd1997a3e9190d0f0445ec642aa_R059OrRS.jpg",
                "imgUrl": null,
                "length": 8,
                "musicUrl": null,
                "text": null,
                "token": "Feo7UfejA5uAHLpdS6MZ4dLV4kxc5fd_a-fnZO691Aux2Ky7-cmSGSou22apgAA0",
                "videoId": 100001792,
                definitions: util.getDefinitions()
            },
            "createTime": 1517473133000,
            "id": 15,
            "materialId": 4,
            "resourceOrder": 13,
            "resourceType": 5,
            "status": 1,
            "transcodingResult": "",
            "transcodingStatus": 100,
            "updateTime": 1517476641000,
            "url": "",
            "videoId": 100001792,
            "videoUploadInfo": ""
        }],
        "status": 1,
        "templateType": 1,
        "thumbnail": null,
        "ugc": 2,
        "updateTime": 1517476641000,
        "validUrlNum": 0,
        "wechat": ""
    },
    "msg": null
}
    var url1 = "http://dal-video.wenzaizhibo.com/f38d4d80205781890d5b4ebfa940798e/5a7211ab/00-x-upload/video/100001603_97b69c4dd6bcad9b17bfc2abe226f3e5_ng1HJqVO.mp4";
    var url2="http://dal-video.wenzaizhibo.com/6cb0d0776d4bc358e8301c2e493577ef/5a7211ab/00-x-upload/video/100001601_661fdd774b404df04f5150ffeeba6cd9_k4rNy0gZ.mp4";
    var url3="http://dal-video.wenzaizhibo.com/49bb857b4322e0234512ca6b0a0e9770/5a71e0ee/00-x-upload/video/100001384_8c0a0935c88ed2e16d5a75c539b4edee_JsGq880T.mp4?fid=100001475";

    return {"code":200,"msg":"success","data":{"id":76,"name":"音频模板5","materialType":3,"category":1,"templateType":2,"ugc":2,"phone":"","wechat":"","thumbnail":null,"courseId":null,"materialOrder":0,"status":1,"createTime":1517303288000,"updateTime":1517303288000,"validUrlNum":null,
        "resources":[
            {"id":323,"createTime":1517303275000,"updateTime":1517303288000,"resourceType":4,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":0,"videoUploadInfo":"","videoId":100001475,"transcodingResult":"","content":{"text":null,"imgUrl":null,"videoId":null,"token":null,"cover":null,
            "musicUrl": [url1, url2, url3][Math.floor(Math.random() * 3)],
            "length":null}},
            {"id":324,"createTime":1517303288000,"updateTime":1517303288000,"resourceType":1,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":1,"videoUploadInfo":null,"videoId":null,"transcodingResult":null,"content":{"text":"音频模板1音频模板1音频模板1","imgUrl":"","videoId":0,"token":"","cover":"","musicUrl":null,"length":0}}
            ,
            {"id":324,"createTime":1517303288000,"updateTime":1517303288000,"resourceType":1,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":1,"videoUploadInfo":null,"videoId":null,"transcodingResult":null,"content":{"text":"音频模板1音频模板1音频模板1","imgUrl":"","videoId":0,"token":"","cover":"","musicUrl":null,"length":0}}
            ,
            {"id":324,"createTime":1517303288000,"updateTime":1517303288000,"resourceType":1,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":1,"videoUploadInfo":null,"videoId":null,"transcodingResult":null,"content":{"text":"音频模板1音频模板1音频模板1","imgUrl":"","videoId":0,"token":"","cover":"","musicUrl":null,"length":0}}
            ,
            {"id":324,"createTime":1517303288000,"updateTime":1517303288000,"resourceType":1,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":1,"videoUploadInfo":null,"videoId":null,"transcodingResult":null,"content":{"text":"音频模板1音频模板1音频模板1","imgUrl":"","videoId":0,"token":"","cover":"","musicUrl":null,"length":0}}
            ,
            {"id":324,"createTime":1517303288000,"updateTime":1517303288000,"resourceType":1,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":1,"videoUploadInfo":null,"videoId":null,"transcodingResult":null,"content":{"text":"音频模板1音频模板1音频模板1","imgUrl":"","videoId":0,"token":"","cover":"","musicUrl":null,"length":0}}
            ,
            {"id":324,"createTime":1517303288000,"updateTime":1517303288000,"resourceType":1,"status":1,"transcodingStatus":100,"url":"","materialId":76,"resourceOrder":1,"videoUploadInfo":null,"videoId":null,"transcodingResult":null,"content":{"text":"音频模板1音频模板1音频模板1","imgUrl":"","videoId":0,"token":"","cover":"","musicUrl":null,"length":0}}
            
            ]}};
    var data = {
        id: 1000,
        name: '新物料',
        //  物料类型。1：视频，2：图片，3：页面，4：链接
        // materialType: 1 + Math.floor(Math.random() * 4),
        materialType: 1,
        templateType: 1, // 模板类型，一
        ugc: Math.random() > 0.5? 1 : 2,
        phone: '18510481596',
        wechat: 'zhanwen',
        resources: []

    };

    var type = data.materialType;
    // 视频
    if (type == 1 ) {
        data.resources.push(getType(5, 0));
    }
    // 图片
    if (type == 2 ) {
        data.resources.push(getType(3, 0));
    }
    // 页面
    if (type == 3 ) {
        data.resources.push(getType(1, 0));
        data.resources.push(getType(7, 5));
        data.resources.push(getType(2, 1));
        data.resources.push(getType(3, 2));
        data.resources.push(getType(4, 3));
        data.resources.push(getType(5, 4));
        
    }
    // 链接
    if (type == 4 ) {
        data.resources.push(getType(6, 0));
    }

    if (data.templateType == 2) {
        data.resources = [];
        data.resources.push(getType(4, 0));
        data.resources.push(getType(1, 1));
        data.resources.push(getType(7, 2));
        data.resources.push(getType(2, 3));
        data.resources.push(getType(2, 4));
        data.resources.push(getType(2, 5));
        data.resources.push(getType(2, 6));
    }

    function getType(val, order) {
        
        return  {
            id: 23, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
            materialId: 2, // 物料ID，修改的时候填写，新建填写0或者空
            resourceType: val, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接
            content: {
                imgUrl: 'https://vuefe.cn/images/logo.png',
                videoId: '100000872',
                musicUrl: 'http://221.204.220.77/mp3.9ku.com/hot/2005/08-11/68773.mp3',
                token: 'jJ7T-PXMPwmAHLpdS6MZ4dHnyZ3P14_PvrX-SBqRG-Kbc3ji9ceOZTG5JtrxIFp-',
                cover: 'https://vuefe.cn/images/logo.png',
                text: "标题或文本",
                length: 12000
            }, // 内容，标题或文本类型必填。
            url: "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
            transcodingStatus: 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
            resourceOrder: order // 资源在对应模板中的显示顺序。
        };
    }
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}