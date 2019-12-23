import { createSwitchNavigator } from "react-navigation";
import { HomeScreen } from "../Tabs/Home/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen } from "./Login";
import { SignUpScreen } from "./SignUp";
import LoadingScreen from "../LoadingScreen";

const navOptionHandler = (navigation) => ({
    header: null
});

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: navOptionHandler
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: navOptionHandler
        }
    }
);

export const AllAuthNavigator = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        Auth: AuthStack
    },
    {
        initialRouteName: "Loading"
    }

)