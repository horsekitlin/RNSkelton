#!/bin/bash

echo "Add App Center..."
yarn add appcenter appcenter-analytics appcenter-crashes

echo "Add redux..."
yarn add redux react-redux redux-saga redux-persist

echo "Add router..."
yarn add react-native-navigation@7.0.0 react-native-navigation-hooks

echo "Add UI element..."
yarn add native-base react-native-vector-icons

echo "Add Notification services..."
yarn add @react-native-firebase/app @react-native-firebase/messaging 

echo "Database..."
yarn add @react-native-community/async-storage redux-persist

echo "Packages..."
yarn add flux-constants yup

echo "Dev Packages..."
yarn add -D babel-plugin-root-import redux-flipper react-native-flipper

echo "add pod Packages..."
npx pod-install

echo "router setting..."
npx rnn-link