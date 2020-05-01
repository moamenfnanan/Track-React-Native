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
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { setNavigate } from './src/navigationRef';
import ResolveScreen from './src/screens/resolveScreen'
import { FontAwesome } from '@expo/vector-icons'
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetial: TrackDetailScreen
})
trackListFlow.navigationOptions = {
  title: 'tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
}
// Singleton or facade pattren
// MainNav is instance stores a reference to the Singleton
const MainNav = createSwitchNavigator({
  // getting all screens inside one instance called MainNav (all component inside one instance)
  // this pattren make it easy to connect all screens togother
  // the modification is instead of using Modal(and it take more time to write code) to connect one screen to anther one we get every thing inside just one instance like this.
  ResolveScreen: ResolveScreen,
  AuthFlow: createStackNavigator({
    login: LoginScreen,
    signup: SignupScreen
  }),
  MainFlow: createBottomTabNavigator({
    trackListFlow,
    CreateTrack: TrackCreateScreen,
    Account: AccountScreen
  })
});
// Decorator Pattren
// getting function inside another function 
const App = createAppContainer(MainNav)
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(nav) => setNavigate(nav)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
// export default createAppContainer(MainNav)