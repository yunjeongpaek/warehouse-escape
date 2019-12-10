//When we click Start
//Write "Once upon a time" into our Story div

//Change the BG
// document.querySelector(".container").classlist.add("scary-bg");

var soundLose=new Audio("sounds/scream.mp3")
var soundCon=new Audio("sounds/walk.mp3")
var soundAd=new Audio("sounds/walk.mp3")
var soundtop=new Audio("sounds/inception.mp3")
var soundSpin=new Audio("sounds/spin.mp3")
var soundSteps=new Audio("sounds/steps.mp3")
var soundStep=new Audio("sounds/steps.mp3")
var soundWin=new Audio("sounds/win.mp3")
var soundNo=new Audio("sounds/no.mp3")
var soundStart=new Audio("sounds/thunder.mp3")
var soundButton=new Audio("sounds/knife.mp3")
var soundDing=new Audio("sounds/ding.mp3")
var soundWet=new Audio("sounds/wet.mp3")


// START BUTTON
document.querySelector(".start-btn").addEventListener("click", function() {
  soundStart.play();
  //Write the intro to our Story
  //not using document.Write
  document.querySelector(".story").innerHTML = "<br></br><p>You wake up in a dark warehouse. Your hands are tightly tied with a rope. </p><br><img src=images/warehouse.jpg></br>";
  //Remove start buttons
  document.querySelector(".start-btn").classList.add ("invisible");
  //Show our next buttons
  document.querySelector(".school-btn").classList.remove ("invisible");
  // loseSound.play();
  document.querySelector(".dino-btn").classList.remove("invisible");
  document.querySelector(".button-btn").classList.remove("invisible");
  });


