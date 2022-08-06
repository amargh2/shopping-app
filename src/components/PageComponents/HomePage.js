import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Image from './homepagepic.jpg'
const HomePage = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
        <div class=''>
          <div className="mx-auto sm:px-6 lg:px-8 flex">
            <div className="bg-white shadow rounded-lg flex">
                <div className = 'flex justify-center'>
                  <img src={Image} className = 'w-2/3 rounded-lg border-2 border-cyan-200' alt="hello" />
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

export default HomePage