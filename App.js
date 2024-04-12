import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StackNav from './Navigation/StackNav';


export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar
        backgroundColor="#2a9134"
        barStyle={"light-content"}
      />
      <View style={{ marginTop: 24 }}></View>
      <StackNav />
    </SafeAreaView>
  );
}
