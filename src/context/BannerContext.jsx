import { createContext, useState, useContext, useEffect } from "react";
import data from '../data/banner.json'

const BannerContext = createContext();

export const useBannerContext = () => useContext(BannerContext);

export const BannerProvider = ({ children }) => {
    const [ banner, setBanner ] = useState({});
    const [ colorBanner, setColorBanner] = useState("#6BD1FF");
    


    useEffect(() => {
        setBanner(data[0]);
    }, [data]);

    const updateBanner = (card) =>{
        setBanner(card);
    }
    
    return (
        <BannerContext.Provider value={{ banner, setBanner, updateBanner, colorBanner, setColorBanner }}>
            {children}
        </BannerContext.Provider>
    );
};

