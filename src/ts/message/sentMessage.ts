import { ELEMENTS } from './elements.ts';
import { getDataMessages } from '../services/getDataMessengers.ts';
import { API } from '../services/api.ts';
const { TEMPLATE_CONTENT, MESSAGE_BLOG } = ELEMENTS;
const { SERVER_URL, GET_DATA_MESSAGES } = API;
import Cookies from 'js-cookie';
import { format } from 'date-fns';

let counterOfRenderedMessages = 20;

export function scrollContainerToBottom() {
  if (MESSAGE_BLOG) {
    MESSAGE_BLOG.scrollTop = MESSAGE_BLOG.scrollHeight;
  }
}
const messagesData = await getDataMessages(`${SERVER_URL}${GET_DATA_MESSAGES}`);

export function renderingMessagesHistory() {
  if(counterOfRenderedMessages > 300){
    alert('Вся история загружена')
  }
  messagesData
    .slice(0 + counterOfRenderedMessages, 20 + counterOfRenderedMessages)
    .map((date) =>
      createMessage(date['user']['name'], date['user']['email'], date['text'], date['createdAt'], 'prepend'),
    );
    counterOfRenderedMessages = counterOfRenderedMessages + 20;
}

export function createMessage(
  username: string,
  email: string,
  textMessage: string,
  time: string,
  nameInsertion: string,
) {
  if (TEMPLATE_CONTENT && MESSAGE_BLOG) {
    const nameInsertionMethod = nameInsertion;
    const templateRoot = document.createElement('div');
    email === Cookies.get('email')
      ? templateRoot.classList.add('sent-message')
      : templateRoot.classList.add('delivered-message');
    const templateContent = TEMPLATE_CONTENT.content.cloneNode(true) as DocumentFragment;
    const createMessage = templateContent.querySelector('.message') as HTMLDivElement;
    createMessage.textContent = `${username}: ${textMessage}`;
    const createTime = templateContent.querySelector('.time') as HTMLDivElement;
    createTime.textContent = format(new Date(time), 'HH:mm');
    if (nameInsertionMethod === 'prepend') {
      templateRoot.prepend(templateContent);
      MESSAGE_BLOG.prepend(templateRoot);
    }
    if (nameInsertionMethod === 'append') {
      templateRoot.append(templateContent);
      MESSAGE_BLOG.append(templateRoot);
    }
  }
}

export async function render() {
  if (MESSAGE_BLOG) {
    MESSAGE_BLOG.innerHTML = '';
  }
  messagesData
    .slice(0, 20)
    .map((date) =>
      createMessage(date['user']['name'], date['user']['email'], date['text'], date['createdAt'], 'prepend'),
    );
  scrollContainerToBottom();
}
