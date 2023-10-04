gsap.to(".lshift", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 100%",
    end: "top 20%",
    scrub: 2,
  },
  x: -80,
});
gsap.to(".rshift", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 100%",
    end: "top 30%",
    scrub: 2,
  },
  x: 80,
});
gsap.to("#main1 #content h3", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
  },
  y: 20,
  opacity: 0,
});

// document.querySelectorAll(".enlarge").forEach(function(elem){
//   elem.addEventListener("mousemove", function(){
    
//   })
//   elem.addEventListener("mouseleave", function(){

//   })
// })

gsap.from("#main2 #img1", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 70%",
    end: "100% 60%",
    scrub: 2,
    // markers : true
  },
  top : "70%",
 left : "-30%",
  rotation : 0,
  // opacity : 1,
  width : "40vw"
});

gsap.from("#main2 #img2", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 40%",
    end: "90% 70%",
    scrub: 2,
    // markers : true
  },
  top : "100%",
  right : "-30%",
  rotation : 0,
  // opacity : 1,
  width : "40vw"
});


gsap.to("#cursor img", {

  rotation : 360,
  duration : 5,
  repeat : -1,
  ease : "linear"

})

window.addEventListener("mousemove", function(dets){
  function abc(){
    document.querySelector("#cursor").style.top = `${dets.clientY}px`;
    document.querySelector("#cursor").style.left = `${dets.clientX}px`;
  }
  window.requestAnimationFrame(abc);
})

document.querySelectorAll(".img #content").forEach(function(image){
    image.addEventListener("mouseover", function(){
        this.style.filter = "grayscale(0%)";
        document.querySelector("#cursor").style.display = "initial";
      })
      image.addEventListener("mouseleave", function(){
        this.style.filter = "grayscale(100%)";
        document.querySelector("#cursor").style.display = "none";
    })

})

gsap.set("#getmehere", {
    top : -20
  });
gsap.from("#getmehere", {
    scrollTrigger: {
      trigger: "#sj-footer",
      start: "top 80%",
      end: "top 50%",
      scrub: 4
    },
    y: 200
  });



document.querySelector("#sj-footer #getmehere").addEventListener("mouseover", function(){
    gsap.to("#sj-footer #getmehere svg:nth-child(2)", {
        rotation : 320
    })
})
document.querySelector("#sj-footer #getmehere").addEventListener("mouseleave", function(){
    gsap.to("#sj-footer #getmehere svg:nth-child(2)", {
        rotation : 0
    })
})