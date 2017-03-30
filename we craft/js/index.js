/**
 * 首页javascript文件
 */
function Home(){
    window.that = this;  //开放接口
    this.app = document.querySelector('#app');  //页面主体
    this.wHeight = document.documentElement.clientHeight;  //浏览器可视区的高度
    this.wWidth = document.documentElement.clientWidth;  //浏览器可视区的宽度

    window.addEventListener('resize',function(){
        that.wHeight = document.documentElement.clientHeight;  //浏览器大小改变时重新获取浏览器可视区的高度
        that.wWidth = document.documentElement.clientWidth;  //浏览器大小改变时重新获取浏览器可视区的宽度
    },false);

    /*第一屏元素*/
    this.sky = document.querySelector('#sky');
    this.clouds = document.querySelector('#clouds'); //云彩
    this.water = document.querySelector('#water');  //水波
    this.dock = document.querySelector('#dock');  //码头
    this.plan1 = document.querySelector('#plan1');  //最前面的建筑组
    this.plan2 = document.querySelector('#plan2');  //中间层的建筑组
    this.plan3 = document.querySelector('#plan3');  //最后面的建筑组
    this.bike = document.querySelector('#bike');  //自行车
    this.ring3 = document.querySelector('#ring3'); //三环
    this.ring2 = document.querySelector('#ring2'); //三环
    this.ring1 = document.querySelector('#ring1'); //三环
    this.tram = document.querySelector('#tram');  //电车外层
    this.tramway = document.querySelector('#tramway');  //电车
    this.mobile = document.querySelector('#mobile');  //手机
    this.windows = document.querySelector('#window');  //手机
    this.bg_rect = document.querySelector('#bg-rect');  //背景颜色

    this.wharehouse = document.querySelector('#wharehouse');  //左侧的房子
    this.house = document.querySelector('#house');  //右侧的房子
    this.lu = document.querySelector('#lu');  //右侧钟楼

    this.we_logo = document.querySelector('#wecraftapps-logo');  //logo
    this.hexa = document.querySelector('#hexa');  //路径
    this.weTxt = document.querySelector('#we');  //we文字
    this.who = document.querySelector('#who');  //说明文字

    /*第二屏元素*/
    this.edito = document.querySelector('section.edito');  //第二屏的主体
    this.text_right = document.querySelector('h1.text-right');
    this.end = document.querySelector('div.end h3');
    this.structure = document.querySelector('#structure');  //自行车0零件1
    this.arrow = document.querySelector('#arrow');  //自行车0零件2
    this.size = document.querySelector('#size');  //自行车0零件3
    this.diameter = document.querySelector('#diameter');  //自行车0零件4
    this.sqrt = document.querySelector('#sqrt');  //自行车0零件5
    this.bike1 = document.querySelector('#bike1');  //自行车1
    this.draw = document.querySelector('#draw');  //自行车1骨架

    this.bike2 = document.querySelector('#bike2');  //自行车2
    this.saddle = document.querySelector('#saddle');  //自行车2车座
    this.foot21 = document.querySelector('#foot21');  //脚蹬子
    this.handlebar = document.querySelector('#handlebar');  //车把
    this.wheel22 = document.querySelector('#wheel22');  //前轮
    this.wheel21 = document.querySelector('#wheel21');  //后轮
    this.frame = document.querySelector('#frame'); //骨架
    this.foot22 = document.querySelector('#foot22');  //脚蹬子

    this.wind = document.querySelector('#wind');  //自行车3风
    this.wheel31 = document.querySelector('#wheel31');  //自行车3前轮
    this.wheel32 = document.querySelector('#wheel32');  //自行车3前轮
    this.foot31 = document.querySelector('#foot31');  //自行车3脚蹬子
    this.foot32 = document.querySelector('#foot32');  //自行车3脚蹬子

    this.bike4 = document.querySelector('#bike4');  //自行车4
    this.wheel41 = document.querySelector('#wheel41');  //自行车4前轮
    this.wheel42 = document.querySelector('#wheel42');  //自行车4前轮
    this.foot41 = document.querySelector('#foot41');  //自行车4脚蹬子
    this.foot42 = document.querySelector('#foot42');  //自行车4脚蹬子
    this.rocket = document.querySelector('#rocket');  //自行车4后座
    this.lamp = document.querySelector('#lamp');  //自行车4大灯

    /*第三屏元素*/
    this.blocks = document.querySelector('section.blocks');  //第三屏主体

    /*第四屏元素*/
    this.text_center = document.querySelector('h2.text-center');  //第四屏主体

}

