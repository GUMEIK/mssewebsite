// 本配置文件，只需更改allDescObj 对象即可
/**
 * 按顺序传入描述数组，返回一个描述对象
 * @param {描述数组} arr 
 */
function createDesc(arr){
    if(!arr) return;
    const [title,tec,github,description,address,time] = [...arr];
    return {
        title: title,
        tec: tec,
        github: github,
        description: description,
        address: address,
        time:time
    }
}
/**
 * 传入所有的描述对象
 * 返回最终的描述数组
*/
function returnResultDesc(obj){
    if(!obj) return;
    let resultArr = [];
    for(let prop in obj){
        const decObj = createDesc(obj[prop]);
        resultArr.push(decObj);
    }
    return resultArr;
}
const allDescObj = {
    msseWebSite:[
         "俄罗斯方块",
         "TypeScript+JQuery+webpack+面向对象思想",
         "https://github.com/GUMEIK/TetrisGames",
         "一款经典小游戏，采用了 数据-视图 相分离的模式，可以灵活的根据配置文件定义方块和面板大小以及方块内的文字灯，能较好的锻炼面向对象思想以及复习总结TypeScript相关知识",
         "http://www.msse.vip/gumeik/2020/TetrisGames/",
        "2020年04月"    
    ],
    // cesium:[
    //     "Cesium三维地球设计与开发",
    //     "Cesium+webpack+react+antd"
    // ],
    netCloud:[
        "小网盘",
        "react+redux+react-redux+redux-chunk+antd+express+其他",
        "https://github.com/GUMEIK/gumeik-netcloud",
        "因为改用了ubuntu，文件传输不是很方便，便开发了一款自用的网盘，支持拖拽上传、进度条显示、pdf-图片-视频在线预览、文件的上传和下载等",
        "http://www.msse.vip/gumeik/2020/netcloud/",
        "2020年01月"
    ],
    reactMusic:[
        "react音乐播放器",
        "react+redux+areact-redux+redux-chunk+ntd-mobile+node+其他",
        "https://github.com/GUMEIK/react-music",
        `一款简易的音乐播放器,目前支持音乐搜索、列表切换、热歌榜、歌手海报等，可以作为react练手项目，由于音乐接口不稳定，本项目暂停维护。
        要注意：请在移动端或者将浏览器调至移动模式下使用。
        `,
        "http://www.msse.vip/gumeik/2019/music/",
        "2019年11月"
    ]
}
export const projectArr = returnResultDesc(allDescObj)