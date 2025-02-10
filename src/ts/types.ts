export interface UserType {
  textMessage: string;
  userName: string;
  departureTime: string;
}

export interface CreateMessage {
  username: string;
  email: string;
  textMessage: string;
  time: string;
}

export interface ParametersFetch {
  method?: string;
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body?: string;
}

export interface newEmail {
  email: string;
}

export interface APIFetch {
  SERVER_URL: string;
  POST_AND_PATCH_FETCH: string;
  GET_DATA_USER: string;
  GET_DATA_MESSAGES: string;
  SERVER_EMOJI: string;
}
