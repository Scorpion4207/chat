import '/scss/main.scss';
import { openModal, cloceModal, changingTheUserName } from './services/settingsName/settingsName.ts';
import { receiveTokenByEmail } from './services/authorization/requestEmail.ts';
import { ELEMENTS_UI_AUTHORIZATION } from './services/authorization/elements.ts';
import { ELEMENTS_UI_CONFIRMATION } from './services/confirmation/elements.ts';
import { ELEMENTS_MODAL_SETTINGS } from './services/settingsName/elements.ts';
import { switchModalAuthorization } from './services/authorization/switchingBetweenPopups.ts';
import { useToken } from './services/confirmation/useToken.ts';
import { connect, sendingMessageToServer } from './socket.ts';
import { ELEMENTS } from "./message/elements.ts";
import { renderingMessagesHistory } from "./message/sentMessage.ts";

ELEMENTS.MESSAGE_BLOG?.addEventListener('scroll', () => {
  if(ELEMENTS.MESSAGE_BLOG?.scrollTop === 0){
    let blockHeight = ELEMENTS.MESSAGE_BLOG.scrollHeight
    renderingMessagesHistory()
    ELEMENTS.MESSAGE_BLOG.scrollTop = ELEMENTS.MESSAGE_BLOG.scrollHeight - (blockHeight + 0)
    blockHeight = ELEMENTS.MESSAGE_BLOG.scrollHeight  
  }
})

const { ENTER_CODE, CLOSE_CONFIRMATION, FORM_EMAIL, OVERLOW_AUTHORIZATION } = ELEMENTS_UI_AUTHORIZATION;
const { FORM_CONFIRMATION } = ELEMENTS_UI_CONFIRMATION;
const { SETTINGS, FORM_SETTINGS } = ELEMENTS_MODAL_SETTINGS;
const sending = document.getElementById('sending') as HTMLElement;

SETTINGS?.addEventListener('click', openModal);
document.addEventListener('click', cloceModal);

ENTER_CODE?.addEventListener('click', switchModalAuthorization);
CLOSE_CONFIRMATION?.addEventListener('click', switchModalAuthorization);

ELEMENTS.EXIT_CHAT?.addEventListener('click', (e) => {
  e.preventDefault()
  OVERLOW_AUTHORIZATION?.classList.remove('none')
})

FORM_CONFIRMATION?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  useToken();
  connect();
});

sending.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  sendingMessageToServer();
});

FORM_EMAIL?.addEventListener('submit', receiveTokenByEmail);
FORM_SETTINGS?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  changingTheUserName();
});
