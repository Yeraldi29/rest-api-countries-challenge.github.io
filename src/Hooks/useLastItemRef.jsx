import {useState,useCallback,useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItems} from '../components/ContentForm/Features/itemsFilter';

const TotalData = 100;

const useLastItemRef = () => {
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const dispatch = useDispatch();

    let isLoading = useSelector(state => state.loader.value);
    let items = useSelector(state => state.items.value);

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
           // eslint-disable-next-line react-hooks/exhaustive-deps 
        },[isLoading,hasMore]
     ); 
     return lastItemRef
}

export default useLastItemRef;