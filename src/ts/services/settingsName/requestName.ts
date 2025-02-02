import { parametersForPATCH } from '../parametrsFetch/parametersForPATCH';

export async function sendingData(){
  const response = await fetch('https://edu.strada.one/api/user', parametersForPATCH());
  if (!response.ok) {
    throw new Error('Неудача');
  }
  return await response.json();
}
