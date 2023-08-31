const sessionID = require('./tpasssession')
async function getTpassSessionID() {
    const res = await sessionID.getTpassSessionID()
    console.log(res.headers)
}

getTpassSessionID()
/* 获取到tpasssessionid，在这在之后的post请求中需要传入 */
