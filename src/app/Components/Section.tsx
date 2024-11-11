
import React from 'react';
import Image from 'next/image';
import logo from '@/app/Components/Logo.png'
import vector from '@/app/Components/Btn-free-trial.png'
import arrow from '@/app/Components/Icon.png'
import work from '@/app/Components/Work Together Image.png'
import tryWork from '@/app/Components/Btn-free-trial.png'
import custom from '@/app/Components/customize.png'
import apple from '@/app/Components/Apple.png'
import microsoft from '@/app/Components/Microsoft.png'
import slack from '@/app/Components/Slack.png'
import google from '@/app/Components/Google.png'


const Section = () => {
  return(
    <>
    <div className="w-[1920px] h-[92px] py-4px px-[220px] bg-[#043873] flex justify-between items-center">
    
    <div className='w-[191px] h-[34px]'>
     <Image src={logo} alt="" />
    </div>

   <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
     <div className='w-[549px] h-[23px] gap-[32px]'>
      <ul className=' text-[#FFFFFF] flex flex-row justify-between'>
        <li className=' hover:text-sky-500'>Products</li>
        <li className=' hover:text-sky-500'>Solution</li>
        <li className=' hover:text-sky-500'>Resources</li>
        <li className=' hover:text-sky-500'>Pricing</li>
      </ul>
     </div>

     <div className='w-[126px] h-[60px] gap-[24px]'>
     <button className='w-[126px] h-[60px] px-10 py-4 gap-10px rounded-lg bg-[#FFE492] text-black hover:bg-sky-200'>Login</button>
     </div>

   </div>
    </div>

   {/* hero-section */}
    <div className=" w-[1920px] h-[829px] top-[92px] py-[140px] px-[220px] left-1 flex bg-[#043873] ">
    <div className='w-[656px] h-[361px] grid gap-[60px]'>
    <div className='w-[656px] h-[154px] pt-24' >
     <h2 className='w-[656px] h-[154px] font-inter text-[64px] font-bold leading-[77.45px] tracking-[-0.02em] text-left text-[#FFFFFF]'>Get More Done with whitepace</h2>
     <p className='w-[656px] h-[63px] font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left text-[#FFFFFF] mt-6'>Project management software that enables your teams to collaborate, plan,<br /> analyze and manage everyday tasks</p>
      </div>

      <div className='w-[219px] h-[63px]  gap-10px mt-48 '>
        <button className='p-5 w-[219px] h-[63px] font-inter text-lg font-medium leading-[23px] tracking-[-0.02em] text-left text-[#FFFFFF] bg-[#23A6F0]  border-solid gap-[10px] flex justify-between items-center hover:bg-sky-200'> <Image src={vector} alt="" /></button>
      </div>
      </div>  
      <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
   </div>

     {/* project management */}


      <div className="w-[1920px] h-[1588px] top-[921px] py-[140px] px-[220px] font-inter ">
        <div className="w-[1480px] h-[547px] gap-[60px] flex items-center">
          <div className="w-[672px] h-[411px] gap[60px]">
            <div className="w-[627px] h-[288px]">
              <div className="w-[627px] h-[174px]">
                <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] text-left ">Project Management</h1>
              </div>
              <br />
              
              <div className="w-[672px] h-[90px]">
                <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Images, videos, PDFs and audio files are supported. Create math expressions and <br /> diagrams directly from the app. Take
              photos with the mobile app and save them <br /> to a note.
                </p>
              </div>

              <div className="w-[201px] h-[63px] gap-10px" ></div>
              <button className="py-5 px-10 rounded-md bg-[#4F9CF9] flex items-center justify-center ">
                <p className="w-[97px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">
                  Get Started
                </p>
                <span className="text-white text-lg"> <Image src={arrow} alt="" /></span>
              </button>
            </div>
            </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
        <br /> <br /> 
        <br /> 
      {/* work together */}
 
      <div className='w-[1,480px] h-[661px] gap-[100px] flex items-center'>
      <div className='w-[710px] h-[661px]'>
      <Image src={work} alt="" />
      </div>

      <div className='w-[670px] h-[294px] '>
      <div className='w-[670px] h-[171px] '>
        <h1 className='font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left text-[#212529] '>Work Together</h1>
      </div>

      <div className='w-[670px] h-[60px]'>
        <p className='font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left text-[#212529] '>
          With whitepace, share your notes with your colleagues and collaborate on them.<br /> You can also publish a note to the internet and share the URL with others. 
        </p>
      </div>

      <div className='mt-12'>
       <Image src={tryWork} alt="" />
      </div>
      </div>
      </div>
      </div>

{/* extension */}
      <div className='w-[1921px] h-[759px] top-[2509px] left-1px gap-[98px] py-[140px] px-[220px] flex items-center bg-[#043873]'>
        <div className='w-[697px] h-[294px] gap-[60px]'>
          <div className='w-[697px] h-[171px] gap-[24px]'>
           <div className='w-[697px] h-[87px]'>
          <h1 className='font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left text-[#FFFFFF]'>
          Use as Extension
          </h1>
          </div>

          <div className='w-[697px] h-[60px] '>
           <p className='font-inter text-lg leading-[30px] font-normal tracking-[-0.02em]  text-[#FFFFFF] py-8'>
           Use the web clipper extension, available on Chrome and Firefox, to save web pages <br /> or take screenshots as notes.
           </p>
          </div>
           
          <div className='mt-20'>  </div>
          <Image src={custom} alt="" />
          </div>
        
           </div>
      
      <div className='w-[686px] h-[479px] bg-[#C4DEFD]'></div>
      </div>


{/* Customize it */}
      <div className='w-[1921px] h-[812.09px] top-[3268px] px-[220px] py-[140px] gap-[98px] font-inter flex items-center'>
       <div className='w-[714px] h-[532.09px] bg-[#C4DEFD]'></div>

      <div className='w-[669px] h-[411px] gap-[60px]'>
      <div className='w-[669px] h-[288px] gap-[24px]'>
      <div className='w-[669px] h-[174px]'>
      <h1 className='font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left text-[#212529]'>Customize it to <br /> your needs</h1>
      </div>

      <div className='w-[669px] h-[90px]'>
      <p className='font-inter text-[18px] leading-[30px] font-normal tracking-[-0.02em] text-[#212529] py-8' >
    Customise the app with plugins, custom themes and multiple text editors (Rich  <br /> Text or Markdown). Or create your own scripts and plugins using the Extension <br />API.
      </p>
      </div>
      
      <div className='mt-20'>
        <Image src={custom} alt="" />
      </div>
      </div>

      </div>
      </div>


{/* Your Work */}
       <div className='w-[1921px] h-[574px] top[4080px] py-[140px] px-[547px]  bg-[#043873]'>
       <div className='w-[1481px] h-[294px] gap-[60px] justify-center'>
       <div className='w-[1064px] h-[171px] gap-[24px]'>
       
       <div className='w-[1064px] h-[87px]'>
        <h1 className='font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#FFFFFF]'>
        Your work, everywhere you are
        </h1>
       </div>

       <div className='w-[1064px] h-[60px]'>
        <p className='font-inter text-[18px] leading-[30px] font-normal tracking-[-0.02em] py-8 justify-between text-[#FFFFFF]'>
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and <br /> 
        OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
       </div>
        
        <div className='mt-20  flex justify-center'> 
        <Image src={custom} alt="" />
        </div>
       <div>

       </div>
      </div>
      </div>
       </div>

{/* Sponsors */}
    <div className='w-[1922px] h-[538px] top-[4654px] px-[220px] py-[140px] gap-[100px] flex flex-col '>
     <div className='w-[1482px] h-[87px]'>
      <h1 className='font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529] text-center'>
        Our Sponsors
      </h1>
     </div>

     <div className='w-[1482px] h-[71px] justify-between flex items-center'>
     <div className='w-[55.47px] h-[65px] pt-2  py-6'>
     <Image src={apple} alt="" />
     </div>

     <div className='w-[287px] h-[62px] gap-4'>
    <Image src={microsoft} alt="" />
     </div>

     
     <div className='w-[280px] h-[71px] gap-4'>
    <Image src={slack} alt="" />
     </div>

     <div className='w-[211x] h-[71px] gap-4'>
    <Image src={google} alt="" />
     </div>
     </div>
    </div>

{/* footer */}
    <div className='w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] gap-[200px] bg-[#043873] '>
    <div className='w-[1480px] h-[289px] gap-[100px]'>
    <div className='w-[1480px] h-[169px] gap[100px]  flex items-center justify-center'>
    <div className='w-[295px] h-[169px] gap-16px'>
    <div className='w-[191px] h-[34px]'>
     <Image src={logo} alt="" />
    </div>
    <div className='w-[240px] h-[120px]'>
      <p className='font-inter text-18px leading-[30px] tracking-[-0.02em] text-[#F7F7EE]'>
      whitepace was created for <br /> the new ways we live and <br /> work. We make a better <br /> workspace around the world
      </p>
    </div>
    </div>

    <div className='w-[295px] h-[127px] gap-[15px] flex flex-col'>
    <ul className='font-inter text-16px leading-[20px] tracking-[-0.02em] '>
    <li className='w-[68-px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#F7F7EE] '>Product</li>
    <li  className='w-[70px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE] py-2'>Overview</li>
    <li className='w-[50px] h-[22px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE] py-3'>Pricing</li>
    <li className='w-[177px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE]  py-4'>Customer stories</li>
    </ul>
    </div>

    <div className='w-[295px] h-[127px] gap-[15px] flex flex-col'>
    <ul className='font-inter text-16px leading-[20px] tracking-[-0.02em] '>
    <li className='w-[91-px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#F7F7EE] '>Resources</li>
    <li  className='w-[33px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE] py-2'>Blog</li>
    <li className='w-[128px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE] py-4'>Guides & tutorial</li>
    <li className='w-[130px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE]  py-4'>Help Center</li>
    </ul>
    </div>

    <div className='w-[295px] h-[120px] gap-[6px] flex flex-col'>
    <ul className='font-inter text-16px leading-[20px] tracking-[-0.02em] '>
    <li className='w-[83-px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#F7F7EE] '>Company</li>
    <li  className='w-[66px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE] py-2'>About Us</li>
    <li className='w-[62px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE] py-4'>Careers</li>
    <li className='w-[99px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#F7F7EE]  py-4'>Media kit</li>
    </ul>
    </div>
    </div>
    </div>

    <div className='w-[1480px] border-[1px] border-solid  border-t border-[#2E4E73]'> </div>
    <div className='w-[1480px] h-[20px] flex items-center justify-center'>
    <div className='w-[169px] h-[20px] gap-[60px]'>
      <p className='font-inter text-16px leading-[20px] tracking-[-0.02em] text-white justify-between'>©2021 Whitepace LLC.</p>
    </div>
    </div>
    </div>
   
        </>
  )
}


export default Section;