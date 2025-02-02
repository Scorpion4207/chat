import { ELEMENTS_MODAL_SETTINGS } from './elements.ts';
import { sendingData } from './requestName.ts';

const { MODAL_SETTINGS, RESULT_NAME_CHANGE, INPUT_NIKENAME } = ELEMENTS_MODAL_SETTINGS;

export function openModal() {
  if (MODAL_SETTINGS?.classList.contains('none')) {
    MODAL_SETTINGS?.classList.remove('none');
  }
}

export function cloceModal(e?: Event) {
  try {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = '';
    }
    const target = e?.target as HTMLElement;
    if (
      (!MODAL_SETTINGS?.classList.contains('none') && target.classList.contains('modal__settings')) ||
      target.classList.contains('modal__close')
    ) {
      if (INPUT_NIKENAME?.value === '') {
        throw new Error('Введите никнейм');
      }
      MODAL_SETTINGS?.classList.add('none');
    }
  } catch (err) {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = `${err}`;
      RESULT_NAME_CHANGE.style.color = 'red';
    }
  }
}

export async function changingTheUserName() {
  try {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = '';
    }
    await sendingData();
    MODAL_SETTINGS?.classList.add('none');
  } catch (err) {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = `${err}`;
      RESULT_NAME_CHANGE.style.color = 'red';
    }
  }
}
