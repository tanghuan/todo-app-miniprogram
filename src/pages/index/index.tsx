import React, { ReactElement } from 'react';
import { View, Text, Image } from 'remax/wechat';

import Greeting from '../../components/Greeting';

import styles from './index.css';

export default (): ReactElement => {
  return (
    <View className={styles.app}>
      Hello Remaxjs!
      <Greeting />
    </View>
  );
};
