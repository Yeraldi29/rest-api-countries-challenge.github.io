import {useState, useEffect} from 'react'
import useFetchData from '../Hooks/useFetchData';
import {useSelector} from 'react-redux';

const useHandleChoose = () => {
    const [data, setData] = useState([]);
    const [posts]= useFetchData("all");

    let items = useSelector(state => state.items.value);
    let region = useSelector(state => state.API);
    let search = useSelector(state => state.search);  
    let check = useSelector(state => state.check); 
    let isLoanding = useSelector(state => state.loader.value);  

    useEffect(() => {
        if(!region.length && !search.length){
            setData(posts);
        }else if (!search.length) {
            setData(region);
        }else{
            setData(search);
        }
    },[posts, region,search])

    return [data, items, check, isLoanding]
}

export default useHandleChoose;