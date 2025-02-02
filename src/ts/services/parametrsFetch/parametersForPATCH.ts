import { ParametersFetch } from '../../types.ts';
import Cookies from 'js-cookie';
import { ELEMENTS_MODAL_SETTINGS } from '../settingsName/elements.ts';

const { INPUT_NIKENAME } = ELEMENTS_MODAL_SETTINGS;

export function parametersForPATCH() {
  const inputName = INPUT_NIKENAME?.value;
  const parametrsObj: ParametersFetch = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
    body: JSON.stringify({
      name: inputName,
    }),
  };
  return parametrsObj;
}
