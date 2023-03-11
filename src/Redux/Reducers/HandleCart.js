/** @format */

const initialValue = [];

const HandleCart = (state = initialValue, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      //check the products already exists.. So to find..
      const exist = state.find((x) => x.id === product.id);
      //Increase The quantity of products
      if (exist) {
        return state.map((x) =>
          x.id === product.id
            ? {
                ...x,
                qty: x.qty + 1,
              }
            : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE_ITEM":
      const exist_Del = state.find((x) => x.id === product.id);
      if (exist_Del.qty === 1) {
        return state.filter((x) => x.id !== exist_Del.id);
      } else {
        return state.map((x) =>
          x.id === product.id
            ? {
                ...x,
                qty: x.qty - 1,
              }
            : x
        );
      }

    default:
      return state;
  }
};
export default HandleCart;
