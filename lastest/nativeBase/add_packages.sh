#!/bin/bash

echo "Add redux..."
yarn add redux react-redux redux-saga redux-persist

echo "Add router..."
yarn add @react-navigation/native-stack @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler@2.1.1

echo "Add UI element..."
yarn add react-native-elements react-native-vector-icons react-native-toast-message

echo "Add Notification services..."
yarn add @react-native-firebase/app @react-native-firebase/messaging 

echo "Database..."
yarn add @react-native-async-storage/async-storage

echo "Packages..."
yarn add axios flux-constants yup react-native-safe-area-context react-native-vector-icons react-native-config 


echo "Dev Packages..."
yarn add -D babel-plugin-module-resolver redux-flipper react-native-flipper

