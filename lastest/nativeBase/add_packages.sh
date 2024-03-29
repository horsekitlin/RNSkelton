#!/bin/bash

echo "Add redux..."
yarn add redux react-redux redux-saga redux-persist

echo "Add router..."
yarn add react-native-navigation react-native-navigation-hooks

echo "Add UI element..."
yarn add native-base@3.2.2 react-native-vector-icons

echo "Add Notification services..."
yarn add @react-native-firebase/app @react-native-firebase/messaging 

echo "Database..."
yarn add @react-native-async-storage/async-storage redux-persist

echo "Packages..."
yarn add flux-constants yup color react-native-safe-area-context react-native-svg react-native-vector-icons react-native-modal-overlay react-native-config


echo "Dev Packages..."
yarn add -D babel-plugin-root-import redux-flipper react-native-flipper

echo "router setting..."
npx rnn-link

