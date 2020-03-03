import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import SignupScreen from "./src/screens/signupScreen";
import LoginScreen from "./src/screens/loginScreen";
import AccountScreen from "./src/screens/accountScreen";
import TrackCreateScreen from "./src/screens/trackCreateScreen";
import TrackDetailScreen from "./src/screens/trackDetailScreen";
import TrackListScreen from "./src/screens/trackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import {setNavigate} from './src/navigationRef';
import ResolveScreen from './src/screens/resolveScreen'
const MainNav = createSwitchNavigator({
  ResolveScreen:ResolveScreen,
  AuthFlow: createStackNavigator({
    login: LoginScreen,
    signup: SignupScreen
  }),
  MainFlow: createBottomTabNavigator({
    Tracks: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetial: TrackDetailScreen
    }),
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen
  })
});
const App = createAppContainer(MainNav)
export default () => {
  return (
    <AuthProvider>
      <App ref={(nav)=>setNavigate(nav)}/>
    </AuthProvider>
  );
};
// export default createAppContainer(MainNav)