const textArray = [
  "With the right interaction flow, your engagement will grow.",
  "What do you get when you cross UI and art? a masterpiece!",
  "With the right user experience, your website makes sense.",
  "With motion design, your website will shine (just like this rhyme).",
  "With motion design, your website will shine (just like this rhyme).",
];

const imgArray = [
  "letter.gif",
  "https://github.com/juxtopposed/codepen/blob/main/ui.png?raw=true",
  "https://github.com/juxtopposed/codepen/blob/main/ux.png?raw=true",
  "https://github.com/juxtopposed/codepen/blob/main/motion.png?raw=true",
  "https://github.com/juxtopposed/codepen/blob/main/motion.png?raw=true",
];

function headFollow() {
  var headCenterX = head.getBoundingClientRect().left + head.offsetWidth / 2;
  var headCenterY = head.getBoundingClientRect().top + head.offsetHeight / 2;

  document.addEventListener("mousemove", function (e) {
    var dx = e.clientX - headCenterX;
    var dy = headCenterY - e.clientY;
    var angle = (Math.atan2(dy, -dx) * 180) / Math.PI;

    if (dx > 0) {
      angle = 0;
    }

    angle = Math.max(-15, Math.min(15, angle));

    gsap.to(head, {
      rotation: angle,
      duration: 0.4,
    });
  });
}

var tl = gsap.timeline({});

function walking() {
  return gsap
    .timeline()
    .to(legL, { duration: 0.2, x: "+=2rem", zIndex: "10" }, "+=1")
    .to(legR, { duration: 0.2, x: "-=2rem", zIndex: "5" }, "-=0.2")
    .to(robot, { duration: 0.2, x: "+=2rem" }, "-=0.2")
    .to(legR, { duration: 0.2, x: "+=2rem" }, "+=0.2")
    .to(legL, { duration: 0.2, x: "-=2rem" }, "-=0.2")
    .to(robot, { duration: 0.2, x: "+=2rem" }, "-=0.2");
}

function runningForw() {
  return gsap
    .timeline()
    .to(legL, { duration: 0.1, x: "+=2rem", zIndex: "10" }, "+=1")
    .to(legR, { duration: 0.1, x: "-=2rem", zIndex: "5" }, "-=0.1")
    .to(robot, { duration: 0.1, x: "+=2rem" }, "-=0.1")
    .to(legR, { duration: 0.1, x: "+=2rem" }, "+=0.1")
    .to(legL, { duration: 0.1, x: "-=2rem" }, "-=0.1")
    .to(robot, { duration: 0.1, x: "+=2rem" }, "-=0.1");
}

function runningBackw() {
  return gsap
    .timeline()
    .to(legR, { duration: 0.1, zIndex: "20", x: "-=4rem", zIndex: "10" }, "+=1")
    .to(legL, { duration: 0.1, x: "+=4rem", zIndex: "5" }, "-=0.1")
    .to(robot, { duration: 0.1, x: "-=4rem" }, "-=0.1")
    .to(legL, { duration: 0.1, x: "-=4rem" }, "+=0.1")
    .to(legR, { duration: 0.1, x: "+=4rem" }, "-=0.1")
    .to(robot, { duration: 0.1, x: "-=4rem" }, "-=0.1");
}

