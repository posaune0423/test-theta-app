module.exports = {
  preset: './jest-preset.js',
  // testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.json',
    },
  },
}
