const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: "http://localhost:9000/tutorials?id=onlineticketbook",
    token: "sqp_2552aef91b938b06f36b5d14df6541696299fe14",    
    options: {
      "sonar.projectKey":"onlineticketbook",
      "sonar.projectName": "onlineticketbook-web",
      "sonar.projectDescription": "demo",
      "sonar.sourceEncoding":"UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.exclusions": "test/*, node_modules/*, public/*",
      "sonar.tests":"./src",
      "sonar.testExecutionReportPaths":"test-report.xml",
      "sonar.javascript.lcov.reportPaths":"coverage/lcov.info",
      "sonar.java.binaries": "**/*.java"
    },
  },
  () => process.exit()
);