Home.prototype.init = function(){
    /*当Loading动画完成时*/
    this.app.addEventListener('transitionend',function(){
        that.loaded && that.loaded();
    },false);
    /*当滚动滚动条时*/
    window.addEventListener('scroll',function(){
        that.scrollNew && that.scrollNew();
    },false);

    /*自行车0*/
    (function(){
        (function bikeDraw(){
            var draw1SVG = new Walkway({
                selector: '#bike0',
                duration: '600',
                easing: 'linear'
            });
            draw1SVG.draw();
            setTimeout(bikeDraw,5000)
        })();
        var isStructure = true;
        (function structure(){
            if(isStructure){
                that.structure.style.opacity = 1;
            }else{
                that.structure.style.opacity = 0;
            }
            isStructure = !isStructure;
            setTimeout(structure,5000)
        })();

        var isArrow = true;
        (function arrow(){
            if(isArrow){
                setTimeout(function(){
                    that.arrow.style.opacity = 1;
                },200);
            }else{
                setTimeout(function(){
                    that.arrow.style.opacity = 0;
                },200);
            }
            isArrow = !isArrow;
            setTimeout(arrow,5000)
        })();

        var isSize = true;
        (function size(){
            if(isSize){
                setTimeout(function(){
                    that.size.style.opacity = 1;
                },400);
            }else{
                setTimeout(function(){
                    that.size.style.opacity = 0;
                },400);
            }
            isSize = !isSize;
            setTimeout(size,5000)
        })();

        var isDiameter = true;
        (function diameter(){
            if(isDiameter){
                setTimeout(function(){
                    that.diameter.style.opacity = 1;
                },600);
            }else{
                setTimeout(function(){
                    that.diameter.style.opacity = 0;
                },600);
            }
            isDiameter = !isDiameter;
            setTimeout(diameter,5000)
        })();

        var isSqrt = true;
        (function sqrt(){
            if(isSqrt){
                setTimeout(function(){
                    that.sqrt.style.opacity = 1;
                },800);
            }else{
                setTimeout(function(){
                    that.sqrt.style.opacity = 0;
                },800);
            }
            isSqrt = !isSqrt;
            setTimeout(sqrt,5000)
        })();
    })();

    /*自行车2*/
    (function(){
        var isBike2 = true;
        (function bike2(){
            if(isBike2){
                setTimeout(function(){
                    that.wheel22.style.transform = 'matrix(1, 0, 0, 1, -40, -12)';
                },200);
                setTimeout(function(){
                    that.wheel21.style.transform = 'matrix(1, 0, 0, 1, 40, -12)';
                },400);
                setTimeout(function(){
                    that.foot21.style.transform = 'matrix(1, 0, 0, 1, 45, 30)';
                },600);
                setTimeout(function(){
                    that.foot22.style.transform = 'matrix(1, 0, 0, 1, -6, -13)';
                },800);
                setTimeout(function(){
                    that.saddle.style.transform = 'matrix(1, 0, 0, 1, 12, 15)';
                },1000);
                setTimeout(function(){
                    that.handlebar.style.transform = 'matrix(1, 0, 0, 1, -10, 20)';
                },1200);
                setTimeout(function(){
                    that.bike2.style.animation = 'elastic .8s';
                },1500);

            }else{
                setTimeout(function(){
                    that.wheel22.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                },200);
                setTimeout(function(){
                    that.wheel21.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                },400);
                setTimeout(function(){
                    that.foot21.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                },600);
                setTimeout(function(){
                    that.foot22.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                },800);
                setTimeout(function(){
                    that.saddle.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                },1000);
                setTimeout(function(){
                    that.handlebar.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                },1200);
                setTimeout(function(){
                    that.bike2.style.animation = '';
                },1500);
            }
            isBike2 = !isBike2;
            setTimeout(bike2,3000)
        })();

    })();

    /*自行车3*/
    (function(){
        /*风的背景*/
        var timer = null;
        var step = 120;
        cancelAnimationFrame(timer); //执行动画前,先做清空处理
        timer = requestAnimationFrame(function fn(){
            step -= 10;
            if(step > -120){
                that.wind.style.transform = 'matrix(1, 0, 0, 1, '+step+', 0)';
            }else{
                step = 120;
            }
            timer = requestAnimationFrame(fn);
        });

        /*
        *自行车3的轮胎和脚蹬旋转动画，
        *@keyframes旋转动画会有卡顿的问题
        * */
        var isRotate360 = 0;
        requestAnimationFrame(function fn(){
            isRotate360 += 10;
            that.wheel31.style.transform = 'rotate('+isRotate360+'deg)';
            that.wheel32.style.transform = 'rotate('+isRotate360+'deg)';
            that.foot31.style.transform = 'rotate('+isRotate360+'deg)';
            that.foot32.style.transform = 'rotate('+isRotate360+'deg)';
            requestAnimationFrame(fn);
        });
    })();

    /*自行车4*/
    (function(){
        /*旋转的轮胎和脚蹬*/
        var isRotate360 = 0;
        requestAnimationFrame(function fn(){
            isRotate360 += 10;
            that.wheel41.style.transform = 'rotate('+isRotate360+'deg)';
            that.wheel42.style.transform = 'rotate('+isRotate360+'deg)';
            that.foot41.style.transform = 'rotate('+isRotate360+'deg)';
            that.foot42.style.transform = 'rotate('+isRotate360+'deg)';
            requestAnimationFrame(fn);
        });
        /*后座和车灯*/
        var isRock = true;
        (function rock(){
            if(isRock){
                that.rocket.style.opacity = 1;
                that.lamp.style.opacity = 1;
                that.rocket.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
                that.lamp.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
            }else{
                that.rocket.style.opacity = 0;
                that.lamp.style.opacity = 0;
                that.rocket.style.transform = 'matrix(1, 0, 0, 1, -150, 0)';
                that.lamp.style.transform = 'matrix(1, 0, 0, 1, 150, 0)';
            }
            isRock =!isRock;
            setTimeout(rock,2500)
        })();

        /*车身后仰*/
        (function rock(){
                that.bike4.style.transform = 'rotate(-15deg)';
           setTimeout(function(){
               that.bike4.style.transform = 'rotate(0deg)';
           },400);
            setTimeout(rock,4000)
        })();
    })();
};

