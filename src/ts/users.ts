import { UserType } from './types.ts';

export const USERS: UserType[] = [
  {
    textMessage: 'Добрый день',
    userName: 'Kamenshik',
    departureTime: `${new Date().getHours().toString().padStart(2, '0')} 
    : ${new Date().getMinutes().toString().padStart(2, '0')}`,
  },
  {
    textMessage: 'Как у вас дела ?',
    userName: 'Kamenshik',
    departureTime: `${new Date().getHours().toString().padStart(2, '0')} 
    : ${new Date().getMinutes().toString().padStart(2, '0')}`,
  },
  {
    textMessage: 'Да нормально, а у тебя ?',
    userName: 'Retro',
    departureTime: `${new Date().getHours().toString().padStart(2, '0')} 
    : ${new Date().getMinutes().toString().padStart(2, '0')}`,
  },
  {
    textMessage: 'Впринцепи нормикс',
    userName: 'Kamenshik',
    departureTime: `${new Date().getHours().toString().padStart(2, '0')} 
    : ${new Date().getMinutes().toString().padStart(2, '0')}`,
  },
  {
    textMessage: 'Привет чат',
    userName: 'Anonim',
    departureTime: `${new Date().getHours().toString().padStart(2, '0')} 
    : ${new Date().getMinutes().toString().padStart(2, '0')}`,
  },
];

export let myName: string = '';
