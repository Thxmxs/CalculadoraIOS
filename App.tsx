import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CalculadoreScreen } from './src/screens/CalculadoreScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}
      />
      <CalculadoreScreen/>
    </SafeAreaView>
  )
}
export default App;