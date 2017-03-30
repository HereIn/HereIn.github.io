/**
 *projets页面为滚动条事件动画
 */

function ProScroll(obj){
    var that = this
    this.wHeight = document.documentElement.clientHeight;  //浏览器可视区的高度
    this.btn = obj.getElementsByTagName('button')[0];  //获取到所有模块上的按钮

    window.addEventListener('scroll',function(){
        that.promove(obj);
    },false);

    /*模块上的按钮点击*/
    this.btn.addEventListener('click',function(){
        that.btnclick(obj);
    },false)

}

/*页面滚动时执行此函数*/
ProScroll.prototype.promove = function(obj){
    var main = obj.querySelector('.we-project .columns:first-child');  //获取到模块内容部分
    /*元素超出可视窗口底部一半的高度时触发事件*/
    if(obj.getBoundingClientRect().top <= this.wHeight-obj.offsetHeight/2){
        obj.style.cssText = 'transform: matrix(1, 0, 0, 1, 0, 0)';
        main.style.cssText = 'opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0)';
    }else{  //元素回到原来的位置
        obj.style.cssText = 'transform: matrix(1, 0, 0, 1, 0, 100)';
        main.style.cssText = 'opacity: 0; transform: matrix(1, 0, 0, 1, 0, 100)';
    }
}

/*按钮点击时执行此函数*/
ProScroll.prototype.btnclick = function(obj){
    var that = this;
    this.remove = obj.getElementsByClassName('remove')[0];
    obj.className += ' active';

    this.remove.addEventListener('click',function(){
        that.btnremove(obj);
    },false)
}

/*点击右上角的差号删除className_active*/
ProScroll.prototype.btnremove = function(obj){
    var reg = new RegExp('(\\s|^)' + 'active' + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
}


var aProject = Array.from(document.querySelectorAll('.we-project'));  //获取到所有的模块
aProject.forEach(function(e,i){
    new ProScroll(e);  //为每一个模块上添加上动画
});