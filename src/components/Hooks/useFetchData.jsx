import {useState,useEffect} from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {setLoader} from '../ContentForm/Features/Loader';

axios.defaults.baseURL = "https://restcountries.com/v3.1/";

const useFetchData = (url) => {
    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

  useEffect(()=>{
   const getData = async() =>{
      dispatch(setLoader(true));
      console.log(url + keyword);
   await axios.get(url + keyword).then((response)=>{
      setPosts(response.data);
      dispatch(setLoader(false));
   }).catch((err)=>{console.log(err);})
   };
   if(!url || url + keyword === 'region/') return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
   },[keyword]);

    return [posts, setKeyword]
}

export default useFetchData;