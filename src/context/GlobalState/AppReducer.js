export default (state, action) => {
  switch (action.type) {
    case "REMOVE_OFFER":
      return {
        ...state,
        offers: state.offers.filter((offer) => offer.id !== action.payload),
      };
    case "ADD_OFFER":
      return {
        ...state,
        offers: [...state.offers, action.payload],
      };
    case "EDIT_OFFER":
      const updatedOffer = action.payload;

      const updatedOffers = state.offers.map((offer) => {
        if (offer.id === updatedOffer.id) {
          return updatedOffer;
        }
        return offer;
      });

      return {
        ...state,
        offers: updatedOffers,
      };
    default:
      return state;
  }
};
