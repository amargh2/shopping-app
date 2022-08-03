import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6"> test westy</div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">knifey wifey</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage