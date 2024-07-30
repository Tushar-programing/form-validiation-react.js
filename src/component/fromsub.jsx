import React from 'react'

function fromsub({strCategory, strCategoryDescription, strCategoryThumb}) {

    const handlestore = () => {
        console.log('str', strCategory);
        const set = localStorage.setItem('str', strCategory)
        console.log(set);
    } 

  return (
    <div className='mx-5 border grid grid-cols-12 mb-4 px-2 py-2'>
        <div className='col-span-3 '>{strCategory}</div>
        <div className='col-span-3 '>{strCategoryDescription}</div>
        <div className='col-span-4 '>{strCategoryThumb}</div>
        <div className='col-span-2 '><button className='bg-green-400 px-3 text-white py-2' onClick={handlestore}>favorite</button></div>
    </div>
  )
}

export default fromsub
