ECHO off
cls
cd .\platforms\android\app\build\outputs\apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore nc91parma.keystore ./release/app-release-unsigned.apk nc91parma
cd release
if EXIST "nc91parma.apk" (
	del nc91parma.apk
)
zipalign -v 4 app-release-unsigned.apk nc91parma.apk
pause
exit