import React, { ReactElement } from "react";
import { Toc } from "../types/gobalTypes";

interface IToc {
  toc: Array<Toc> | null;
  updateToc: (newToc: Array<Toc> | null) => void;
}

export const TocContext = React.createContext<IToc>({
  toc: null,
  updateToc: () => {},
});

const TocContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [toc, setToc] = React.useState<Array<Toc> | null>(null);

  return (
    <TocContext.Provider value={{ toc: toc, updateToc: setToc }}>
      {children}
    </TocContext.Provider>
  );
};

export default TocContextWrapper;
