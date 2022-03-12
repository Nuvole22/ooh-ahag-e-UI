# ooh-ahag-e-UI

---

git clone한 뒤 npm install 해줘야함

> Task :app:validateSigningDebug FAILED 에러가 뜬다면
> 아래 파일을 android/app 경로에 넣어주면 됨
> https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore

---

# require

전체 가이드
https://reactnative.dev/docs/environment-setup

openjdk(8 or later), nodejs

chocolatey
https://chocolatey.org/

안드로이드스튜디오
-> https://developer.android.com/studio

설치후 settings -> Android SDK -> Android 11.0 체크, 우측하단 show package details -> Android SDK Platform 30 / Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image 체크
-> SDK Tools 탭 클릭 -> show package Details -> 30.0.2 클릭

-> 전체가이드에 나온대로 sdk 환경변수 설정(ANDROID_HOME) -> JAVA_HOME도 설정 (cmd javac 해보면 설정된지 나옴)

expo install expo-app-loading
expo install expo-asset
expo install expo-font
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install @react-navigation/native-stack


-> gradlew.bat exited with non-zero code: 1 에러 발생시
외부 cmd창에서 yarn 설치, expo upgrade 실행하여 해결함 (yarn 설치가 안돼있고, expo sdk가 1이었음, 최신은 44)

npm install --global yarn
expo upgrade


-> yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 ~~ 에러 발생시
powershell 관리자로 열기
Set-ExecutionPolicy RemoteSigned 입력해서 권한 주기
get-ExecutionPolicy 입력하여 확인 
---

git 관리 기초
https://victorydntmd.tistory.com/91
