module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": "readonly"
  },
  "plugins": ["react"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "no-console": "off",
    "semi": ["warn", "never"],
    "indent": ["warn", 2],
    "react/prop-types": "off"
  }
}
