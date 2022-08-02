import { createContext, useState, useEffect} from "react";
import { getCategoriesAndDocuments } from '../utility/firebase/firebase.utility.js'

// only for one time population of firestoredatabase

// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children})=>{
    const [ categoriesMap, setCategoriesMap ] = useState({});
    const value = {categoriesMap};

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
           const categoryMap = await getCategoriesAndDocuments();
           setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])


    // this was used only once to write the data in the firestore database - ususaly not done on frontend, this was just for educational purpose 

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[])

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider> 
    )
}