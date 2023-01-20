module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/**/*.js"],
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
};