// SCHOOL BUTTON
document.querySelector(".school-btn").addEventListener("click", function() {
  soundStart.pause();
  soundLose.play();
  // 1. change story
  document.querySelector(".story").innerHTML="<p>You faint from pain and get eaten by hundreds of rats.</p><br>Game Over</br><img src=images/scary-rat-teeth.jpg></img>"
  // 2. disable other BUTTONS
  document.querySelector(".school-btn").classList.add ("invisible");
  document.querySelector(".dino-btn").classList.add("invisible");
  document.querySelector(".button-btn").classList.add("invisible");
  // 3. Scroll to top
  document.querySelector(".story").scrollTop=0;
  });

  // Dino BUTTON
  document.querySelector(".dino-btn").addEventListener("click", function() {
    soundStart.pause();
    soundLose.play();
    // 1. change story
    document.querySelector(".story").innerHTML="<p>Your brain is damaged and now you don't remember why you were banging your head on the door.</p><br>Game Over</br><img src=images/brain.jpg></img>"
    // 2. disable other BUTTONS
    document.querySelector(".school-btn").classList.add ("invisible");
    document.querySelector(".dino-btn").classList.add("invisible");
    document.querySelector(".button-btn").classList.add("invisible");

    });

    // Button BUTTON
    document.querySelector(".button-btn").addEventListener("click", function() {
      soundStart.pause();
      soundButton.play();
      // 1. change story
      document.querySelector(".story").innerHTML="<p>A button came over and freed you.</p><br><img src=images/button.jpg></br></img>"
      // 2. disable other BUTTONS and continue
      document.querySelector(".school-btn").classList.add ("invisible");
      document.querySelector(".dino-btn").classList.add("invisible");
      document.querySelector(".button-btn").classList.add("invisible");
      document.querySelector(".leave-btn").classList.remove("invisible");
      document.querySelector(".attach-btn").classList.remove("invisible");
      // 3. Scroll to top
      document.querySelector(".story").scrollTop=0;

      });

      // leave BUTTON
      document.querySelector(".leave-btn").addEventListener("click", function() {
        soundButton.pause();
        soundLose.play();
        // 1. change story
        document.querySelector(".story").innerHTML="<p>How dare you not say thank you to the button! The button brings a needle and kills you.</p><br>Game Over</br><img src=images/needle.jpg></img>"
        // 2. disable other BUTTONS
        document.querySelector(".leave-btn").classList.add("invisible");
        document.querySelector(".attach-btn").classList.add("invisible");
        });

        // attach BUTTON
        document.querySelector(".attach-btn").addEventListener("click", function() {
          soundButton.pause();
          soundDing.play();
          // 1. change story
          document.querySelector(".story").innerHTML='<p>"Thank you, I finally belong somewhere. Would you like to open the door?"</p><br><img src=images/door.jpg></img></br>'
          // 2. disable other BUTTONS and continue
          document.querySelector(".leave-btn").classList.add("invisible");
          document.querySelector(".attach-btn").classList.add("invisible");
          document.querySelector(".door-btn").classList.remove("invisible");
          document.querySelector(".resist-btn").classList.remove("invisible");
          });

          document.querySelector(".resist-btn").addEventListener("click", function() {
            soundDing.pause();
            soundLose.play();
            // 1. change story
            document.querySelector(".story").innerHTML='<p>The ghosts in the warehouse now believe that you wish to stay with them. Forever.</p></p><br>Game Over</br><br><img src=images/play.gif></img></br>'
            // 2. disable other BUTTONS
            document.querySelector(".door-btn").classList.add("invisible");
            document.querySelector(".resist-btn").classList.add("invisible");
            });

            // door BUTTON
            document.querySelector(".door-btn").addEventListener("click", function() {
              soundDing.pause();
              soundCon.play();
              // 1. change story
              document.querySelector(".story").innerHTML="<p>You open the door and see a wandering shadow-like silhouette.</p><br><img src=images/silhouette.jpg></img></br>"
              // 2. disable other BUTTONS and continue
              document.querySelector(".door-btn").classList.add("invisible");
              document.querySelector(".resist-btn").classList.add("invisible");
              document.querySelector(".talk-btn").classList.remove("invisible");
              document.querySelector(".beam-btn").classList.remove("invisible");
              });

              document.querySelector(".talk-btn").addEventListener("click", function() {
                soundCon.pause();
                soundLose.play();
                // 1. change story
                document.querySelector(".story").innerHTML='<p>GRRRLDIFIOEOKLSMMXDKFKL!</p></p><br>Game Over</br><br><img src=images/grr.jpg></img></br>'
                // 2. disable other BUTTONS
                document.querySelector(".talk-btn").classList.add("invisible");
                document.querySelector(".beam-btn").classList.add("invisible");
                });
      //beam BUTTON
      document.querySelector(".beam-btn").addEventListener("click", function() {
        soundCon.pause();
        soundAd.play();
        // 1. change story
        document.querySelector(".story").innerHTML="<p>Shadows appear when light is blocked. Now that you provided light, the silhouette is gone. Now try moving upstairs.</p><br><img src=images/stairs.jpg></img></br>"
        // 2. disable other BUTTONS and continue
        document.querySelector(".talk-btn").classList.add("invisible");
        document.querySelector(".beam-btn").classList.add("invisible");
        document.querySelector(".move-btn").classList.remove("invisible");
        });

        //move BUTTON
        document.querySelector(".move-btn").addEventListener("click", function() {
          soundAd.pause();
          soundSteps.play();
          // 1. change story
          document.querySelector(".story").innerHTML="<p>Keep going...</p><br><img src=images/stairs.jpg></img></br>"
          document.querySelector(".move-btn").classList.add("invisible");
          document.querySelector(".movee-btn").classList.remove("invisible");
          });
          //movee BUTTON
          document.querySelector(".movee-btn").addEventListener("click", function() {
            soundSteps.pause();
            soundStep.play();
            // 1. change story
            document.querySelector(".story").innerHTML="<p>Continue going...</p><br><img src=images/stairs.jpg></img></br>"
            document.querySelector(".movee-btn").classList.add("invisible");
            document.querySelector(".moveee-btn").classList.remove("invisible");
            });
            //moveee BUTTON
            document.querySelector(".moveee-btn").addEventListener("click", function() {
              soundStep.pause();

              // 1. change story
              document.querySelector(".story").innerHTML='<p>At one point, you see your puppy that died a long time ago. "Do you recognize me? Follow me!"</p><br><img src=images/puppy.webp></img></br>';
              // 2. disable other BUTTONS and continue
              document.querySelector(".moveee-btn").classList.add("invisible");
              document.querySelector(".ignore-btn").classList.remove("invisible");
              document.querySelector(".puppy-btn").classList.remove("invisible");
              });


              //puppy BUTTON
              document.querySelector(".puppy-btn").addEventListener("click", function() {
                soundStep.pause();
                soundLose.play();
                // 1. change story
                document.querySelector(".story").innerHTML="<p>You're fooled. The demon got you.</p><br>Game Over</br><br><img src=images/demon.jpg></img></br>";
                // 2. disable other BUTTONS and continue
                document.querySelector(".ignore-btn").classList.add("invisible");
                document.querySelector(".puppy-btn").classList.add("invisible");
                });

                //ignore BUTTOn
                document.querySelector(".ignore-btn").addEventListener("click", function() {

                  var x= prompt("puppy's name?");
                  soundStep.pause();
                  soundSteps.play();
                  // 1. change story
                  document.querySelector(".story").innerHTML="You're smart enough to know that there's no way you can see "+x+" when you're still alive.<br><img src=images/stairs.jpg></img></br>";
                  // 2. disable other BUTTONS and continue
                  document.querySelector(".ignore-btn").classList.add("invisible");
                  document.querySelector(".puppy-btn").classList.add("invisible");
                  document.querySelector(".up-btn").classList.remove("invisible");
                  });
                  //up BUTTON
                  document.querySelector(".up-btn").addEventListener("click", function() {
                    soundSteps.pause();
                    soundStep.play();
                    // 1. change story
                    document.querySelector(".story").innerHTML='<p>Again, keep walking...</p><br><img src=images/stairs.jpg></img></br>';
                    // 2. disable other BUTTONS and continue
                    document.querySelector(".up-btn").classList.add("invisible");
                    document.querySelector(".upp-btn").classList.remove("invisible");
                    });
      //upp BUTTON
      document.querySelector(".upp-btn").addEventListener("click", function() {
        soundStep.pause();
        soundWet.play();
        // 1. change story
        document.querySelector(".story").innerHTML="<p>You finally step out of the warehouse. You are now in a beautiful forest. Then you remember of something that you have totally forgotten. What is the color of it?</p><br><img src=images/Forests.jpg></img></br>";
        // 2. disable other BUTTONS and continue
        document.querySelector(".upp-btn").classList.add("invisible");
        document.querySelector(".green-btn").classList.remove("invisible");
        document.querySelector(".red-btn").classList.remove("invisible");
        document.querySelector(".blue-btn").classList.remove("invisible");
        document.querySelector(".yellow-btn").classList.remove("invisible");
        });
        //green BUTTON
        document.querySelector(".green-btn").addEventListener("click", function() {
          soundStep.pause();
          soundNo.play();
          // 1. change story
          document.querySelector(".story").innerHTML="<p>Wrong!</p><br>Game Over</br><br><img src=images/alien.jpg></img></br>";
          // 2. disable other BUTTONS and continue
          document.querySelector(".green-btn").classList.add("invisible");
          document.querySelector(".red-btn").classList.add("invisible");
          document.querySelector(".blue-btn").classList.add("invisible");
          document.querySelector(".yellow-btn").classList.add("invisible");
          });
          //blue BUTTON
          document.querySelector(".blue-btn").addEventListener("click", function() {
            soundStep.pause();
            soundNo.play();
            // 1. change story
            document.querySelector(".story").innerHTML="<p>Wrong!</p><br>Game Over</br><br><img src=images/blue.jpg></img></br>";
            // 2. disable other BUTTONS and continue
            document.querySelector(".green-btn").classList.add("invisible");
            document.querySelector(".red-btn").classList.add("invisible");
            document.querySelector(".blue-btn").classList.add("invisible");
            document.querySelector(".yellow-btn").classList.add("invisible");
            });
            //yellow BUTTON
            document.querySelector(".yellow-btn").addEventListener("click", function() {
              soundStep.pause();
              soundNo.play();
              // 1. change story
              document.querySelector(".story").innerHTML="<p>Wrong!</p><br>Game Over</br><br><img src=images/yellow.jpg></img></br>";
              // 2. disable other BUTTONS and continue
              document.querySelector(".green-btn").classList.add("invisible");
              document.querySelector(".red-btn").classList.add("invisible");
              document.querySelector(".blue-btn").classList.add("invisible");
              document.querySelector(".yellow-btn").classList.add("invisible");
              });
              //red BUTTON
              document.querySelector(".red-btn").addEventListener("click", function() {
                soundWet.pause();
                soundSpin.play();
                // 1. change story
                document.querySelector(".story").innerHTML="<p>You detach the red button and spin it on the ground, as you've seen something similar in a movie. </p><br><img src=images/button.jpg></img></br>";
                // 2. disable other BUTTONS and continue
                document.querySelector(".green-btn").classList.add("invisible");
                document.querySelector(".red-btn").classList.add("invisible");
                document.querySelector(".blue-btn").classList.add("invisible");
                document.querySelector(".yellow-btn").classList.add("invisible");
                document.querySelector(".spin-btn").classList.remove("invisible");
                });
                //spin BUTTON
                document.querySelector(".spin-btn").addEventListener("click", function() {
                  var x= prompt("How many times does it spin?");
                  if (x>50){
                    soundSpin.pause();
                    soundtop.play();
                    document.querySelector(".story").innerHTML="<p>Too bad! You're trapped in a dream. </p><br>Game Over</br><br><img src=images/top.gif></img></br>";
                    document.querySelector(".spin-btn").classList.add("invisible");
                  }
                  else if (x<50){
                    soundSpin.pause();
                    soundWet.play();
                  // 1. change story
                  document.querySelector(".story").innerHTML="<p>Now that you know it's not a dream, all you need to do is finding your way out. There are two pathways: right and left.</p><br><img src=images/path.jpg></img></br>";
                  // 2. disable other BUTTONS and continue
                  document.querySelector(".spin-btn").classList.add("invisible");
                  document.querySelector(".right-btn").classList.remove("invisible");
                  document.querySelector(".left-btn").classList.remove("invisible");
                }});
                //left BUTTON
                document.querySelector(".left-btn").addEventListener("click", function() {
                  soundWet.pause();
                  soundNo.play();
                  // 1. change story
                  document.querySelector(".story").innerHTML='<p>That is not the "right" way!. </p><br>Game Over</br><br><img src=images/end.jpg></img></br>';
                  // 2. disable other BUTTONS and continue
                  document.querySelector(".right-btn").classList.add("invisible");
                  document.querySelector(".left-btn").classList.add("invisible");
                  });
                  //right BUTTON
                  document.querySelector(".right-btn").addEventListener("click", function() {
                    soundWet.pause();
                    soundWin.play();
                    // 1. change story
                    document.querySelector(".story").innerHTML="<p>Congratulations! You got the right way out.</p><br><img src=images/win.jpg></img></br>";
                    // 2. disable other BUTTONS and continue
                    document.querySelector(".right-btn").classList.add("invisible");
                    document.querySelector(".left-btn").classList.add("invisible");
                    });





//Functions are simply a list of commands to dos
