import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Region} from '../components/ContentForm/Features/FilterRegions';


const useRegionData = (data) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(Region(data))  
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[data])
}

export default useRegionData; 