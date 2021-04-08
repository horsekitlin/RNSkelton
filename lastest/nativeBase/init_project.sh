PROJ_NAME=$1

echo "initial react native project"
npx react-native init $PROJ_NAME
cd $PROJ_NAME

echo "remove ios/Pods"
rm -rf ./ios/Pods

echo "copy index.js"
cp ../template/nativeBase/index.js .
rm -f ../template/nativeBase/index.js

echo "copy files"
cp -R ../template/nativeBase/* ./
rm -f App.js

echo "move files"
pwd
ls -al
cp -a ./* ..
cp -a ./.* ..

echo "back"
cd ..

echo "install packages"
./lastest/nativeBase/add_packages.sh

npx pod-install

echo "remove useless files"
rm -rf ./lastest ./template ./README.md ./$PROJ_NAME

echo "initial project $PROJ_NAME done" ;