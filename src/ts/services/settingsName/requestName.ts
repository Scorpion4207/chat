import { parametrs } from "../parametrsFetch/parametersForPATCH";

export async function sendingData(): Promise<string> {
  const response = await fetch('https://edu.strada.one/api/user', parametrs());
  if (!response.ok) {
    throw new Error('Неудача');
  }
  return await response.json();
}