import {useState,useEffect} from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {setLoader} from '../components/ContentForm/Features/Loader';
import {country} from '../components/ContentForm/Features/SearchCountry';
import {itemsIndex} from '../components/ContentForm/Features/itemsFilter';

axios.defaults.baseURL = "https://restcountries.com/v3.1/";

const useFetchData = (url) => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState('');
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

  useEffect(()=>{
   const getData = async() =>{
     try{
      dispatch(setLoader(true));
      dispatch(country([])); 
      dispatch(itemsIndex());
      console.log(url+keyword)
      await axios.get(url + keyword).then((response)=>{
         setPosts(response.data);
         setErr(response.status)
         dispatch(setLoader(false));
      })
     }catch(error){
      setErr(error.response.status);
    }
   };
   if(!url || url + keyword === "region/"  || url + keyword === "name/" || url + keyword === "alpha/") return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
   },[keyword, url]);

    return [posts, setKeyword, err]
}

export default useFetchData;