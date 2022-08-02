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
        <div className=' mt-10 shadow-Custom rounded-md cursor-pointer group overflow-hidden bg-white dark:bg-DarkBlue ' ref={props.reference} >
            <div className=' h-48 w-full rounded-t shadow-md justify-center flex items-center overflow-hidden  sm:h-52 '>
            {
                isLoading ? <Loader />
                 : <img src={props.flags} alt="flag-img" className=' shadow-md w-full rounded-t h-full group-hover:scale-125 transition-transform duration-200 ease-in-out' />
            }
            </div>
            <div className=' px-6 pt-7 pb-10 overflow-hidden'>
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