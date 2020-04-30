import { baseURl } from './baseUrl'
import {getNowDayTime} from '../utils/time'
async function getComments() {
    const res = await fetch(`${baseURl}/queryAllComments`);
    const data = await res.json();
    return data.data;
}
async function addComments(content) {
    const res = await fetch(`${baseURl}/addComments`, {
        method: "post",
        // 发送post请求时，根据服务器要求，要设置请求头
        headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: content.userName,
            comments: content.comments,
            email:content.email,
            ctime: getNowDayTime()
        })
    })
    const data = await res.json();
    return data;
}
export {getComments,addComments};