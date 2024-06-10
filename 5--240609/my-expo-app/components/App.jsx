// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppHeader from './AppHeader';
import Feed from './Feed';
import BottomNav from './BottomNav';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <Feed />
      <BottomNav activeTab={activeTab} navigation={{ navigate: setActiveTab }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;