/**
 * Created by 孙国庆 on 2017/3/1.
 */
window.onload = function(){
    /*Loading动画*/
    (function(){
        var launch = document.getElementsByClassName('launch')[0];
        var oApp = document.getElementById('app');  //页面主体

        //页面初始加载动画&&Logo消失,然后页面主体显示
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        var timer = null;
        cancelAnimationFrame(timer); //执行动画前,先做清空处理
        setTimeout(function(){
            timer = requestAnimationFrame(function fn(){
                if(launch.style.opacity > 0){
                    launch.style.opacity -= 0.1;
                    timer = requestAnimationFrame(fn);
                }else{
                    cancelAnimationFrame(timer);
                    oApp.style.display = '';
                    setTimeout(function(){
                        oApp.style.opacity = 1;
                    },100);  //延迟100ms后主体显示;transition控制过渡效果
                }
            });
        },400); //Logo滞留400ms逐渐消失
    })();

    /*公共页尾动画*/
    function Footer(){
        window.Footer = this;
        this.contact = document.querySelector('#contact');  //页尾
        this.page = document.querySelector('#page');  //页面的内容部分
        this.title = document.querySelector('#contactTitle');  //页尾会运动的标题
        this.wHeight = document.documentElement.clientHeight;  //浏览器可视区的高度
        this.wWidth =  document.documentElement.clientWidth;  //浏览器可视区宽度
        /*当浏览器大小改变时*/
        window.addEventListener('resize',function(){
            window.Footer.wHeight = document.documentElement.clientHeight;  //浏览器大小改变时重新获取浏览器可视区的高度
            window.Footer.wWidth = document.documentElement.clientWidth;  //浏览器大小改变时重新获取浏览器可视区的宽度
        },false);

        if(document.querySelector('div.content')){
            /*根据屏幕的高度动态设置页尾的高度*/
            this.fade = document.querySelector('div.fade-transition');
            this.fade.style.paddingBottom = this.wHeight + 'px';
            this.content = document.querySelector('div.content');
            this.content.style.height = this.wHeight+'px';
        }


        this.isTitle = true; //可以触发动画
        this.page.height = parseInt(this.page.dataset.height);  //获取#page的高度
        window.addEventListener('scroll',window.Footer.footMove,false);
    }

    Footer.prototype.footMove = function(){
        if(!window.Footer.isTitle) return false;  //只能执行一次动画
        var that = window.Footer;
        //获取滚动的距离
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if( scrollTop > (that.page.height - that.wHeight/2)){

            var titles = Array.from( that.title.querySelectorAll('span') );  //获取到标题的每一个字母并转成数组
            /*为每个文字添加样式*/
            titles.forEach(function(e,i){
                setTimeout(function(){
                    e.style.cssText = 'visibility: inherit; opacity: 1;';
                },80*i)
            });

            that.isTitle = false;  //不能再执行动画了
        }
    };

new Footer;
};