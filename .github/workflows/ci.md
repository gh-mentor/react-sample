Create a workflow file in the '.github/workflows' folder 'build_and_test.yml' using GitHub Actions with the following requirements:

Define the workflow name and triggers:
- Set the workflow name to 'wf-build-and-test'.
- Define the triggers for push and pull_request events on the main branch. Only execute the job if there are changes to files in the 'src' folder hierarchy:
- Define a trigger for workflow_dispatch.
Define the job:
- Name the job 'job-build-and-test'.
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