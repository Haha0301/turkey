//各部分路由及交互

app.controller('common',function ($rootScope,$scope,$http) {
    $rootScope.navShow = true;//控制index的nav
    $rootScope.alert = false;
    $rootScope.service = false;
})
//借贷
app.controller('indexCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = true;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.service = false;
    $scope.isSubmitPho = 1;
    $scope.isSubmitPer = 1;
    $scope.isSubmitCam = 1;
    $scope.isSubmitCard = 1;
    $scope.title = 1;
    $rootScope.title = "首页"; 
    
      // $scope.isSubmit = true; 
    
    // $http({
    //     method:'POST',
    //     url:'',
    // }).then(function (res) {
    //         if(res.statue==1){
    //             // 登陆成功
    //         }
    //     },function (res) {
    //     alert('网络连接失败')
    // })
   
})
//我的
app.controller('myCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = true;
    $rootScope.alert = false;
    $rootScope.service = false;
    $rootScope.title = "我的"; 
    $scope.service = function () {
        $rootScope.service = true;
    }
    //客服弹窗
    $rootScope.close = function () {
       $rootScope.service = false;
    }
})
//手机认证
app.controller('papproveCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "手机认证";
    // debugger;
    $scope.agree=function(){
        if ($scope.a==true) {
            $scope.a=false;
        }else{
            $scope.a=true;
        }
    }    
    $scope.agree1=function(){
        if ($scope.b==true) {
            $scope.b=false;
        }else{
            $scope.b=true;
        }
    }
})
//金额
app.controller('sumCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "金额";
   
})
//天数7天
app.controller('dayCtrl',function ($rootScope,$scope,$http) {
    var oBtn = document.getElementById('')
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.title = "天数";
    $scope.alert = function () {
        $rootScope.alert = true;
    }
    // $http({
    //     method:'POST',
    //     url:'',
    //     params:{

    //     }
    // }).then(function (res) {
    // })
})
//14天
app.controller('day2Ctrl',function ($rootScope,$scope,$http) {
    var oBtn = document.getElementById('')
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.title = "天数";
    $scope.alert = function () {
        $rootScope.alert = true;
    }
    // $http({
    //     method:'POST',
    //     url:'',
    //     params:{

    //     }
    // }).then(function (res) {
    // })
})
//手机运营商授权
app.controller('impowerCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "手机运营商授权";
})

