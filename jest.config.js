export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '^(.+).js$': '$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
