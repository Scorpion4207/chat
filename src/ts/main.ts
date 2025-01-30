import '/scss/main.scss';
import { openModal, cloceModal, changingTheUserName } from './services/settingsName/settingsName.ts';
import { render } from './message/sentMessage.ts';
import { receiveTokenByEmail } from './services/authorization/requestEmail.ts';
import { ELEMENTS_UI_AUTHORIZATION } from './services/authorization/elements.ts';
import { ELEMENTS_UI_CONFIRMATION } from './services/confirmation/elements.ts';
import { ELEMENTS_MODAL_SETTINGS } from './services/settingsName/elements.ts';
import { switchModalAuthorization } from './services/authorization/switchingBetweenPopups.ts';
import { useToken } from './services/confirmation/useToken.ts';
import { ELEMENTS } from './message/elements.ts';
import Cookies from 'js-cookie';

const { ENTER_CODE, CLOSE_CONFIRMATION, FORM_EMAIL } = ELEMENTS_UI_AUTHORIZATION;
const { FORM_CONFIRMATION } = ELEMENTS_UI_CONFIRMATION;
const { SETTINGS, FORM_SETTINGS } = ELEMENTS_MODAL_SETTINGS;
const sending = document.getElementById('sending') as HTMLElement;

SETTINGS?.addEventListener('click', openModal);
document.addEventListener('click', cloceModal);

ENTER_CODE?.addEventListener('click', switchModalAuthorization);
CLOSE_CONFIRMATION?.addEventListener('click', switchModalAuthorization);

FORM_CONFIRMATION?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  useToken();
});

sending.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const i = ELEMENTS.INPUT_TEXT?.value;
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('token')}`);
  socket.onopen = function(){
    socket.send(JSON.stringify({ text: i }));

  };

});

FORM_EMAIL?.addEventListener('submit', receiveTokenByEmail);
FORM_SETTINGS?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  changingTheUserName();
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('token')}`);
  
  setInterval(() => {
    socket.onopen
  }, 1000);
  socket.onmessage = function () {
    render()
  };
});

