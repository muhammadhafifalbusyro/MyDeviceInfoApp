import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Card, Container} from '../components';

// Import modul custom React-Native
import {getDeviceModel, getDeviceStorage} from '../utils/DeviceUtils';

const MyDeviceInfo = () => {
  const [deviceModel, setDeviceModel] = useState(null);
  const [deviceStorage, setDeviceStorage] = useState(null);

  useEffect(() => {
    getDeviceInfo();
    getStorageCapacity();
  }, []);

  const getDeviceInfo = () => {
    let deviceModel = getDeviceModel();
    setDeviceModel(deviceModel);
  };

  const getStorageCapacity = async () => {
    const deviceStorage = await getDeviceStorage();
    setDeviceStorage(deviceStorage);
  };

  return (
    <Container>
      <View style={styles.body}>
        <Header title={'My Device Info'} />
        {deviceModel != null && (
          <Card
            name={deviceModel.modelDevice}
            value={deviceModel.sistemOperation}
          />
        )}
        {deviceStorage != null && (
          <Card name={'Internal Storage'} value={deviceStorage} />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});

export default MyDeviceInfo;
