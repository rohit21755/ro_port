'use client';
import Image from 'next/image'
import React, { useContext } from 'react'

// import { color } from '@mui/system';
export const Header = () => {
   
    
        
          const TextStyle = `font-visby font-[600] text-lg  hover:cursor-pointer items-center text-white hover:text-[#F5CB5C]`

    return (
        <><div className='flex flex-1 flex-row justify-evenly lg:justify-between items-center  py-4 px-10 lg:px-20'>
            <div className='hidden lg:flex h-6 lg:h-auto'>
                <Image src="" alt='next' width={168}
                    height={40} />
            </div>
            <div className='flex flex-1 lg:flex-[0.5] flex-row justify-evenly '>
                
                
                
            
            <h2 className={TextStyle}>About</h2>
            <h2 className={TextStyle}>Skills</h2>
            <h2 className={TextStyle}>Projects</h2>
        </div><div className='flex flex-[0.5] lg:flex-[0.15] flex-row items-center justify-between'>
                {/* <input onChange={props.addTheme} type="checkbox"/> */}
                <button className={`border-2 rounded-[40px] py-2 px-3 ${TextStyle}`}>Let's Connect</button>
                {/* <Image src='/CartLight.svg' alt='next' width={20}
                    height={20} /> */}
                    {/* <FaCartPlus color={cartColor}/> */}


            </div>
            </div>
            </>

        
    )
}

export default Header