import React, { useState } from 'react';

const Context = React.createContext({});

export const PhonesContextProvider = ({ children}) => {
  const [phones, setPhones] = useState([]);

  return  <Context.Provider value={{phones, setPhones}}>
            {children}
          </Context.Provider>
}

export default Context;