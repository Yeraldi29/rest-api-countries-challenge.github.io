import {useState, useEffect} from 'react';
import useFetchData from './useFetchData';
import useRegionData from '../Services/useRegionData';

const useSelectRegion = () => {
    const [url, setUrl] = useState('');
    const [value, setValue] = useState('');
    const [posts, setKeyword] = useFetchData(url);
    useRegionData(posts);

    useEffect(() =>{
        if(value === 'all'){
            setUrl('all')
            setKeyword("");
        } else{
            setUrl('region/');
            setKeyword(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    return setValue;
}

export default useSelectRegion;