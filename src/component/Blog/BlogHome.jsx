import React from 'react'
import Footer from '../Footer/Footer'
import Slide from '../Slide/Slide'
import Card from './Card'
import CardTwo from './CardTwo'



const BlogHome = () => {
      const data = [
            {
              id: 1,
              titleOne: "YOU CAN CHANGE THE WORLD",
              titletwo: "STRONG STYLE",
              paraOne: "How Women are Redirecting Hollywood",
              paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
              name: "By Jasmin Smith",
              subTitle: "How to Shop Mindfully",
              qrCode: "./logo192.png",
              cover: "./Images/blog5.jpg",
            },
          ]
  return (
    <>
    <section className='flex'>
      <div className='w-1/2 h-[100vh] fixed top-0 text-white overflow-hidden'>
            {data.map((value) => {
                  return (
                        <div className='p-[30px]'>
                              <div className='w-[70px] h-[70px] leading-[70px] text-[#000] bg-[#fff]'>
                                    <h1 className='text-[40px] text-center'>V</h1>
                              </div>
                              <div className='home-img'>
                                    <img src={value.cover} alt="" className='absolute left-[-40%] top-[-34%] !h-[110vh] z-[-1] mt-[35%] h-auto w-auto max-w-none'/>
                              </div>
                              <div className='w-[45%] mt-[15%]'>
                                    <h1 className='text-5xl text-white'>{value.titleOne}</h1>
                                    <p className='mt-[20px] mb-[5px] text-white'>{value.paraOne}</p>
                                    <span className='text-xl'>{value.name}</span>
                              </div>
                              <div className='w-[45%] mt-[15%] float-right text-right'> 
                                    <h1 className='text-5xl text-white'>{value.titletwo}</h1>
                                    <p className='mt-[20px] mb-[5px] text-white'>{value.paraTwo}</p>
                                    <span className='text-xl'>{value.subTitle}</span>
                              </div>
                              <div className='qrcode'>
                                    <img src={value.qrCode} alt="" className='mt-[35%] h-auto w-auto'/>
                              </div>
                        </div>
                  )
            })}
      </div>
      <div className='w-1/2 p-[40px] text-[#000] absolute right-0'>
            <Slide />
            <Card />
            <CardTwo />
            <Footer />
      </div>
    </section>
    </>
  )
}

export default BlogHome