import React, {useState} from "react";
import SelectOptions from "./ContentForm/SelectOptions";
import SearchIcon from '@mui/icons-material/Search';
import useSearchName from "../Hooks/useSearchName";

export default function Form(){
    const [name, setName] = useState('');
    const setSearchName = useSearchName();

    const handleSubmit = (e)=>{
        setSearchName(name.toLowerCase());
        setName('');
        e.preventDefault();
    }

    return (
        <form className=" px-5  sm:px-9 sm:flex sm:justify-between md:px-14 lg:px-16 mt-6  "
         action="/" onSubmit={handleSubmit}>
            <div className="relative sm:w-80 lg:w-96 flex">
              <input type="text"  placeholder="Search for a country..." className=" w-full shadow-Custom rounded-md h-[50px] pl-[85px] dark:bg-DarkBlue placeholder:text-VeryDarkBlue/30 placeholder:font-semibold   placeholder:dark:text-white/80 focus:outline-none" onChange={e => setName(e.target.value)} value={name}/>
              <button type="submit" className="bg-Verylightwhite dark:bg-VeryDarkBlue text-VeryDarkBlue/30 dark:text-white/80 absolute top-[0.4rem] left-8 rounded-full h-10 w-10">
                  <SearchIcon className=" text-VeryDarkBlue/30 dark:text-white/80" sx={{fontSize:26}} />
              </button>
            </div>
            <SelectOptions/>
        </form>
    );
};