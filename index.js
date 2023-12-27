const body =document.querySelector('body');
const tri = document.querySelector('.tri');
const ple  = document.querySelector('.ple');
const dob = document.querySelector('.do');
const ble = document.querySelector('.ble');
const ve= document.querySelector('.ve');

const titlebox1 = document.querySelector('.title-line-1');
const titlebox2 = document.querySelector('.title-line-2');
const titlebox3 = document.querySelector('.title-line-3');
const titlebox4 = document.querySelector('.title-line-4');
const titlebox5 = document.querySelector('.title-line-5');

const containerOne = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');
const containerThree = document.querySelector('.container-three');
const containerFour = document.querySelector('.container-four');
const containerFive = document.querySelector('.container-five');
const containerSix = document.querySelector('.container-six');

const mainContainer= document.querySelector('.container-main-outside');
const mainContainerBrown= document.querySelector('.container-brown');


tri.addEventListener('click', function () {
    gsap.to(containerSix, { opacity: 0, duration: 0.3});
    gsap.to(containerTwo, { opacity: 0, duration: 0.4, onComplete: checkComplete});
    gsap.to(containerThree, { opacity: 0, duration: 0.4, onComplete: checkComplete});
    gsap.to(containerFour, { opacity: 0, duration: 0.4, onComplete: checkComplete});
    gsap.to(containerFive, { opacity: 0, duration: 0.4 , onComplete: checkComplete});
   
    
  });
  let completedAnimations = 0;

  // Callback function to check if all animations are complete
  function checkComplete() {
    completedAnimations++;

    if (completedAnimations === 4) {
        // All animations are complete, trigger the background color change
        gsap.to(document.body, { backgroundColor: 'rgb(183,140,84)', duration: 0.5 });
        gsap.to(mainContainer, {
          display: 'none',
          duration: 0.5,
          onComplete: function () {
            // This animation will start after mainContainer animation is complete
            gsap.fromTo(
              mainContainerBrown,
              { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 0, scale: 0 },
              { height: '700px', scale: 1, duration: 0.3,onComplete: function () {
               
                gsap.to(mainContainerBrown, { opacity: 1, duration: 0.5 });
              }}
            );
            
          }
        });
      }
}

ple.addEventListener('mouseenter', function () {
  gsap.to(titlebox1, { visibility: 'hidden', duration: 0.3 });
  gsap.to(titlebox2, { visibility: 'visible', duration: 0.3 });
});

ple.addEventListener('mouseleave', function () {
  gsap.to(titlebox2, { visibility: 'hidden', duration: 0.3 });
  gsap.to(titlebox1, { visibility: 'visible', duration: 0.3 });
});

dob.addEventListener('mouseenter', function () {
    gsap.to(titlebox1, { visibility: 'hidden', duration: 0.3 });
    gsap.to(titlebox3, { visibility: 'visible', duration: 0.3 });
});
  
dob.addEventListener('mouseleave', function () {
    gsap.to(titlebox3, { visibility: 'hidden', duration: 0.3 });
    gsap.to(titlebox1, { visibility: 'visible', duration: 0.3 });
});

ble.addEventListener('mouseenter', function () {
    gsap.to(titlebox1, { visibility: 'hidden', duration: 0.3 });
    gsap.to(titlebox4, { visibility: 'visible', duration: 0.3 });
});
  
ble.addEventListener('mouseleave', function () {
    gsap.to(titlebox4, { visibility: 'hidden', duration: 0.3 });
    gsap.to(titlebox1, { visibility: 'visible', duration: 0.3 });
});
ve.addEventListener('mouseenter', function () {
    gsap.to(titlebox1, { visibility: 'hidden', duration: 0.3 });
    gsap.to(titlebox5, { visibility: 'visible', duration: 0.3 });
});
  
ve.addEventListener('mouseleave', function () {
    gsap.to(titlebox5, { visibility: 'hidden', duration: 0.3 });
    gsap.to(titlebox1, { visibility: 'visible', duration: 0.3 });
});