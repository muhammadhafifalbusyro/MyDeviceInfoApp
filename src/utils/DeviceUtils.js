// DeviceInfo adalah modul native Android (Java) atau Ios (Swift) yang digunakan untuk mengambil fungsi-fungsi native dalam mendapatkan data device user
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

// Fungsi getDeviceModel() adalah fungsi yang digunakan untuk mendapatkan data model dan OS device yang digunakan oleh user
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

// Fungsi getDeviceStorage() adalah fungsi yang digunakan untuk mendapatkan data penggunaan penyimpanan internal storage pada device yang digunakan oleh user
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
