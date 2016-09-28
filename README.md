To get the app up and running:

- `cd client-app`
- `npm install`
- `cd ../rails-api-auth`
- `bundle`
- `rake db:create`
- create a `.env` and add:
```
GOOGLE_API_CLIENT=something.apps.googleusercontent.com
GOOGLE_API_SECRET=sekret
```
- We need to run both the npm app and the rails app
  - Start two terminals
  - In one, `cd client-app` and then `npm start`
  - In the other `cd rails-api-auth` and then `rails s`

- Visit   `http://localhost:3001` to view the JavaScript front end and `login`


