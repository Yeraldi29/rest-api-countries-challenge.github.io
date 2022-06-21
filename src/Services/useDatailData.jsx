import {useEffect} from 'react';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import useFetchData from '../Hooks/useFetchData';

const useDatailData = () => {
    const [posts, setKeyword, err] = useFetchData("alpha/");
    let {detailTitle} = useParams();
    let isLoanding = useSelector(state => state.loader.value); 

    useEffect(() => {
        setKeyword(detailTitle);
         // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[detailTitle])
    
    return [posts, isLoanding,err];
}

export default useDatailData;