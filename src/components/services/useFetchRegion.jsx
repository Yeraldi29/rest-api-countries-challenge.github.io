import useFetchData from '../Hooks/useFetchData';

const useFetchRegion = region => useFetchData('region/'+region);

export default useFetchRegion;