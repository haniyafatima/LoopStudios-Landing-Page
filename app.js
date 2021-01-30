gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
end: "center"
  }
}).from(".about" , {x:100 , opacity: 0 , duration: 2})

gsap.timeline({
  scrollTrigger: {
    trigger: ".VRimg",
end: "center"
  }
}).from(".VRimg" , {x:-100 , opacity: 0 , duration: 2})

gsap.timeline({
  scrollTrigger: {
    trigger: ".OurCreations",
end: " center end"
  }
}).from(".creations" , {opacity: 0 , duration: 1 , delay: 0.5})
