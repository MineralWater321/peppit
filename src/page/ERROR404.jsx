import React from 'react'
import { Link } from 'react-router-dom'
function ERROR404() {
    return (
        <>
     
        <div class="hero min-h-screen error ">
          <div class="hero-overlay bg-opacity-60"></div> 
          <div class="text-center hero-content text-neutral-content ">
          <div class="max-w-md">
              <div className='flex justify-center flex-row'>
          <h1 class="mb-5  text-5xl font-bold">
                    4
                  </h1> 
              <h1 class="mb-5  animate-bounce delay-3000 ease-linear text-5xl font-bold">
                    😃
                  </h1> 
                  <h1 class="mb-5  text-5xl font-bold">
                    4
                  </h1> 
                  </div>
              <p class="mb-5">
                    You may have typed the wrong URL
                  </p> 
              <Link to="/" class="btn btn-primary">Return to Home Page</Link>
            </div>
          </div>
        </div>
         </>
    )
}

export default ERROR404
