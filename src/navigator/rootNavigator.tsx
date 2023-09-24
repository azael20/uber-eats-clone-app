import { createStackNavigator } from '@react-navigation/stack';
import {LandingScreen} from "../screens/LandingScreen";
import { LoginScreen } from "../screens/LoginScreen";
import {HomeScreen} from "../screens/HomeScreen";
import { CategoriesScreen } from '../screens/CategoriesScreen';

const Stack = createStackNavigator();
export const RootNavigator = () => {
    return (
        <Stack.Navigator
          initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name={'LandingScreen'} component={LandingScreen} />
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'CategoriesScreen'} component={CategoriesScreen} />
        </Stack.Navigator>
    );
};
