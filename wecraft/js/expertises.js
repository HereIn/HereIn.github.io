/**
 * Expertises 页面JS文件.
 */

/*弹窗页面数据*/
var exp_data = [
    {
        img:'./images/skills/web.svg',
        h3:'Application web',  //图片alt属性也公用此值
        btn:['Symfony','NodeJS'],
        h1:'Application web',
        content:'Sous ce terme sont regroupées des réalisations comme la création ou la refonte d’un réseau social, d’un site e-commerce, de média à fort trafic, ect. Quelque soit la spécificité ou l’innovation de votre projet, nous prenons en charge le développement de votre application web.',
        content1:'Nous vous conseillons sur le choix des technologies et vous accompagnons aussi bien dans le développement des fonctionnalités de votre application que dans l’optimisation de l’expérience utilisateur.',
        note:'Maintenance : Ces projets sont développés dans une optique de long terme et de maintenabilité, afin de pouvoir garantir les évolutions futures.'
    },

    {
        img:'./images/skills/mobile.svg',
        h3:'Application mobile',  //图片alt属性也公用此值
        btn:['Ionic','React Native','iOS / Swift','Android / Java'],
        h1:'Application mobile',
        content:'Les applications mobiles représentent désormais plus de la moitié du temps passé sur les terminaux numériques.',
        content1:'Nous vous accompagnons dans toutes les étapes de la création de votre projet mobile : de sa conception à sa publication, puis lors de sa maintenance. En fonction de votre projet et de ses contraintes, nous vous proposons plusieurs solutions techniques allant des technologies hybrides jusqu’aux natives.',
        note:'Ergonomie : Nous apportons un soin particulier à l’expérience utilisateur, clé de la réussite d’une application mobile.'
    },

    {
        img:'./images/skills/api.svg',
        h3:'API web',  //图片alt属性也公用此值
        btn:['Symfony','NodeJS'],
        h1:'API web',
        content:'Les API web travaillent dans lombr e. Derrière cet acronyme se cache un outil permettant de partager vos données dans un format standardisé. Souvent présentes dans les projets mobiles, elles constituent un pont entre votre contenu et votre application.',
        content1:'Nous prenons en charge leur conception, réalisation, déploiement et sécurisation aussi bien sur les nouveaux projets que sur les systèmes existants.',
        note:'Une vision globale : En nous confiant le développement de votre API comme celui de votre application mobile, notre équipe peut garantir un gain de temps de réalisation et une meilleure cohérence à votre projet.'
    },

    {
        img:'./images/skills/system.svg',
        h3:'Hébergement & système',  //图片alt属性也公用此值
        btn:['Linux','Cloud','PaaS'],
        h1:'Hébergement & système',
        content:'Nous vous accompagnons dans vos choix d"hébergement et d"infrastructure, afin de vous assurer les meilleures conditions pour votre application, notamment en terme de performance, de disponibilité et de coût.',
        note:'Scalabilité : Des partenaires d"expérience capables de vous accompagner dans l"accroissement de votre activité.'
    },

    {
        img:'./images/skills/software.svg',
        h3:'Applicatif métier',  //图片alt属性也公用此值
        btn:['Symfony','NodeJS','AngularJS','React'],
        h1:'Applicatif métier',
        content:'Il existe de nombreux outils sur le marché, mais ceux-ci ne répondent pas forcément à votre besoin. En effet, ces outils sont génériques alors que vos problématiques sont spécifiques. Pour répondre à cette problématique, il est parfois nécessaire de posséder un outil adéquat. <br><br> C’est pourquoi nous développons selon vos critères et votre cahier des charges, des outils capables de répondre à vos besoins spécifiques : intranet, ERP, planning, budget, facturation, commande et stocks, gestion électronique des documents, etc.',
        note:'Ergonomie : En plus de gérer vos besoins métiers, nous mettons aussi l’accent sur une expérience d’utilisation agréable et pratique en rupture avec les principaux logiciels du marché.'
    },

    {
        img:'./images/skills/event.svg',
        h3:'Site vitrine & événementiel',  //图片alt属性也公用此值
        btn:['CMS','Wordpress'],
        h1:'Site vitrine & événementiel<br><hr>',
        content:'Deux tiers des entreprises françaises sont présentes sur internet. Le développement de votre activité passe par une présence web optimisée. Notre équipe vous conseille dans le choix d’une solution, assure sa mise en place et vous forme si besoin à son utilisation. <br><br> Nous proposons également des solutions CMS qui vous permettront de garder une grande flexibilité sur votre contenu éditorial.',
        note:'Budget maitrisé : Ce type de solution permet à votre société d’être présente et de vendre sur internet pour un coût modéré.'
    },

    {
        img:'./images/skills/advice.svg',
        h3:'Accompagnement & conseil',  //图片alt属性也公用此值
        btn:['Expertise','Strategie','Webmarketing'],
        h1:'Accompagnement & conseil<br><hr>',
        content:'Nous avons accompagné depuis 2013 une grande variété de clients dans leur stratégie digitale. Nous avons su capitaliser sur ces expériences pour aujourd"hui proposer un accompagnement plus global, afin de choisir ensemble les solutions les plus adaptées à la réussite de votre projet. Autant dans la stratégie que dans les choix techniques, nous mettons notre savoir faire et notre vision à votre service.',
        note:'Au delà du simple prestataire, We Craft Apps se positionne à vos côtés comme un partenaire de confiance.'
    },

    {
        img:'./images/skills/design.svg',
        h3:'Design & ergonomie',  //图片alt属性也公用此值
        btn:['CSS3','JavaScript','GSAP','Responsive'],
        h1:'Design &amp; ergonomie<br><hr>',
        content:'88% des visiteurs ne reviendront pas en cas de mauvaise UX. En effet, le design et l’ergonomie sont les premières impressions qu’aura l’utilisateur sur votre service. <br><br> Grâce à une veille constante sur les tendances actuelles, nous sommes en mesure de vous proposer des créations modernes et intuitives. Nous les optimisons pour les différents supports (ordinateur, tablette, mobile) qui vous accompagnent dans votre quotidien.',
        note:'Au delà des apparences : Nous apportons un soin particulier à la réalisation des interfaces sur des problématiques comme les animations ou les performances.'
    },

    {
        img:'./images/skills/school.svg',
        h3:'Formation',  //图片alt属性也公用此值
        btn:['JavaScript','NodeJS','React'],
        h1:'Formation<br><hr>',
        content:'Bientôt disponible.'
    },

];
var exp_data_n = {}; //存贮筛选后的数据

