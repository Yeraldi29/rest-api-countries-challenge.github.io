import React from 'react';
import Toogle from './ChangeTheme/ThemeToogle';

export default function Header() {

return(
<header className=' bg-white shadow-md dark:bg-DarkBlue flex justify-between items-center h-24 px-5 sm:px-9 md:px-14 lg:px-16 '>
   <h1 className='font-extrabold dark:text-white text-xl md:text-2xl'>Where in the world?</h1>
   <Toogle />
</header>
)
}