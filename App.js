import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserData from './components/UserData';


const App = () =>{
  return (
    <View style={styles.container}>
    <Text>Open up App.js to start working on pour app!</Text>
    <UserData />
    <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
