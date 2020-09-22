import React from "react";
import AppReducer from "./AppReducer";

const initialState = {
  offers: [
    {
      id: 1,
      marca: "Chevrolet",
      modelo: "1.4 Turbo Ecotec",
      ano: 2020,
      preco: 240000,
      views: 4,
    },
  ],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  function removeOffer(id) {
    dispatch({
      type: "REMOVE_OFFER",
      payload: id,
    });
  }

  function addOffer(offer) {
    dispatch({
      type: "ADD_OFFER",
      payload: offer,
    });
  }

  function editOffer(offer) {
    dispatch({
      type: "EDIT_OFFER",
      payload: offer,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        offer: state.offers,
        removeOffer,
        addOffer,
        editOffer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
