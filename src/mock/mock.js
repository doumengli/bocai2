import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-Adapter';
import OneList from './datas/OneList.json';
const mock = new AxiosMockAdapter(axios);
const boList = () => {
    mock.onGet('/list').reply((config) => {
        return new Promise((resolve,reject) => {
            console.log(resolve)
            resolve([200,OneList])
        })
    })
}
export default boList
// const boLists = () => {
//     mock.onAny.onGet('https://trad-pusher.8win.com/match/v2?k=cn010004').reply((config) => {
//         return new Promise((resolve,reject) => {
//             console.log(resolve)
//             resolve([200,OneList])
//         })
//     })
// }
// export default {
//     boList

// }