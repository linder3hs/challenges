const https = require('https');

async function fetchData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            
            response.on('data', (stream) => {
                data += stream
            })
            
            response.on('end', () => {
                resolve(JSON.parse(data))
            })
        }).on('error', (error) => {
            reject(error)
        })
    })
}

async function getPhoneNumbers(country, phoneNumber) {
    try {
        const {data} = await fetchData(`https://jsonmock.hackerrank.com/api/countries?name=${country}`);
        
        const codes = data[0].callingCodes

        const phoneCode = codes.length > 1 ? codes[1] : codes[0]
        
        return `+${phoneCode} ${phoneNumber}`
    } catch (error) {
        return -1;
    }
}

getPhoneNumbers('Dominican Republic', '453984665').then(res => console.log(res))
