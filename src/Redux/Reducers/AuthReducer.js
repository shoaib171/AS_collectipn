// authReducer.js
const initialState = {
	isAuthenticated: false,
	user: null,
	error: null,
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
				error: null,
			};
		case 'LOGOUT':
			return {
				...state,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default AuthReducer;
