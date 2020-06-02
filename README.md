## Cognite Assignment

#### Description:
Simple chat UI without any backend but working buttons.

#####Goals:
1. The user should be able to write messages in the chat window and see them appear.
2. The user should be able to select a friend and see his chat with this friend.
#####Non-Goals
1. Persisting chat history.
2. Talking to a backend.
3. Multiple users. 

I used `create-react-app` with the Redux Toolkit templates.

Personally I prefer the `Containers` and `Components` directory structure but here I followed the folder structure from Redux toolkit itself.

#### Installation
Default `npm` or `yarn` installation commands.

#### Running the app
Again normal default commands using any of the above. 

#### Added packages
* [faker](https://www.npmjs.com/package/faker) for generating dummy data
* [shortid](https://www.npmjs.com/package/shortid) for generating unique Ids

#### Improvements
* Adding more functionalities like removing and editing message
* Add keyboard shortcuts for sending normal or sneaky message