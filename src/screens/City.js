import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    cityCountry,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  return (
    <View style={container}>
      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, cityCountry]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'06:46:58am'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'06:46:58pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar ? StatusBar.currentHeight : 0,
  },
  imageLayout: {
    flex: 1,
  },

  cityName: {
    fontSize: 40,
  },

  cityCountry: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },

  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },

  riseSetText: {
    fontSize: 20,
    color: 'white',
  },

  rowLayout: {
    flexDirection: 'row',
  },
});

export default City;
