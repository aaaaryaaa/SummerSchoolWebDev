import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './PageNotFound.css'
// import img from './images/image 1.png'
function PageNotFoundAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cards = [
      { id: '#card-1', endTransalteX: -2000, rotate: 45 },
      { id: '#card-2', endTransalteX: -1000, rotate: -30 },
      { id: '#card-3', endTransalteX: -2000, rotate: 45 },
      { id: '#card-4', endTransalteX: -1500, rotate: -30 },
    ]

    ScrollTrigger.create({
      trigger: '.wrapper-404',
      start: 'top top',
      end: '+=900vh',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to('.wrapper-404', {
          x: -350 * self.progress + 'vw',
          duration: 0.5,
          ease: 'power3.out',
          invalidateOnRefresh: true,
        })
      },
    })

    cards.forEach((card) => {
      console.log(card.id)
      ScrollTrigger.create({
        trigger: card.id,
        start: 'top top',
        end: '+=1200vh',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card.id, {
            x: self.progress * card.endTransalteX + 'px',
            rotate: self.progress * card.rotate * 2,
            duration: 0.5,
            ease: 'power3.out',
            invalidateOnRefresh: true,
          })
        },
      })
    })

    // Cleanup function to remove ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="container roopesh">
      <section className="wrapper-404">
        <h1>Page Not Found</h1>
        {/* Uncomment and replace with actual image paths if needed */}
        {/* <div className="card" id="card-1">
          <img src={img} alt="" />
        </div>
        <div className="card" id="card-2">
          <img src={img} alt="" />
        </div>
        <div className="card" id="card-3">
          <img src={img} alt="" />
        </div>
        <div className="card" id="card-4">
          <img src={img} alt="" />
        </div> */}
      </section>
      <section className="outro">
        <h1>you didn't choose this domain, kid.</h1>
      </section>
    </div>
  )
}

export default PageNotFoundAnimation