//个人信息
app.controller('personCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "个人信息";
})
//基本信息
app.controller('messageCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "基本信息";
    var oM = angular.element(document.getElementById('marriage'));
    var oLi1 = angular.element(document.getElementById('select-lia'));                                             
    var oLi2 = angular.element(document.getElementById('select-lib')); 

    //获取input内容进行判断
    var oName = angular.element(document.getElementById('messName'));
    var oEdu = angular.element(document.getElementById('messsEducation'));                                             
    var oAdress = angular.element(document.getElementById('messAdress')); 
    var oTime = angular.element(document.getElementById('messTime'));
    var oQQ = angular.element(document.getElementById('messQQ'));                                             
    var oEmail = angular.element(document.getElementById('messEmail'));
    var oBtn = angular.element(document.getElementById('true'));     

    //下拉菜单 
    $scope.secM = function() {
        if ($scope.a==true) {
            $scope.a=false;
        }else{
            $scope.a=true;
        }
    }   
    $scope.old = function() {
        oM.html(oLi1.html());
        $scope.a=false;
    }    
    $scope.no = function() {
        oM.html(oLi2.html())
        $scope.a=false;
    }

    //进行判断
    //确认正则
    //qq
    $scope.qqB = function () {
        var str = oQQ.val();
        var reg = /^[1-9]\d{4,12}$/
        // alert(reg.test(str))
        if(!reg.test(str)){
            // alert('请输入正确的qq号')
            oQQ.val('')
            oQQ.attr('placeholder','请输入正确的QQ号')
        }
    }
    //邮箱
    $scope.emailB = function () {
        var str = oEmail.val();
        var reg = /^\w+@[0-9a-z]{2,}(\.[a-z\u4e00-\u9fa5]{2,8}){1,2}$/
        if(!reg.test(str)){
            // alert('请输入正确的邮箱号')
            oEmail.val('')
            oEmail.attr('placeholder','请输入正确的邮箱号')
        }
    }
    
    $scope.fn = function () {
        if(oName.val() && oEdu.val() && oAdress.val() && oTime.val() && oEmail.val() !== '' ){ 
            oBtn.attr('href','#/index/person');
            
        }else{
            oBtn.css('background','#333');
        }  
    }
});
//职业信息
app.controller('jobCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "职业信息";
    var oP = angular.element(document.getElementById('profession'));
    var oLi1 = angular.element(document.getElementById('select-lia'));                                             
    var oLi2 = angular.element(document.getElementById('select-lib'));
    var oSch1 = angular.element(document.getElementById('school'));                                             
    var oSch2 = angular.element(document.getElementById('school2')); 
    var oSch3 = angular.element(document.getElementById('school3'));  
    var oSchP = angular.element(document.getElementById('schoolP'));                                        
    $scope.pro = function() {
        if ($scope.a==true) {
            $scope.a=false;
        }else{
            $scope.a=true;
        }
    }   
    $scope.student = function() {
        oP.html(oLi1.html());
        console.log(oLi1.html());
        $scope.a=false;
    }    
    $scope.job = function() {
        oP.html(oLi2.html())
        $scope.a=false;
    }
})
//紧急联系人
app.controller('emergencyCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "紧急联系人";
    var oC = angular.element(document.getElementById('clan'));
    var oS = angular.element(document.getElementById('society'));
    var oLi1 = angular.element(document.getElementById('select-lia'));                                             
    var oLi2 = angular.element(document.getElementById('select-lib'));
    var oLi3 = angular.element(document.getElementById('select-lic'));
    var oLi4 = angular.element(document.getElementById('select-lid'));                                             
    var oLi5 = angular.element(document.getElementById('select-lie')); 
    var oLi6 = angular.element(document.getElementById('select-lif'));                                             
    $scope.clan = function() {
        if ($scope.a==true) {
            $scope.a=false;
        }else{
            $scope.a=true;
        }
    }   
    $scope.parents = function() {
        oC.html(oLi1.html());
        $scope.a=false;
    }    
    $scope.spouse = function() {
        oC.html(oLi2.html())
        $scope.a=false;
    }
    $scope.brothers = function() {
        oC.html(oLi3.html())
        $scope.a=false;
    }

    $scope.society = function() {
        if ($scope.b==true) {
            $scope.b=false;
        }else{
            $scope.b=true;
        }
    }   
    $scope.schoolmate = function() {
        oS.html(oLi4.html());
        $scope.b=false;
    }    
    $scope.colleague = function() {
        oS.html(oLi5.html())
        $scope.b=false;
    }
    $scope.friend = function() {
        oS.html(oLi6.html())
        $scope.b=false;
    }
})
//身份认证
app.controller('identityCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "身份认证";
    $http({
        method:'GET',
        url:'http://test.hxsmtrz.com/index.php/Home/Verification/cardALl?id=1',
        params:{
            id:2
        }
    }).then(function (res) {
        if(res.status == 200){
            console.log(res.data)
        }
       
    },function (res) {
        alert('网络连接失败')
    })
})
//身份认证
app.controller('iapproveCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "身份认证";
})
//身份认证
app.controller('cardCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "银行卡信息";
})
//登录
app.controller('loginCtrl',function ($rootScope,$scope,$http,$location){
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "登录";
    // console.log($rootScope)
    $http({
        method:'GET',
        url:'http://test.hxsmtrz.com/index.php/Home/Ucenter/do_login',
        params:{
            mobile:$scope.name,
            password:$scope.pass,
        },
    }).then(function (res) {
        // debugger;
        console.log(res)
            if(res.status==200){
                // 登陆成功
                $scope.login = function () {
                    $rootScope.alert = false;
                    $rootScope.alert2 = true;
                    $rootScope.caseNav = 1;
                    var tid;
                    clearTimeout(tid);
                    console.log(location)
                    tid = setTimeout(function(){
                        $rootScope.alert2 = false;
                        window.location.hash = '#/my'
                    },2000);
                }
            }
        },function (res) {
        alert('网络连接失败')
    })
})
//注册
app.controller('registerCtrl',function ($rootScope,$scope,$http){
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "注册";
    $http({
        method:'GET',
        url:'',
        params:{
            mobile:1,
            password:1
        }
    }).then(function (res) {
        // debugger;
        console.log(res)
            if(res.statue==1){
                // 登陆成功
            }
        },function (res) {
        alert('网络连接失败')
    })
})
//我的金币
app.controller('goldCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "我的金币";
    $http({
        method:'GET',
        url:'http://test.hxsmtrz.com/index.php/Home/Goldbill/overage',
        params:{
            uid:1
        },
    }).then(function (res) {
        // debugger;
        var json = res.data;
            if(json.status == 1){
                $scope.money = json.msg.number;

            }
        },function (res) {
        alert('网络连接失败')
    })

    $http({
        method:'GET',
        url:'http://test.hxsmtrz.com/index.php/Home/Goldbill/get_bill',
        params:{
            uid:1,
        },
    }).then(function (res) {
        console.log(res)
        var json = res.data;
        if (json.status == 1) {
            $scope.dataMoney = json.msg;
        }
    },function () {
        alert('网络连接失败')
    }) 
})
//提现金额
app.controller('drawCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "提现金额";
    $http({
        url:'http://test.hxsmtrz.com/index.php/Home/Goldbill/set_cash',
        method:'GET',
        params:{
            uid:1,
            money:20,
            gid:1,
        },
    }).then(function (res) {
        // console.log(res)
        var json = res.data;
        if(json.status === 1){
            alert('处理中')
        };
        if(res.data === ''){
            alert('提款金额超出余额')
        };
    },function (res) {})
})
//提现成功
app.controller('drawSuccCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "提现金额";
})
//还款
app.controller('refundCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "还款提醒";
})
//我的推荐
app.controller('recommendCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "我的推荐";
    $http({
        method:'GET',
        url:'http://test.hxsmtrz.com/index.php/Home/Complete/get_cite',
        params:{
            uid:1
        }
    }).then(function (res) {
        var json = res.data;
        if(json.status == 1){
            $scope.data = res.data.msg;
        }
    },function () {
        alert('网络连接失败')
    })
})
//领取任务
app.controller('getTaskCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "领取任务";
})
//分享二维码
app.controller('shareCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "分享二维码";
})
//任务详情
app.controller('taskCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "任务详情";
    $scope.task = function () {
        $rootScope.alert = false;
        $rootScope.alert2 = true;
        $rootScope.caseNav = 2;
        var tid;
        clearTimeout(tid);
        tid = setTimeout(function(){
            $rootScope.alert2 = false;
        },2000);
    }
})
//常见问题
app.controller('problemCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "常见问题";
    $scope.isConTit1 = function () {
        if($scope.isConShow1){
            $scope.isConShow1 = false;
            $scope.a1 = false;
        }else{
            $scope.isConShow1 = true;
            $scope.a1 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit2 = function () {
        if($scope.isConShow2){
            $scope.isConShow2 = false;
            $scope.a2 = false;
        }else{
            $scope.isConShow2 = true;
            $scope.a2 = true;
            $scope.isConShow1 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a1 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit3 = function () {
        if($scope.isConShow3){
            $scope.isConShow3 = false;
            $scope.a3 = false;
        }else{
            $scope.isConShow3 = true;
            $scope.a3 = true;
            $scope.isConShow2 = false;
            $scope.isConShow1 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a1 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit4 = function () {
        if($scope.isConShow4){
            $scope.isConShow4 = false;
            $scope.a4 = false;
        }else{
            $scope.isConShow4 = true;
            $scope.a4 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow1 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a1 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit5 = function () {
        if($scope.isConShow5){
            $scope.isConShow5 = false;
            $scope.a5 = false;
        }else{
            $scope.isConShow5 = true;
            $scope.a5 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow1 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a1 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit6 = function () {
        if($scope.isConShow6){
            $scope.isConShow6 = false;
            $scope.a6 = false;
        }else{
            $scope.isConShow6 = true;
            $scope.a6 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow1 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a1 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit7 = function () {
        if($scope.isConShow7){
            $scope.isConShow7 = false;
            $scope.a7 = false;
        }else{
            $scope.isConShow7 = true;
            $scope.a7 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow1 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a1 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit8 = function () {
        if($scope.isConShow8){
            $scope.isConShow8 = false;
            $scope.a8 = false;
        }else{
            $scope.isConShow8 = true;
            $scope.a8 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow1 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a1 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit9 = function () {
        if($scope.isConShow9){
            $scope.isConShow9 = false;
            $scope.a9 = false;
        }else{
            $scope.isConShow9 = true;
            $scope.a9 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow1 = false;
            $scope.isConShow10 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a1 = false;
            $scope.a10 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit10 = function () {
        if($scope.isConShow10){
            $scope.isConShow10 = false;
            $scope.a10 = false;
        }else{
            $scope.isConShow10 = true;
            $scope.a10 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow1 = false;
            $scope.isConShow11 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a1 = false;
            $scope.a11 = false;
        } 
    }
    $scope.isConTit11 = function () {
        if($scope.isConShow11){
            $scope.isConShow11 = false;
            $scope.a11 = false;
        }else{
            $scope.isConShow11=true;
            $scope.a11 = true;
            $scope.isConShow2 = false;
            $scope.isConShow3 = false; 
            $scope.isConShow4 = false;
            $scope.isConShow5 = false;
            $scope.isConShow6 = false;
            $scope.isConShow7 = false;
            $scope.isConShow8 = false;
            $scope.isConShow9 = false;
            $scope.isConShow10 = false;
            $scope.isConShow1 = false;
            $scope.a2 = false;
            $scope.a3 = false;
            $scope.a4 = false;
            $scope.a5 = false;
            $scope.a6 = false;
            $scope.a7 = false;
            $scope.a8 = false;
            $scope.a9 = false;
            $scope.a10 = false;
            $scope.a1 = false;
        } 
    }
})
//修改密码
app.controller('setPassCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "修改密码";
})
//设置新密码
app.controller('newPassCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "设置密码";
    $http({
        url:'http://test.hxsmtrz.com/index.php/Home/Ucenter/do_reset_pwd',
        method:'GET',
        params:{
            // uid:1,
            // pwd:123456,
            // pwd1:666666,
            // pwd2:666666,
        },
    }).then(function (res) {
        console.log(res)
        var json = res.data;
        if(res.data == ''){
            alert('密码错误')
        };
        if(json.status == 1){
            alert('密码修改成功')
        }
    },function () {})
})

//认证成功
app.controller('phoneCtrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "手机认证";
})
//协议
app.controller('pact1Ctrl',function ($rootScope,$scope,$http) {
    $rootScope.navShow = false;
    $rootScope.navShow2 = false;
    $rootScope.alert = false;
    $rootScope.title = "协议";
})


