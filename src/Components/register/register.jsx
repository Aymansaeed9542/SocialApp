import React from 'react'

const Register = () => {
  return (
    <>
    
    <section className='w-1/2 mx-auto shadow-2xl bg-indigo-900 dark:shadow-indigo-950  shadow-gray-600 my-10 p-10 rounded-xl text-center'>
    <h1 className='text-3xl'>Register Now</h1>

    <form action="">
    {/* Name */}

    <input type="text" placeholder="Name" className="input input-secondary w-full bg-indigo-900 mb-5 mt-5"/>
    {/* Email */}
    <input type="text" placeholder="Email" className="input input-secondary w-full bg-indigo-900 mb-5" />
    {/* Password */}
    <input type="password" placeholder="Password" className="input input-secondary w-full bg-indigo-900 mb-5" />
    {/* rePassword */}
    <input type="password" placeholder="rePassword" className="input input-secondary w-full bg-indigo-900 mb-5" />
    {/* dateOfBirth */}
    <input type="date" placeholder="date Of Birth" className="input input-secondary w-full bg-indigo-900 mb-5" />
 <div className='mb-5'>
  <input type="radio" id='male' name="gender" className="radio radio-secondary me-3"  />
  <label htmlFor="male">Male</label>
<input type="radio" id='female' name="gender" className="radio radio-secondary me-3 ms-3" />
  <label htmlFor="female">Female</label>
 </div>
 <button className="btn btn-outline btn-secondary">Submit</button>


    </form>
    </section>
    
    
    
    
    
    </>
  )
}

export default Register