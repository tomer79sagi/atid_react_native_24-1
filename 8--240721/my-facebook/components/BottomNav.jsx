import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const BottomNav = ( {onTabClicked} ) => {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'search', title: 'Search', icon: 'search' },
        { key: 'add-circle-outline', title: 'New Post', icon: 'add-circle-outline' },
        { key: 'notifications', title: 'Notifications', icon: 'notifications' },
        { key: 'profile', title: 'Profile', icon: 'person' },
    ];

    const handleClick = key => {
        setActiveTab(key);
        onTabClicked(key);
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#3b5998', padding: 10 }}>
        {tabs.map((tab, index) => (
            <Icon
            key={index}
            name={tab.icon}
            color={activeTab === tab.key ? '#fff' : '#8b9dc3'}
            onPress={() => handleClick(tab.key)}
            />
        ))}
        </View>
    );
}

export default BottomNav
