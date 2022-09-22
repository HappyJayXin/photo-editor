import queryString from 'query-string';
import { isPlainObject, omit } from 'lodash';

type ResponseType = 'json' | 'blob' | 'text';

const transformResponse = (responseType: ResponseType, res: Response) => {
  switch (responseType) {
    case 'json':
      return res.json();
    case 'blob':
      return res.blob();
    case 'text':
      return res.text();
  }
};

type Props<U> = {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: U;
  responseType?: ResponseType;
  accessToken?: string;
};

const invokeApi = <T = unknown, U = any>({
  path,
  method = 'GET',
  data,
  responseType = 'json',
  accessToken,
}: Props<U>): Promise<T> => {
  const isObjectData = isPlainObject(data);

  let stringified = '';

  const headers = {
    Accept: 'application/json, */*',
    'Content-type': 'application/json',
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  };

  const options: Record<string, unknown> = {
    method,
    headers: isObjectData ? headers : omit(headers, ['Content-type']),
  };

  if (data) {
    if (method === 'GET') {
      stringified = `?${queryString.stringify(data)}`;
    } else {
      options.body = isObjectData ? JSON.stringify(data) : data;
    }
  }

  return fetch(`${path}${stringified}`, options)
    .then((res) =>
      res.status === 200
        ? transformResponse(responseType, res)
        : new Error('Status not 200.'),
    )
    .catch((error) => ({ error: true, message: error.message }));
};

export default invokeApi;
