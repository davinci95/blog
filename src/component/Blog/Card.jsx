import React from 'react'
import Cdata from './Cdata'

const Card = () => {
  return (
    <>
    <div className='card grid top'>
      {Cdata.map((value) => {
        return (
          <div className='box' key={value.id}>
            <div className='w-[210px] h-[210px] mb-6'>
              <img src={value.cover} alt="Card Images" className='w-full h-full'/>
            </div>
            <span>{value.category}</span>
            <h2 className='text-xl'>{value.title}</h2>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Card