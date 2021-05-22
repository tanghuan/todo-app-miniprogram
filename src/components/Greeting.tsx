import React, { FC } from 'react';
import { Text } from 'remax/one';
import { useHelloQuery } from '../generated/graphql';

const Greeting: FC = () => {
  const { loading, error, data } = useHelloQuery();
  if (loading) {
    return <Text>loading...</Text>;
  }
  if (error) {
    return <Text>load error.</Text>;
  }
  return <Text>{data?.hello}</Text>;
};

export default Greeting;
