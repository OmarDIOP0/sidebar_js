var tl = gsap.timeline({
    defaults:{
        opacity:0,
        ease:'linear',
        duration:1,
    }
})
tl.fromTo('.sidebar',{width:0},{
    opacity:1,
    width:"30%",
});
tl.fromTo('.list',{x:0},{opacity:1,x:25})
tl.fromTo('.main-img',{x:0},{opacity:1});
tl.fromTo('.content',{x:100},{opacity:1,x:0})




// const sidebar = document.querySelector('.sidebar');
// const btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     sidebar.classList.toggle('hide');
//     btn.classList.toggle('hideBtn');
// })
// gsap.set('.box',{
//     opacity:1,
//     background:'yellow',
// })
// gsap.to(".box",{
//     y:400,
//     duration:30,
//     yoyo:true,
//     repeat:-1
// })
// gsap.from('.box1',{
//     y:400,
//     duration:3,
//     ease:"linear",
//     repeat:-1,
//     yoyo:true,
// })
// gsap.fromTo('.box2',{
//     y:-200,opacity:0,
//    },{
//     opacity:1,
//     y:200,
//     duration:3,
//     ease:'linear',
//     repeat:-1,
//     yoyo:true,
//    })
