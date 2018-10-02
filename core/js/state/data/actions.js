import {
	INITIALIZE_CONTAINER,
	UPDATE_VALUE,
	CHANGE_TAB,
} from 'state/action-types.js';

export const createStore = ( name, data = {} ) => ( {
	type: INITIALIZE_CONTAINER,
	name,
	data,
} )

export const updateValue = ( path, value ) => ( {
	type: UPDATE_VALUE,
	path,
	value,
} );

export const changeTab = ( path, tab ) => ( {
	type: CHANGE_TAB,
	path,
	tab,
} );
