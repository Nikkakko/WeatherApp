import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const ListItem = ({ dt_txt, main, max, condition }) => {
  const { item, temp, date } = styles;
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color='white' />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{main}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },

  temp: {
    color: 'white',
    fontSize: 20,
  },

  date: {
    color: 'white',
    fontSize: 15,
  },
});

export default ListItem;
