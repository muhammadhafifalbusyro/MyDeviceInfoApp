import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => (
  <View style={styles.boxHeader}>
    <Text style={styles.titleHeader}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  boxHeader: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
