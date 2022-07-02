import React from 'react';
import NumberFormat from 'react-number-format';
import Loader from '../Loader';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Card(props){
    let isLoading = useSelector(state => state.loader.value);
    let detailTitle = props.cca3;
        return(
        <Link to={"country/"+detailTitle}>
        <div className=' mt-10 shadow-Custom rounded-md cursor-pointer  bg-white dark:bg-DarkBlue  hover:border-4 hover:border-Verylightwhite hover:dark:border-VeryDarkBlueT' ref={props.reference} >
            <div className=' h-48 w-full rounded-t shadow-md justify-center flex items-center sm:h-52 '>
            {
                isLoading ? <Loader />
                 : <img src={props.flags} alt="flag-img" className=' shadow-md w-full rounded-t h-full' />
            }
            </div>
            <div className=' px-6 pt-7 pb-10'>
            {
                isLoading ? <div className='flex'>
                    <Loader />
                </div>
                 :  <>
                 <h2 className=" text-xl font-extrabold" >{props.name}</h2>
                 <ul className=' mt-3'>
                     <li className=" font-bold">Population: <span className=' font-normal'>
                         <NumberFormat value={props.population} display={'text'} thousandSeparator={true} displayType={'text'} /></span></li>
                     <li className=" font-bold">Region: <span className=' font-normal'>{props.region}</span></li>
                     <li className=" font-bold">Capital: <span className=' font-normal'>{props.capital}</span></li>
                     <li>{props.text}</li>
                 </ul>
                 </>
            }
             
            </div>
        </div>
        </Link>
    );
}