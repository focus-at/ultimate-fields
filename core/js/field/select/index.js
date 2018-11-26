/**
 * Internal dependencies
 */
import Input from './component';
import Model from './model';

/**
 * Registers the select field.
 *
 * @param {Function} register A function to use to register the field type.
 */
export default function( register ) {
	register( 'select', {
		Input,
		Model,
	} );
}