import { ELEMENTS_UI_AUTHORIZATION } from './elements';

const { OVERLOW_AUTHORIZATION, OVERLOW_CONFIRMATION } = ELEMENTS_UI_AUTHORIZATION;

export function switchModalAuthorization() {
  OVERLOW_AUTHORIZATION?.classList.toggle('none');
  OVERLOW_CONFIRMATION?.classList.toggle('none');
}
