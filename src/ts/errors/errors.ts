import { ELEMENTS_UI_AUTHORIZATION } from '../services/authorization/elements.ts';

const { INPUT_EMAIL } = ELEMENTS_UI_AUTHORIZATION;

export function checkForEmptyString(inputValue: HTMLInputElement | null) {
  if (inputValue) {
    if (inputValue.value === '') {
      throw new Error('Введите текст');
    }
  }
}

export function emailValidity() {
  if (INPUT_EMAIL?.value) {
    const EMAIL_REGEXP: RegExp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!EMAIL_REGEXP.test(INPUT_EMAIL.value)) {
      throw new Error('Неверный ввод электронной почты !');
    }
  }
}

