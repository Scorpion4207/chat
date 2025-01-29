import { ParametersFetch } from "../../types.ts";
import Cookies from 'js-cookie';

export function parametrGET(token: string){
  const parametrsObj: ParametersFetch = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${Cookies.get(token)}`,
    }
  }
  return parametrsObj
} 