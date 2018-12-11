// 入口函数
window.addEventListener('load',function(){
    // 获取元素
    var header=document.getElementById("header");
    var slideshow=document.getElementById("slideshow");
    var seckillTime=document.querySelector(".seckill-time");
    var spanList=document.querySelectorAll('.seckill-time span');


     //头部背景颜色渐变部分
    window.addEventListener('scroll',function(){
        // 获取轮播图盒子的高度
        var slideshowHight=slideshow.offsetHeight;
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var opacity=scrollTop/slideshowHight;
        console.log(scrollTop);
        console.log(slideshowHight);
        
        
        // console.log(opacity);
        header.style.backgroundColor='rgba(222, 24, 27,'+opacity+')';
       
        
    })


    //秒杀部分
    // console.log(spanList);
    // console.log(seckillTime);
    // 后台时间来由:获取未来某一时刻-此时时刻
    // 获取未来某个时刻,单位是毫秒
    var futureTime=new Date(2018,11,10,23,45,00).getTime();
    //获取现在时刻.单位是毫秒
    var nowTime=new Date().getTime();
    // console.log(futureTime);
    // console.log(nowTime);
     // 计算时分秒
     var time=(futureTime-nowTime)/1000;
    //  console.log(time);
    //  var time=1;
     updateTime();
    var timeId=setInterval(function(){
        time--;
        if(time>=0){
           updateTime()
        }
        else {
            clearInterval(timeId);
        }
       
    },1000);
    function updateTime(){
        var hour=time/3600;
        var minute=time%3600/60;
        var second=time%60;
        spanList[0].innerHTML=Math.floor(hour/10);
        spanList[1].innerHTML=Math.floor(hour%10);
        spanList[3].innerHTML=Math.floor(minute/10);
        spanList[4].innerHTML=Math.floor(minute%10);
        spanList[6].innerHTML=Math.floor(second/10);
        spanList[7].innerHTML=Math.floor(second%10);
    }
    
    // 轮播图部分
    // 原生js方法
    


        // // 利用框架
      new Swiper('.swiper-container',{
           direction:'horizontal',
           loop:true,
           pagination:{
               el:'.swiper-pagination',
           },
           autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
           },
        //    effect : 'cube',
       })

},false)