PROJ_NAME=$1

echo "initial react native project"
npx create-expo-app --template blank $PROJ_NAME

cd $PROJ_NAME

echo "copy index.js"
cp ../template/expoapp/App.js .

echo "copy files"
cp -R ../template/expoapp/* ./
cp -R ../template/expoapp/.* ./

echo "move files"
cp -a ./* ..
cp -a ./.* ..

echo "back"
cd ..

echo "install packages"
./lastest/expoapp/add_packages.sh

echo "remove useless files"
rm -rf ./lastest ./template ./README.md ./docs ./$PROJ_NAME
rm -rf ./expoapp
rm -f ./package-lock.json

echo "initial project $PROJ_NAME done" ;