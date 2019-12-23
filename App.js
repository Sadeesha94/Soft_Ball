import * as Expo from "expo";
import * as Font from "expo-font";
import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from 'native-base';
import { HomeScreen, MatchesScreen, NewsScreen, VideosScreen, HomeDetailsScreen, SideMenuScreen } from './src/components'
import { AllAuthNavigator } from './src/components/Auth/AuthNavigation'
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiKyd0L3Faj1_QJ3et_6xTXB55UVj821A",
  authDomain: "soft-ball-sl.firebaseapp.com",
  databaseURL: "https://soft-ball-sl.firebaseio.com",
  projectId: "soft-ball-sl",
  storageBucket: "soft-ball-sl.appspot.com"
}

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('./resources/Fonts/Roboto.ttf'),
      'Roboto_medium': require('./resources/Fonts/Roboto_medium.ttf'),
      //'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}

const navOptionHandler = (navigation) => ({
  header: null
});

const homeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: navOptionHandler
    },
    HomeDetails: {
      screen: HomeDetailsScreen,
      navigationOptions: navOptionHandler
    }
  });

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={23} color={tintColor} />

        ),
        tabBarOptions: {
          showLabel: true, // hide labels
          activeTintColor: '#FFFFFF', // active icon color
          inactiveTintColor: '#BDBDBD',  // inactive icon color
          pressColor: 'rgba(255, 255, 255, 0.16)',
          style: {
            backgroundColor: '#388E3C' // TabBar background
          }
        }
      }
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cricket" size={23} color={tintColor} />
        ),
        tabBarOptions: {
          showLabel: true, // hide labels
          activeTintColor: '#FFFFFF', // active icon color
          inactiveTintColor: '#BDBDBD',  // inactive icon color
          style: {
            backgroundColor: '#00695C' // TabBar background
          }
        }
      }
    },
    News: {
      screen: NewsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper" size={23} color={tintColor} />
        ),
        tabBarOptions: {
          showLabel: true, // hide labels
          activeTintColor: '#FFFFFF', // active icon color
          inactiveTintColor: '#BDBDBD',  // inactive icon color
          style: {
            backgroundColor: '#6A1B9A' // TabBar background
          }
        }
      }
    },
    Videos: {
      screen: VideosScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="play-circle" size={23} color={tintColor} />
        ),
        tabBarOptions: {
          showLabel: true, // hide labels
          activeTintColor: '#FFFFFF', // active icon color
          inactiveTintColor: '#BDBDBD',  // inactive icon color
          style: {
            backgroundColor: '#1565C0' // TabBar background
          }
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#FFFFFF'
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    drawer: bottomTabNavigator
  },
  {
    contentComponent: SideMenuScreen,
    drawerWidth: Dimensions.get('window').width * 2/3
  }
  );

const AppContainer = createAppContainer(createStackNavigator(
  {
    App: {
      screen: DrawerNavigator,
      navigationOptions: navOptionHandler
    },
    Auth: {
      screen: AllAuthNavigator,
      navigationOptions: navOptionHandler
    }
  }));