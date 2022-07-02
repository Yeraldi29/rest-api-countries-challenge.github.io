import {useEffect} from 'react';
import {country} from '../components/ContentForm/Features/SearchCountry';
import {check} from '../components/ContentForm/Features/CheckName';
import {useDispatch} from 'react-redux';

const useSearchData = (data, err) => {
   const dispatch = useDispatch();

    useEffect(()=>{ 
        dispatch(country(data));
        dispatch(check(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps 
      },[data,err])

}

export default useSearchData;