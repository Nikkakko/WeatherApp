import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import IconText from '../components/IconText';
import moment, { unix } from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, timezone, sunrise, sunset } = weatherData;
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
        <Text style={[cityText, cityName]}>{name}</Text>
        <Text style={[cityText, cityCountry]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`${population} people`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment
              .unix(sunrise + timezone)
              .format('h:mm:ss a')
              .toString()}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment
              .unix(sunset + timezone)
              .format('h:mm:ss a')
              .toString()}
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
