cd .\platforms\android\app\build\outputs\apk
ECHO Signing apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore nc91parma.keystore ./release/app-release-unsigned.apk nc91parma
cd release
zipalign -v 4 app-release-unsigned.apk Nc91Parma.apk
pause
exit