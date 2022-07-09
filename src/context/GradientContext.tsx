
import React, { createContext, useState } from "react";


interface ImageColors {
    primary:string,
    secoundary:string,
}

interface GradientContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void; 
    setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({}as GradientContextProps) // TODO: definer un tipo


export const GradientProvider = ({children}:any) => {
    const [colors, setColors] = useState<ImageColors>({
        primary: 'red',
        secoundary: 'blue'
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secoundary: 'transparent'
    })

    const setMainColors = (colors:ImageColors) => {
        setColors(colors)
    }
    const setPrevMainColors = (colors:ImageColors) => {
        setPrevColors(colors)
    } 
    
    
    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setPrevMainColors
            }}
        >
            {children}
        </GradientContext.Provider>
    )
}