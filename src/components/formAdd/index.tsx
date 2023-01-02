import React from 'react'

export const FormAdd = () => {
  return (
    <div className='container flex flex-col'>
      <h1 className='mx-auto text-center text-2xl mb-2'>Add new Element</h1>
      <form className='mx-auto mt-2'>
        <input type="text" placeholder='ADD' className='border-0 rounded px-2 py-3 text-center' />
      </form>
    </div>
  )
}
