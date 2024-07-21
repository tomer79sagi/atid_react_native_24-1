import { Header } from "react-native-elements";

export default () => {
  return (
    <Header
      barStyle="default"
      centerComponent={{
        text: "FACEBOOK",
        style: { color: "#fff" }
      }}
      containerStyle={{ minWidth: 350, width: '100%' }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      placement="center"
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  );
}