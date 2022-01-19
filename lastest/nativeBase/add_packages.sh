#!/bin/bash

echo "Add redux..."
yarn add redux react-redux redux-saga redux-persist

echo "Add router..."
yarn add react-native-navigation

echo "Add UI element..."
yarn add react-native-elements react-native-vector-icons react-native-toast-message

echo "Add Notification services..."
yarn add @react-native-firebase/app @react-native-firebase/messaging 

echo "Database..."
yarn add @react-native-async-storage/async-storage

echo "Packages..."
yarn add axios flux-constants yup color react-native-safe-area-context react-native-svg react-native-vector-icons react-native-super-grid react-native-config 


echo "Dev Packages..."
yarn add -D babel-plugin-root-import redux-flipper react-native-flipper

echo "router setting..."
npx rnn-link

