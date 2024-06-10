// src/components/BottomNav.js
import React from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';

const BottomNav = ({ navigation, activeTab }) => {
  const tabs = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Search', icon: 'search' },
    { key: 'notifications', title: 'Notifications', icon: 'notifications' },
    { key: 'profile', title: 'Profile', icon: 'person' },
  ];

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#3b5998', padding: 10 }}>
      {tabs.map((tab, index) => (
        <Icon
          key={index}
          name={tab.icon}
          color={activeTab === tab.key ? '#fff' : '#8b9dc3'}
          onPress={() => navigation.navigate(tab.key)}
        />
      ))}
    </View>
  );
};

export default BottomNav;
