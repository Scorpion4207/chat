import { ELEMENTS_UI_CONFIRMATION } from './elements.ts';
import Cookies from 'js-cookie';
import { ELEMENTS_MODAL_SETTINGS } from '../settingsName/elements.ts';
import { getDataUser } from '../getDataUser.ts';
import { API } from '../api.ts';
import { renderingMessagesHistory } from "../../message/sentMessage.ts";
const { INPUT_CONFIRMATION, OVERLOW_CONFIRMATION, CONFIRMATION_VALIDATION } = ELEMENTS_UI_CONFIRMATION;
const { MODAL_SETTINGS } = ELEMENTS_MODAL_SETTINGS;

export async function useToken() {
  try {
    const inputToken = INPUT_CONFIRMATION?.value;
    const { SERVER_URL, GET_DATA_USER } = API;
    if (inputToken) {
      Cookies.set('token', inputToken);
      const token = Cookies.get('token');
      const tokenData = await getDataUser(`${SERVER_URL}${GET_DATA_USER}`, 'token');
      if (token !== tokenData) {
        throw new Error('Данный токен не верен');
      }
      MODAL_SETTINGS?.classList.toggle('none');
      OVERLOW_CONFIRMATION?.classList.toggle('none');
    }
    await renderingMessagesHistory();
  } catch (err) {
    if (CONFIRMATION_VALIDATION) {
      CONFIRMATION_VALIDATION.textContent = `${err}`;
      CONFIRMATION_VALIDATION.style.color = 'red';
    }
  } finally {
    if (INPUT_CONFIRMATION?.value) {
      INPUT_CONFIRMATION.value = '';
    }
  }
}
