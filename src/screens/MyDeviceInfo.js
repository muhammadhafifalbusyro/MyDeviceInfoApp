import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Card, Container} from '../components';
import DeviceInfo from 'hafif-package-device-info';
import {getDeviceModel, getDeviceStorage} from '../utils/DeviceUtils';

const MyDeviceInfo = () => {
  const [deviceModel, setDeviceModel] = useState(null);
  const [deviceStorage, setDeviceStorage] = useState(null);

  //   useEffect(() => {
  //     let brand = DeviceInfo.getBrand();
  //     console.log('brand', brand);
  //     DeviceInfo.getDevice().then(device => {
  //       console.log('device', device);
  //     });
  //     DeviceInfo.getApiLevel().then(apilev => {
  //       console.log('api level', apilev);
  //     });
  //     DeviceInfo.getTotalDiskCapacity().then(total => {
  //       console.log('total disk', total);
  //     });
  //     DeviceInfo.getFreeDiskStorage().then(total => {
  //       console.log('free disk', total);
  //     });

  //     let systemVer = DeviceInfo.getSystemVersion();
  //     console.log('sistem ver', systemVer);

  //     let model = DeviceInfo.getModel();
  //     console.log('model', model);
  //   }, []);
  useEffect(() => {
    let deviceModel = getDeviceModel();
    setDeviceModel(deviceModel);
    getStorageCapacity();
  }, []);

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