var hex = document.getElementsByClassName('hex'); //9个六边形

var arrSix = Array.from(hex);  //将获取到的元素从类数组转成真正的数组

var arrSix_n = Array.from(hex).sort(function(){  //将数组中的元素的顺序打乱
    return Math.random()-0.5;
});

setTimeout(function(){
    arrSix_n.forEach(function(e,i){
        setTimeout(function(){
            e.style.opacity = 1;
            e.className += ' animate';
        },i*150);
        new HexClick(e);
    })
},1000);  //延迟1s后为每一个模块添加延迟动画

function HexClick(ele){
    var that = this;
    this.hexagon = document.querySelector('.modal');  //动态缩放的六边形
    this.content = document.querySelector('.modal > div');  //弹窗的内容部分
    this.remove = document.querySelector('.modal .remove');  //弹窗右上角的关闭按钮

    ele.addEventListener('click',function(){
        that.clic(this);  //当发生点击事件时,执行此方法
    });
}

HexClick.prototype.clic = function(targ){
    /*targ参数为触发点击事件的对象*/
    var that = this;
    this.x = targ.getBoundingClientRect().left - this.hexagon.getBoundingClientRect().width / 2 + 85;
    this.y = targ.getBoundingClientRect().top - this.hexagon.getBoundingClientRect().top / 2 + 89;

    this.content.style.opacity = this.remove.style.opacity = 0;
    this.content.style.transform = this.remove.style.transform = 'translate(0,100px)';
    this.content.removeEventListener('transitionend',this.back_con,false);

    /*event.currentTarget：该属性总是指向被绑定事件句柄的元素。而与之对比的event.target ，则是指向触发该事件的元素。*/

    document.body.style.overflow = 'hidden';  //隐藏页面滚动条
    document.querySelector('nav.main').style.cssText = 'transition: transform .6s; transform: translate(0,-100%)';//隐藏导航条

    this.hexagon.style.transform = 'translate3d('+this.x+'px,'+this.y+'px,0px)';  //首先将蓝色六边形定位到点击的对象位置
    setTimeout(function(){
        that.hexagon.style.cssText = 'transition: transform .6s; transform: translate3d(0px,0px,0px) scale(8,8)';
    },16);  //延迟一段时间后将多边形定位到页面中心并且逐渐放大

    this.hexagon.addEventListener('transitionend',that.moveEnd,false);
    this.hexagon.parent = this;  //指向构造函数
    /*
    * transitionend 事件会在 CSS transition 结束后触发.
    * 当transition完成前移除transition时，比如移除css的transition-property 属性，事件将不会被触发.
    * 如在transition完成前设置 display: none，事件同样不会被触发.
    * */
}
/*弹窗打开动画*/
HexClick.prototype.moveEnd = function(){
    var that = this.parent;  //指向构造函数
    this.removeEventListener('transitionend',that.back_hex,false);
    that.remove.parent = this.parent;  //把this添加为this.remove元素的属性用于向下传递
    this.style.cssText = 'background-color:#2e57ec; transform: matrix(1, 0, 0, 1, 0, 0)';  //添加背景色并重置样式
    that.content.style.transition = that.remove.style.transition = 'opacity .6s ease, transform .6s ease'; //添加过渡效果
    that.content.style.opacity = that.remove.style.opacity = 1;  //将内容和关闭按钮显示出来
    that.content.style.transform = that.remove.style.transform = 'translate(0,0)';  //将内容和关闭按钮移动至原处
    /*解决transitionend多次触发的暂时方法*/
    this.parent.remove.removeEventListener('click',that.clos);
    this.parent.remove.addEventListener('click',that.clos);
}