// intro falling
tl.to(robot, {
  duration: 1,
  bottom: "0",
  transformOrigin: "bottom right",
  rotateZ: "90deg",
  ease: "power3.in",
  overwrite: false,
})

  .to([legL, armL], {
    duration: 0.2,
    rotateZ: "30deg",
    transformOrigin: "left top",
  })

  .to([legL, armL], {
    duration: 0.2,
    rotateZ: "0",
    transformOrigin: "left top",
  })

  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "-30deg",
      transformOrigin: "bottom center",
    },
    "+=0.5"
  )

  .to(
    [legR, legL],
    {
      duration: 0.2,
      translate: "0 -100%",
      opacity: "0",
    },
    "+=0.5"
  )

  .to(robot, {
    duration: 0.5,
    rotateZ: "0",
    left: "20rem",
    bottom: "-5rem",
  })

  .to(legR, {
    duration: 0.2,
    translate: "0 0",
    opacity: "1",
    ease: "back.out(1.7)",
  })

  .to(
    legL,
    {
      duration: 0.2,
      translate: "0 0",
      opacity: "1",
      ease: "back.out(1.7)",
    },
    "-=0.2"
  )

  .to(
    robot,
    {
      duration: 0.5,
      left: "20rem",
      bottom: "0",
      ease: "back.out(1.7)",
    },
    "-=0.2"
  )

  .to(
    armL,
    {
      duration: 0.5,
      top: "-5%",
      left: "-30%",
      rotateZ: "20deg",
      ease: "back.out(1.7)",
    },
    "-=0.4"
  )

  .to(
    armR,
    {
      duration: 0.5,
      right: "-30%",
      rotateZ: "-20deg",
      ease: "back.out(1.7)",
    },
    "-=0.4"
  )

  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "0",
      ease: "elastic.out(1,0.3)",
    },
    "+=0.5"
  )

  // sees box

  .to(box, {
    duration: 0.5,
    bottom: 0,
    ease: "power3.in",
  })

  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "10deg",
      transformOrigin: "bottom center",
    },
    "+=1"
  )

  .add(walking())

  .to(armR, {
    duration: 0.5,
    rotateZ: "-=30deg",
    y: "+=2rem",
  })

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "+=5deg",
    },
    "-=0.2"
  )

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "-=5deg",
    },
    "-=0.2"
  )

  .to(button, {
    duration: 0.5,
    scale: "1",
    opacity: "1",
    bottom: "8rem",
    left: "18rem",
  })

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "-=20deg",
    },
    "-=0.5"
  )

  .to(
    armL,
    {
      duration: 0.2,
      rotateZ: "-=180deg",
      x: "+=5rem",
      y: "+=10rem",
    },
    "+=1"
  )

  .to(head, {
    duration: 0.5,
    rotateZ: "0",
  })

  .to(button, {
    duration: 1,
    top: "0",
    left: "calc(100% - 12rem)",
  })

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "-=40deg",
    },
    "-=1"
  )

  .to(armL, {
    duration: 0.1,
    rotateZ: "30deg",
    x: "0",
    y: "0",
  })

  .to(
    armR,
    {
      duration: 0.1,
      rotateZ: "-30deg",
      x: "0",
      y: "0",
    },
    "-=0.1"
  )

  .to(
    head,
    {
      duration: 0.1,
      y: "-=1rem",
    },
    "-=0.2"
  )

  .to(head, {
    duration: 0.1,
    y: "+=1rem",
  })

  // surprised walks forwards to check what else is in the box
  .add(runningForw(), "-=0.5")

  // head and body lean forward to look inside the box
  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "+=20deg",
      transformOrigin: "50% 200%",
    },
    "+=0.5"
  )

  .to(
    body,
    {
      duration: 0.5,
      rotateZ: "+=20deg",
      transformOrigin: "bottom center",
    },
    "-=0.5"
  )

  // arm reaches out inside
  .to(armR, {
    duration: 0.5,
    rotateZ: "-=3deg",
  })

  .to(armR, {
    duration: 0.5,
    rotateZ: "+=3deg",
  })

  // pulling out attempt 1
  .to(armR, {
    duration: 0.5,
    y: "-1rem",
    rotateZ: "-=5deg",
    ease: "elastic.out(1,1)",
  })
  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "-=10deg",
      ease: "elastic.out(1,1)",
    },
    "-=0.5"
  )

  .to(
    body,
    {
      duration: 0.5,
      rotateZ: "-=10deg",
      ease: "elastic.out(1,1)",
    },
    "-=0.5"
  )

  .to(armR, {
    duration: 0.2,
    y: "-1rem",
    rotateZ: "+=5deg",
  })
  .to(
    head,
    {
      duration: 0.2,
      rotateZ: "+=10deg",
    },
    "-=0.2"
  )

  .to(
    body,
    {
      duration: 0.2,
      rotateZ: "+=10deg",
    },
    "-=0.2"
  )

  // pulling attempt 2

  .to(
    armR,
    {
      duration: 2.5,
      y: "-1rem",
      rotateZ: "-=20deg",
    },
    "+=1"
  )

  .to(
    spinner,
    {
      duration: 2.5,
      onEnter: () => {
        gsap.set(spinner, { opacity: 1 });
      },
      scale: "0.2",
      y: "-3rem",
    },
    "-=2.5"
  )

  .to(
    head,
    {
      duration: 2.5,
      rotateZ: "-=25deg",
    },
    "-=2.5"
  )

  .to(
    body,
    {
      duration: 2.5,
      rotateZ: "-=25deg",
    },
    "-=2.5"
  )

  // fall back

  .to(armR, {
    duration: 0.1,
    y: "-1rem",
    rotateZ: "-=50deg",
  })
  .to(
    head,
    {
      duration: 0.1,
      rotateZ: "-=50deg",
    },
    "-=0.1"
  )

  .to(
    body,
    {
      duration: 0.1,
      rotateZ: "-=50deg",
    },
    "-=0.1"
  )

  .to(
    spinner,
    {
      duration: 0.1,
      scale: "1",
      left: "40rem",
      bottom: "0",
    },
    "-=0.1"
  )

  // move up again

  .to(armR, {
    duration: 1,
    y: "0",
    rotateZ: "-750deg",
  })

  .to(
    head,
    {
      duration: 1,
      rotateZ: "0deg",
    },
    "-=1"
  )

  .to(
    body,
    {
      duration: 1,
      rotateZ: "0deg",
    },
    "-=1"
  )

  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "-=20deg",
      transformOrigin: "center bottom",
    },
    "+=0.5"
  )

  .to(
    head,
    {
      duration: 0.5,
      rotateZ: "+=20deg",
      transformOrigin: "center bottom",
    },
    "+=1"
  )

  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")

  .to(armL, {
    duration: 0.5,
    rotateZ: "+=60deg",
    left: "-10%",
    top: "0",
  })

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "+=150deg",
    },
    "-=0.5"
  )

  .to(armL, {
    duration: 0.5,
    rotateZ: "-=40deg",
    left: "-10%",
    top: "0",
  })

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "-=40deg",
    },
    "-=0.5"
  )

  .to(
    spinner,
    {
      duration: 2.5,
      rotateZ: "-=180",
      left: "-35rem",
    },
    "-=0.5"
  )

  .to(
    armL,
    {
      duration: 0.5,
      rotateZ: "-=20deg",
      left: "-30%",
      top: "5%",
    },
    "-=2"
  )

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "-=110deg",
    },
    "-=2"
  )

  // picking up the box
  .add(runningBackw(), "-=1")
  .add(runningBackw(), "-=1")
  .add(runningBackw(), "-=1")

  .to(legR, {
    zIndex: "5",
  })

  .to(
    armR,
    {
      duration: 0.5,
      rotateZ: "+=60deg",
    },
    "-=1"
  )

  .to(
    box,
    {
      duration: 0.5,
      bottom: "+=5rem",
      left: "-=5rem",
    },
    "-=0.5"
  )

  // throwing the big cards

  .to(armR, {
    duration: 0.5,
    rotateZ: "+=20deg",
  })

  .to(armR, {
    duration: 0.5,
    rotateZ: "+=40deg",
  })

  .to(
    info,
    {
      onEnter: () => {
        gsap.set(info, { opacity: 1 });
      },
      duration: 1,
      opacity: "1",
      left: "0",
      top: "-10rem",
      scale: "0.7",
      ease: "power4.out",
    },
    "-=0.5"
  )

  .to(
    info,
    {
      duration: 0.5,
      top: "0",
      scale: "1",
      ease: "power2.in",
    },
    "-=0.3"
  )

  .to(armR, {
    duration: 0.5,
    rotateZ: "-=20deg",
  })

  .to(armR, {
    duration: 0.5,
    rotateZ: "+=80deg",
  })

  .to(
    facts,
    {
      onEnter: () => {
        gsap.set(facts, { opacity: 1 });
      },
      duration: 1,
      left: "20rem",
      opacity: "1",
      bottom: "20rem",
      scale: "0.8",
      ease: "power4.out",
    },
    "-=0.5"
  )

  .to(
    facts,
    {
      duration: 0.5,
      right: "0",
      left: "auto",
      bottom: "0",
      opacity: "1",
      scale: "1",
      ease: "power2.in",
    },
    "-=0.3"
  )

  .to(armR, {
    duration: 0.5,
    rotateZ: "-=80deg",
  })

  .to(armR, {
    duration: 0.5,
    rotateZ: "+=60deg",
  })

  .to(
    header,
    {
      duration: 0.5,
      onEnter: () => {
        gsap.set(header, { opacity: 1 });
      },
      scale: "1",
      top: 0,
      bottom: "auto",
      left: "auto",
    },
    "-=0.5"
  )

  .to(armR, {
    duration: 0.5,
    rotateZ: "-=150deg",
  })

  .to(armL, {
    duration: 0.5,
    rotateZ: "-=60deg",
  })

  .to(
    box,
    {
      duration: 0.5,
      bottom: "0",
      left: "+=18rem",
    },
    "-=0.5"
  )

  .to(armL, {
    duration: 0.5,
    rotateZ: "+=60deg",
  })

  .to(
    legR,
    {
      duration: 0.2,
      transformOrigin: "top center",
      rotateZ: "+=10deg",
      ease: "power3.out",
    },
    "+=0.2"
  )

  .to(legR, {
    duration: 0.2,
    transformOrigin: "top center",
    rotateZ: "-=40deg",
    x: "+=2rem",
    ease: "power3.out",
  })

  .to(
    box,
    {
      duration: 0.5,
      bottom: "10rem",
      left: "100%",
      ease: "power3.out",
    },
    "-=0.2"
  )

  .to(legR, {
    duration: 0.2,
    transformOrigin: "top center",
    rotateZ: "+=30deg",
    x: "-=2rem",
  })

  .add(runningBackw())
  .add(runningBackw(), "-=1")
  .add(runningBackw(), "-=1")

  .to(armL, {
    duration: 0.2,
    rotateZ: "+=80deg",
    left: "-=30%",
    transformOrigin: "top right",
  })

  .to(
    armL,
    {
      duration: 0.2,
      rotateZ: "-=88deg",
      left: "+=25%",
      top: "10%",
      ease: "expo.out",
    },
    "+=0.2"
  )

  .to(
    spinner,
    {
      duration: 0.5,
      onEnter: spinSpinner,
    },
    "-=0.2"
  )

  .add(runningForw())
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")
  .add(runningForw(), "-=1")

  .to(robot, {
    duration: 0.2,
    bottom: "1rem",
    ease: "expo.out",
  })

  .to([legL, legR], {
    duration: 0.2,
    bottom: "8rem",
    zIndex: "0",
    ease: "expo.in",
  })

  .to(
    [armL, armR],
    {
      duration: 0,
      rotateZ: "0",
      ease: "expo.in",
    },
    "-=0.2"
  )

  .to(
    robot,
    {
      duration: 0.2,
      bottom: "-8rem",
      scale: "0.8",
      ease: "expo.in",
      onComplete: () => {
        skip.style.display = "none";
      },
    },
    "-=0.2"
  )

  .to(head, {
    onEnter: () => {
      gsap.set(head, { rotateZ: "0" });
      headFollow();
    },
  });

