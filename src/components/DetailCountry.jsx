import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Loader from './Loader';

export default function Detail(){
    const [detail, setDatail] = useState([]);
    const [loanding, setLoanding] = useState(false);
    let {detailTitle} = useParams();

    const getData= async()=>{
        setLoanding(true);
     await axios.get("https://restcountries.com/v3.1/alpha/"+ detailTitle ).then((response)=>{
        setDatail(response.data);
        setLoanding(false);
     }).catch((err)=>{console.log(err);})
  };
    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className=' mt-10 px-8 text-sm mb-12 md:px-14 lg:px-16 lg:mt-16'>
            <div className=' bg-white dark:bg-DarkBlue w-28 h-8  rounded-sm shadow-Custom cursor-pointer hover:opacity-50 '>
                <Link to={{pathname: "/"}} className="flex items-center justify-center h-8" >
                <KeyboardBackspaceIcon />
                <p className=' pl-2'>Back</p>
                </Link>
            </div>
            <div className=' flex items-center h-96'>  
            {
                detail.map((country, index) => {
                    return (
                     <div key={index} className=" lg:flex lg:items-center ">
                     <img className=' w-full h-64 my-14 sm:h-[22rem] lg:h-72 lg:w-96 shadow-Custom' src={country.flags.png} alt="flag-img" />
                     <div className=' lg:ml-8 xl:ml-32'>
                     <h1 className=' text-xl font-bold pb-4'>{country.name.common}</h1>
                     <div className=' sm:flex sm:justify-between'>
                     <ul>      
                         <li className=" pb-3">Native Name:
                         {Object.values(country.name.nativeName).map((item, index) =>{
                            return(
                                index + 1 === Object.values(country.name.nativeName).length ?
                                <span className=' font-light pl-1 text-VeryDarkBlue dark:text-white/90 ' key={index}>{item.common}</span>
                              :<span className=' font-light pl-1 text-VeryDarkBlue dark:text-white/90 ' key={index}>{item.common},</span> 
                            )
                         })} 
                         </li>
                         <li className=" pb-3" >Population: <span className=' font-light text-white/90'><NumberFormat value={country.population} display={'text'} thousandSeparator={true} displayType={'text'} /></span> </li>
                         <li className=" pb-3" >Region: <span className=' font-light text-VeryDarkBlue dark:text-white/90'>{country.region}</span> </li>
                         <li className=" pb-3" >Sub Region: <span className=' font-light text-VeryDarkBlue dark:text-white/90'>{country.subregion}</span> </li>
                         <li className=" pb-3" >Capital: <span className=' font-light text-VeryDarkBlue dark:text-white/90'>{country.capital}</span></li>
                     </ul>
                     <ul className=' my-5 sm:m-0 lg:ml-4 xl:ml-12'>
                         <li className=' pb-3'>Top Level Domain: <span className='font-light text-VeryDarkBlue dark:text-white/90'>{country.tld}</span></li>
                         <li className=' flex pb-3'>
                             Currencies: 
                         { Object.values(country.currencies).map((item, index) =>{
                             return (
                                 <span className=" pl-1 font-light text-VeryDarkBlue dark:text-white/90" key={index}>{item.name}</span>
                             )
                         })} 
                         </li>
                         <li className=" flex pb-3">
                             Languages:
                           { Object.values(country.languages).map((item, index) =>{
                             return (
                                index + 1 === Object.values(country.languages).length ? 
                                <span className=" pl-1 font-light text-VeryDarkBlue dark:text-white/90" key={index}>{item}</span>
                                : <span className=" pl-1 font-light text-VeryDarkBlue dark:text-white/90" key={index}>{item},</span>
                             )
                         })} 
                        </li>
                     </ul>
                     </div>
                     <div className=''>
                     <h3 className=' text-base '>Border Countries: </h3>
                    <div className=' flex  mt-6 '>
                    {
                    country.borders !== undefined && country.borders.map((item, index) =>{
                        return(
                            <Link to={{pathname: "/"+item}} >
                               <div className="flex bg-white dark:bg-DarkBlue mr-2 w-28 h-6 items-center justify-center rounded-sm shadow-Custom cursor-pointer hover:opacity-50 sm:w-24 " key={index} >
                                   <span className=' text-xs font-light text-VeryDarkBlue dark:text-white/90 ' key={index}>{item}</span>
                               </div>
                               </Link>   
                        )                   
                    })
                     }
                    </div>
                     </div>
                     </div>
                     </div>               
                    )    
                })
            }
            {loanding && <Loader />}
            </div>
        </div>
    )
}