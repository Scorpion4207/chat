import { ParametersFetch } from '../../types.ts';
import { ELEMENTS_UI_AUTHORIZATION } from '../authorization/elements.ts';
const { INPUT_EMAIL } = ELEMENTS_UI_AUTHORIZATION;

export function parametrs() {
  const input = INPUT_EMAIL?.value;
  const parametrsObj: ParametersFetch = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: input,
    }),
  };
  return parametrsObj;
}
