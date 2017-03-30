/**
 * agence页面.
 */

function Agence(){
    window.that = this;
    this.app = document.querySelector('#app');  //页面主体
    this.title_H1 = document.querySelector('h1.text-center');  //H1标题
    this.radar = document.querySelector('#radar-chart');  //雷达图
    this.radar_label = Array.from(document.querySelectorAll('span.radar-label'));  //获取到雷达图上的标题并转成数组
    this.chart = document.querySelector('#chart');
    this.we = document.querySelector('#we');
    this.agencyWe = document.querySelector('#agency-we');  //第二区白色Logo
    this.nantes = document.querySelector('div.large-3');  //第三区的表
    this.nantes_little = document.getElementById('little-nantes');  //第三区的表svg结构
    this.column = document.querySelectorAll('div.large-6');
    this.bar_chart = document.getElementById('bar-chart');  //第三区的柱形图结构
    this.bar_num = that.column[2].getElementsByTagName('span')[1];  //+0%
    this.circle_chart = document.querySelector('#circle-chart');  //第三区的饼状图结构
    this.workers = document.querySelector('.workers');

    this.bar_chart = document.getElementById('bar-chart');  //第三区柱形图

    this.wHeight = document.documentElement.clientHeight;  //浏览器可视区的高度
    /*当浏览器大小改变时*/
    window.addEventListener('resize',function(){
        that.wHeight = document.documentElement.clientHeight;  //浏览器大小改变时重新获取浏览器可视区的高度
    },false);
    /*当Loading动画完成时*/
    this.app.addEventListener('transitionend',that.loaded,false);
    /*当滚动滚动条时*/
    window.addEventListener('scroll',function(){
        that.agencyscroll();  //第二屏白色Logo运动
        that.quelscroll();  //第三区动画
        that.workersin();  //第四区移入
    },false);
}

/*页面加载完成时首屏动画*/
Agence.prototype.loaded = function(){
    that.app.removeEventListener('transitionend',that.loaded,false);  //保证事件不能多次执行

    that.title_H1.style.opacity = 1;
    that.title_H1.style.transform = 'matrix(1, 0, 0, 1, 0, -10)';
    that.radar.style.cssText = 'opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0)';  //雷达图渐入效果
    that.radar_label.forEach(function(e,i){
        setTimeout(function(){
            e.style.opacity = 1;
            if(i === 5){
                that.chart.style.animation = 'chart 1.2s ease-in-out forwards';  //#chart动画
                setTimeout(function(){
                    that.we.style.animation = 'we .6s ease-in-out forwards';  //#chart动画
                },1000);  //等多边形运动完成之后we文字出现
            }
        },i*200);
        /*为每个标题添加鼠标移入移出效果*/
        setTimeout(function(){
            e.addEventListener('mouseenter',that.labelenter,false);
            e.addEventListener('mouseleave',that.labelleave,false);
        },2000);
    });
};

/*label鼠标移入动画*/
Agence.prototype.labelenter = function(){
    that.chart.style.animation = 'hover .6s ease-in-out forwards';
};

/*label鼠标移出动画*/
Agence.prototype.labelleave = function(){
    setTimeout(function(){
        that.chart.style.cssText = 'opacity: 0.8;transform-origin:50% 50%;transform: matrix(1, 0, 0, 1, 0, 0); animation:hover_1 .2s';
    },220);  //当鼠标快速移出时保证过渡效果平滑
};

/*第二屏白色Logo渐隐渐显*/
Agence.prototype.agencyscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*取值836为第一屏的高度*/
    if(scrollTop < 500){
        that.agencyWe.parentNode.style.opacity = 0;
        that.agencyWe.parentNode.style.transform = 'matrix(1, 0, 0, 1, 0, 120)';
    }else if(scrollTop >= 536 && scrollTop <= 836){
        that.agencyWe.parentNode.style.opacity = (scrollTop-500)/(836-500);
        that.agencyWe.parentNode.style.transform = 'matrix(1, 0, 0, 1, 0, '+(120-(scrollTop-500)/(836-500)*120)+')';
    }else if(scrollTop > 836){
        that.agencyWe.parentNode.style.opacity = 1;
        that.agencyWe.parentNode.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
};

/*第三区动画*/
Agence.prototype.quelscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*nates距离页面顶部的距离 - 滚动距离 - 可视高度 <0就进入频幕 && 110为误差*/
    var natesTop = that.nantes.offsetTop-scrollTop-that.wHeight+110;
    if(natesTop < 0){
        that.nantes_little.style.transform= 'scale(1.2)';
        setTimeout(function(){
            that.nantes_little.style.animation= 'nantes 1.8s ease-in-out forwards';
        },300);  //弹跳延迟

        /*svg路径动画——引用walkway.js*/
        var nantesSVG = new Walkway({
            selector: '#little-nantes',
            duration: '2000',
            easing: 'linear'
        });
        nantesSVG.draw();
    }

    /*柱形图第一次显示*/
    if(that.column[2].offsetTop-scrollTop-that.wHeight+200 < 0){
        that.bar_chart.style.transform= 'scale(1.3)';
        setTimeout(function(){
            that.bar_chart.style.animation= 'nantes 1.8s ease-in-out forwards';
        },500);  //弹跳延迟
        var timer = null;
        cancelAnimationFrame(timer); //执行动画前,先做清空处理
        timer = requestAnimationFrame(function fn(){
            if(that.bar_num.innerHTML < 50){
                that.bar_num.innerHTML = that.bar_num.innerHTML*1 + 1;
                setTimeout(function(){
                    timer = requestAnimationFrame(fn);
                },300);
            }else{
                cancelAnimationFrame(timer);
            }
        });
    }

    /*饼状图第一次显示*/
    if(that.column[3].offsetTop-scrollTop-that.wHeight+200 < 0){
        that.circle_chart.style.transform= 'scale(1)';
        setTimeout(function(){
            that.circle_chart.style.animation= 'nantes 1.8s ease-in-out forwards';
        },800);  //弹跳延迟
    }
};

/*第四区动画*/
Agence.prototype.workersin = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var workersTop = that.workers.offsetTop-scrollTop-that.wHeight+150;
    if(workersTop < 0){
        that.workers.style.opacity = 1;
        that.workers.style.transform = 'translate(0,0)';
    }
};


new Agence;