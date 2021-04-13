# Android

## build setting

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


## Font

[setup](https://github.com/oblador/react-native-vector-icons#android)

### Copy the contents in the Fonts folder 
```
  $ cp -a node_modules/react-native-vector-icons/Fonts/ ./android/app/src/main/assets/fonts
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

### App center

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
