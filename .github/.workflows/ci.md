Create a CI workflow for the build-and-test job using GitHub Actions.

Define the workflow name and triggers:
- Set the workflow name to CI.
- Define the triggers for push and pull_request events on the main branch.
Define the job:
- Name the job 'build-and-test'.
- Set the runner to ubuntu-latest.

Add the steps:
- Checkout the repository:
-- Use the actions/checkout@v4 action.
- Set up Node.js:
-- Use the actions/setup-node@v4 action.
-- Specify the Node.js version (20.9.0).
- Install dependencies:
-- Use the 'npm ci' command for a clean install.
- Build the app:
-- Use the 'npm run build' command.
- Run tests:
-- Use the npm test command.