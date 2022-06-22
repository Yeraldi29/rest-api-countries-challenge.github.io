import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import LightModeIcon from '@mui/icons-material/DarkMode';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';

const Toogle =()=>{
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            {theme === 'dark' ? (
               <LightModeIcon sx={{color: 'white'}} className=" cursor-pointer"  onClick={()=>setTheme(theme=== 'dark' ? 'light' : 'dark')} />
            ):(
                <DarkModeIcon className=" cursor-pointer" onClick={()=>setTheme(theme=== 'dark' ? 'light' : 'dark')}/>
            )}
        </div>
    );
}

export default Toogle;