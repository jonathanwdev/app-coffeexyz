module.exports = {
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['<rootDir>/src/services/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
};
