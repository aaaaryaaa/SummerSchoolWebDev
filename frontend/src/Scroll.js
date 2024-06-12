import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Scroll = () => {
  const comp = useRef(null)
  const introSliderRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const title3Ref = useRef(null)
  const welcomeRef = useRef(null)
  const animationTimeline = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animationTimeline.current = gsap.timeline()
      animationTimeline.current
        .from(introSliderRef.current, {
          xPercent: '-100',
          duration: 1.3,
          delay: 0.3,
        })
        .from([title1Ref.current, title2Ref.current, title3Ref.current], {
          opacity: 0,
          y: '+=30',
          stagger: 0.5,
        })
        .to([title1Ref.current, title2Ref.current, title3Ref.current], {
          opacity: 0,
          y: '-=30',
          delay: 0.3,
          stagger: 0.5,
        })
        .to(introSliderRef.current, {
          xPercent: '-100',
          duration: 1.3,
          onComplete: () => {
            introSliderRef.current.style.display = 'none' // Hide the intro slider
          },
        })
        .from(welcomeRef.current, {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    const skipToEnd = () => {
      if (animationTimeline.current) {
        animationTimeline.current.progress(1) // Jumps to the end of the animation timeline
      }
      // Set elements to their final states
      gsap.set(introSliderRef.current, { xPercent: '-100' })
      gsap.set([title1Ref.current, title2Ref.current, title3Ref.current], {
        opacity: 0,
        y: '-=30',
      })
      gsap.set(welcomeRef.current, { opacity: 1 })
      introSliderRef.current.style.display = 'none' // Hide the intro slider
    }

    document.addEventListener('click', skipToEnd)

    return () => {
      ctx.revert()
      document.removeEventListener('click', skipToEnd)
    }
  }, [])

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        ref={introSliderRef}
        className="h-screen p-10 bg-black absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-5xl sm:text-9xl" id="title-1" ref={title1Ref}>
          Data Analyst
        </h1>
        <h1 className="text-5xl sm:text-9xl" id="title-2" ref={title2Ref}>
          Designer
        </h1>
        <h1 className="text-5xl sm:text-9xl" id="title-3" ref={title3Ref}>
          Developer
        </h1>
      </div>
      {/* <div className="h-screen flex bg-black justify-center place-items-center">
        <h1
          id="welcome"
          ref={welcomeRef}
          className="text-9xl font-bold font-spaceGrotesk bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
        >
          Welcome.
        </h1>
      </div> */}
    </div>
  )
}

export default Scroll
