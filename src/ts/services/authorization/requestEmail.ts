import { API } from '../api.ts';
import { parametrs } from '../parametrsFetch/parametersForPOST.ts';
import { emailValidity } from '../../errors/errors.ts';
import { ELEMENTS_UI_AUTHORIZATION } from './elements.ts';
import { showSuccessfulRequestInDOM } from './utilits.ts';
import Cookies from 'js-cookie';

const { EMAIL_VALIDATION, INPUT_EMAIL } = ELEMENTS_UI_AUTHORIZATION;

async function sendingData(url: string): Promise<string> {
  const response = await fetch(url, parametrs());
  if (!response.ok) {
    throw new Error('Неудалось отправить код на почту !');
  }
  showSuccessfulRequestInDOM();
  return await response.json();
}

export async function receiveTokenByEmail(e: Event): Promise<void> {
  try {
    e.preventDefault();
    const EMAIL = INPUT_EMAIL?.value
    if(EMAIL){
      Cookies.set('email', EMAIL)
    }
    const { SERVER_URL, POST_AND_PATCH_FETCH } = API;
    if (EMAIL_VALIDATION) {
      EMAIL_VALIDATION.textContent = '';
    }
    emailValidity();
    await sendingData(`${SERVER_URL}${POST_AND_PATCH_FETCH}`);
  } catch (err) {
    if (EMAIL_VALIDATION) {
      EMAIL_VALIDATION.textContent = `${err}`;
      EMAIL_VALIDATION.style.color = 'red';
    }
  } finally {
    if (INPUT_EMAIL?.value) {
      INPUT_EMAIL.value = '';
    }
  }
}