//jump the robot and open up the arms to enjoy
robot.addEventListener("click", () => {
  gsap.to(robot, {
    duration: 0.5,
    bottom: "10rem",
    ease: "power3.out",
    onComplete: () => {
      gsap.to(robot, {
        duration: 0.5,
        bottom: "0",
        ease: "power3.out",
      });
    },
  });

  //move the arms in air and rotate them and bring thme back
  gsap.to(armL, {
    duration: 0.5,
    rotateZ: "180deg",
    ease: "power3.out",
    onComplete: () => {
      gsap.to(armL, {
        duration: 0.5,
        rotateZ: "0",
        ease: "power3.out",
      });
    },
  });

  gsap.to(armR, {
    duration: 0.5,
    rotateZ: "-180deg",
    ease: "power3.out",
    onComplete: () => {
      gsap.to(armR, {
        duration: 0.5,
        rotateZ: "0",
        ease: "power3.out",
      });
    },
  });
});

let factTexts = [
  "that every $1 invested in UX results in a return of $100.",
  "that animations are small touches that make BIG differences.",
  "that 94% of the first impressions on a website are based on its visuals and design.",
  "that more and more companies are looking for animation and motion on their sites.",
  "that the lamp from the Pixar opening is named Luxo Junior.",
  "that animation is literally translated from French 'soul'.",
  "that the first cartoon character ‘Mickey Mouse’ was created in 1929.",
  "that SVG animations are the quickest to render, smoothest in quality, and smallest in size.",
  "that animations can hold users on your site for longer.",
  "that 50% of websites have animations and interaction designs? that’s crazy! (I made it up)",
];
let factIndex = 0;

next.addEventListener("click", () => {
  let tl3 = gsap.timeline();
  let isEven = factIndex % 2 === 0;
  let firstColor = isEven ? darkred : lightred;
  let secondColor = isEven ? lightred : darkred;
  let backgroundColor = isEven ? "var(--lightred)" : "var(--darkred)";

  tl3
    .set(firstColor, { zIndex: 1 })
    .set(secondColor, { zIndex: 2 })
    .to(secondColor, { duration: 1, scale: 40, ease: "none" })
    .set(facts, { backgroundColor: backgroundColor })
    .to(firstColor, { duration: 0, scale: 0.001 }, "-=0.5")
    .set(secondColor, { zIndex: 1 })
    .set(firstColor, { zIndex: 2 })
    .to(firstColor, { duration: 0.5, scale: 1 });
});

function spinSpinner() {
  let tlFirst = gsap.timeline();
  tlFirst.to(spinner, {
    rotation: "+=90",
    duration: 2,
    ease: "none",
    // onComplete: function () {
    //   document.getElementById("info-text").innerText = textArray[4];
    //   document.getElementById("info-img").src = imgArray[4];
    // },
  });

  let tlRepeat = gsap.timeline({ repeat: -1 });
  for (let i = 0; i < textArray.length - 1; i++) {
    let index = i;
    tlRepeat.to(spinner, {
      rotation: "+=90",
      delay: 5,
      duration: 2,
      ease: "none",
      //   onComplete: function () {
      //     document.getElementById("info-text").innerText = textArray[index];
      //     document.getElementById("info-img").src = imgArray[index];
      //   },
    });
  }

  tlFirst.add(tlRepeat);
}

skip.addEventListener("click", function () {
  tl.timeScale(10000);
  skip.style.display = "none";
});

function checkWindowSize() {
  if (window.innerWidth < 1000) {
    tl.timeScale(20000);
  }
}

window.addEventListener("resize", checkWindowSize);
window.addEventListener("load", checkWindowSize);

var canvas = new handwriting.Canvas(document.getElementById("c"));

canvas.setOptions({
  width: 400,
  height: 400,
  lineWidth: 80,
  lineColor: "#000",
  backgroundColor: "#fff",
  border: "1px solid #000",
  borderRadii: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
  onDrawEnd: function () {
    console.log("Drawing ended");
  },
});

canvas.setCallBack(function (data, err) {
  const particles = tsParticles.domItem(0);
  if (err) throw err;
  
  else {
    //check if data has the letter A
    if (data.includes("A")) {
      console.log("A detected");
      document.getElementById('clap_tag').play();
      start();
      stop();

      gsap.to(robot, {
        duration: 0.5,
        bottom: "10rem",
        ease: "power3.out",
        onComplete: () => {
          gsap.to(robot, {
            duration: 0.5,
            bottom: "0",
            ease: "power3.out",
          });
        },
      });

      //move the arms in air and rotate them and bring thme back
      gsap.to(armL, {
        duration: 0.5,
        rotateZ: "180deg",
        ease: "power3.out",
        onComplete: () => {
          gsap.to(armL, {
            duration: 0.5,
            rotateZ: "0",
            ease: "power3.out",
          });
        },
      });

      gsap.to(armR, {
        duration: 0.5,
        rotateZ: "-180deg",
        ease: "power3.out",
        onComplete: () => {
          gsap.to(armR, {
            duration: 0.5,
            rotateZ: "0",
            ease: "power3.out",
          });
        },
      });
    }

    else {
        document.getElementById('fail_tag').play();

    }
  }
});

var penSize = document.getElementById("penSize");

penSize.addEventListener("mousemove", function () {
  document.getElementById("lineWidth").innerHTML = penSize.value;
});
penSize.addEventListener("change", function () {
  canvas.setLineWidth(penSize.value);
});

var confetti = {
  maxCount: 150, //set max confetti count
  speed: 2, //set the particle animation speed
  frameInterval: 15, //the confetti animation frame interval in milliseconds
  alpha: 1.0, //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
  gradient: false, //whether to use gradients for the confetti particles
  start: null, //call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
  stop: null, //call to stop adding confetti
  toggle: null, //call to start or stop the confetti animation depending on whether it's already running
  pause: null, //call to freeze confetti animation
  resume: null, //call to unfreeze confetti animation
  togglePause: null, //call to toggle whether the confetti animation is paused
  remove: null, //call to stop the confetti animation and remove all confetti immediately
  isPaused: null, //call and returns true or false depending on whether the confetti animation is paused
  isRunning: null, //call and returns true or false depending on whether the animation is running
};

