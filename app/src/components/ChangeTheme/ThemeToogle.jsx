import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import LightModeIcon from '@mui/icons-material/DarkMode';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';

const Toogle =()=>{
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <button className=' flex items-center py-2' onClick={()=>setTheme(theme=== 'dark' ? 'light' : 'dark')}>
         {theme === 'dark' ? (
            <>
            <LightModeIcon sx={{color: 'white'}} className=" cursor-pointer"/>
            <p className=' font-semibold dark:text-white pl-2'>Light Mode</p>
            </>
         ):(
            <>
            <DarkModeIcon className=" cursor-pointer"/>
            <p className=' font-semibold dark:text-white pl-2'>Dark Mode</p>
            </>
          )}
        </button>
    );
}

export default Toogle;