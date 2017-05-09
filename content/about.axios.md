vue中通过axios做POST请求时，参数格式问题
{"email":"moshen@moshen.name","password":"123456"}
解决方法：
const querystring = require('querystring');
methods: {
    login(){
      var _this = this;
      this.$http({
        url: APIHelper.login(),
        method: 'post',
        data: querystring.stringify({
          email: moshen@moshen.name,
          password: 123456
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
          console.log(response);
      }).catch(function (error) {
          console.log(error);
      });
    }
  }
