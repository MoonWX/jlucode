const axios = require('axios');
async function getTpassSessionID() {
    return await axios.get('https://cas.jlu.edu.cn/tpass/login?service=https%3A%2F%2Fehall.jlu.edu.cn%2Fsso%2Flogin%3Fredirect_uri%3Dhttps%253A%252F%252Fehall.jlu.edu.cn%252Fsso%252Flogin%26x_client%3Dcas',
        {
            headers: {
                'Referer': 'https://cas.jlu.edu.cn/',
                'Cookie': 'cas_hash=; Language=zh_CN'
            },
            withCredentials: true,
        })
    }
module.exports = {
    getTpassSessionID
}
