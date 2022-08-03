import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import image from "./homepagepic.jpg"
const HomePage = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
        <div class=''>
          <div className="mx-auto sm:px-6 lg:px-8 flex">
            <div className="bg-white shadow rounded-lg flex">
                <div className = 'flex justify-center'>
                  <img src={image} className = 'w-2/3 rounded-lg border-2 border-cyan-200' alt="hello" />
                    <div className="px-4 py-5 sm:p-6 shadow-lg">
                      <p className = 'font-semibold text-2xl'> Looking to get your chakras ABSOLUTELY BLASTED? Your third eye is going to be QUIVERING and that's a Crystal Shop Guarantee. SHOP NOW!</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>  
  )
}

export default HomePage