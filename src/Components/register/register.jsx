import React from 'react'

const Register = () => {
  return (
    <>
    
    <section className='w-1/2 mx-auto shadow-2xl bg-indigo-900 dark:shadow-indigo-950  shadow-gray-600 my-10 p-10 rounded-xl text-center'>
    <h1 className='text-3xl'>Register Now</h1>

    <form action="">
    {/* Name */}

    <input type="text" placeholder="Enter your Name" className="input input-primary w-full bg-indigo-900 mb-5 mt-5 text-white" />
    {/*  */}
    <input type="text" placeholder="Enter your Name" className="input input-primary w-full bg-indigo-900 mb-5" />
    <input type="text" placeholder="Enter your Name" className="input input-primary w-full bg-indigo-900 mb-5" />


    </form>
    </section>
    
    
    
    
    
    </>
  )
}

export default Register