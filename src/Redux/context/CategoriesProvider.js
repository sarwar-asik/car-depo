import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const CATEGORY_CONTEXT = createContext();

const CategoriesProvider = ( {children}) => {
    // redux practice //
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://sh-server-site.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  
const value ={
    categories
}
return <CATEGORY_CONTEXT.Provider value={value}>
    {children}
</CATEGORY_CONTEXT.Provider>

};


export const useCategories =()=>{
    const context = useContext(CATEGORY_CONTEXT)
    return context
}
export default CategoriesProvider;