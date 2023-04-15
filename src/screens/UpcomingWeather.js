import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
  {
    dt: 1661878800,
    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 932,
      humidity: 53,
      temp_kf: 0.11,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 95,
    },
    wind: {
      speed: 1.58,
      deg: 103,
      gust: 3.52,
    },
    visibility: 10000,
    pop: 0.4,
    rain: {
      '1h': 0.24,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-08-30 17:00:00',
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      main={item.main.temp}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;
  return (
    <View style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-bg.jpg')}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
