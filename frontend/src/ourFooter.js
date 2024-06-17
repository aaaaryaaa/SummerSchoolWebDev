import React from 'react'

const Footer = ({ user, setUser }) => {
  return (
    <div>
      {user && (
        <>
          <div className="lg:block hidden h-10"></div>
          <div className="relative w-full flex justify-center">
            <div className="absolute top-0 w-3/5 border-t-2 border-white"></div>
            <p className="z-10 my-5">
              In case you ever foolishly forget, this was made with{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>{' '}
              by Aarya, Roopanshi, and Nikhilesh
            </p>
          </div>
          <div className='lg:hidden mx-5 text-center'>
            <p className="z-10 my-5">
              In case you ever foolishly forget, this was made with{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>{' '}
              by Aarya, Roopanshi, and Nikhilesh
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Footer
