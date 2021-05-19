const https = require('https');
const urlParse = require('url');
class Url {
    constructor (method, url, 
        paramsHeader, body) {
            this.urlOptions = Object.assign({}, urlParse.parse(url), {timeout: 2000, method: method, headers: paramsHeader})
            this.data = body
    }
    
    invoke () {
      return new Promise((resolve, reject) => {
        const req = https.request(this.urlOptions,
          (res) => {
            let body = '';
            res.on('data', (chunk) => (body += chunk.toString()));
            res.on('error', reject);
            res.on('end', () => {
              if (res.statusCode >= 200 && res.statusCode <= 299) {
    
                resolve({statusCode: res.statusCode, headers: res.headers, body: body});
              } else {
                reject('Request failed. status: ' + res.statusCode + ', body: ' + body);
              }
            });
          });
        req.on('error', reject);
        if(this.data){
          req.write(this.data, 'binary');
        }
        
        req.end();
      });
    }
  }

  module.exports = Url;