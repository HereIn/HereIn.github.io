/*Contact页面Js文件*/

var con_h1 = document.getElementById('con-h1'); //Contact 页面的H1标题

setTimeout(function(){
    con_h1.style.opacity = 1; //首先H1标题的透明度过渡到1
    //H1标题的位置由下向上偏移
    var timer_con_h1 = null;
    var con_step = 30;
    cancelAnimationFrame(timer_con_h1); //执行动画前,先做清空处理
    //Contact 页面H1标题动画
    timer_con_h1 = requestAnimationFrame(function fn1(){
        if(con_step > 0){
            con_step--;
            con_h1.style.transform = ' matrix(1, 0, 0, 1, 0, '+ con_step +')';
            timer_con_h1 = requestAnimationFrame(fn1);
        }else{
            cancelAnimationFrame(timer_con_h1);
        }
    });
},1000); //延迟1000毫秒后contact页面的标题opacity=1&&并且向上偏移