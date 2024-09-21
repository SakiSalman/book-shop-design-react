import React from 'react'

const Error = () => {
  return (
    <div className='error_page w-full h-screen bg-red-500 flex justify-center items-center'>
       <div className="error_midem tex-center text-center ">
       <img className='w-[300px] h-[300px]' src="./public/img/404-error.png" alt="" />
      <div className="heading flex items-center gap-2">
    <span className='text-4xl'>404</span><h1 className='text-3xl font-bold'>Pages Not Found</h1>

  </div>       </div>
    </div>
  )
}

export default Error