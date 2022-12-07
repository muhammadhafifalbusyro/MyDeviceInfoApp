# My Device Info App

## Penjelasan Aplikasi

Aplikasi ini dibuat untuk memenuhi tes yang diberikan oleh PT. Teravin Technovations. Aplikasi ini memiliki fitur untuk mendapatkan data model device user, sistem operasi, versi sistem operasi, dan data penggunaan penyimpanan internal.

## Stack Technology

- Javascript
- Java
- Swift
- React Native

## Langkah Debugging

- Clone repositori
  `$ https://github.com/muhammadhafifalbusyro/MyDeviceInfoApp.git`
- Install all package
  `$ npm install`
- Install pod

```
$ cd ios && pod install
```

- Ekstrak folder **hafif-package-device-info**
- Pindahkan folder **hafif-package-device-info** ke dalam folder **node_modules**
- Pada file `package.json` tempelkan kode pada baris ini

```
"dependencies": {
	...
	"hafif-package-device-info": "^1.0.0"
}
```

- Pada file `package-lock.json` tempelkan kode ini pada baris ke 13

```
...
"hafif-package-device-info":  "^1.0.0"
...
```

- Pada file `package-lock.json` tempelkan kode ini pada baris ke 26-35

```
...
"hafif-package-device-info": {
	"version":  "1.0.0",
	"extraneous":  true
	},
"node_modules/hafif-package-device-info": {
	"version":  "1.0.0",
	"peerDependencies": {
	"react-native":  "\*"
		}
	},
...
```

- Pada file `yarn.lock` tempelkan kode ini pada baris terakhir

```
...
"hafif-package-device-info@^1.0.0":
	"version" "1.0.0"
...
```

- Jalankan aplikasi
  - Android
  ```
  $ npx react-native run-android
  ```
  - Ios
  ```
  $ npx react-native run-ios
  ```
