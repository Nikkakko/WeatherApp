import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { ActivityIndicator, View } from 'react-native';

const App = () => {
  // const [loading, error, weather] = useGetWeather();
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <View>
        <ActivityIndicator
          size='large'
          color='blue'
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
