import React from 'react';
// import logo from './path_to_your_logo'; // Remplacez par le chemin vers votre logo

const SplashScreen = () => {
  return (
    <div className='relative top-0 w-full h-screen flex items-center justify-center'>
      <div className="w-full text-center 
      items-center relative 
      flex place-items-center 
      before:absolute before:h-[300px] before:w-full
      sm:before:w-[480px] before:-translate-x-1/2 
      before:rounded-full before:bg-gradient-radial 
      before:from-blue-500 before:to-blue-700 
      before:blur-2xl before:content-[''] 
      after:absolute after:-z-20 after:h-[180px] 
      after:w-full sm:after:w-[240px] 
      after:translate-x-1/3 
      after:bg-gradient-conic 
    after:from-zinc-700 
      after:via-blue-500 
      after:blur-2xl after:content-[''] 
      before:dark:bg-gradient-to-br
      before:dark:from-transparent 
      before:dark:to-blue-700 
      before:opacity-40 
      after:dark:from-sky-900 
      after:dark:via-[#0141ff] 
      after:opacity-40 
      before:lg:h-[360px] 
      z-[-1]">
   {/* <img src={logo} alt="Logo" className="m-auto" /> */}
      logo
    </div>
          <div className="w-full text-center items-center relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial light:before:from-blue-500 light:before:to-blue-700 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic light:after:from-sky-200 light:after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-40 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
    </div>
  );
};

export default SplashScreen;