(function () {
  confetti.start = startConfetti;
  confetti.stop = stopConfetti;
  confetti.toggle = toggleConfetti;
  confetti.pause = pauseConfetti;
  confetti.resume = resumeConfetti;
  confetti.togglePause = toggleConfettiPause;
  confetti.isPaused = isConfettiPaused;
  confetti.remove = removeConfetti;
  confetti.isRunning = isConfettiRunning;
  var supportsAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  var colors = [
    "rgba(30,144,255,",
    "rgba(107,142,35,",
    "rgba(255,215,0,",
    "rgba(255,192,203,",
    "rgba(106,90,205,",
    "rgba(173,216,230,",
    "rgba(238,130,238,",
    "rgba(152,251,152,",
    "rgba(70,130,180,",
    "rgba(244,164,96,",
    "rgba(210,105,30,",
    "rgba(220,20,60,",
  ];
  var streamingConfetti = false;
  var animationTimer = null;
  var pause = false;
  var lastFrameTime = Date.now();
  var particles = [];
  var waveAngle = 0;
  var context = null;

  function resetParticle(particle, width, height) {
    particle.color =
      colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
    particle.color2 =
      colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = Math.random() * Math.PI;
    return particle;
  }

  function toggleConfettiPause() {
    if (pause) resumeConfetti();
    else pauseConfetti();
  }

  function isConfettiPaused() {
    return pause;
  }

  function pauseConfetti() {
    pause = true;
  }

  function resumeConfetti() {
    pause = false;
    runAnimation();
  }

  function runAnimation() {
    if (pause) return;
    else if (particles.length === 0) {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      animationTimer = null;
    } else {
      var now = Date.now();
      var delta = now - lastFrameTime;
      if (!supportsAnimationFrame || delta > confetti.frameInterval) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        updateParticles();
        drawParticles(context);
        lastFrameTime = now - (delta % confetti.frameInterval);
      }
      animationTimer = requestAnimationFrame(runAnimation);
    }
  }

  function startConfetti(timeout, min, max) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    window.requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, confetti.frameInterval);
        }
      );
    })();
    var canvas = document.getElementById("confettiCanvas");
    if (canvas === null) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("id", "confetti-canvas");
      canvas.setAttribute(
        "style",
        "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"
      );
      document.body.prepend(canvas);
      canvas.width = width;
      canvas.height = height;
      window.addEventListener(
        "resize",
        function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        true
      );
      context = canvas.getContext("2d");
    } else if (context === null) context = canvas.getContext("2d");
    var count = confetti.maxCount;
    if (min) {
      if (max) {
        if (min == max) count = particles.length + max;
        else {
          if (min > max) {
            var temp = min;
            min = max;
            max = temp;
          }
          count = particles.length + ((Math.random() * (max - min) + min) | 0);
        }
      } else count = particles.length + min;
    } else if (max) count = particles.length + max;
    while (particles.length < count)
      particles.push(resetParticle({}, width, height));
    streamingConfetti = true;
    pause = false;
    runAnimation();
    if (timeout) {
      window.setTimeout(stopConfetti, timeout);
    }
  }


  

  function stopConfetti() {
    streamingConfetti = false;
  }

  function removeConfetti() {
    stop();
    pause = false;
    particles = [];
  }

  function toggleConfetti() {
    if (streamingConfetti) stopConfetti();
    else startConfetti();
  }

  function isConfettiRunning() {
    return streamingConfetti;
  }

  function drawParticles(context) {
    var particle;
    var x, y, x2, y2;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      context.beginPath();
      context.lineWidth = particle.diameter;
      x2 = particle.x + particle.tilt;
      x = x2 + particle.diameter / 2;
      y2 = particle.y + particle.tilt + particle.diameter / 2;
      if (confetti.gradient) {
        var gradient = context.createLinearGradient(x, particle.y, x2, y2);
        gradient.addColorStop("0", particle.color);
        gradient.addColorStop("1.0", particle.color2);
        context.strokeStyle = gradient;
      } else context.strokeStyle = particle.color;
      context.moveTo(x, particle.y);
      context.lineTo(x2, y2);
      context.stroke();
    }
  }

  function updateParticles() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var particle;
    waveAngle += 0.01;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
      else {
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.x += Math.sin(waveAngle) - 0.5;
        particle.y +=
          (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
        particle.tilt = Math.sin(particle.tiltAngle) * 15;
      }
      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        if (streamingConfetti && particles.length <= confetti.maxCount)
          resetParticle(particle, width, height);
        else {
          particles.splice(i, 1);
          i--;
        }
      }
    }
  }
})();

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};
// after this here we are calling both the function so it works
// start();
// stop();
