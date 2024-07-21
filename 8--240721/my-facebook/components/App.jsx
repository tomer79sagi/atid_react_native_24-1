import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";
import Feed from "./Feed";
import AddPost from './AddPost'
import { UserProvider } from '../contexts/UserContext';

const App = () => {

  // ENUM of all VIEW MODES in the app
  const VIEW_MODE = {
    FEED: 'feed',
    ADD_POST: 'addPost',
    SEARCH: 'search', 
    HOME: 'home',
    NOTIFICATIONS: 'notifications',
    PROFILE: 'profile'
  }

  // Define a 'state' that retrieves and sets the VIEW_MODE
  const [viewMode, setViewMode] = useState(VIEW_MODE.FEED);

  const addedNewPost = () => {
    setViewMode(VIEW_MODE.FEED);
  }

  const navigateTo = tab_key => {
    switch (tab_key) {
      case 'add-circle-outline':
        setViewMode(VIEW_MODE.ADD_POST);
        break;
    }
  }

  return (
    <UserProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppHeader/>

        {/* Conditional rendering --> Last '&&' renders contenst if the left-side expression is true */}
        { viewMode == VIEW_MODE.FEED && <Feed/> }
        { viewMode == VIEW_MODE.ADD_POST && <AddPost onAddedNewPost={addedNewPost}/> }
        
        <BottomNav onTabClicked={navigateTo}/>
      </SafeAreaView>
    </UserProvider>
  )
}

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%', // Ensure components take full width
  },
  content: {
    flex: 1,
    width: '100%',
  }
});

export default App
