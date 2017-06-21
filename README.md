# Es6App

Support for Es6 was introduced to Kony Visualizer Android and iOS apps starting with version 7.3. This is a Kony app that tests support for a few of those Es6 features. 

## Notes

When running the app directly into an iOS emulator from Visualizer the javascript files are not properly loaded and functions `runTests` and `runTemplateLiteralTests` are left undefined. However if the app is run from Xcode the javascript modules are loaded without an issue.
