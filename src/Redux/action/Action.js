/** @format */

export const ADD_ITEM = (product) => {
	return {
		type: 'ADD_ITEM',
		payload: product,
	};
};
export const DELETE_ITEM = (product) => {
	return {
		type: 'DELETE_ITEM',
		payload: product,
	};
};
export const clearCart = () => ({
	type: 'Clear_Cart',
});

// actions/authActions.js
export const loginSuccess = (userData) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: userData,
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT',
	};
};
//ContactData

export const addContact = (contactDataList) => ({
	type: 'ADD_CONTACT',
	payload: contactDataList,
});

export const clearContact = () => ({
	type: 'CLEAR_CONTACT',
});
