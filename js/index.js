(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth*20/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);
document.addEventListener('DOMContentLoaded',function(){
    //手机认证中的多选
 //    var oUl = document.getElementById('phoneAgree');
 //    console.log(oUl);
 //    // if(!oUl)return false;
 //    var aLi = oUl.getElementsByTagName('li');
 //    console.log(aLi)
 //    for(var i = 0;i < aLi.length; i++){
	// 	aLi[i].onclick = function () {
 //            alert(1);
	// 		this.classList.toggle('active');
	// 	};
	// };

},false)



