import React, { ReactElement } from "react";

interface ILocationContext {
  location: string | number;
  updateLocation: (newLocation: string | number) => void;
}

export const LocationContext = React.createContext<ILocationContext>({
  location: 0,
  updateLocation: () => {},
});

const LocationContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [loc, setLoc] = React.useState<string | number>(0);

  return (
    <LocationContext.Provider value={{ location: loc, updateLocation: setLoc }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextWrapper;
