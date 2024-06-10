import { SafeAreaView } from "react-native";
import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader/>
      <BottomNav/>
    </SafeAreaView>
  )
}

export default App
