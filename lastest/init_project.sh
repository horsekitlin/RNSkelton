PROJ_NAME=$1

echo "initial react native project"
npx react-native init $PROJ_NAME
cd $PROJ_NAME

echo "copy files"
cp -R ../template ./src
rm -f App.js

chmod u+x ../add_package.sh && ../add_package.sh

yarn ios

echo "move files"
mv ./* ..
mv ./.* ..

echo "clear skelton files"
cd ..
rm -rf ./lastest ./template ./README.md

echo "initial project $PROJ_NAME done" ;