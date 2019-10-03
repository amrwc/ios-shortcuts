# iOS Shortcuts

JS scripts that generate shortcuts for the iOS [Shortcuts app](https://support.apple.com/en-us/HT208309).

## Setup and usage

```bash
git clone --recurse-submodules git@github.com:amrwc/ios-shortcuts.git
cd ios-shortcuts/src/
npm install
```

To generate all shortcuts, run:

```bash
./index.js
```

To generate a single shortcut, run:

```bash
./shortcuts/<shortcut_name>.js
```

All the generated shortcuts can be found in the `data/` directory in the root of the project.

## Import shortcuts

One simple way is to get the shortcuts on an iPhone/iPad is to pass them over through the iCloud Drive. To import a shortcut, simply open the `.shortcut` file, and if you have Shortcuts installed, it will prompt you accordingly.
