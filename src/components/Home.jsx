import React,{useState,useEffect,useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItems} from './ContentForm/Features/itemsFilter';
import axios from 'axios';
import Form from './Form';
import Card from './Countries/Card';
import Loader from './Loader';
import {setLoader} from './ContentForm/Features/Loader';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const TotalData = 100;

export default function App(){
   const [posts, setPosts]= useState([]);
   const [hasMore, setHasMore] = useState(true);
   const observer = useRef();
   const dispatch = useDispatch();
   let items = useSelector(state => state.items.value);
   let region = useSelector(state => state.API);
   let search = useSelector(state => state.search);   
   let check = useSelector(state => state.check);
   let isLoading = useSelector(state => state.loader.value);
   
   const lastItemRef = useCallback(
      node=>{
         if (isLoading) return;
         if (observer.current) observer.current.disconnect();
         observer.current = new IntersectionObserver(entries =>{
            if(entries[0].isIntersecting && hasMore){
               if(items < TotalData ){
                  dispatch(addItems());
               }else{
                  setHasMore(false);
               }
            }
         });
         if(node) observer.current.observe(node);
      },
      [isLoading,hasMore]
   ); 

   const getData= async()=>{
         dispatch(setLoader(true));
      await axios.get("https://restcountries.com/v3.1/all").then((response)=>{
         setPosts(response.data);
         dispatch(setLoader(false));
      }).catch((err)=>{console.log(err);})
   };
  useEffect(()=>{
   getData();
 },[]);

return (
<div>
   <Form />
      {
          region.length === undefined && search.length === undefined ?( 
           <div className=' grid px-16 mb-12 sm:grid-cols-2 sm:gap-8 md:gap-10 md:px-20 lg:grid-cols-3 lg:gap-14 xl:grid-cols-4 justify-center items-center w-full h-96'>
          {posts.slice(0,items).map((country, index) =>{
          return (
             index + 1 === items ? (
                <Card 
                reference={lastItemRef} 
                key={index} 
                text={'this'}
                flags={country.flags.png}
                name={country.name.common}
                population = {country.population}
                region = {country.region}
                capital={country.capital}
                 />
             ):(
                <Card 
                key={index} 
                cca3={country.cca3}
                flags={country.flags.png}
                name={country.name.common}
                population = {country.population}
                region = {country.region}
                capital={country.capital}
                 />
             )
          );
       }) }
       {isLoading && <Loader />}
       </div> ) : search.length === undefined || search.length === 0 ? (
          <div className=' grid px-16 mb-12 sm:grid-cols-2 sm:gap-8 md:gap-10 md:px-20 lg:grid-cols-3 lg:gap-14 xl:grid-cols-4 justify-center items-center w-full h-96'>
          {
           region.slice(0,items).map((country, index) =>{
         return (
            index + 1 === items ? (
               <Card 
               reference={lastItemRef} 
               key={index} 
               text={'this'}
               flags={country.flags.png}
               cca3={country.cca3}
               name={country.name.common}
               population = {country.population}
               region = {country.region}
               capital={country.capital}
                />
            ):(
               <Card 
               key={index} 
               flags={country.flags.png}
               cca3={country.cca3}
               name={country.name.common}
               population = {country.population}
               region = {country.region}
               capital={country.capital}
                />
            )
         );
         }) }
         {isLoading && <Loader />  }
        </div>
       ) : check === 404 ? (
           <div className=' flex justify-center items-center h-96 px-14 dark:text-white/80'>
              <h1 className=' text-4xl '>ENTER THE CORRECT NAME.</h1>
              <ThumbDownIcon sx={{fontSize:64}} /> 
           </div>
        ) : (
        <div className=' grid px-16 mb-12 sm:grid-cols-2 sm:gap-8 md:gap-10 md:px-20 lg:grid-cols-3 lg:gap-14 xl:grid-cols-4 justify-center items-center w-full h-96'>
          {
           search.map((country, index) =>{
         return (
               <Card 
               reference={lastItemRef} 
               cca3={country.cca3}
               key={index} 
               text={'this'}
               flags={country.flags.png}
               name={country.name.common}
               population = {country.population}
               region = {country.region}
               capital={country.capital}
                /> 
         );
         }) }
         {isLoading && <Loader />  }
        </div>
        )
      }
</div>
);
};