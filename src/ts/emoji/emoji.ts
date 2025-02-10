import { ELEMENTS_EMOJI } from './elements.ts';
import { ELEMENTS } from "../message/elements.ts";
import { API } from "../services/api.ts";

const { EMOJI_LIST, EMOJI_SELECTOR_ICON } = ELEMENTS_EMOJI;
const { INPUT_TEXT } = ELEMENTS;
const {SERVER_EMOJI} = API

export const emoji = () => {
  const openAndCloseEmojiSelector = () => {
    EMOJI_LIST?.classList.toggle('active');
  };
  
  const responseEmoji = async () => {
    const response = await fetch(SERVER_EMOJI);
    return await response.json();
  };
  
  const getEmoji = async () => {
    const dataEmoji:{ slug: string; character: string }[] = await responseEmoji();
    dataEmoji.forEach((emoji) => {
      const li = document.createElement('li');
      li.getAttribute(emoji.slug);
      li.textContent = emoji.character;
      EMOJI_LIST?.appendChild(li);
    });
  };
  
  getEmoji();
  EMOJI_LIST?.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLLIElement | null;
    if(INPUT_TEXT && target) INPUT_TEXT.value += target.textContent;
  });
  
  EMOJI_SELECTOR_ICON?.addEventListener('click', openAndCloseEmojiSelector);
}


