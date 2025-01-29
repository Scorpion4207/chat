import { ELEMENTS_MODAL_SETTINGS } from './elements.ts';
import { API } from '../api.ts';
import { getDataUser } from '../getDataUser.ts';
import { sendingData } from './requestName.ts';
import { render } from '../../message/sentMessage.ts';
import { checkForEmptyString } from '../../errors/errors.ts';


const { MODAL_SETTINGS, RESULT_NAME_CHANGE, INPUT_NIKENAME } = ELEMENTS_MODAL_SETTINGS;
const { SERVER_URL, GET_DATA_USER } = API;

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
      // if (myName === '') {
      //   throw new Error('Введите никнейм');
      // }
      MODAL_SETTINGS?.classList.add('none');
    }
  } catch (err) {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = `${err}`;
      RESULT_NAME_CHANGE.style.color = 'red';
    }
  }
}

export async function changingTheUserName(): Promise<void> {
  try {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = '';
    }
    sendingData();
    checkForEmptyString(INPUT_NIKENAME);
    getDataUser(`${SERVER_URL}${GET_DATA_USER}`, 'name')
    await render();
    MODAL_SETTINGS?.classList.add('none');
  } catch (err) {
    if (RESULT_NAME_CHANGE) {
      RESULT_NAME_CHANGE.textContent = `${err}`;
      RESULT_NAME_CHANGE.style.color = 'red';
    }
  }
}
