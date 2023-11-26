#!/bin/bash

echo "Add redux..."
yarn add redux react-redux redux-saga redux-persist

echo "Add router..."
yarn add @react-navigation/native-stack @react-navigation/native
expo install react-native-screens react-native-safe-area-context

echo "Add UI element..."
yarn add react-native-paper

# echo "Add Notification services..."
# yarn add @react-native-firebase/app @react-native-firebase/messaging 

echo "Database..."
expo install @react-native-async-storage/async-storage

echo "Packages..."
yarn add axios flux-constants yup lodash react-native-status-bar-height
yarn add @react-navigation/material-bottom-tabs

echo "Dev Packages..."
yarn add -D babel-plugin-module-resolver babel-plugin-root-import @redux-devtools/extension

echo "husky install..."
yarn add -D commitlint @commitlint/config-conventional eslint husky remote-redux-devtools

echo "configuare prettier"
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

