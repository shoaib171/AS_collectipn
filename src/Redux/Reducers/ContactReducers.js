// contactReducer.js
const initialState = {
	contactDataList: [], // Array to store multiple contact data
};

const ContactReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CONTACT':
			return {
				...state,
				contactDataList: [...state.contactDataList, action.payload],
			};
		case 'CLEAR_CONTACT':
			return {
				...state,
				contactDataList: [],
			};
		default:
			return state;
	}
};

export default ContactReducer;
