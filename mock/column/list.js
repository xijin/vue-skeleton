/**
 *
    物料详情
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var id = param.id;

    // 儿歌循环听
    var avatar = "//img.gsxservice.com/48377945_vhc6xtdg.png"
    var children = [{
        id: 12,
        token: 'MTY5XzBhNzA4OWE3NWEwMmRiYzdjYzBmMjMyNGUzMWQwNWQ5',
        img: avatar,
        tag: '数字',
        title: 'Say cheese',
        length: 117
    },
    {
        id: 13,
        token: 'MTcwXzE3ODY4N2IyNGRiNDQwMTdkODNkZTkyYTRiNzNlNTAz',
        img: avatar,
        tag: '鹅妈妈',
        title: 'buckle my shoe',
        length: 41
    },
    {
        id: 14,
        token: 'MTcxXzZkNzg1OTRkMWRjMWIyYWNiYmJjMDg3NTM4MmM2YzQx',
        img: avatar,
        tag: '儿歌经典',
        title: 'one little finger',
        length: 76
    },
    {
        id: 15, 
        token: "MTcyX2E3YzkxODE5OWFjNDg0ZTQ4NjE1ZDhkMmM2MDExM2Y2", 
        tag: "圣诞金曲", 
        img: avatar,
        title: "Jingle bell", 
        length: 189
    },
    {   id: "16", 
        img: avatar,
        token: "MTczXzk5YTA2NTcyMzJjNDUyNzBkYzg5MzQ2YWQ5NWJkYmFi", 
        tag: "动物认知", 
        title: "Let's go", 
        length: 239
    },
    {
        id: "17", 
        img: avatar,
        token: "MTc0XzYzMWU0YmMzNWZkMDM4NzAwMjAyMWI2ODRhNzc2YzM0", 
        tag: "儿歌经典", 
        title: "London bridge", 
        length: 113
    },
    {
        id: "18", 
        img: avatar,
        token: "MTc1XzllZGE5NDE1MzdjYmU4ZjA3MWE5OWI3YTMzMzRjOWE0",
        tag: "儿歌经典", 
        title: "Mary had", 
        length: 129
    },
    {
        id: "19", 
        img: avatar,
        token: "MTc2Xzg3MDgzYjgyMDMyNDI2MTA1NmUyOWIzZmM4OTRhNzA2", 
        tag: "郎朗上口", 
        title: "Humpty", 
        length: 139
    },
    {
        id: "20", 
        img: avatar,
        token: "MTc3X2ZmOTA1YTRlMDllOTY4MTBjMTAzOGRkN2Q0ZDlkNmQ2", 
        tag: "颜色认知",
        title: "I can", 
        length: 312
    },
    {
        id: "21", 
        img: avatar,
        token: "MTc4XzUxMTU0YWQxOTE1MmJkNDUyYmM5ODJmOWQxZmYxNWFm", 
        tag: "动物认知", 
        title: "I have", 
        length: 144
    },
    {
        id: "22", 
        img: avatar,
        token: "MTc5X2VhMDU0YTIwOTFjOWZlYmU0ODlhMTQyYTI3ZjMyMjcz", 
        tag: "乐器认知", 
        title: "I'm a", 
        length: 353
    },
    {
        id: "23", 
        img: avatar,
        token: "MTgwX2M5ZDU1NDJmYTMwYzc3Yjg4NDc1MDY3NTlkZTQwYjFi", 
        tag: "情感认知", 
        title: "If you", 
        length: 123
    },
    {
        id: "24",
        img: avatar, 
        token: "MTgxX2QyZmVjOTdmZWJhOTEwZTA1ZmE4OTZlOWNlNzA5Njli", 
        tag: "数字认知", 
        title: "five little", 
        length: 117
    },
    {
        id: "25", 
        img: avatar,
        token: "MTgyXzMyZDIyNWRmYjU4MDJjODE5MWYwMjgwMTRmZWUwNDcx", 
        tag: "情感认知", 
        title: "go away", 
        length: 114
    },
    {
        id: "26", 
        img: avatar,
        token: "MTgzXzE4MjMwMDgyNjkwMWQ1NmNhMjZhNzlkZDMwOTBlYjcz", 
        tag: "身体部位", 
        title: "knees and toes", 
        length: 60
    },
    {
        id: "27", 
        img: avatar,
        token: "MTg0X2Y3NTU1OWUzNjg4YzYzZDIwN2Q1ZWRiY2U4ZmYxYjE4", 
        tag: "简单入门", 
        title: "hello song", 
        length: 84
    },
    {
        id: "28", 
        img: avatar,
        token: "MTg1X2FlZjdjYjJiNTZkMjJkOWQ2Y2EyZGQxNTNiYmIyZDU4", 
        tag: "行为动作", 
        title: "clap your hands", 
        length: 91
    },
    {
        id: "29", 
        img: avatar,
        token: "MTg2X2Q2YzY2NDNmZTE1NmZiOTVhNmI4ZDc3N2M0YzM5ZDVk", 
        tag: "朗朗上口", 
        title: "Hey diddle diddle", 
        length: 39
    },
    {
        id: "30", 
        img: avatar,
        token: "MTg3XzZhOTA1ZDc3OTc1ZTI1OGZlYWZmMDNhMDYzODJlN2Yy", 
        tag: "有趣", 
        title: "Hickory dickory dock", 
        length: 181
    },
    {
        id: "31",
        img: avatar,
        token: "MTg4X2IzOGUwNWEwYzU5YmY4NWE5ZDIwODEzMjJlNTZlOTNm", 
        tag: "游戏", 
        title: "Hide and seek", 
        length: 193
    },
    {
        id: "32", 
        img: avatar,
        token: "MTg5Xzk4NjdjYTQ2ZTMyMmNkMzk5MGY2MGNjZDdlYTExZDM4", 
        tag: "天气认知", 
        title: "How's the weather", 
        length: 126
    },
    {
        id: "33", 
        img: avatar,
        token: "MTkwX2VjOTBhNjFiYzVkMTJmM2FjY2IyZTRmNjI0ZWEwOTQz", 
        tag: "食物认知",
        title: "brocooli", 
        length: 162
    },
    {
        id: "34",
        img: avatar, 
        token: "MTkxX2RhNWQ2YjY4YjhmMjFlMTczMWUzMWY5MTIyYjQ4NjVj", 
        tag: "【简单入门", 
        title: "Bingo", 
        length: 348
    },
    {
        id: "35", 
        img: avatar,
        token: "MTkyX2MyOGQ0MTc2YzM0YjQ0NjIyNmYwYmY5NWM1ZTZjMTBl", 
        tag: "习惯养成", 
        title: "clean up", 
        length: 109
    },
    {
        id: "40", 
        img: avatar,
        token: "MTkzXzVjZTRiOGVjZjgzODYzMGJiMDg1MWZlMjdlOGMzYjY5", 
        tag: "情感认知", 
        title: "Can you make a happy face", 
        length: 120
    },
    {
        id: "41", 
        token: "MTk0XzliYmU2ZGVmNjczNmM0Yjg1NWUzNmFmOGIwZjFmZTEz", 
        tag: "儿歌经典", 
        img: avatar,
        title: "baby bumblebee", 
        length: 76
    },
    {
        id: "163", 
        token: "MTk2X2RmMTRjM2ZjMWI0NTFmNTU2YWUyYWU3NzQ5NTBiNjM4", 
        tag: "英美经典", 
        title: "Jack and Jill", 
        length: 65
    },
    {
        id: "164", 
        img: avatar,
        token: "MTk3XzE3N2ViOGRjYWM0YTk3ODNhYzNhNzdkZDAzY2QxN2Ji", 
        tag: "简单入门", 
        title: "Apple tree", 
        length: 71
    },
    {
        id: "165", 
        img: avatar,
        token: "MTk4X2JiOWEzZDJjMTYxNjBjODZkMzlkMzhiZmIxYTA0OTJk", 
        tag: "简单入门", 
        title: "Peekaboo", 
        length: 110
    },
    {
        id: "166",
        img: avatar, 
        token: "MTk5X2FhMDhmMDljMWVkMDQ5YmIwNjU2OGJhYzA2MTFhMTM0", 
        tag: "经典童谣", 
        title: "Wash the dishes", 
        length: 148
    },
    {
        id: "167", 
        img: avatar,
        token: "MjAwXzAyMmQ2NTE2OTExNjY1OWM3YjJmMWNlOWNjNzMxOTY4", 
        tag: "日常生活", 
        title: "Put on your shoes", 
        length: 181
    },
    {
        id: "168", 
        img: avatar,
        token: "MjAxXzVmN2E3N2Q5MWRiYjQxMTllZTFkMGQxYWY3NDM0OTE4", 
        tag: "日常生活", 
        title: "The bath song", 
        length: 136
    },
    {
        id: "169", 
        img: avatar,
        token: "MjAyXzRhYmFlZGZiYWJkNTQ5NGVhMGMyNjNhMjFhZTA3OTc2", 
        tag: "时间观念", 
        title: "The months chat", 
        length: 138
    },
    {
        id: "170", 
        img: avatar,
        token: "MjAzXzQyYjBmNjMyYTY4ZTRhYmZkNWQ5ZGUyY2NkMzk4NzQw", 
        tag: "永恒经典", 
        title: "You are my sunshine", 
        length: 80
    },
    {
        id: "171", 
        img: avatar,
        token: "MjA0XzJjYzdjZWNmZDNkZmU1Y2ZjM2VlOGZmZTFkMDgyNzYw", 
        tag: "游戏动作", 
        title: "The bunny hop", 
        length: 121
    },
    {
        id: "172", 
        img: avatar,
        token: "MjA1X2VhOGMwZjI1N2MwM2RmM2YzZDRhMjdiYTk5M2VlNjc2", 
        tag: "游戏歌谣", 
        title: "Rock scissors paper", 
        length: 109
    },
    {
        id: "173", 
        img: avatar,
        token: "MjA2XzkzNmU3OWY0YWI4YWE4NDA1MjNiNTQ5MzUzMDkxMmIz", 
        tag: "对比词", 
        title: "Open shut them", 
        length: 147
    },
    {
        id: "174",
        img: avatar, 
        token: "MjA3XzkzNjc1ZDNmZmRjMjE2NDQ0YTU5ZTZmN2ZiMDM3YTYy", 
        tag: "日常生活", 
        title: "Please sit down", 
        length: 62
    },
    {
        id: "175", 
        img: avatar,
        token: "MjA4Xzc2ZjlkYzJhMDViN2QwNTIwYWFiZTJmMTA2MTc5OTVi", 
        tag: "数字主题", 
        title: "Seven steps", 
        length: 88
    },
    {
        id: "176", 
        img: avatar,
        token: "MjA5XzYzZGFmNDI0ZDBhNjU4MmRkOTI1MWNmMzQwMGMxZGVm", 
        tag: "数字主题", 
        title: "Ten little dinosaurs", 
        length: 114
    },
    {
        id: "177",
        img: avatar,
         token: "MjEwXzU2ZTkyMzE2MDk1MjZlZjVkMDUwZmVhYmNkNDIwMjNh", 
         tag: "数字主题", 
         title: "Two little black birds", 
         length: 43
    },
    {
        id: "178", 
        img: avatar,
        token: "MjExXzhlZTNjNjhmNWI2Nzk5ZmNmMWJkZjVkZDc4N2EwOTI1", 
        tag: "形状认知", 
        title: "The shape song", 
        length: 250
    },
    {
        id: "179", 
        img: avatar,
        token: "MjEyXzg5ZjI1ZDcyZjYyNWMwZGM2MTJiNmNiMGEwNGVmZjYw", 
        tag: "家庭成员", 
        title: "Rain rain go away", 
        length: 155
    },
    {
        id: "180", 
        img: avatar,
        token: "MjEzX2YxZmNhMGJlZmZjYzEyYTM2YjgwNDA5ODFiM2VmN2Nh", 
        tag: "哄睡首选", 
        title: "Row row row your boat", 
        length: 121
    }];

    var master = [
        {
            id: "229", 
            img: "//img.gsxservice.com/48395338_b3kj2uxi.png",
            token: "MjYwXzIxZmVlNzUyZDljM2NmNGIyY2QxZDNiN2FmZTk4Y2Zk",
            title: "Run away bunny", 
            tag: undefined, 
            length: 458
        },
        {
            id: "230", 
            img: '//img.gsxservice.com/48395430_0fuqetld.png',
            token: "MjYxX2MyOTkzODU4ZTU1NTM2NjkyYjViMGU0MzgzYzM3N2Iw", 
            title: "The snowy day", 
            tag: undefined, 
            length: 334
        },
        {
            id: "231", 
            img: '//img.gsxservice.com/48395442_an9jdpc0.png',
            token: "MjYyXzgzZGY2M2MyZjM5ZDBiMDZiODMyNDdlYjliZGUwNmQ5", 
            title: "The paper bag princess", 
            tag: undefined, 
            length: 250
        },
        {
            id: "232", 
            img: "//img.gsxservice.com/48395455_lxqoacg2.png",
            token: "MjYzXzQwOGY4MzM4MWM4NjVkMTUwNWJjMWFhZjBkZDgzZjQy", 
            title: "Hop on pop", 
            tag: undefined, 
            length: 331
        },
        {
            id: "233", 
            img: "//img.gsxservice.com/48395321_1sxynuvh.png",
            token: "MjY0XzkyM2FkM2Y3MDc5MWU2M2I0OTljMWVkYzdiYWFjZGJh", 
            title: "Little Bear", 
            tag: undefined, 
            length: 1220
        },
        {
            id: "234", 
            img: '//img.gsxservice.com/48395160_sn6md6dh.png',
            token: "MjY1X2Y0ZDcxYzI3OTg1Mzc1NzVlMmY5OWY4ZTUzNDljZWU0", 
            title: "Brown bear what do you see", 
            tag: undefined, 
            length: 155
        },
        {
            id: "235", 
            img: '//img.gsxservice.com/48395179_7b2zzdmt.png',
            token: "MjY2Xzk5MDk2NzMwZjNmZGNkZGZiOWY2NjAxM2E4ZTMwZjYz", 
            title: "Color zoo", 
            tag: undefined, 
            length: 90
        },
        {
            id: "236", 
            img: '//img.gsxservice.com/48395292_xq2ld01f.png',
            token: "MjY3X2NiNDdkZDZhMjc2NDhlZTMzNzY2YTA5ZDVmOTVlNDJh", 
            title: "David Goes to School", 
            tag: undefined, 
            length: 122
        },
        {
            id: "237",
            img: '//img.gsxservice.com/48395184_eewte2if.png', 
            token: "MjY4X2NlMGEyMTQ4ZjllYWFlMjAwZTU4YWJmNjk4MjdhZWFj", 
            title: "Dear Zoo", 
            tag: undefined, 
            length: 224
        },
        {
            id: "238", 
            img: '//img.gsxservice.com/48395197_52mdfwe1.png',
            token: "MjY5XzY5NDI0M2Q4MjI4YmM2NTY4Njc1Mzk0MDE1N2I1MWEw", 
            title: "Down by the Station", 
            tag: undefined, 
            length: 169
        },
        {
            id: "240",
            token: "MjcwX2FlZjhjZjQ4YjVjYWZhNzZhMjg5MzFmYmE0Mjg0YTBk", 
            title: "Guess How Much I Love You", 
            tag: undefined, 
            length: 212,
            img: '//img.gsxservice.com/48395272_bz6j8r9h.png'
        },
        {
            id: "241",
            img: '//img.gsxservice.com/48395220_0say015u.png', 
            token: "MjcxXzdmOTViYzhmZmZlNWZhN2FhNWI4MWVhOTEwZjBjOGU2", 
            title: "I am a Bunny", 
            tag: undefined, 
            length: 64
        },
        {
            id: "242", 
            token: "MjcyX2VmMjNlOTkyZGRlMzQzYTVhNWE3YTAwNDQ5ZmI4NjNh", 
            title: "I am the music man", 
            tag: undefined, 
            length: 353
        },
        {
            id: "243", 
            token: "MjczXzc5YWE5NGIyYzk3Njc4NzhkNjFjNDQ1OWExNmJhMTM4", 
            title: "My Dad", 
            tag: undefined, 
            length: 135,
            img: '//img.gsxservice.com/48394850_0x7tgwzo.png'
        },
        {
            id: "244", 
            token: "Mjc0Xzg2MDg2NWU4M2VmYWY3MzA4OTZiOTE1NjgwY2JlOTRj", 
            title: "One to ten and back again", 
            tag: undefined, 
            length: 109,
            img: '//img.gsxservice.com/48395473_kjw5qji9.png'
        },
        {
            id: "245",
            token: "Mjc1XzQ0MGZkNGRjNTMyM2M3NzM4NzBkYWQ2NjEwN2RkMjVh", 
            title: "Panda bear", 
            tag: undefined, 
            length: 313,
            img: '//img.gsxservice.com/48395628_djnj032n.png'
        },
        {
            id: "246", 
            token: "Mjc2X2E0MDU0YWU4YTdmZDczMmJjZTM2M2FhMTg1Yjc0ODQ0", 
            title: "Rosie's Walk", 
            tag: undefined, 
            length: 214,
            img: '//img.gsxservice.com/48395039_tmvllqxn.png'
        },
        {
            id: "247", 
            token: "Mjc3Xzk5MjE0Zjc3ZGViOTYxOWE3MjcwNjI5Y2ZkMzNlYTBi", 
            title: "See you later", 
            tag: undefined, 
            length: 47,
            img: '//img.gsxservice.com/48395102_k5w614vx.png'
        },
        {
            id: "248", 
            token: "Mjc4XzNlMjQ1ZWQ2ZDM2ZWEyZWVkZTI3ZmU3ZDgxYTlkZGEw", 
            title: "Sheep in a Shop", 
            tag: undefined, 
            length: 161,
            img: '//img.gsxservice.com/48395141_mpbhd95h.png'
        },
        {
            id: "249", 
            token: "Mjc5X2VkMDAzMDUwNzZmZTUwZjcxNWJkZTBmMDI0NjE5MTY1", 
            title: "Ten Fat Sausages", 
            tag: undefined, 
            length: 88,
            img: '//img.gsxservice.com/48395717_djvwcq44.png'
        }
    ];

    var json = [

        {
            id: 1,
            // 列表页名称
            pageName: '儿歌循环听', 
            // 列表左边头像  
            list:  children
        },
        {
            id: 2,
            // 列表页名称
            pageName: '大师书房', 
            // 列表左边头像  
            list:  master
        }
    ]

    var json = {
        '1': {
            pageName: '儿歌循环听',
            list: children,
            type: 1, // 1 音频 2 视频
        },
        '2': {
            pageName: '大师书房',
            list: master,
            type: 1,
        }
    };


    // 小猪佩奇
    avatar = '//img.gsxservice.com/48377272_4dxb72va.png'
    list = [{
        id: "43", 
        token: "NTBfYzMyMWNlZTA2OGZmOTQyMjkyZTIxMjUzYzNmYzlkMzM=", 
        title: "Muddy Puddles_clip", 
        tag: '第一季01', 
        length: 299,
        img: avatar
    },
    {
        id: "44",
        token: "NTFfN2VmZWU5NTY4ZTE1MDM4MTU2MTQ4OGJhM2I2ZmJhMzU=",
        title: "Mr Dinosaur Is Lost_clip",
        tag: '第一季02',
        length: 300,
        img: avatar
    },
    {
        id: "45",
        token: "NTJfYWNkNTkyNGQ4ZjAyYmNhM2JhZjIyNzkwZjNhNGZlOWI=",
        title: "Best Friend_clip",
        tag: '第一季03',
        length: 300,
        img: avatar
    },
    {
        id: "46",
        token: "NTNfNjE5NDFjZjVjNzQ1NmNlZTUyMzMzOGE1ODZlMzAyYjc=",
        title: "Polly Parrot_clip",
        tag: '第一季04',
        length: 300,
        img: avatar
    },
    {
        id: "47",
        token: "NTRfNjEwM2RlOWQ4MGI3MGM3MDI0NmE2MmYyMzA4MjhhOWU=",
        title: "Hide and Seek_clip",
        tag: '第一季05',
        length: 300,
        img: avatar
    },
    {
        id: "48",
        token: "NTVfNzkwMTljZmMxNTlhODdlMWNiZWExOTQzNWVlMzAxZmE=",
        title: "The Playgroup_clip",
        tag: '第一季06',
        length: 300,
        img: avatar
    },
    {
        id: "49",
        token: "NTZfODQwYjY2YWRmZmExYjM0NDdmZTk0Y2M3ZTZmMjQyNzA=",
        title: "Mummy Pig at Work_clip",
        tag: '第一季07',
        length: 300,
        img: avatar
    },
    {
        id: "50",
        token: "NTdfZjBlM2FkNGI0ZDRhODJjZGM1OTc2Mjc5ZjYwNDQ2ZGY=",
        title: "Piggy in the Middle_clip",
        tag: '第一季08',
        length: 300,
        img: avatar
    },
    {
        id: "51",
        token: "NThfMzMzMjk1MWI1ODhjZDlkZjYyYWQ0YzQyZTM0ZGQ3ZDg=",
        title: "Daddy Loses his Glasses_clip",
        tag: '第一季09',
        length: 300,
        img: avatar
    },
    {
        id: "52",
        token: "NTlfOTE5NTg2YTNlYTBmNjU0NjFlOWVkOGI3NmRmZWNiMDU=",
        title: "Gardening_clip",
        tag: '第一季10',
        length: 300,
        img: avatar
    },
    {
        id: "53",
        token: "NjBfMDUxNjZmYjc1ZDdkZjA3YWY5NjMyYWNiNGE2YjIzNDY=",
        title: "Hiccups_clip",
        tag: '第一季11',
        length: 300,
        img: avatar
    },
    {
        id: "54",
        token: "NjFfNDMzNDMxYzgzNmM2ZDkxYTkzMWFkNmE3ZmE1Nzg4ZWU=",
        title: "Bicycles_clip",
        tag: '第一季12',
        length: 300,
        img: avatar
    },
    {
        id: "55",
        token: "NjJfN2ViOGE4MzgxNGVkZGFmNzA5ZWRhOTdjZTYzZTY5NjA=",
        title: "Secrets",
        tag: '第一季13',
        length: 311,
        img: avatar
    },
    {
        id: "56",
        token: "NjNfYTQyNDlkN2YwY2FiZTAxMTQxNjgwNDFmOGUxMzE2ZjE=",
        title: "Flying a Kite",
        tag: '第一季14',
        length: 311,
        img: avatar
    },
    {
        id: "57",
        token: "NjRfZGQ1MWQ1YmZjZDhkNGExNDk0Nzg0Njc3MmMwOGFhNGM=",
        title: "Picnic",
        tag: '第一季15',
        length: 311,
        img: avatar
    },
    {
        id: "58",
        token: "NjVfN2I1OTllN2Q4Y2NmMDYwMTU5MDk1NjFkOTBiMDgyYTQ=",
        title: "Musical Instruments",
        tag: '第一季16',
        length: 311,
        img: avatar
    },
    {
        id: "59",
        token: "NjZfYzgwOGEzNWRiYTM2NmU2ZGZjYzhiZWNlZWRkNWIzMWI=",
        title: "Frogs and Worms and Butterflies",
        tag: '第一季17',
        length: 311,
        img: avatar
    },
    {
        id: "61",
        token: "NjhfNTllMjAzODZjZjNlYTM0MTY3MmMyZjAwNDRkZGRkMTg=",
        title: "New Shoes",
        tag: '第一季19',
        length: 310,
        img: avatar
    },
    {
        id: "62",
        token: "NjlfMzQ2OTU2Y2Y1MDhiN2QzODZlNmZhMDliODUyMmU0MmI=",
        title: "The School Fete",
        tag: '第一季20',
        length: 311,
        img: avatar
    },
    {
        id: "63",
        token: "NzBfZjAyNDViMzQ0NzQwYzk0M2U0ZDg5MzhjZjRkNDY0YWQ=",
        title: "Mummy Pig's Birthday",
        tag: '第一季21',
        length: 311,
        img: avatar
    }, {
        id: "64",
        token: "NzFfMWFkY2Y4MTFlOGYzMzFkMTEwMGY2OGE1M2JhYWE0NWQ=",
        title: "The Tooth Fairy",
        tag: '第一季22',
        length: 312,
        img: avatar
    },
    {
        id: "65",
        token: "NzJfOGM1MTRjMThhMmFlNTZiMjM3MThjMTMxY2UwM2JkNmE=",
        title: "The New Car",
        tag: '第一季23',
        length: 311,
        img: avatar
    },
    {
        id: "66",
        token: "NzNfZTU1NDI0NmRmNDUyNTc3MmIwMTM2YzI2YzhiN2VkNzk=",
        title: "Treasure Hunt",
        tag: '第一季24',
        length: 312,
        img: avatar
    },
    {
        id: "67",
        token: "NzRfZWQ3ZTVjYmJkMzE4NjY2M2IxYTdmM2U3MjAzMzA2ODk=",
        title: "Not Very Well",
        tag: '第一季25',
        length: 311,
        img: avatar
    }];

    json[3] = { // 视频
        pageName: '小猪佩奇',
        list: list,
        type: 2,
    }


    // 小公主
    avatar = '//img.gsxservice.com/48377283_zkqccmew.png';
    list = [{
        id: "68",
        token: "NzVfYmU0MTRlYTZmZGQyZWU5MzIzY2RiNjU3ODUyMGFhMDE=",
        title: "Little princess",
        tag: '01',
        length: 659,
        img: avatar
    },
    {
        id: "69",
        token: "NzZfNjYyYjVmODg0YmE0NDUxNWI3M2E1MGMzZmFmOGI3MTU=",
        title: "Little princess",
        tag: '02',
        length: 659,
        img: avatar
    },
    {
        id: "70",
        token: "NzdfZmE0YjI3ZTE3NWQwYWYwMDI4ODZlNTg3ZmFkZGU1OTQ=",
        title: "Little princess",
        tag: '03',
        length: 659,
        img: avatar
    },
    {
        id: "71",
        token: "NzhfZTIwYTQ5OGZkODA2MWUwMDVmM2UyMTI5YWNmMWJhM2U=",
        title: "Little princess",
        tag: '04',
        length: 659,
        img: avatar
    },
    {
        id: "72",
        token: "NzlfNTkxYmU3ODgyNjkzNGVkMjI4ZTAwMzg1Mjc2OGZhNjc=",
        title: "Little princess",
        tag: '05',
        length: 659,
        img: avatar
    },
    {
        id: "73",
        token: "ODBfMGRlNzg5NzlmMWM4NmI0YzQ4ZjcxZDk5ZjI5MDNmMWY=",
        title: "Little princess",
        tag: '06',
        length: 661,
        img: avatar
    },
    {
        id: "74",
        token: "ODFfMGNiNzVlM2MxMDFkZjgzZmI0ZmY2NDhjNjU4MDg5ODY=",
        title: "Little princess",
        tag: '07',
        img: avatar,
        length: 660
    },
    {
        id: "75",
        token: "ODJfNWZjYjMwMGY1NDQ0YWVmNThmMGRkMmNlYjQxZGQ3OGI=",
        title: "Little princess",
        tag: '08',
        length: 660,
        img: avatar
    },
    {
        id: "76",
        token: "ODNfM2JiOWFiNzQzMjM3M2EzMTczNzI2NTZmNjI1NjNlOTk=",
        title: "Little princess",
        tag: '09',
        length: 659,
        img: avatar
    },
    {
        id: "77",
        token: "ODRfMWI3YWU4OTdlMjMyMWUwYzBkZWJjNzYzNTQ4MDBlOTg=",
        title: "Little princess",
        tag: '10',
        length: 660,
        img: avatar
    },
    {
        id: "78",
        token: "ODVfYmE2MzVjZDI2YTAzNzc5YjJkYzVhYmUwNTcwMjc3MDI=",
        title: "Little princess",
        tag: '11',
        length: 659,
        img: avatar
    },
    {
        id: "79",
        token: "ODZfMmZiZTdlMzk1MTg4M2ZkNTUyYTA0NDhhMThiMzI2MGQ=",
        title: "Little princess",
        tag: '12',
        length: 660,
        img: avatar
    },
    {
        id: "80",
        token: "ODdfOTQ2YjAwYmEyNzUyMzgwMDliNDQ4ODQ2MDJlZjY5YzE=",
        title: "Little princess",
        tag: '13',
        length: 660,
        img: avatar
    },
    {
        id: "81",
        token: "ODhfNTI1NTllMmVmZWQ0N2YwNDczMzJhNjhmYjdlYTA3ZDM=",
        title: "Little princess",
        tag: '15',
        length: 659,
        img: avatar
    },
    {
        id: "82",
        token: "ODlfNWIyYjM5MjgxZWY3NTgyMDc5MzI4NzZhM2VlMDQyZDI=",
        title: "Little princess",
        tag: '16',
        length: 659,
        img: avatar
    },
    {
        id: "83",
        token: "OTBfNzQ0NmVjMjg4ZGQ4ZmEyNGZiNWMxZjE1NDE5ZDc5ZjI=",
        title: "Little princess",
        tag: '17',
        length: 659,
        img: avatar
    },
    {
        id: "84",
        token: "OTFfMDU2N2FlZTdhMTcyM2MyZWFjZTc3NGJlNTcwODQzNGU=",
        title: "Little princess",
        tag: '18',
        length: 659,
        img: avatar
    },
    {
        id: "85",
        token: "OTJfNjIzZGUxOGU0Yzk4MTU4ZTJmNDAxNDNkMjFkYzQ5MWE=",
        title: "Little princess",
        tag: '19',
        length: 659,
        img: avatar
    },
    {
        id: "86",
        token: "OTNfZWMwNjgyZDBmNTU5NzI1OTEzYjZmM2MxY2Q4NWQ3ZDQ=",
        title: "Little princess",
        tag: '20',
        length: 659,
        img: avatar
    }
];

    json[4] = { // 视频
        pageName: '小公主',
        list: list,
        type: 2,
    }

    // 小兔冰冰
    avatar = '//img.gsxservice.com/48377287_sagojb9m.png';
    list = [{
        id: "87",
        token: "OTRfNGFlMzNiYWVlNTY3NjJlYWY5YTMxNjk4ZjJmOWFjMzQ=",
        tag: "Bing_S01E01_Fireworks",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "88",
        token: "OTVfZGEyNTIzNThjOGFiYzYwNTllMDU0YjBhOGYyNmYwYmU=",
        tag: "Bing_S01E02_Bye_Bye",
        title: undefined,
        length: 445
    }, {
        id: "89",
        token: "OTZfN2Q5N2E5NTZkOGY0NzMxMWM2NjAwNDU5MmExZGVmOWQ=",
        tag: "Bing_S01E03_Swing",
        title: undefined,
        length: 445,
         img: avatar
    }, {
        id: "90",
        token: "OTdfNGJmODVlY2VjODdjY2EyZDAxZDA3NjRjOTk3YWYzZDE=",
        tag: "Bing_S01E04_Blocks",
        title: undefined,
        length: 445,
         img: avatar
    }, {
        id: "91",
        token: "OThfNzYxMGZkMDViYTNkOGMwMWZhYTc0ZGU3ZDk3YjcwMzg=",
        tag: "Bing_S01E05_Ducks",
        title: undefined,
        length: 445,
         img: avatar
    }, {
        id: "92",
        token: "OTlfMjM3YWM5MDNjYTlkMGQ0Y2MzOTNhMTE2NjM5NjU4ZmI=",
        tag: "Bing_S01E06_Smoothie",
        title: undefined,
        length: 445
    }, {
        id: "93",
        token: "MTAwXzliM2RhMTc0Y2E3MjI5ZGI2M2NmMGZkN2I5ZjFkNDcx",
        tag: "Bing_S01E07_Frog",
        title: undefined,
        length: 445,
         img: avatar
    }, {
        id: "94",
        token: "MTAxXzMxMjllYjU5MmIyNzQ0YzU0MWUxYzM5MTljM2E4NmQ5",
        tag: "Bing_S01E08_Car_Park",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "95",
        token: "MTAyXzk3MWIxNzJjZDljYjhlYWI0YmEwOWY3OWU5NWZhYWVh",
        tag: "Bing_S01E09_Shadow",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "96",
        token: "MTAzXzM2NGI0MzRmZDEyYjBiODIwZWYyNTg5OTdiOWViMzVk",
        tag: "Bing_S01E10_Musical_Statues",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "97",
        token: "MTA0X2U4MTk4NDM5YTJkN2Y4NmE4N2NiYWY1NzAyOTQ5OGE1",
        tag: "Bing_S01E11_Voo_Voo",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "98",
        token: "MTA1XzM0NDc1ZjgzNTU4YmNlNTZiNjg1ZjZjZGQ4N2M0OGQ4",
        tag: "Bing_S01E12_Here_I_Go",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "99",
        token: "MTA2X2JiNmYzMDk1OTE0MzI3ZmUwNTQzMDk4OGM0YWFkOTQ1",
        tag: "Bing_S01E13_Growing",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "100",
        token: "MTA3XzhiMjhkMzk3NmY0ZWExYzcyMTk5NmNiYzM4NGY3MDY3",
        tag: "Bing_S01E14_Atchoo",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "101",
        token: "MTA4XzQ2NDBiN2U0YjE0YmZiZjIzMzBhNGMwZjAwMjVjYjg0",
        tag: "Bing_S01E15_Hide_and_Seek",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "102",
        token: "MTA5XzgyYTY1MWUzNWNmOTU0MzBiMGM1YzQ0ZWVmM2U3NmRk",
        tag: "Bing_S01E16_Bake",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "103",
        token: "MTEwX2NkNWUyYTlmZTYxMzMxNTJlYTNmZGI4ODE2Yjk3MmZk",
        tag: "Bing_S01E17_Train",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "104",
        token: "MTExX2UzNDlhMzhlZTRiODk5MzU4MDVhOTI0NDMzNzJhNTM5",
        tag: "Bing_S01E18_Say_Goodbye",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "105",
        token: "MTEyXzIxMTMxYmQ1OTE1N2NkZmQxMzQ0ZWNlMWY2M2NlZDgz",
        tag: "Bing_S01E19_Lost",
        title: undefined,
        length: 445,
        img: avatar
    }, {
        id: "106",
        token: "MTEzXzU1ZGUxZTQwODA1YjIxMmU1OWZiOTk5YTM0M2MxNGQ5",
        tag: "Bing_S01E20_Picnic",
        title: undefined,
        length: 445,
        img: avatar
    }];

    json[5] = {
        pageName: '小兔冰冰',
        list: list,
        type: 2
    };

    avatar = '//img.gsxservice.com/48377291_9xx6418k.png';
    list = [
   {
    id: "107",
    token: "MTE0Xzg4OTliODBlYzQyOWZmYThjMDc0N2VjMTBmYjI5ZTUx",
    tag: "Muzzy01",
    title: undefined,
    img: avatar,
    length: 879
}, {
    id: "108",
    token: "MTE1XzNiNzNjMDQ5MTg0MTRmNjFkMzliOGQ3ZTc2ZDMxMjYx",
    tag: "Muzzy02",
    title: undefined,
    length: 804,
    img: avatar
}, {
    id: "109",
    token: "MTE2X2Q0ZDhjMzY4NTEyMmQyMjY0NDZhNzMzN2QxZTgyMzBh",
    tag: "Muzzy03",
    title: undefined,
    length: 803,
    img: avatar
}, {
    id: "110",
    token: "MTE3XzE2ZTFmMTAxYTBjNzBjZTYwNDMyNWEzODBiMjk1MzU5",
    tag: "Muzzy05",
    title: undefined,
    length: 462,
    img: avatar
}, {
    id: "111",
    token: "MTE4XzBmYzE0OWI5ODk2NTRmMjZhYmIzNTUwNWE1YWUwZjMx",
    tag: "Muzzy06",
    title: undefined,
    length: 682,
    img: avatar
}, {
    id: "112",
    token: "MTE5XzViMDI0NGM1OWZhMzQwODA5MjIxNTdjOTVjYTNlZTQ4",
    tag: "Muzzy07",
    title: undefined,
    length: 534,
    img: avatar
}, {
    id: "113",
    token: "MTIwXzkwMTZhNzM2NjI3OGEwNWMxNzEzYmY1NDQ0ZDA3YzI3",
    tag: "Muzzy08",
    title: undefined,
    length: 935,
    img: avatar
}, {
    id: "114",
    token: "MTIxX2RkNjdiZjc1OGE2N2E5MmE3ZWZhMzE2MDg3NjU3MDMw",
    tag: "Muzzy09",
    title: undefined,
    length: 822,
    img: avatar
}, {
    id: "115",
    token: "MTIyX2Q4MDgxZTc5M2QyZGM0YTcyN2YxYjVmNTk4YjRjOTgz",
    tag: "Muzzy11",
    title: undefined,
    length: 934,
    img: avatar
}, {
    id: "116",
    token: "MTIzX2E1NjU5MTRmYmMwYmY5MDAwYmJkNDYzZTQ3NzhiOWY2",
    tag: "Muzzy12",
    title: undefined,
    length: 747,
    img: avatar
} ];

    json[6] = {
        pageName: '马泽的故事',
        list: list,
        type: 2
    };

    // 楠莉和诺拉
    avatar = '//img.gsxservice.com/48377302_87vvfddx.png';
    list = [
   {
    id: "117",
    token: "MTI0XzU4ZDEzN2ZhNWQ1YTQ1OWMxNGQ4NDg5Yjc4MGNlNzQz",
    tag: "第1季01",
    title: 'Blown Together',
    length: 436,
    img: avatar
}, {
    id: "118",
    token: "MTI1XzQ2Njc3ZDA3MWJhNTY2NDI1N2U5NmIxODNkYWZkMTIx",
    tag: "第1季02",
    title: 'Hot Foot~1',
    length: 435,
    img: avatar
}, {
    id: "119",
    token: "MTI2X2RhMjk3MDhmZTc2ZGRlZDJhZjExZTVjZDhiZjBlMmY5",
    tag: "第1季03",
    title: 'Stick to Trees',
    length: 434,
    img: avatar
}, {
    id: "120",
    token: "MTI3XzFmMWYwODM3NjFjM2Q3ODQzYzY5NzQwNmMwNzA0NzA1",
    tag: "第1季04",
    title: 'New River',
    length: 434,
    img: avatar
}, {
    id: "121",
    token: "MTI4XzI3NzViOTYzMjU4NjJhODEyMDgxZTlmMWJjZWQ5MTNh",
    tag: "第1季05",
    title: 'Making Clouds',
    length: 434,
    img: avatar
}, {
    id: "122",
    token: "MTI5X2I3ZDE3ZTBjMjI3ZDBmNzI4NzBhOTYxOWMxODI0ZTNj",
    tag: "第1季06",
    title: 'Fallen Cloud',
    length: 434,
    img: avatar
}, {
    id: "123",
    token: "MTMwX2I4N2JlNjY4YWQ1MGUzYmQ2MDAyOGY3NzdmYzIwMjk5",
    tag: "第1季07",
    title: 'Hide and Sheep',
    length: 435,
    img: avatar
}, {
    id: "124",
    token: "MTMxX2M3N2IxMmExZTNlMmQ2YjdhYWE2YTQ0N2I4ZjIyYmY4",
    tag: "第1季08",
    title: 'Lost in Fog',
    length: 434,
    img: avatar
}, {
    id: "125",
    token: "MTMyXzRmNzNiMWUxNzhhOTI0M2RjMDZlMzA2Njc5NzQ0MmQ1",
    tag: "第1季09",
    title: 'Rainbows',
    length: 434,
    img: avatar
}, {
    id: "126",
    token: "MTMzXzM5ZGE5Y2M2OTAyOGZkOGIyNWY1YWE2NGRlOTU2MmJl",
    tag: "第1季11",
    title: 'Blown Away',
    length: 434,
    img: avatar
}, {
    id: "127",
    token: "MTM0XzBhNGZlMDRlNzI1Yjg1NmRkMWJhZGM1MDFhYjgwY2Ri",
    tag: "第1季12",
    title: 'One Boot Off',
    length: 434,
    img: avatar
}, {
    id: "128",
    token: "MTM1X2FhMGQ0N2U4Y2M0MGQxMjZmMTk2MWY3Zjk1MGEzODQ4",
    tag: "第1季13",
    title: 'Frosted In',
    length: 433,
    img: avatar
}, {
    id: "129",
    token: "MTM2XzY3YzJiZTQwZjg5MTVjZWYzODA5YTdjZDVmNjY0OWNk",
    tag: "第1季14",
    title: 'Selly Breeze',
    length: 433,
    img: avatar
}, {
    id: "130",
    token: "MTM3X2ViNmJiYzA1ODU3MDQ4OTQ4MTdkZGM4NTM4MWVlYWZk",
    tag: "第1季15",
    title: "Randrop Music",
    length: 433,
    img: avatar
}, {
    id: "131",
    token: "MTM4Xzc2NDM4YjA4N2EyNjM3YzNjOTQyMjM5YzA1ODAwNWQ2",
    tag: "第1季16",
    title: "Spring Sheep",
    length: 433,
    img: avatar
}, {
    id: "132",
    token: "MTM5XzJjMzhkNTBiOGE2NzMyMTI4ZTZmM2ViZTg2ZWJiMDAw",
    tag: "第1 季17",
    title: "Stand Up Comedy",
    length: 433,
    img: avatar
}, {
    id: "133",
    token: "MTQwXzMxYTE0NDY0YzI0NjcxMTNjZjQyYzg1OTk5ZGQxYjM2",
    tag: "第1季18",
    title: "Ship Ahoy",
    length: 433,
    img: avatar
}, {
    id: "134",
    token: "MTQxXzA0NjBjYzZjYTNiOTk1Y2ZlYWUzY2IxZTcwYzk4ODhj",
    tag: "第1季19",
    title: "Family Photo",
    length: 433,
    img: avatar
}, {
    id: "135",
    token: "MTQyXzIwMWZlMGU4MjA2MTliMDcwNDFiYzBkZTNmNDNlYWNk",
    tag: "第1季20",
    title: "Moon Path",
    length: 428,
    img: avatar
} ];
    json[7] = {
        pageName: '楠莉和诺拉',
        list: list,
        type: 2
    };

    // 本和霍利的小王国
    avatar = '//img.gsxservice.com/48377312_oh3zc1ba.png';
    list = [{
        id: "136",
        token: "MTQzX2QyZDcxZDFiZTNmYTFhOTczOTJiZGYxMjkxMWE3OGFi",
        tag: "Vol1-01",
        title: "Holly's Magic Wand",
        length: 661,
        img: avatar
    }, {
        id: "137",
        token: "MTQ0XzIzODg1MTExMzMyZTgxMDRlZmJlZDBlOWYzMWQ5MGI1",
        tag: "Vol1-02",
        title: "Gaston the Ladybird",
        length: 669,
        img: avatar
    }, {
        id: "138",
        token: "MTQ1Xzk5YWVhY2M1ZDU5YmQzNzg3N2FhYTg1OWVlNGI1MDIx",
        tag: "Vol1-03",
        title: "The Royal Fairy Picnic",
        length: 669,
        img: avatar
    }, {
        id: "139",
        token: "MTQ2XzAxMmZjNjdlYTVjN2Q0NmM3NDI0MWE3YzBlNmIzYTI5",
        tag: "Vol1-04",
        title: "The Elf Farm",
        length: 669,
        img: avatar
    }, {
        id: "140",
        token: "MTQ3XzZmZWZkYzcwNjgyMjg5MGEyMmU1MGRjMjhiNjcyZmI3",
        tag: "Vol1-05",
        title: "Daisy and Poppy",
        length: 669,
        img: avatar
    }, {
        id: "141",
        token: "MTQ4Xzc2NzMwYjFjNjRhZDBlYTcwZWMwY2E0NGFjZjVjZjM4",
        tag: "Vol1-06",
        title: "The Lost Egg",
        length: 669,
        img: avatar
    }, {
        id: "142",
        token: "MTQ5Xzc2NTE1ZWI1ZjU4MjRhN2RjOTU2YTdhYjNkZWM5YjI0",
        tag: "Vol1-07",
        title: "Queen Thistle's Teapot",
        length: 669,
        img: avatar
    }, {
        id: "143",
        token: "MTUwX2EwMjY0ZGU3N2UxNDA5ZWZiNTk5MDJhNGM2NmZmZTEx",
        tag: "Vol1-08",
        title: "The Frog Prince",
        length: 669,
        img: avatar
    }, {
        id: "144",
        token: "MTUxX2ZmOTRmMmVlNjVmY2YyYTE2OGU5Y2M4NjY3N2EyN2Fj",
        tag: "Vol1-09",
        title: "King Thistle Is Not Well",
        length: 669,
        img: avatar
    }, {
        id: "145",
        token: "MTUyX2ZlOWUwMGRkOTVlZGJjNmI1YzVhNzBiYTU0OWU1NmZh",
        tag: "Vol1-10",
        title: "Fun and Games",
        length: 669,
        img: avatar
    }, {
        id: "146",
        token: "MTUzXzNjMDBmMTE3NmNiOTEzMDIwZjcyODJhYWY4NzJiNzI5",
        tag: "Vol2-01",
        title: "Gaston's Visit",
        length: 670,
        img: avatar
    }, {
        id: "147",
        token: "MTU0X2M1MWU1MGNiMzdiZDgyZDE0YzJlNzc1MTcwZWI2NmRk",
        tag: "Vol2-02",
        title: "Nanny Plum's Lesson",
        length: 670,
        img: avatar
    }, {
        id: "148",
        token: "MTU1XzNhOGI2ZGNhOTU1ZmVjZmQxNmFiN2I3NDc2NTAxNzVi",
        tag: "Vol2-03",
        title: "The Elf Windmill",
        length: 671,
        img: avatar
    }, {
        id: "149",
        token: "MTU2X2M1MzlhZmE0MTllOTViODM0ZjVlMjgwNzMwYzRhYmQx",
        tag: "Vol2-04",
        title: "Mrs Witch",
        length: 671,
        img: avatar
    }, {
        id: "150",
        token: "MTU3X2Q3MmM5OTYyOGU3YWZhYTMzMDQ4OGE0MmRjMjkxMWI2",
        tag: "Vol2-05",
        title: "Elf Joke Day",
        length: 672,
        img: avatar
    }, {
        id: "151",
        token: "MTU4X2VjZjZmMjkyYWQzOTIwMWI2NGJmOWQxMTEzMjY0MGJm",
        tag: "Vol2-06",
        title: "King Thistle's New Clothes",
        length: 671,
        img: avatar
    }, {
        id: "152",
        token: "MTU5XzdlYTVmMWQ1ZjlhNmI4NTYxMmY0Y2IwZDc2M2EwY2Jl",
        tag: "Vol2-07",
        title: "Elf School",
        length: 671,
        img: avatar
    }, {
        id: "153",
        token: "MTYwXzE2NmE1NDA4OTBjZjM5ZTRiMzJiYjY4ZTM4ZjEwZDcx",
        tag: "Vol2-08",
        title: "The Royal Golf Course",
        length: 670,
        img: avatar
    }, {
        id: "154",
        token: "MTYxXzA4NTI0ZDU5OGE4ZmI1ZDQ2NzY0YzI2NTZmYzJjZDdm",
        tag: "Vol2-09",
        title: "Morning, Noon and Night",
        length: 671,
        img: avatar
    }, {
        id: "155",
        token: "MTYyXzBiNWViZmNkMmM3NTIwYTlhM2I2ODI0ZGQwNjk0NDI4",
        tag: "Vol2-10",
        title: "Tadpoles",
        length: 671,
        img: avatar
    }];

    json[8] = {
        pageName: '本和霍利的小王国',
        list: list,
        type: 2
    };

    // 字母积木
    avatar = 'http://imgs.genshuixue.com/00-x-upload/image/100005671_e4470bc07b2e89ce135f6d01a81cdcd9_83LymWOf.jpg';
    list = [
   {
    id: "181",
    token: "MjE0X2EwNTMzNjM5NDRmMWFlYjIwYjM5YmMxNzI2NTgyM2U4",
    tag: "字母积木1.1",
    title: "字母a-z",
    length: 180,
    img: avatar
}, {
    id: "184",
    token: "MjE1XzZkNzhmNjVmN2Y3ZDk4MjA3MTAxNDE2MDY1OGEyNjQ4",
    tag: "字母积木1.2",
    title: "字母及组合e,ee",
    length: 180,
    img: avatar
}, {
    id: "185",
    token: "MjE2XzkzM2VjNTY3OGVlODZkNzA0NTkxNGNiMmI3NGY0MTdi",
    tag: "字母积木1.3",
    title: "元音字母a,e,i,o,u",
    length: 180,
    img: avatar
}, {
    id: "186",
    token: "MjE3X2VlNDllNzQ1Mzg2OTFjYWIwNzYxYjU3YmFmM2Y0MDFm",
    tag: "字母积木1.4",
    title: "字母y",
    length: 179,
    img: avatar
}, {
    id: "187",
    token: "MjE4X2U0YTdmYjE0YTdlY2Y1ZjMwYmYzNWE2ZmU0MTU4ZDhl",
    tag: "字母积木1.5",
    title: "字母及组合c,k,ck",
    length: 180,
    img: avatar
}, {
    id: "188",
    token: "MjE5X2E5Yjk2ZDZmNGE3ZTQzNGFhYzZlMDgyNmZhNzM3OWVk",
    tag: "字母积木1.6",
    title: "字母及组合f,ff,ow",
    length: 180,
    img: avatar
}, {
    id: "189",
    token: "MjIwXzBkMmI4MmU3MjQ0MDkwMTRjYzg5OWI1MGEzNGU4YzI5",
    tag: "字母积木1.7",
    title: "字母b,n,d",
    length: 180,
    img: avatar
}, {
    id: "190",
    token: "MjIxXzU2YWEwNTY5NDNhNzIwMjAyZjBkNTAxOGYwYTJiZTY5",
    tag: "字母积木1.8",
    title: "单词fab,din,band",
    length: 180,
    img: avatar
}, {
    id: "191",
    token: "MjIyXzNlOTYyY2UxMmM0OTExODhjODlhNmM0MmQ5ZWU0Mzc2",
    tag: "字母积木1.9",
    title: "字母a-z,x",
    length: 360,
    img: avatar
}, {
    id: "192",
    token: "MjIzX2RiZTk4YjI4ZDJlMjkxZjBmZDFiMDVjYmZjMDFiYjk3",
    tag: "字母积木1.10",
    title: "字母组合ch,sh,th",
    length: 180,
    img: avatar
}, {
    id: "193",
    token: "MjI0X2M2ZTc5M2VlZDE4MjJlNTU1MDI1Y2NiMzUyNmM5MWM0",
    tag: "字母积木1.11",
    title: "字母及组合v,ch,sh,th",
    length: 360,
    img: avatar
}, {
    id: "194",
    token: "MjI1XzI3MGY3N2MyZTZkNGI5ZTIxNDBmNmUxODIwNTk4NzEx",
    tag: "字母积木1.12",
    title: "字母及组合o,oo",
    length: 180,
    img: avatar
}, {
    id: "195",
    token: "MjI2XzBkOTM4NzE5NjE0YjAyYTIzZDM0ZjU5YjgyMjRmMWMx",
    tag: "字母积木1.13",
    title: "组词大赛",
    length: 179,
    img: avatar
}, {
    id: "196",
    token: "MjI3X2Y1N2UwOTA4OGUwYTMzOTIwMWZjYjBlYmFiMmVhYzlj",
    tag: "字母积木1.14",
    title: "字母及组合l,ail",
    length: 180,
    img: avatar
}, {
    id: "197",
    token: "MjI4X2U2ZTcxMmU5NDVkNTEyZmU3MGIyN2YzYmRlMjJiOTg2",
    tag: "字母积木1.15",
    title: "元音字母a,e,i,o,u",
    length: 180,
    img: avatar
}, {
    id: "198",
    token: "MjI5XzVmZmI3MzAxZTY3ZTYyZGQyNmUyMjlhYTVmYWJiOGNh",
    tag: "字母积木1.16",
    title: "单词fox,dog",
    length: 180,
    img: avatar
}, {
    id: "199",
    token: "MjMwXzUxNTUxODUxMTc5OGYwMDk2ZWIwNDFkYWY2MjMwNWQ5",
    tag: "字母积木1.17",
    title: "字母a,p,r,t",
    length: 180,
    img: avatar
}, {
    id: "200",
    token: "MjMxX2JlNDZhZDQyYjA3MWNlOGQ2ZDFjYzA4MWJkOWZjN2M1",
    tag: "字母积木1.18",
    title: "单词top,bus",
    length: 180,
    img: avatar
}, {
    id: "201",
    token: "MjMyXzM5NjVjZjA2ZTM4NThlZGE0NDQyMzZlYWVkYjY0MDM3",
    tag: "字母积木1.19",
    title: "单词space",
    length: 180,
    img: avatar
}, {
    id: "202",
    token: "MjMzXzI3ZGU4YTY5NjI2NTY3MWEwZDQyMzUwNzgxODQwMTkx",
    tag: "字母积木1.20",
    title: "字母组合-ide,eek",
    length: 179,
    img: avatar
}, {
    id: "203",
    token: "MjM0XzJkZmYyNGMzOGNkYTVmY2QwNDA0OTg3ZDhlMTdmNzAx",
    tag: "字母积木1.21",
    title: "字母组合qu",
    length: 180,
    img: avatar
}, {
    id: "204",
    token: "MjM1XzY3OGFmOGVjZTYxNjk3NzZiNGJjZmU0Yjk0MzVjNDdk",
    tag: "字母积木1.22",
    title: "字母r",
    length: 180,
    img: avatar
}, {
    id: "205",
    token: "MjM2XzkwZDc0Yjk0OGQ3MGUzNDZkZTRlYWVhOTg0ODU4ZWU1",
    tag: "字母积木1.23",
    title: "字母j",
    length: 180,
    img: avatar
}, {
    id: "206",
    token: "MjM3XzFiNWRhMTBmM2ZlMzMzZmYwNjhmNWQ4ZTQzNDg1YTIx",
    tag: "字母积木1.24",
    title: "字母e,o,n,t",
    length: 180,
    img: avatar
}, {
    id: "207",
    token: "MjM4X2JhN2I2MDI2NzVmOTRiYmE0NDEyODRmY2EzNTMyOTMy",
    tag: "字母积木1.25",
    title: "字母z",
    length: 180,
    img: avatar
}, {
    id: "208",
    token: "MjM5X2Y2YWQ2NjhhMWI4NjQyNDQzYTY4MzZlMDBlNWY2M2Uw",
    tag: "字母积木1.26",
    title: "e词尾不发音",
    length: 180,
    img: avatar
} ];
    json[9] = {
        pageName: '字母积木',
        list: list,
        type: 2
    };

    // 单词世界
    avatar = '//img.gsxservice.com/48392373_ldjqbyoa.png';
    list = [
   {
    id: "209",
    token: "MjQwX2YxNzAxOWI1ZjUzYjYzODE2YWMyMzYwNjhhZDJlZjVl",
    tag: "word world01",
    title: undefined,
    length: 764,
    img: avatar
}, {
    id: "210",
    token: "MjQxX2ZhZjg2OGExNjgwY2QwZDY5NTgxM2U2M2ZhMTQ4ZTcx",
    tag: "word world02",
    title: undefined,
    length: 767,
    img: avatar
}, {
    id: "211",
    token: "MjQyXzczYjk5ZDdiZmRkM2UyYjhlOWQ1Njk3MWM0YzVmZDli",
    tag: "word world03",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "212",
    token: "MjQzXzY2MmM4NjJhMTY4OWFlN2U2ZTUwMDMyYjNjZjNkZDAw",
    tag: "word world04",
    title: undefined,
    length: 765,
    img: avatar
}, {
    id: "213",
    token: "MjQ0XzNlOWQ4N2UyMDg4Mzc1NjhmMDU3NjUxNGJkMTI0MjU5",
    tag: "word world05",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "214",
    token: "MjQ1XzYzMTYwNDY3ZjkzMTg3MjljMjMxYjk1YmNmZjMxNTAy",
    tag: "word world06",
    title: undefined,
    length: 766,
    img: avatar
}, {
    id: "215",
    token: "MjQ2X2E4YzhmZDZkYzY0OGIyYzcyNDE1NWU3MTcxMDM5MGM0",
    tag: "word world07",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "216",
    token: "MjQ3XzE5MjFjYzZlMDVjM2IzODM0ZWU5MzY4MzBiNzQyZmZl",
    tag: "word world08",
    title: undefined,
    length: 766,
    img: avatar
}, {
    id: "217",
    token: "MjQ4XzFhNTcyZjhlOGZhZmY1NGYwNDg5MDYzYTZlZTZmMWIy",
    tag: "word world09",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "218",
    token: "MjQ5X2UyODA2MDkyOWFiNGM2N2M5OTIyMTMxYzMyNWQ2Yjgw",
    tag: "word world10",
    title: undefined,
    length: 766,
    img: avatar
}, {
    id: "219",
    token: "MjUwXzVlYjIxY2VmMTc0NTMwZTI2MDBhMWU4ZWU0ZjViYjAz",
    tag: "word world11",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "220",
    token: "MjUxXzNlODZkNWQxYjg5ZWVhNzZmNTY2MTQ4MmU5NTM3ZmNh",
    tag: "word world12",
    title: undefined,
    length: 766,
    img: avatar
}, {
    id: "221",
    token: "MjUyX2Y2Yjg3MjNiOTM5OTQwYWZhYmEwMDBlYTA2NDRlNTcy",
    tag: "word world13",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "222",
    token: "MjUzX2Q2MWJkN2M2NzhlZTY4MGZiY2ZiNTg4OTlhZmRjMzE2",
    tag: "word world14",
    title: undefined,
    length: 766,
    img: avatar
}, {
    id: "223",
    token: "MjU0X2I3MDAzYTczOGMxYTUwN2ViMjBiYTAwZGY1NTM4ZDFh",
    tag: "word world15",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "224",
    token: "MjU1X2RiZTRjMjZhNzAxZmI5NzBlNzRmN2M1YzZiOWNlMTEx",
    tag: "word world16",
    title: undefined,
    length: 766,
    img: avatar
}, {
    id: "225",
    token: "MjU2X2NjNDViNTE1ZTViYjUzNTMwNWYxOTg0ODBjZjYzZDQ2",
    tag: "word world17",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "226",
    token: "MjU3X2UxNzE2NmEzYTA4Y2I5MzA0NmU5OGFmMzAxY2U0ZmU2",
    tag: "word world18",
    title: undefined,
    length: 765,
    img: avatar
}, {
    id: "227",
    token: "MjU4XzU0NTVkMDg4NmI1MGY2ZDM3NzVlOWZiZTVhNjBlYjg1",
    tag: "word world19",
    title: undefined,
    length: 885,
    img: avatar
}, {
    id: "228",
    token: "MjU5XzA2MDViMWZmYjM4ZTk0NTFkM2E2ZWRmMzNiODM0NGQ5",
    tag: "word world20",
    title: undefined,
    length: 766,
    img: avatar
} ];
    json[10] = {
        pageName: '单词世界',
        list: list,
        type: 2
    };


    var result = {
        status: 200,
        data: null
    };

    result.data = json[id];

    
    return result;
}