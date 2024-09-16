import React from 'react'


function  Saidebare() {
  return (
   
      <div className='h-[100%] w-[4%] bg-gray-200  flex justify-between flex-col '>
       <div className=' h-[200px] w-[50px]   flex justify-center items-center flex-col justify-around'> 
         <img className='h-[30px] w-[32px] rounded' src="src\assets\swalih.jpg " alt="" />
         <img className='h-[30px] w-[32px]' src="src\assets\checkbox.png" alt="" />
         <img className='h-[30px] w-[32px]' src="src/assets/icons8-calendar-32.png" alt="" />
         <img className='h-[30px] w-[32px]' src="src\assets\icons8-search-50.png" alt="" />
       </div>
       <div className=' h-[200px] w-[50px]  flex justify-center items-center flex-col justify-around'>
          <img className='h-[30px] w-[32px]' src="src\assets\icons8-synchronize-50.png" alt="" />
          <img className='h-[30px] w-[32px]' src="src\assets\icons8-notification-48.png" alt="" />
          <img className='h-[30px] w-[32px]' src="src\assets\more.png" alt="" />
       </div>
      </div>
   
  )
}

export default Saidebare
