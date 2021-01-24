# Skelton

## Tutorial

```
  $ npx react-native init ${appName} && cd ${appName}
  $ cp -a ../rnskelton/template/* .
  $ ../rnskelton/lastest/add_package.sh
  $ rm -f ./App.js
```

### IOS

```
  $ cd ios
  $ bundle install
  $ rm -rf Pods 
  $ bundle exec pod install --repo-update
```

### Setput SDK

#### Firebase

To do this, open your `/ios/{projectName}/AppDelegate.m` file, and add the following:

At the top of the file, import the Firebase SDK:

```
#import <Firebase.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  // Add me --- \/
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
  // Add me --- /\
  // ...
}
```

[setup](https://rnfirebase.io/#3-ios-setup)

#### App center

appcenter 需要增加幾行程式碼

[add sdk step](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native#33-ios-only-integrate-the-ios-sdk-manually-without-react-native-link-or-cocoapods)

##### 增加檔案 
`ios/${appName}/AppCenter-Config.plist`

```xml
 <?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
    <key>AppSecret</key>
    <string>APP_SCRECT</string>
    </dict>
</plist>
```


### Font

Info.plist

```xml
<key>UIAppFonts</key>
	<array>
		<string>Foundation.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>Ionicons.ttf</string>
		<string>AntDesign.ttf</string>
		<string>FontAwesome.ttf</string>
	</array>
```
===

## Set scripts

package.json

```json
{
  "name": "drcleaner",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    ...
    "postJSMajorVersion": "npm version major",
    "postJSMinorVersion": "npm version minor",
    "postJSPatchVersion": "npm version patch",
    "deploy:adhoc-ios": "source ./rcs/iosrc && cd android && bundle exec fastlane beta && cd ..",
    "deploy:adhoc-android": "source ./rcs/androidrc && cd android && bundle exec fastlane beta && cd ..",
    ...
  }
}
```

## Android build setting update

build.grade
```
...
buildscript {
    ext {
        ...
        minSdkVersion = 21
        ...
    }
...
}
```

### Font

[setup](https://github.com/oblador/react-native-vector-icons#android)

#### Copy the contents in the Fonts folder 
```
  $ cp -a node_modules/react-native-vector-icons/Fonts/ ./android/app/src/main/assets/fonts
```

### Appcenter

android/app/src/main/assets/appcenter-config.json

```json
{
  "app_secret": "54335d0d-cb1f-46d5-b4ec-2e59f3c3b810"
}
```

res/values/strings.xml 

```xml
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
```

https://appcenter.ms/users/${account}/apps/${project}

## Flipper

[redux-devtool](https://github.com/jk-gan/redux-flipper)

## Trouble 

[打包錯誤 library-not-found-for-lpods](https://stackoverflow.com/questions/23539147/xcode-ld-library-not-found-for-lpods?lq=1)

## Fastlane

### bundle set config path

```
	$ bundle config set path 'vendor/bundle'
```

### IOS

```
  $ cp -a ${path}/template/rcs . && cd ios && cp -a ${path}/template/ios/Gemfile . && bundle install && bundle exec pod install && bundle exec fastlane init && cd ..
```

```
  $ cp -a ${path}/template/ios/fastlane ./ios
```

update `${path}/rcs/iosrc`

```
  $ yarn deploy:adhoc-ios
```

### Android

~/.gradle/gradle.properties

```
CODEPUSH_DEMO_STORE_FILE=my-upload-key.keystore
CODEPUSH_DEMO_KEY_ALIAS=my-key-alias
CODEPUSH_DEMO_STORE_PASSWORD=******
CODEPUSH_DEMO_KEY_PASSWORD=******
```

android/app/build.gradle

```
android {
	...
	signingConfigs {
        release {
            if (project.hasProperty('CODEPUSH_DEMO_STORE_FILE')) {
                storeFile file(CODEPUSH_DEMO_STORE_FILE)
                storePassword CODEPUSH_DEMO_STORE_PASSWORD
                keyAlias CODEPUSH_DEMO_KEY_ALIAS
                keyPassword CODEPUSH_DEMO_KEY_PASSWORD
            }
        }
    }
}
```

```
  $ cp -a ${path}/template/rcs . && cd android && cp -a ${path}/template/android/Gemfile . && bundle install && bundle exec fastlane init && cd ..
```

```
  $ cp -a ${path}/template/android/fastlane ./android
```
