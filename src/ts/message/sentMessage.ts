import { ELEMENTS } from './elements.ts';
import { getDataMessages } from '../services/getDataMessengers.ts';
import { API } from '../services/api.ts';
// import { checkForEmptyString } from '../errors/errors.ts';
const { TEMPLATE_CONTENT, MESSAGE_BLOG } = ELEMENTS;
const { SERVER_URL, GET_DATA_MESSAGES } = API;
import Cookies from 'js-cookie';
import { format } from 'date-fns';

function scrollContainerToBottom(){
  if (MESSAGE_BLOG) {
    console.log((MESSAGE_BLOG.scrollTop = MESSAGE_BLOG.scrollHeight));
  }
}

export async function renderOfNewMessage(){
  const messagesData = await getDataMessages(`${SERVER_URL}${GET_DATA_MESSAGES}`);
  messagesData.slice(0, 1).map((date) => createMessage(date['user']['name'], date['user']['email'], date['text'], date['createdAt']));
  scrollContainerToBottom()
}
// export function pushNewMessage() {
//   try {
//     checkForEmptyString(INPUT_TEXT);
//     if (INPUT_TEXT) {
//       USERS.push({
//         textMessage: INPUT_TEXT.value,
//         userName: myName,
//         departureTime: `${new Date().getHours().toString().padStart(2, '0')}
//       : ${new Date().getMinutes().toString().padStart(2, '0')}`,
//       });
//       INPUT_TEXT.value = '';
//     }
//   } catch (err) {
//     return alert(err);
//   }
// }

export function createMessage(username: string, email: string, textMessage: string, time: string) {
  if (TEMPLATE_CONTENT && MESSAGE_BLOG) {
    const templateRoot = document.createElement('div');
    email === Cookies.get('email')
      ? templateRoot.classList.add('sent-message')
      : templateRoot.classList.add('delivered-message');
    const templateContent = TEMPLATE_CONTENT.content.cloneNode(true) as DocumentFragment;
    const createMessage = templateContent.querySelector('.message') as HTMLDivElement;
    createMessage.textContent = `${username}: ${textMessage}`;
    const createTime = templateContent.querySelector('.time') as HTMLDivElement;
    createTime.textContent = format(new Date(time), 'HH:mm');
    templateRoot.append(templateContent);
    MESSAGE_BLOG.append(templateRoot);
  }
}

export async function render() {
  if (MESSAGE_BLOG) {
    MESSAGE_BLOG.innerHTML = '';
  }
  const messagesData = await getDataMessages(`${SERVER_URL}${GET_DATA_MESSAGES}`);
  messagesData
    .sort((a, b) => new Date(a['createdAt']).getTime() - new Date(b['createdAt']).getTime())
    .map((date) => createMessage(date['user']['name'], date['user']['email'], date['text'], date['createdAt']));
    scrollContainerToBottom()
  
}