Home.prototype.loaded = function(){
    /*天空元素移入*/
    that.sky.style.opacity = 1;
    that.sky.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    /*当天空元素移入结束时-执行云彩飘动动画*/
    that.sky.addEventListener('transitionend',function(){
        that.skyMoveEnd && that.skyMoveEnd();
    },false);

    /*水波移入*/
    var timer = null;
    var waterStarStep = 100;
    cancelAnimationFrame(timer); //执行动画前,先做清空处理
    timer = requestAnimationFrame(function fn(){
        waterStarStep -= 2;
        if(waterStarStep >= 0){
            that.water.style.transform = 'matrix(1,0,0,1,0,'+waterStarStep+')';  //Y轴方向位移
            that.water.style.opacity = 1-waterStarStep/100;  //透明度改变
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });

    /*水波移入完成时-开始横向运动*/
    setTimeout(function(){
        var timer = null;
        var waterEndStep = 0;
        cancelAnimationFrame(timer); //执行动画前,先做清空处理
        timer = requestAnimationFrame(function fn(){
            waterEndStep -= 1;
            if(waterEndStep >= -66){
                that.water.style.transform = 'matrix(1, 0, 0, 1,'+waterEndStep+', 0)';  //Y轴方向位移
            }else{
                waterEndStep = 0;
            }
            timer = requestAnimationFrame(fn);
        });

        /*码头渐入*/
        that.dock.style.opacity = 1;
        that.dock.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        /*码头动画完成时↓↓↓*/
        that.dock.addEventListener('transitionend',function(){
            that.dockMoveEnd && that.dockMoveEnd();
        },false);

    },1000);

    Home.prototype.loaded = null;
};

/*云彩开始飘动*/
Home.prototype.skyMoveEnd = function(){
    var step = 0;
    /*
    //这种方法在页面失去焦点一段时间回来时,会失控
    (function cloudsMove(){
     var num = that.clouds.style.transform.replace(/[^0-9]/g,"");  //水平方向偏移值
     if(num < that.wWidth){
     step += 40;
     that.clouds.style.transform = 'translateX('+step+'px)';
     }else{
     that.clouds.style.transform = '';
     }
     setTimeout(cloudsMove,3000)
     })();*/
    requestAnimationFrame(function fn(){
        var num = (parseInt(that.clouds.style.transform)+'').replace(/[^0-9]/g,"");  //水平方向偏移值
        if(num < that.wWidth){
            step += 0.3;
            that.clouds.style.transform = 'translateX('+step+'px)';
        }else{
            that.clouds.style.transform = 'translateX(0px)';
        }
        requestAnimationFrame(fn);
    });

    Home.prototype.skyMoveEnd = null;  //确保函数执行一次
};

/*码头运动完成时*/
Home.prototype.dockMoveEnd = function(){
    /*最前面的建筑渐入*/
    that.plan1.style.opacity = 1;
    that.plan1.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    /*当plan1动画完成时*/
    this.plan1.addEventListener('transitionend',function(){
        that.plan1MoveEnd && that.plan1MoveEnd();
    },false);
    /*两侧的房子向中间移动*/
    that.wharehouse.style.opacity = 1;
    that.wharehouse.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    that.house.style.opacity = 1;
    that.house.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    that.lu.style.opacity = 1;
    that.lu.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';

    Home.prototype.dockMoveEnd = null;  //确保函数执行一次
};

Home.prototype.plan1MoveEnd = function(){
    /*中间层的建筑出现*/
    that.plan2.style.opacity = 1;
    that.plan2.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    /*当plan2动画完成时*/
    this.plan2.addEventListener('transitionend',function(){
        that.plan2MoveEnd && that.plan2MoveEnd();
    },false);

    Home.prototype.plan1MoveEnd = null;  //确保函数执行一次
};

Home.prototype.plan2MoveEnd = function(){
    /*最后层的建筑出现*/
    that.plan3.style.opacity = 1;
    that.plan3.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    /*动态添加过去，之后可以动态改变*/
    that.we_logo.style.transition = 'transform .3s ease-in-out';
    that.hexa.style.transition = 'transform .2s ease-in-out';
    that.weTxt.style.transition = 'transform .5s ease-in-out';
    that.who.style.transition = 'all 1s ease-in-out';
    setTimeout(function(){
        /*logo路径转圈*/
        that.we_logo.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.hexa.style.opacity = '1';
    },17);
    setTimeout(function(){
        /*we文字出现*/
        that.weTxt.style.opacity = '1';
        that.we_logo.style.transition = 'all .4s ease-in-out';  //改变过渡时间让文字出现的没有那么快
    },300);
    setTimeout(function(){
        /*logo后面的文字出现*/
        that.we_logo.style.width = '360px';
        that.we_logo.style.marginLeft = '-150px';
    },360);
    setTimeout(function(){
        /*logo下面的两行文字向上渐入出项*/
        that.who.style.opacity = 1;
        that.who.style.transform = 'matrix(1, 0, 0, 1, 0, 20)';
        /*当两段文字动画完成时*/
        this.who.addEventListener('transitionend',function(){
            that.whoMoveEnd && that.whoMoveEnd();
        },false);
    },400);

    Home.prototype.plan2MoveEnd = null;  //确保函数执行一次
};

Home.prototype.whoMoveEnd = function(){
    that.bike.style.transition = 'transform 3s ease-in-out';  //自行车跑3秒
    that.ring1.style.transition = 'opacity .2s ease-in-out';  //三环显示
    that.ring2.style.transition = 'opacity .2s ease-in-out';  //三环显示
    that.ring3.style.transition = 'opacity .2s ease-in-out';  //三环显示

    setTimeout(function(){
        that.bike.style.transform = 'matrix(1, 0, 0, 1, 1500, 0)';
    },17);
    /*自行车运动完成时,电车开始跑*/
    this.bike.addEventListener('transitionend',function(){
        that.bikeMoveEnd && that.bikeMoveEnd();
    },false);

    /*三环延迟显示,制造自行车经过的场景*/
    setTimeout(function(){
        that.ring3.style.opacity = 1;
    },1100);
    setTimeout(function(){
        that.ring2.style.opacity = 1;
    },1300);
    setTimeout(function(){
        that.ring1.style.opacity = 1;
    },1600);

    /*往返的电车*/
    that.tramway.style.transition = 'transform 9s ease-in-out';  //电车运动时间
    var isTramwayMove = true;
    (function tramwayMove(){
        if(isTramwayMove){
            setTimeout(function(){
                that.tramway.style.transform = 'matrix(1, 0, 0, 1, 3000, 0)';
            },17);
        }else{
            setTimeout(function(){
                that.tramway.style.transform = 'matrix(1, 0, 0, 1, -3000, 0)';
            },17);
        }
        isTramwayMove = !isTramwayMove;
        setTimeout(tramwayMove,12000)
    })();

    Home.prototype.whoMoveEnd = null;  //确保函数执行一次
};

Home.prototype.bikeMoveEnd = function(){
    /*吊车-手机*/
    that.mobile.style.transition = 'transform .8s ease-in-out';  //电车运动时间
    that.windows.style.transition = 'fill .6s ease-in-out';  //电车运动时间
    var isMobileMove = true;
    (function tramwayMove(){
        if(isMobileMove){
            setTimeout(function(){
                that.mobile.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
            },17);
        }else{
            setTimeout(function(){
                that.mobile.style.transform = 'matrix(1, 0, 0, 1, 0, -20)';
            },17);
        }
        isMobileMove = !isMobileMove;
        setTimeout(tramwayMove,3000)
    })();
    /*窗子开关灯*/
    var isWindows = true;
    (function tramwayMove(){
        if(isWindows){
            setTimeout(function(){
                that.windows.style.fill = 'rgba(255, 255, 255, 1)';
            },17);
        }else{
            setTimeout(function(){
                that.windows.style.fill = 'rgba(255, 255, 255, 0)';
            },17);
        }
        isWindows = !isWindows;
        setTimeout(tramwayMove,4000)
    })();

    /*当滚动滚动条时*/
    window.addEventListener('scroll',function(){
        that.scroll && that.scroll();
    },false);

    Home.prototype.bikeMoveEnd = null;//确保函数执行一次
};

Home.prototype.scroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    that.bg_rect.style.transition = 'fill .8s ease-in-out';
    that.plan1.style.transition = 'transform 2.1s ease-in-out';
    that.plan2.style.transition = 'transform 2.2s ease-in-out';
    that.plan3.style.transition = 'transform 2s ease-in-out';
    that.tram.style.transition = 'transform 2s ease-in-out';
    if(scrollTop === 0){
        that.bg_rect.style.fill = 'rgb(28, 41, 86)';
        that.sky.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.plan1.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.plan2.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.plan3.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.tram.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }else if(scrollTop > 60){
        that.bg_rect.style.fill = 'rgb(28, 66, 103)';  //背景变色
        that.sky.style.transform = 'matrix(1, 0, 0, 1, 0, 100)';  //天空向下位移
        that.plan1.style.transform = 'matrix(1, 0, 0, 1, 0, -100)';  //最前面的建筑上移
        that.plan2.style.transform = 'matrix(1, 0, 0, 1, 0, -150)';  //中间的建筑上移
        that.plan3.style.transform = 'matrix(1, 0, 0, 1, 0, -250)';  //最后面的建筑上移
        that.tram.style.transform = 'matrix(1, 0, 0, 1, 0, -100)';
    }
};
/*第二屏之后的滚动*/
Home.prototype.scrollNew = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    /*第二屏标题从两边向中间靠拢*/
    if( (that.edito.offsetTop + 110 - that.wHeight - scrollTop) < 0 ){
        that.text_right.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.text_right.style.opacity = 1;
        that.end.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        that.end.style.opacity = 1;
    }
    /*第三屏的渐入效果*/
    if((that.blocks.offsetTop + 50 - that.wHeight - scrollTop) < 0 ){
        that.blocks.style.opacity = 1;
        that.blocks.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
    /*第四屏的渐入效果*/
    if((that.text_center.offsetTop + 50 - that.wHeight - scrollTop) < 0 ){
        that.text_center.style.opacity = 1;
        that.text_center.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
};

var h = new Home;
h.init();