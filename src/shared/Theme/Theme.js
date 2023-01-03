import React from 'react';
import { useContext } from 'react';
import { HiSun } from 'react-icons/hi';
import { TiAdjustContrast } from 'react-icons/ti';
import { AuthContext } from '../../firebase/AuthProvider';

const Theme = () => {
    const {theme ,setTheme} = useContext(AuthContext)
    const handleTheme = ()=>{
  
        setTheme(!theme)
      }
    return (
        <div>
             {theme ? (
          <div
            onClick={handleTheme}
            className="flex bg-slate-600 text-white items-center   px-2 rounded-md mx-3"
          >
            <TiAdjustContrast className=" text-xl rounded mx-2" />
            <span> Dark Mode</span>
          </div>
        ) : (
          <div
            onClick={handleTheme}
            className="flex bg-white items-center text-slate-600  px-2 rounded-md mx-3 "
          >
            <HiSun className="text-xl rounded mx-2" />
            <span> Light Mode</span>
          </div>
        )}
        </div>
    );
};

export default Theme;