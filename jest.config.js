export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^(.+).js$': '$1'
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest'
  }
}
