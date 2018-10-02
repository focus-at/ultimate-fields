import { isString } from 'lodash';

import FieldModel from 'field/field/model';

export default class CheckboxFieldModel extends FieldModel {
	loadValue( value ) {
		return !! value;
	}
}