//配置路由
app.config(function($routeProvider){
    $routeProvider.when('/',{
        //首页
        templateUrl:'./template/index.html',
        controller : 'indexCtrl', 
    }).when('/index/papprove',{
        //手机认证
        templateUrl:'./template/papprove.html',
        controller : 'papproveCtrl', 
    }).when('/index/impower',{
        //手机运行商授权
        templateUrl:'./template/impower.html',
        controller : 'impowerCtrl', 
    }).when('/index/identity',{
        //身份认证
        templateUrl:'./template/identity.html',
        controller : 'identityCtrl', 
    }).when('/index/iapprove',{
        //身份认证
        templateUrl:'./template/iapprove.html',
        controller : 'iapproveCtrl', 
    }).when('/index/person',{
        //个人信息
        templateUrl:'./template/person.html',
        controller : 'personCtrl', 
    }).when('/index/message',{
        //基本信息
        templateUrl:'./template/message.html',
        controller : 'messageCtrl', 
    }).when('/index/job',{
        //职业信息
        templateUrl:'./template/job.html',
        controller : 'jobCtrl', 
    }).when('/index/emergency',{
        //紧急联系人
        templateUrl:'./template/emergency.html',
        controller : 'emergencyCtrl', 
    }).when('/index/sum',{
        //金额
        templateUrl:'./template/sum.html',
        controller : 'sumCtrl', 
    }).when('/index/day',{
        //天数
        templateUrl:'./template/day.html',
        controller : 'dayCtrl', 
    }).when('/index/day2',{
        //天数
        templateUrl:'./template/day2.html',
        controller : 'day2Ctrl', 
    }).when('/index/card',{
        //银行卡信息
        templateUrl:'./template/card.html',
        controller : 'cardCtrl', 
    }).when('/index/phone',{
        //认证成功
        templateUrl:'./template/phone.html',
        controller : 'phoneCtrl', 
    }).when('/my',{
        //我的
        templateUrl:'./template/my.html',
        controller : 'myCtrl', 
    }).when('/my/login',{
        //登录
        templateUrl:'./template/login.html',
        controller : 'loginCtrl', 
    }).when('/my/register',{
        //注册
        templateUrl:'./template/register.html',
        controller : 'registerCtrl' 
    }).when('/my/gold',{
        //我的金币
        templateUrl:'./template/gold.html',
        controller : 'goldCtrl' 
    }).when('/my/draw',{
        //提现金额
        templateUrl:'./template/draw.html',
        controller : 'drawCtrl' 
    }).when('/my/drawSucc',{
        //提现金额
        templateUrl:'./template/drawSucc.html',
        controller : 'drawSuccCtrl' 
    }).when('/my/refund',{
        //提现金额
        templateUrl:'./template/refund.html',
        controller : 'refundCtrl' 
    }).when('/my/recommend',{
        //提现金额
        templateUrl:'./template/recommend.html',
        controller : 'recommendCtrl' 
    }).when('/my/getTask',{
        //领取任务
        templateUrl:'./template/getTask.html',
        controller : 'getTaskCtrl' 
    }).when('/my/share',{
        //领取任务
        templateUrl:'./template/share.html',
        controller : 'shareCtrl' 
    }).when('/my/task',{
        //任务详情
        templateUrl:'./template/task.html',
        controller : 'taskCtrl' 
    }).when('/my/service',{
        //客服
        templateUrl:'./template/service.html',
        controller : 'serviceCtrl' 
    }).when('/my/problem',{
        //客服
        templateUrl:'./template/problem.html',
        controller : 'problemCtrl' 
    }).when('/my/setPass',{
        //修改密码
        templateUrl:'./template/setPass.html',
        controller : 'setPassCtrl' 
    }).when('/my/newPass',{
        //修改密码
        templateUrl:'./template/newPass.html',
        controller : 'newPassCtrl' 
    }).when('/my/pact1',{
        //修改密码
        templateUrl:'./template/pact1.html',
        controller : 'pact1Ctrl' 
    }).otherwise({
        redirectTo:'/'
    });
});



