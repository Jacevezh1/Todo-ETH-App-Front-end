import React, { useContext } from "react";
import logo from './../utils/images/logo.png'
import { TransactionContext } from './../context/TransactionContext'
import { shortenAddress } from "./../utils/shortenAddress";

const Navbar = () => {

  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <>
        <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
            <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                    <img class="block lg:hidden h-12 w-auto" src={logo} alt="Dapps"/>
                    <img class="hidden lg:block h-12 w-auto" src={logo} alt="Dapps"/>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="#" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Dashboard </a>
                    <a href="#" class="border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Projects </a>
                </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                {
                  !currentAccount 
                  ? 
                  <button onClick={connectWallet} type="button" class="transition duration-700 ease-in-out relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <span>Connect Wallet</span>
                  </button>
                  :
                  <p className="text-gray-400 font-bold text-sm animate-bounce">
                   Connected:  {shortenAddress(currentAccount)} 🟢
                  </p>
                }
              </div>
            </div>
            </div>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar;