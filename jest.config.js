module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1"
  }
};
