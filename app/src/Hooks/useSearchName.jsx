import {useState, useEffect} from 'react'
import useFetchData from './useFetchData';
import useSearchData from '../Services/useSearchData';

const useSearchName = () => {
    const [searchName, setSearchName] = useState("");
    const [posts, keyword, err] = useFetchData("name/")
    useSearchData(posts,err);

    useEffect(()=>{
      keyword(searchName);
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[searchName])

    return setSearchName;
}

export default useSearchName;