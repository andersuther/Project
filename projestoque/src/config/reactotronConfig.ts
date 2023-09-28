import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';

const {scriptURL} = NativeModules.SourceCode;
const hostName = scriptURL.split('://')[1].split(':')[0];

declare global {
  interface Console {
    tron: typeof Reactotron | {log: () => null; display: () => null};
  }
}

const reactotron = __DEV__
  ? Reactotron.configure({host: hostName}) // controls connection & communication settings
      .setAsyncStorageHandler(AsyncStorage)
      .useReactNative() // add all built-in react native plugins
      .connect() // let's connect!
  : {
      createEnhancer: undefined,
      log: () => null,
      clear: () => null,
      display: () => null,
    };

reactotron.clear();

console.tron = reactotron;

console.log = () => {};

export default reactotron;
