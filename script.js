// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;

  // wheel.style.transform = `rotate(300deg)`;

  startButton.addEventListener('click', () => {
    // Disable button during spin
    
    startButton.style.pointerEvents = 'none';

    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);

    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';

    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;

    // Apply the blur
    wheel.classList.add('blur');
    
    console.log(deg);

  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;

    let x = 0;
    if(actualDeg < 30){
      x = 150;
    }else if(actualDeg < 60){
      x = 800;
    }else if(actualDeg < 90){
      x = 1100;
    }else if(actualDeg < 120){
      x = 550;
    }else if(actualDeg < 150) { 
      x = 0;
    }else if(actualDeg < 180) {
      x = 400;
    }else if(actualDeg < 210) {
      x = 350;
    }else if(actualDeg < 240) {
      x = 600;
    }else if(actualDeg < 270) {
      x = 250;
    }else if(actualDeg < 300) {
      x = 700;
    }else if(actualDeg < 330) {
      x = 'Jackpot';
    }else if(actualDeg < 360) {
      x = 100;
    }else{
      x = 'other';            
    }

    console.log('Point is : '+x);
  });
  
})();
