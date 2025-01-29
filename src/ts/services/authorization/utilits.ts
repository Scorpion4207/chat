import { ELEMENTS_UI_AUTHORIZATION } from './elements.ts';

const { EMAIL_VALIDATION, ENTER_CODE } = ELEMENTS_UI_AUTHORIZATION;

export function showSuccessfulRequestInDOM() {
  if (EMAIL_VALIDATION && ENTER_CODE) {
    EMAIL_VALIDATION.textContent = 'УСПЕХ!!! А теперь введите отправленный код для входа';
    EMAIL_VALIDATION.style.color = '#1DB954';
    ENTER_CODE.style.pointerEvents = 'visible';
    ENTER_CODE.style.backgroundColor = '#1DB954';
  }
}