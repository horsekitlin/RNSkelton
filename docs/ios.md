# IOS 

## add font in info.plist

**info.plist**

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

## remove rootview setting

**AppDelegate.m**

```
...
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];
  // if (@available(iOS 13.0, *)) {
  //     } else {
  //     rootView.backgroundColor = [UIColor whiteColor];
  // }

  return YES;
}
...
```

## Firebase

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
