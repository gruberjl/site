module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": "readonly"
  },
  "plugins": ["react"],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "babel-module": {}
    }
  },
  "rules": {
    "no-console": "off",
    "semi": ["warn", "never"],
    "indent": ["warn", 2],
    "react/prop-types": "off"
  }
}
