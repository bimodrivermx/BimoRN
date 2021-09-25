import React, { useState, useEffect, useMemo } from 'react'

export const ViajeContext = React.createContext();

export const ViajeProvider = (props) => {
    //State
    const [viaje, setViaje] = useState({
        tripPolyline: null,
        driverPolyline: null,
        indexdriver: null,
        indexorigin: null,
        indexdestination: null
    });
    //Did mount
    
    const value = useMemo(() => {
        return({
            viaje,
            setViaje
        })
    }, [viaje, setViaje])

    return <ViajeContext.Provider value = {value} {...props}/>
}
//Export consumer
export const ViajeConsumer = ViajeContext.Consumer
//Custom hook created in context
export const useViaje = () => {
    const context = React.useContext(ViajeContext);
    if(!context){
        throw new Error('useViaje debe estar dentro del proveedor ViajeContext')
    } 
    return context
}