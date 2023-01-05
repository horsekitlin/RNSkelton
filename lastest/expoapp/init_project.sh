PROJ_NAME=$1

echo "initial react native project"
npx react-native init $PROJ_NAME
cd $PROJ_NAME

echo "remove ios/Pods"
rm -rf ./ios/Pods

echo "copy index.js"
cp ../template/expoapp/index.js .
rm -f ../template/expoapp/index.js

echo "copy files"
cp -R ../template/expoapp/* ./
cp -R ../template/expoapp/.* ./
rm -f App.js

echo "move files"
cp -a ./* ..
cp -a ./.* ..

echo "back"
cd ..

echo "install packages"
./lastest/expoapp/add_packages.sh

echo "remove useless files"
rm -rf ./lastest ./template ./README.md ./docs ./$PROJ_NAME

echo "initial project $PROJ_NAME done" ;
