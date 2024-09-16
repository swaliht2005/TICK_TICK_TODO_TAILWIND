import React from 'react'

function menubare() {
  return (
    <div className='h-[585px]  w-[280px] flex  border'>
      <div className=' h-[185px] w-[280px] justify-center items-center flex  flex-col justify-evenly border'>
        <div className='h-[40px] w-[230px] items-center gap-2 flex p-px hover:bg-gray-100  rounded'>
          <img className='h-[20px] w-[20px] ' src="src/assets/icons8-calendar-1-52.png" alt="" /> <p>Today</p>
        </div>
        <div className='h-[40px] w-[230px] gap-2 items-center flex  p-px hover:bg-gray-100 rounded'>
          <img className='h-[20px] w-[20px] ' src="src/assets/icons8-calendar-1-52.png" alt="" /> <p>Next 7 Days</p>
        </div>
        <div className='h-[40px] w-[230px] gap-2 items-center flex  p-px hover:bg-gray-100 rounded'>
          <img className='h-[20px] w-[20px] ' src="src\assets\icons8-inbox-48.png" alt="" /> <p>Inbox</p>
        </div>
      </div>
     
    </div>
  )
}

export default menubare
