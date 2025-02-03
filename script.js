var overlay = document.querySelector('#overlay');
var closeBtn = document.querySelector('#closebtn');

var tl2 = gsap.timeline();
closeBtn.addEventListener('click', function(){
tl2.reverse();

setTimeout(function(){
    var worksample = document.querySelector('#worksample');
    worksample.style.display ='none';

},1500)

});


let timeline = gsap.timeline();

timeline.to('#overlay',{
    width:2000,
    height:2000,
    duration:1,
    expo:'expo.inOut'
})

.to('#overlay h1 span',{
    top:'35%',
    duration:1,
     delay:.3,
    expo:'expo.inOut'
})

.to('#overlay h1 span',{
    top:'-100%',
    duration:1,
    delay:1,
    expo:'expo.inOut'
})

.to('#overlay ',{
    opacity:0,
    duration:1,
    delay:.5,
    onComplete:function(){
        overlay.style.display ='none'
    },
    
    expo:'expo.inOut'
})

timeline.from('#nav h4',{
    x:30,
    duration:.5,
    opacity:0,
    delay:1,
    expo:'expo.inOut'
})

.from('#nav #icon i',{
    stagger:.2,
    opacity:0,
    duration:0.5,
    x:20,
    expo:'expo.inOut'
})

.from('#maindets .line',{
    width:0,
    stagger:.3,
    duration:1,
    delay:-.5,
    expo:'expo.inOut'
})

.from('#maindets .dets',{
    y:30,
    stagger:.2,
    duration:1,
    delay:-.4,
    opacity:0,
    expo:'expo.inOut'
})

.from('#scroll',{
     
    opacity:0,
    duration:1,
    delay:.4,
    expo:'expo.inOut'
})

.from('#right #links a',{
    stagger:.2,
    opacity:0,
    duration:.6,
    delay:-.4,
    x:30,
    ease:'expo.inOut',
    
}) 

function animateTheLayer(){  

   
    tl2.to('#rightoverlay',{
        duration:1.5,
        delay:13,
        left:0,
         ease:'expo.inOut',
         onComplete: function(){
             var worksample = document.querySelector('#worksample');
             worksample.style.display ='initial';

            }
        })
             

    .from('#rightoverlay h3',{
        duration:1,
        x:40,
        opacity:0,
         ease:'expo.inOut',
         
         
        })

        .from('#rightoverlay h3 span',{
            duration:1,
            delay:-.6,
            opacity:0,
             ease:'expo.inOut',
             
             
            })

            .from('#rightoverlay .work',{
                duration:1,
                 opacity:0,
                 ease:'expo.inOut',
                })

                .from('#rightoverlay .work h4',{
                    stagger:.3,
                    x:30,
                    duration:.6,
                     opacity:0,
                     ease:'expo.inOut',
                    })

                    
                .from('#rightoverlay .work .hold img',{
                    stagger:.3,
                    x:'100%',
                    duration:.8,
                     delay:-.4,
                     opacity:0,
                     ease:'expo.inOut',
                    })

                            
                .from('#rightoverlay .workcate .main',{
                
                    x:90,
                    duration:1,
                     
                     opacity:0,
                     ease:'expo.inOut',
                    })
                 
                            
                .from('#rightoverlay .workcate .mainpic ',{
                    
                    
                    duration:1,
                     delay:-.4,
                     opacity:0,
                     ease:'expo.inOut',
                    })

                            
                .from('#rightoverlay .workcate .maindets .n',{
                    stagger:.3,
                    y:'100%',
                    duration:.8,
                     delay:-.4,
                     opacity:0,
                     ease:'expo.inOut',
                    })

                            
                .from('#rightoverlay .workcate .main i',{
                    
                    x:'100%',
                    duration:.8,
                     delay:-.4,
                     opacity:0,
                     ease:'expo.inOut',
                    })


                    .from('#rightoverlay #middle .b',{
                        stagger:.5,
                        x:'100%',
                        duration:.8,
                         delay:-.4,
                         opacity:0,
                         ease:'expo.inOut',
                        })

                        
                    .from('#rightoverlay #middle #box1 .c',{
                        stagger:.2,
                        x:30,
                        duration:.5,
                         delay:-.4,
                         opacity:0,
                         ease:'expo.inOut',
                        })

                             
                    .from('#rightoverlay #middle .d',{
                        stagger:.2,
                        
                        duration:.5,
                         delay:-.4,
                         opacity:0,
                         ease:'expo.inOut',
                        })

                             
                    .from('#rightoverlay #middle .e',{
                        stagger:.5,
                        x:30,
                        duration:.5,
                         delay:-.4,
                         opacity:0,
                         ease:'expo.inOut',
                        })

                        .from('#rightoverlay #middle .g',{
                            stagger:.2,
                            x:30,
                            duration:.5,
                             delay:-.4,
                             opacity:0,
                             ease:'expo.inOut',
                            })
                    
                    
                    
                 
 }
 animateTheLayer();



    



gsap.from('#centre img',{
    opacity:0,
    duration:2,
    delay:9,
    ease:'expo.inOut',
}) 

