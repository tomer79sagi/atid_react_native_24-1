import { SafeAreaView, StyleSheet } from "react-native";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";
import Feed from "./Feed";
import AddPost from './AddPost'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader/>
      <Feed/>
      <AddPost style={styles.fullWidth} />
      <BottomNav/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%', // Ensure components take full width
  }
});

export default App
