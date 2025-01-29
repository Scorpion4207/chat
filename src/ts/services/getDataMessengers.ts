import Cookies from 'js-cookie';

export async function getDataMessages(url: string): Promise<[]>{
    const respons = await fetch(url, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${Cookies.get('token')}`,
      }
    })
    const data = await respons.json()
    return await data.messages
}