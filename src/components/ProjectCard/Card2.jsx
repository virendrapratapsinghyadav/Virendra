import React from 'react';
import p1 from '../../assets/images/p1.avif'

const Card2 = () => {
  return (
    <div className='m-2 p-1'>
      <a href="">

        <div className='flex justify-between'>
          {/* image */}
        
          <img src={p1} alt="" className='h-[200px] w-[500px] rounded-xl'/>
        

        {/* Overview */}
        <div>
          <h1 className='text-xl font-bold'>Revolutionising WhatsApp Collaboration with Meetup</h1>
          <p>
            During my time at university, I was challenged to enhance the collaborative features within WhatsApp. After considering multiple solutions, Meetup for WhatsApp was born. This project aims to seamlessly integrate event planning functionality through Meetup. Rooted in extensive user research, persona devlopment , and iterative design processes,Meetup seeks to address common pain points such as difficulty organising group plans andd finding crucial information within chat threads.
          </p>
        </div>
        </div>

      </a>
    </div>
  )
}

export default Card2
