import React from "react";
import {GiCrystalGrowth} from 'react-icons/gi'
import { Link } from "react-router-dom";

//the header is visible in small mobile view

const Header = () => {
  return (
    
            <Link to='/'>
              <div className='justify-center items-center items-middle align-middle flex'>
              <div>
                <GiCrystalGrowth size={40} color={'#22d3ee'}/>
              </div>
              <div className='p-1'>
                <p className='text-2xl'>Good Vibrations</p>
              </div>
              <div>
                <GiCrystalGrowth size={40} color={'#22d3ee'}/>
              </div>
              </div>
            </Link>
  )
}

export default Header