# Design

[Figma](
https://www.figma.com/file/mTQaziKGrmVoVjFooYxo7I/dicoding_forumApp_submissonOne?node-id=0%3A1&t=btb9RYsMPhw6rgd9-1) 

# Deployed App

[ForumApp](https://forum-app-mu.vercel.app/)

# Project Details
Forum App website using React.js with Redux.

This project implement automation testing using Jest, RTL, and Cypress. Also using storybook for Component usage and documentation.

This project using CI/CD with GitHub Action and Vercel.

For testing purpose use `npm run test` then choose option to run all tests, and use `npm run e2e` to run end to end test with Cypress.

# Reducer Function Test
The test file available in each state folder. Tested reducer:
- All states reducer

# Thunk Function Test
The test file available in shared and threads state folder. Tested thunk:
- asyncAddThread
- asyncUpvoteThread
- asyncPopulateUsersThreadsCategories
- asyncPopulateThreadDetailAndThreads

# React Component Test
The test file available in pages and each components folder. Tested component:
- LoginPage
- RegisterPage
- Votes
- ThreadCategory

# End to End Test
- Application login flow in /cypress/e2e/login.cy.js file

# Component Stories
This stories available in /src/stories folder
- ThreadItem
- ThreadCategory
- UserProfile