/*点击关闭执行的动画*/
HexClick.prototype.clos = function(){
    var that = this.parent;  //指向构造函数
    that.hexagon.removeEventListener('transitionend',that.moveEnd,false);  //点击差号时取消掉蓝色多边形的end事件/否则会触发
    that.content.style.opacity = that.remove.style.opacity = 0;  //将内容和关闭按钮显示出来
    that.content.style.transform = that.remove.style.transform = 'translate(0,100px)';  //将内容和关闭按钮移动至原处

    that.content.addEventListener('transitionend',that.back_con,false);
    that.content.parent = this.parent;
}

HexClick.prototype.back_con = function(){
    var that = this.parent;
    document.body.style.overflow = 'auto';  //显示页面滚动条
    document.querySelector('nav.main').style.cssText = 'transition: transform .6s; transform: translate(0,0)';//显示nav导航
    this.parent.hexagon.style.cssText = 'transform: translate3d(0px,0px,0px) scale(8,8); opacity:1';
    setTimeout(function(){
        that.hexagon.style.cssText = 'transition: transform .6s,opacity .6s; transform: translate3d('+that.x+'px,'+that.y+'px,0px) scale(0,0); opacity:0.6';
    });
    setTimeout(function(){
        that.hexagon.addEventListener('transitionend',that.back_hex,false);
    },200);  //
}
/*弹窗关闭运动结束后执行*/
HexClick.prototype.back_hex = function(){
    this.removeAttribute('style');
}




