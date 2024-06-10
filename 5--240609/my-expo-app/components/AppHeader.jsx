// src/components/Header.js
import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { View } from 'react-native';

const AppHeader = () => (
  <Header
    backgroundColor="#3b5998"
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Facebook', style: { color: '#fff', fontSize: 24, fontWeight: 'bold' } }}
    rightComponent={
      <View style={{ flexDirection: 'row' }}>
        <Icon name="search" color="#fff" containerStyle={{ marginRight: 10 }} />
        <Icon name="message" type="material-community" color="#fff" />
      </View>
    }
  />
);

export default AppHeader;
