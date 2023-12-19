import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return(
      <>
          <NavigationContainer>
              <StatusBar style="light" />
              <CategoriesScreen />
          </NavigationContainer>
      </>

  )
}

const styles = StyleSheet.create({

});
