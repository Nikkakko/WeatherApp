import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    desc,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;
  return (
    <View
      style={[
        wrapper,
        {
          backgroundColor: weatherType[weatherCondition].color,
        },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color='white'
        />
        <Text style={tempStyles}>{Math.round(temp)}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={desc}
        messageTwoStyles={message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },

  tempStyles: {
    color: 'black',
    fontSize: 48,
  },

  feels: {
    fontSize: 30,
    color: 'black',
  },

  highLow: {
    fontSize: 20,
    color: 'black',
  },

  highLowWrapper: {
    flexDirection: 'row',
  },

  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },

  desc: {
    fontSize: 48,
  },

  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
