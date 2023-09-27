import { createContext, useState, ReactNode, MouseEvent } from 'react';

type PagesContextTypes = {
  actualPage: string | number;
  pagesHandler?: (event: MouseEvent<HTMLElement>, value: string) => void;
};

type PagesContextProps = {
  children: ReactNode;
};
export const PagesContext = createContext<PagesContextTypes>({
  actualPage: 1,
  pagesHandler: () => {},
});

export const PagesContextProvider = ({ ...props }: PagesContextProps) => {
  const [actualPage, setActualPage] = useState(1);

  const pagesHandler = (event: MouseEvent<HTMLElement>, value: string) => {
    +value != actualPage ? (value === '...' ? setActualPage(actualPage + 1) : setActualPage(+value)) : null;
  };

  const contextValue = {
    actualPage,
    pagesHandler,
  };
  return <PagesContext.Provider value={contextValue}>{props.children}</PagesContext.Provider>;
};
