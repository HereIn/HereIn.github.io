/**
 * offres页面
 */
function Offres() {
    window.that = this;
    this.app = document.querySelector('#app');  //页面主体
    this.title_H1 = document.querySelector('h1.text-center');  //H1标题
    this.preview = document.querySelector('.preview-offers');  //第一区包含三个灯泡的模块
    this.button = document.querySelectorAll('.button');  //第一区的三个按钮
    this.start = document.querySelector('.start');  //第一区
    this.startmeup = document.querySelector('#startmeup');
    this.start_lamp = this.start.querySelector('.lamp');  //第一区灯泡的路径
    this.thunder = document.querySelector('#thunder');  //第一区钨丝
    this.oh1 = document.querySelector('#oh1');  //第一区散射光
    this.oh2 = document.querySelector('#oh2');  //第一区散射光
    this.oh3 = document.querySelector('#oh3');  //第一区散射光

    this.boost = document.querySelector('.boost');  //第二区
    this.boost_lamp = this.boost.querySelector('.lamp');  //第二区灯泡的路径
    this.boosthunder = document.querySelector('#boosthunder');

    this.help = document.querySelector('.help');  //第三区
    this.helpmeon = document.querySelector('#helpmeon');
    this.help_lamp = this.help.querySelector('.lamp');  //第三区灯泡的路径
    this.triangle = document.querySelector('#triangle');  //第三区的灯丝
    this.pop = document.querySelectorAll('h2.pop');  //为三个横向模块的标题

    this.wHeight = document.documentElement.clientHeight;  //浏览器可视区的高度
    /*当浏览器大小改变时*/
    window.addEventListener('resize',function(){
        that.wHeight = document.documentElement.clientHeight;  //浏览器大小改变时重新获取浏览器可视区的高度
    },false);

    /*当Loading动画完成时*/
    this.app.addEventListener('transitionend',that.loaded,false);

    /*当滚动滚动条时*/
    window.addEventListener('scroll',function(){
        that.initier && that.initier();
        that.apres && that.apres();
        that.vous && that.vous();

    },false);

}
/*页面Loading动画完成时*/
Offres.prototype.loaded = function(){
    that.app.removeEventListener('transitionend',that.loaded,false);  //保证事件不能多次执行
    /*H1标题淡入*/
    that.title_H1.style.opacity = 1;
    that.title_H1.style.transform = 'matrix(1, 0, 0, 1, 0, -10)';

    /*获取到三个灯泡*/
    var lamp1 = document.querySelector('#lamp1');
    var lamp2 = document.querySelector('#lamp2');
    var lamp3 = document.querySelector('#lamp3');

    lamp1.style.opacity = lamp2.style.opacity = lamp3.style.opacity = 1;

    /*svg路径动画——引用walkway.js*/
    var offresSVG = new Walkway({
        selector: '.preview-offers',
        duration: '800',
        easing: 'linear'
    });
    offresSVG.draw();

    /*灯泡鼠标经过触发动画*/
    lamp1.addEventListener('mouseenter',function(){
        var lamp1SVG = new Walkway({
            selector: '#lamp1',
            duration: '600',
            easing: 'easeOutBounce'
        });
        lamp1SVG.draw();
    },false);

    lamp2.addEventListener('mouseenter',function(){
        var lamp1SVG = new Walkway({
            selector: '#lamp2',
            duration: '600',
            easing: 'easeOutBounce'
        });
        lamp1SVG.draw();
    },false);

    lamp3.addEventListener('mouseenter',function(){
        var lamp1SVG = new Walkway({
            selector: '#lamp3',
            duration: '600',
            easing: 'easeOutBounce'
        });
        lamp1SVG.draw();
    },false);

    /*灯泡下的三个按钮点击跳转功能*/
    that.button[0].addEventListener('click',function(ev){
        that.moveTo(600,50);
        ev.preventDefault();
    },false);

    that.button[1].addEventListener('click',function(ev){
        that.moveTo(1200,100);
        ev.preventDefault();
    },false);

    that.button[2].addEventListener('click',function(ev){
        that.moveTo(1700,150);
        ev.preventDefault();
    },false);

};
/*页面跳转*/
Offres.prototype.moveTo = function(target,step){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var timer = null;
    cancelAnimationFrame(timer); //执行动画前,先做清空处理
    timer = requestAnimationFrame(function fn(){
        if(scrollTop < target){
            window.scrollTo(0,scrollTop+=step);
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    })
};
/*第一区*/
Offres.prototype.initier = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*当判断条件小于0时 说明模块已经进入屏幕，-130为误差值*/
    if(that.start.offsetTop-(that.wHeight+scrollTop-130) < 0){
        /*标题渐入动画*/
        that.pop[0].style.opacity = 1;
        that.pop[0].style.transform = 'translate(0,0)';
        /*装饰物动画*/
        var startmeupSVG = new Walkway({
            selector: '#startmeup',
            duration: '900',
            easing: 'linear'
        });
        startmeupSVG.draw();

        /*灯泡路径动画*/
        that.start_lamp.style.strokeDasharray = '';
        that.start_lamp.style.strokeDashoffset = '1000';

        /*灯泡钨丝*/
        var isOpa = true;
        (function opa(){
            if(isOpa){
                that.thunder.style.opacity = 1;
            }else{
                that.thunder.style.opacity = .2;
            }
            isOpa = !isOpa;
            setTimeout(opa,1100)
        })();
        /*散射光先动画*/
        var isOh = true;
        (function oh(){
            if(isOh){
                that.oh1.style.opacity = 0;
                that.oh2.style.opacity = 0;
                that.oh3.style.opacity = 0;
                that.oh1.style.transform = 'translate(0,-30px)';
                that.oh2.style.transform = 'translate(0,-30px)';
                that.oh3.style.transform = 'translate(0,-30px)';
            }else{
                that.oh1.style.opacity = 1;
                that.oh2.style.opacity = 1;
                that.oh3.style.opacity = 1;
                that.oh1.style.transform = 'translate(0,0)';
                that.oh2.style.transform = 'translate(0,0)';
                that.oh3.style.transform = 'translate(0,0)';
            }
            isOh = !isOh;
            setTimeout(oh,3000)
        })();

        /*鼠标经过时执行一边动画*/
        that.startmeup.addEventListener('mouseenter',function(){
            var startmeup_1SVG = new Walkway({
                selector: '#startmeup',
                duration: '600',
                easing: 'easeOutBounce'
            });
            startmeup_1SVG.draw();
        },false);

        Offres.prototype.initier = null;  //保证事件只触发一次
    }
};
/*第二区*/
Offres.prototype.apres = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*当判断条件小于0时 说明模块已经进入屏幕，-130为误差值*/
    if(that.boost.offsetTop-(that.wHeight+scrollTop-130) < 0){

        that.pop[1].style.opacity = 1;
        that.pop[1].style.transform = 'translate(0,0)';
        /*装饰物动画*/
        var boostmeupSVG = new Walkway({
            selector: '#boostmeup',
            duration: '900',
            easing: 'linear'
        });
        boostmeupSVG.draw();

        /*灯泡路径动画*/
        that.boost_lamp.style.strokeDasharray = '';
        that.boost_lamp.style.strokeDashoffset = '1000';
        /*灯丝旋转*/
        setTimeout(function(){
            that.boosthunder.style.animation = 'change 1s linear infinite';
            that.boosthunder.style.transformOrigin = '160px 48px';
        },1200);

        Offres.prototype.apres = null;  //确保只触发一次事件
    }
};
/*第三区*/
Offres.prototype.vous = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*当判断条件小于0时 说明模块已经进入屏幕，-130为误差值*/
    if(that.help.offsetTop-(that.wHeight+scrollTop-130) < 0){
        that.pop[2].style.opacity = 1;
        that.pop[2].style.transform = 'translate(0,0)';

        /*装饰物动画*/
        var helpmeonSVG = new Walkway({
            selector: '#helpmeon',
            duration: '900',
            easing: 'linear'
        });
        helpmeonSVG.draw();

        /*鼠标经过时执行一边动画*/
        that.helpmeon.addEventListener('mouseenter',function(){
            var helpmeon_1SVG = new Walkway({
                selector: '#helpmeon',
                duration: '600',
                easing: 'easeOutBounce'
            });
            helpmeon_1SVG.draw();
        },false);

        /*灯泡路径动画*/
        that.help_lamp.style.strokeDasharray = '';
        that.help_lamp.style.strokeDashoffset = '1000';

        /*灯泡钨丝*/
        var isScale = true;
        (function opa(){
            that.triangle.style.transformOrigin = 'center';
            if(isScale){
                that.triangle.style.transform = 'matrix(1,0,0,1,0,0)';
                that.triangle.style.stroke = 'rgb(51, 86, 236)';
            }else{
                that.triangle.style.transform = 'matrix(0.8,0,0,0.8,0,0)';
                that.triangle.style.stroke = 'rgb(4, 203, 182)';
            }
            isScale = !isScale;
            setTimeout(opa,1300)
        })();

        Offres.prototype.vous = null;  //确保只触发一次事件
    }

};

new Offres;