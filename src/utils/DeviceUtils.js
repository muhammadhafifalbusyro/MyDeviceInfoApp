import DeviceInfo from 'hafif-package-device-info';
import {Platform} from 'react-native';

const getDeviceModel = () => {
  let modelDevice = DeviceInfo.getModel();
  let systemVersion = DeviceInfo.getSystemVersion();
  let platform = Platform.OS == 'ios' ? 'Ios' : 'Android';
  let sistemOperation = `${platform} ${systemVersion}`;

  return {
    modelDevice,
    sistemOperation,
  };
};

const getDeviceStorage = () => {
  const result = DeviceInfo.getTotalDiskCapacity().then(total => {
    const freeDisk = DeviceInfo.getFreeDiskStorage().then(free => {
      console.log('total sat', ((total - free) / total) * 100);
      const usedCapacity = ((total - free) / total) * 100;
      return `${parseFloat(usedCapacity).toFixed(2)}% used`;
    });

    return freeDisk;
  });
  return result;
};

export {getDeviceModel, getDeviceStorage};
