export const ELEMENTS_UI_AUTHORIZATION = {
  INPUT_EMAIL: document.getElementById('modal-authorization__email') as HTMLInputElement | null,
  FORM_EMAIL: document.getElementById('authorization') as HTMLFormElement | null,
  EMAIL_VALIDATION: document.getElementById('query-result-email') as HTMLParagraphElement | null,
  ENTER_CODE: document.getElementById('enterCode') as HTMLButtonElement | null,
  OVERLOW_AUTHORIZATION: document.getElementById('overlow-authorization') as HTMLDivElement | null,
  OVERLOW_CONFIRMATION: document.getElementById('overlow-confirmation') as HTMLDivElement | null,
  CLOSE_CONFIRMATION: document.querySelector('.modal-confirmation__close') as HTMLSpanElement | null,
};
