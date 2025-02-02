export const ELEMENTS_UI_CONFIRMATION = {
  INPUT_CONFIRMATION: document.getElementById('modal-confirmation__text') as HTMLInputElement | null,
  FORM_CONFIRMATION: document.getElementById('confirmation') as HTMLFormElement | null,
  CONFIRMATION_VALIDATION: document.getElementById('query-result-confirmation') as HTMLParagraphElement | null,
  OVERLOW_CONFIRMATION: document.getElementById('overlow-confirmation') as HTMLDivElement | null,
  CLOSE_CONFIRMATION: document.querySelector('.modal-confirmation__close') as HTMLSpanElement | null,
};
