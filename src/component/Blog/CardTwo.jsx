import React from 'react'
import Sdata from '../Slide/Sdata'
const CardTwo = () => {
  return (
    <>
    <div className='CardTwo top slide'>
      {Sdata.map((value) => {
        return (
          <div className='box !flex' key={value.id}>
            <div className='img w-[350px] h-[350px]'>
              <img src={value.cover} alt='' className="w-full h-full"/>
            </div>
            <div className='text w-[50%] pt-[60px] pb-[70px] pl-[30px]'>
              <span>{value.category}</span>
              <h2>{value.title}</h2>
              <p>{value.desc}</p>
            </div>
          </div>
        )
      })}
    </div></>
  )
}

export default CardTwo