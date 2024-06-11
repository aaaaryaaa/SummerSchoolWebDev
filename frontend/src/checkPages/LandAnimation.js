import { useState, useEffect } from 'react';
import { Application } from 'https://cdn.skypack.dev/@splinetool/runtime@0.9.416';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../Animation.css";
function LandAnimation() {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d"); 
    const app = new Application(canvas);
    app
      .load("https://prod.spline.design/ZZOWNi4tS7p8xxOs/scene.splinecode")
      .then(() => {
        const keyboard = app.findObjectByName("keyboard");

        gsap.set(keyboard.scale, { x: 1, y: 1, z: 1 });
        gsap.set(keyboard.position, { x: 110, y: 50 });

        let rotateKeyboard = gsap.to(keyboard.rotation, {
          y: Math.PI * 2 + keyboard.rotation.y,
          x: 0,
          z: 0,
          duration: 10,
          repeat: -1,
          ease: "none",
        });

        let rotationProgress = 0;
        let interval;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#part1",
              start: "top 60%",
              end: "bottom bottom",
              scrub: true,
              onEnter: () => {
                rotationProgress = rotateKeyboard.progress();

                interval = setInterval(() => {
                  app.emitEvent("keyDown", "keyboard");
                }, 1500);

                rotateKeyboard.pause();
                gsap.to(keyboard.rotation, {
                  y: Math.PI / 12,
                  duration: 1,
                });
              },
              onLeaveBack: () => {
                const newProgress = keyboard.rotation.y / (Math.PI * 2);
                rotateKeyboard.progress(newProgress).resume();
                clearInterval(interval);
              },
            },
          })
          .to(keyboard.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
          .to(keyboard.position, { x: -500, y: -200 }, 0)
          .to(keyboard.scale, { x: 3, y: 3, z: 3 }, 0);

        gsap
          .timeline({
            onComplete: () => {
              clearInterval(interval);
              app.emitEvent("mouseDown", "keyboard");
            },
            scrollTrigger: {
              trigger: "#part2",
              start: "top bottom",
              end: "center bottom",
              scrub: true,
            },
          })
          .to(keyboard.rotation, { x: Math.PI / 36, y: -Math.PI / 10 }, 0)
          .to(keyboard.position, { x: 150, y: 50 }, 0)
          .to(keyboard.scale, { x: 0.8, y: 0.8, z: 0.8 }, 0);

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#part3",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          })
          .to(keyboard.position, { x: 0, y: 0 }, 0);
      });

    gsap.registerPlugin(ScrollTrigger);

    // background progress bar
    function animateBar(triggerElement, onEnterWidth, onLeaveBackWidth) {
      gsap.to(".bar", {
        scrollTrigger: {
          trigger: triggerElement,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          onEnter: () => {
            gsap.to(".bar", {
              width: onEnterWidth,
              duration: 0.2,
              ease: "none",
            });
          },
          onLeaveBack: () => {
            gsap.to(".bar", {
              width: onLeaveBackWidth,
              duration: 0.2,
              ease: "none",
            });
          },
        },
      });
    }

    animateBar("#part1", "35%", "0%");
    animateBar("#part2", "65%", "35%");
    animateBar("#part3", "100%", "65%");

    // keyboard text effect
    const keys = document.querySelectorAll(".key");

    function pressRandomKey() {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];

      randomKey.style.animation = "pressDown 0.2s ease-in-out";

      randomKey.onanimationend = () => {
        randomKey.style.animation = "";
        setTimeout(pressRandomKey, 100 + Math.random() * 300);
      };
    }

    pressRandomKey();

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <>
      <nav className="flex row">
        {/* made-up logo */}
        <svg
          width="85"
          height="29"
          viewBox="0 0 85 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.111538"
            y="0.111538"
            width="84.1"
            height="28.7769"
            rx="1.67308"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="0.223077"
          />
          <rect
            x="1.56152"
            y="1.56154"
            width="25.8769"
            height="25.8769"
            rx="12.9385"
            fill="white"
          />
          <rect
            x="1.67306"
            y="1.67308"
            width="25.6538"
            height="25.6538"
            rx="12.8269"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="0.223077"
          />
          <rect
            x="29.2231"
            y="1.56154"
            width="25.8769"
            height="25.8769"
            rx="5.35385"
            fill="white"
          />
          <rect
            x="29.3346"
            y="1.67308"
            width="25.6538"
            height="25.6538"
            rx="5.24231"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="0.223077"
          />
          <rect
            x="56.8846"
            y="1.56154"
            width="25.8769"
            height="25.8769"
            rx="0.892308"
            fill="white"
          />
          <rect
            x="56.9962"
            y="1.67308"
            width="25.6538"
            height="25.6538"
            rx="0.780769"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="0.223077"
          />
          <rect
            x="12.9385"
            y="18.9615"
            width="2.9"
            height="5.13077"
            rx="1.45"
            fill="#7317cf"
          />
          <rect
            x="13.05"
            y="19.0731"
            width="2.67692"
            height="4.90769"
            rx="1.33846"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="0.223077"
          />
        </svg>
        
      </nav>

      <div className="bar"></div>

      <div className="canvas-cont">
        <canvas id="canvas3d"></canvas>
      </div>

      <div id="hero" className="flex row">
        <h1>
          YOUR
          <br />
          GAMES.
          <br />
          YOUR
          <br />
          <div className="keyboard">
            <span className="key">K</span>
            <span className="key">E</span>
            <span className="key">Y</span>
            <span className="key">B</span>
            <span className="key">O</span>
            <span className="key">A</span>
            <span className="key">R</span>
            <span className="key">D</span>.
          </div>
        </h1>
      </div>

      <div id="part1" className="flex row">
        <div></div>
        <div className="part1-info flex column">
          <h2>PLAY LIKE A PRO.</h2>
          <p>
            With these keyboards, you'll get proper bounce, a bit of *click*,
            and lots of satisfaction.
          </p>
          <button>Make a keyboard - It's easy!</button>
        </div>
      </div>

      <div id="part2" className="flex row">
        <div className="part2-info flex column">
          <h2>CUSTOMIZE ALL THE WAY.</h2>
          <p>
            It's all yours! Change the colors as you like. Make them purple,
            green, red, anything.
          </p>

          <button>Customize a Keyboard</button>
        </div>
        <div></div>
      </div>

      <div id="part3" className="flex column">
        <h2>#Spline3DAndGSAPAnimations</h2>
        <a href="https://twitter.com/juxtopposed" target="_blank">
          By @Juxtopposed
        </a>
      </div>
    </>
  );
}

export default LandAnimation;

