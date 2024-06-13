import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./PageNotFound.css";

function PageNotFoundAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".wrapper-404",
      start: "top top",
      end: "+=600vh", // Adjust end value for smaller screens
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".wrapper-404", {
          x: -350 * self.progress + "vw", // Adjust multiplier for smoother effect
          duration: 0.5,
          ease: "power3.out",
          invalidateOnRefresh: true,
        });
      },
    });

    // Cleanup function to remove ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container roopesh">
      <section className="wrapper-404">
        <h1>Page Not Found</h1>
      </section>
      <section className="outro">
        <h1>You didn't choose this domain, kid.</h1>
      </section>
    </div>
  );
}

export default PageNotFoundAnimation;
