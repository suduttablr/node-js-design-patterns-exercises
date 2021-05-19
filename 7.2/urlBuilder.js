const Url = require('./url')
class UrlBuilder {
    setHTTPMethod (method) {
      this.method = method
      return this
    }
    setURL (url) {
      this.url = url
      return this
    }
    setHeaderParameters (paramsHeader) {
      this.paramsHeader = paramsHeader
      return this
    }
    setbody (body) {
      this.body = body
      return this
    }
    build () {
      return new Url(this.method, this.url,
        this.paramsHeader, this.body)
    }
  }

  module.exports = UrlBuilder;