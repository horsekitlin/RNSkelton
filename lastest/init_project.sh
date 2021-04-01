PROJ_NAME=$1

echo "initial react native project"
npx react-native init $PROJ_NAME
cd $PROJ_NAME

echo "copy files"
cp -R ../template ./src
rm -f App.js

echo "install packages"
../lastest/add_package.sh

npx pod-install

echo "move files"
pwd
ls -al
cp -a ./* ..
cp -a ./.* ..

echo "clear skelton files"
cd ..
rm -rf ./lastest ./template ./README.md ./$PROJ_NAM

echo "initial project $PROJ_NAME done" ;