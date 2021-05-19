const UrlBuilder = require('./urlBuilder')

const url = new UrlBuilder()
  .setHTTPMethod('GET')
  .setURL('https://httpbin.org/get')
  .setHeaderParameters('{\'X-MyHeader\': \'MyValue\'}')
  .build()

  console.log(url.invoke().then((res) => { console.log(res)})
  .catch((err) => { console.log( err)}));