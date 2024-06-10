import { SafeAreaView } from "react-native";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";
import Feed from "./Feed";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader/>
      <Feed/>
      <BottomNav/>
    </SafeAreaView>
  )
}

export default App
