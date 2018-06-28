var groceries = {
	items: [
		{name: 'eggplant', price: 3.00, description: 'Aubergine'},
		{name: 'cucumber', price: 1.50, description: 'Not a snake'},
		{name: 'lotion', price: 34.00, description: '5 gallon drum'}
	]
}
var cart = "You have 0 items! Get to shopping.";
var grocerycart;

export function grocery (state, action) {
	if (state === undefined) {
		return cart;
	}
	var new_state;
	switch (action.type) {
		case 'ADD_TO_CART':
			// make a copy of state
			new_state = {...state};
			new_state.grocerycart = [...state.grocerycart];
			
			// update the new state
			new_state.grocerycart.push(action.data);
			return new_state;
			default: return state;
	}
}

export default grocery;