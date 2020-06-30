import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native'

import App from './src';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never'
])

export default function Main() {
  return <App />;
}
