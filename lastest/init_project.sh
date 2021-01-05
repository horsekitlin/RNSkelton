PROJ_NAME=$1

npx react-native init $PROJ_NAME
cd $PROJ_NAME
cp -R ../../template/. ./
rm -f App.js

chmod u+x ../add_package.sh && ../add_package.sh

yarn ios
