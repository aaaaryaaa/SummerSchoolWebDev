import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./PageNotFound.css";
import niks1 from "../images/niks1.jpg";
import niks2 from "../images/niks2.jpg";
import niks3 from "../images/niks3.jpg";
import niks4 from "../images/niks4.jpg";
function PageNotFoundAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = [
      { id: "#card-1", endTransalteX: -2000, rotate: 45 },
      { id: "#card-2", endTransalteX: -1000, rotate: -30 },
      { id: "#card-3", endTransalteX: -2000, rotate: 45 },
      { id: "#card-4", endTransalteX: -1500, rotate: -30 },
    ];

    ScrollTrigger.create({
      trigger: ".wrapper-404",
      start: "top top",
      end: "+=900vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".wrapper-404", {
          x: `${-350 * self.progress}vw`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    cards.forEach((card) => {
      console.log(card.id);
      ScrollTrigger.create({
        trigger: card.id,
        start: "top top",
        end: "+=1200vh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card.id, {
            x: `${self.progress * card.endTransalteX}px`,
            rotate: `${self.progress * card.rotate * 2}`,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      });
    });
  }, []);

  return (
    <div className="container">
      <section className="wrapper-404">
        <h1>Page Not Found</h1>
        <div className="card" id="card-1">
          <img src={niks1} alt="" />
        </div>
        <div className="card" id="card-2">
          <img src={niks2} alt="" />
        </div>
        <div className="card" id="card-3">
          <img src={niks3} alt="" />
        </div>
        <div className="card" id="card-4">
          <img src={niks4} alt="" />
        </div>
      </section>
      <section className="outro">
        <h1>Slow</h1>
      </section>
    </div>
  );
}

export default PageNotFoundAnimation;
