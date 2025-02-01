import Cookies from 'js-cookie';
import { createMessage, scrollContainerToBottom } from './message/sentMessage.ts';
import { ELEMENTS } from './message/elements.ts';
import { ELEMENTS_MODAL_SETTINGS } from './services/settingsName/elements.ts';

const { MODAL_SETTINGS } = ELEMENTS_MODAL_SETTINGS;

export function connect() {
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('token')}`);
  socket.onopen;
  socket.onmessage = (eleme) => {
    const socketData = JSON.parse(eleme.data);
    createMessage(socketData['user']['name'], socketData['user']['email'], socketData['text'], socketData['createdAt'], 'append');
    scrollContainerToBottom();
  };
  socket.onclose = () => {
    if (MODAL_SETTINGS?.classList.contains('none')) {
      setTimeout(connect, 0);
    }
  };
  socket.onerror = (error) => {
    alert(error);
  };
}

export function sendingMessageToServer() {
  const inputMessage = ELEMENTS.INPUT_TEXT?.value;
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('token')}`);
  socket.onopen = function () {
    socket.send(JSON.stringify({ text: inputMessage }));
  };
}
