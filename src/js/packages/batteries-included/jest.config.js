module.exports = {
    moduleNameMapper: {
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '^@pages/(.*)$': '<rootDir>/pages/$1',
        '^@styles/(.*)$': '<rootDir>/styles/$1',
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    verbose: true,
    roots: ["<rootDir>/__tests__"]
}