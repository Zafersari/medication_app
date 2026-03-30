import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type LocationCode = 'TR' | 'US' | 'EU';

const LOCATION_KEY = 'app_location';

interface LocationContextType {
  location: LocationCode;
  setLocation: (loc: LocationCode) => void;
}

const LocationContext = createContext<LocationContextType>({
  location: 'TR',
  setLocation: () => {},
});

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLoc] = useState<LocationCode>('TR');

  useEffect(() => {
    AsyncStorage.getItem(LOCATION_KEY).then((saved) => {
      if (saved === 'TR' || saved === 'US' || saved === 'EU') {
        setLoc(saved);
      }
    });
  }, []);

  const setLocation = (newLoc: LocationCode) => {
    setLoc(newLoc);
    AsyncStorage.setItem(LOCATION_KEY, newLoc);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
