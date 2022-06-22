import {configureStore} from '@reduxjs/toolkit';
import filterRegion from '../ContentForm/Features/FilterRegions';
import itemsFilter from '../ContentForm/Features/itemsFilter';
import loader from '../ContentForm/Features/Loader';
import SearchCountry from '../ContentForm/Features/SearchCountry';
import checkName from '../ContentForm/Features/CheckName';

export default configureStore({
    reducer: {
        API : filterRegion,
        search : SearchCountry,
        items: itemsFilter,
        loader: loader,
        check : checkName
    }
});