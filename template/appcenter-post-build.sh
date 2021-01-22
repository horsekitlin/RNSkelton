#!/usr/bin/env bash

# Example: Upload main branch app binary to HockeyApp using the API
if [ "$APPCENTER_XCODE_PROJECT" == "" ]; then
  gulp uploadAndroidApk
else
  gulp uploadIOSIPA
fi
