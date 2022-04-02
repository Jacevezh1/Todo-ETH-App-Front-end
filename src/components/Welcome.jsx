import React from 'react'

const Welcome = () => {
  return (
    <div class="bg-white">
        <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-800 to-blue-500">Ready to dive in?</span>
            <span class="block font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-400">Start managing your goals today.</span>
            </h2>
            <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex duration-700 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-sky-400"> Get started </a>
            </div>
            <div class="ml-3 inline-flex ">
                <a href="#" class="inline-flex duration-700 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-green-600"> Learn more </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome