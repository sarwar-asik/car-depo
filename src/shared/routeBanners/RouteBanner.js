import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import '../../shared/custom.css'

const RouteBanner = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div className={`py-[190px] rounded-lg  bg-slate-700 ${theme?"":""}`}>
          <section></section>
            
        </div>
    );
};

export default RouteBanner;