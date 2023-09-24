import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {RootNavigator} from "./src/navigator/rootNavigator";
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
  return (
      <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'default'} />
              <RootNavigator />
          </SafeAreaView>
      </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
