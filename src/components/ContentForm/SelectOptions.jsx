import {useContext} from 'react';
import useSelectRegion from '../../Hooks/useSelectRegion';
import Select, {components} from 'react-select';
import {ThemeContext} from '../ChangeTheme/ThemeContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import _ from 'lodash';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe'},
  { value: 'Oceania', label: 'Oceania'}
];

export default function SelectOptions(){
    const {theme} = useContext(ThemeContext);
    const setValue = useSelectRegion();

    const DropdownIndicator= (props)=>{
        return(
            <components.DropdownIndicator {...props}>
                <KeyboardArrowDownIcon fontSize="small"  />
            </components.DropdownIndicator>
        );
    };

    const customStyles = {
        option: (provided)=>({
            ...provided,
            color:theme === 'light' ? 'hsl(200, 15%, 8%)' : 'rgb(255 255 255 / 0.8)',
            paddingLeft:'1.6rem',
            "&:hover":{
                cursor:'pointer',
            }
        }),
        noOptionsMessage:(provided)=>({
            ...provided,
            color:theme === 'light' ? 'hsl(200, 15%, 8%)' : 'rgb(255 255 255 / 0.8)'
        }),
        control: (provided, state)=>({
            ...provided,
            border: theme === 'light' ? (state.isFocused ? "none" : "none") :(state.isFocused ? "1px solid hsl(207, 26%, 17%)" : "1px solid hsl(207, 26%, 17%)"),

            boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 10px 0px",
            height:'50px',
            paddingLeft:'1.2rem',

            "&:hover":{
                // leaving this hover empty I don't have the default classes
                cursor:'pointer',
            }
        }),
        indicatorSeparator:(provided)=>({
            ...provided,
            display:'none'
        }),
        indicatorsContainer:(provided)=>({
            ...provided,
            marginRight:'0.6rem'
        }),
        singleValue:(provided)=>({
            ...provided,
            color:theme === 'light' ? 'hsl(200, 15%, 8%)' : 'rgb(255 255 255 / 0.8)',
            fontWeight: '600'
        }),
        menu:(provided)=>({
            ...provided,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 10px 0px",
        }),
        placeholder:(provided)=>({
            ...provided,
            color:theme === 'light' ? 'hsl(200, 15%, 8%)' : 'rgb(255 255 255 / 0.8)',
        }),
        input:(provided)=>({
            ...provided,
            color:theme === 'light' ? 'hsl(200, 15%, 8%)' : 'rgb(255 255 255 / 0.8)',
            caretColor:theme === 'light' ? 'hsl(200, 15%, 8%)' : 'rgb(255 255 255 / 0.8)'
        })
    }

    function handleChange(e) { 
       setValue(_.lowerFirst(e.value))
    }

    return (
        <Select
        onChange={(e) => handleChange(e)}
        options={options} 
        className=" mr-32 mt-8 sm:m-0 sm:w-52" 
        styles={customStyles}
        components={{DropdownIndicator}}
        placeholder={'Filter by Region'} 
        theme={(Theme)=>({
            ...Theme,
            colors:{
                ...Theme.colors,
                primary:'',
                primary25:'',
                primary50:'',
                primary75:'',
                neutral0: theme === 'light' ? 'white' : 'hsl(209, 23%, 22%)'
            }
        })}    
        />
    );
}