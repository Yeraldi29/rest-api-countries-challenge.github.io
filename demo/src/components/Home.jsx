import useHandleChoose from '../Hooks/useHandleChoose';
import useLastItemRef from '../Hooks/useLastItemRef';
import Form from './Form';
import Card from './Countries/Card';
import Loader from './Loader';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function App(){
   const lastItemRef = useLastItemRef();
   const [data, items, check, isLoanding] = useHandleChoose() 

return (
<main>
   <Form />
      {
         check === 404 ? (
            <div className=' flex justify-center items-center h-96 px-14 dark:text-white/80'>
               <h1 className=' text-4xl '>ENTER THE CORRECT NAME.</h1>
               <ThumbDownIcon sx={{fontSize:64}} /> 
            </div>) : ( 
            <div className=' grid px-16 mb-12 sm:grid-cols-2 sm:gap-8 md:gap-10 md:px-20 lg:grid-cols-3 lg:gap-14 xl:grid-cols-4 justify-center items-center w-full h-96'>
           {data.slice(0,items).map((country, index) =>{
           return (
              index + 1 === items ? (
                 <Card 
                 reference={lastItemRef} 
                 key={index} 
                 cca3={country.cca3}
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
        {isLoanding && <Loader />}
        </div> 
      ) 
      }
</main>
);
};