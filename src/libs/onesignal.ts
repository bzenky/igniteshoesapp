import { Platform } from 'react-native';
import { OneSignal } from 'react-native-onesignal';

export function onesignalInitialize() {
  // const {
  //   EXPO_PUBLIC_ONE_SIGNAL_APP_ID_ANDROID,
  //   EXPO_PUBLIC_ONE_SIGNAL_APP_ID_IOS,
  // } = process.env;

  // const oneSignalAppId =
  //   Platform.OS === 'ios'
  //     ? EXPO_PUBLIC_ONE_SIGNAL_APP_ID_IOS
  //     : EXPO_PUBLIC_ONE_SIGNAL_APP_ID_ANDROID;

  // if (oneSignalAppId) {
  OneSignal.initialize('883d3cfc-5db0-46ed-b75e-bab0d9031844');
  // }

  // if (Platform.OS === 'ios') {
  //   OneSignal.Notifications.canRequestPermission().then((response) => {
  //     if (response) {
  //       OneSignal.Notifications.requestPermission(true);
  //     }
  //   });
  // }
}