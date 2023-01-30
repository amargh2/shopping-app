import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Image from './homepagepic.jpg'
import {GiCrystalGrowth} from 'react'
import { Link } from "react-router-dom";
/*const HomePage = (props) => {
  return (
    <div>
      <Header/>
      <NavBar cartItemCount={props.cartItemCount}/>
        <div class=''>
          <div className="mx-auto sm:px-6 lg:px-8 flex">
            <div className="bg-white shadow rounded-lg flex">
                <div className = 'flex justify-center'>
                  <img src='images/home.jpg' className = 'w-2/3 h-1/2 rounded-lg' alt="hello" />
                    <div className="px-4 py-5 sm:p-6 shadow-lg">
                      <p className = 'font-semibold text-2xl'> Welcome to the Crystal Shop! We have a great selection of beautiful, resonant crystals that are sure to meet your spiritual and aesthetic needs!</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>  
  )
}

export default HomePage */

export default function HomePage(props) {
  return (
    
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Welcome to Good Vibrations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             We've been in business for a 20 years, and we're sure to have the crystals you need for whatever you need 'em for!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to='/shop'>
                <button
                className="rounded-md bg-cyan-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Shopping
              </button>
              </Link>

            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto"
            src="images/home-2.jpg"
            alt="big hunk of amethyst"
          />
        </div>
        </div>
        
      </div>
  )
}