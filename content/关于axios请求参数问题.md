    
##### vue中通过axios做POST请求时，参数格式问题
 
问题： {"email":"moshen@moshen.name","password":"123456"}

解决方法:    
    千万别用JSON.stringify() 有坑, 后边多一个:

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

##### vue中通过axios做GET请求时，参数格式问题

     this.$http.get(url, {    
        params:{
            pageSize: 10,
            pageNo: _this.currentPage-1
        },
        headers: {
          'Authorization': APIHelper.Authorization
        }
      }).then(function(response){
        response = response.data;
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
