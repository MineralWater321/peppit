import React from 'react'
import Navbar from '../components/Navbar'

function About() {
    return (
        <>
        <Navbar />
        
<div class="my-0 hero-first hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="https://picsum.photos/id/1005/600/600" class="max-w-sm rounded-lg shadow-2xl" /> 
    <div>
      <h1 class="mb-5 text-5xl font-bold">
            Hello there
          </h1> 
      <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p> 
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<div class="hero min-h-screen bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">
            Hello there
          </h1> 
      <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p> 
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </>
    )
}

export default About
