import React, { FC, ReactElement } from 'react';
import { request } from 'remax/wechat';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import './app.css';

const uri = 'http://192.168.2.25:4000/graphql';

class Response {
  constructor(private body: string, private init?: any) {}

  text() {
    return Promise.resolve(this.body);
  }
}

const fetch = (input: RequestInfo, init: RequestInit): Promise<Response> => {
  return request({
    url: input.valueOf() as string,
    method: init.method as string,
    headers: init.headers,
    data: init.body,
  })
    .then((res) => new Response(JSON.stringify(res.data)))
    .catch((err) => new Response(JSON.stringify({ message: 'load error' })));
};

const client = new ApolloClient({
  // uri,
  link: new HttpLink({
    uri,
    fetch,
  }),
  cache: new InMemoryCache(),
});

interface Props {
  children: ReactElement;
}

const App: FC<Props> = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default App;
