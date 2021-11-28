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
