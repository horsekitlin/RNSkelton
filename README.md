# Skelton

## Set scripts

package.json

```json
{
  "name": "app name",
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

## IOS react-native-navigation should replace some code

`ios/xxxxxxx/AppDelegate.m`

```
...
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];
  return YES;
}
...
```
