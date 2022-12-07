import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({name, value}) => (
  <View style={styles.body}>
    <Text style={styles.titleHeader}>{name}</Text>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  body: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    color: 'black',
    marginTop: 5,
  },
});

export default Card;
