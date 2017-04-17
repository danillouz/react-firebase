# React 🔥 Firebase
Playing around with [Firebase](https://firebase.google.com/).

# Configuration
Create a `.env` with the following variables:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
```

These values can be grabbed from the [Firebase Console](https://console.firebase.google.com).

# Running locally
```
npm i && npm start
```

# Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Adding custom environment variables
> Note: this feature is available with `react-scripts@0.2.3` and higher.

Your project can consume variables declared in your environment as if they were
declared locally in your JS files. By default you will have `NODE_ENV` defined
for you, and any other environment variables starting with `REACT_APP_`.

This can be done using two ways: either in your shell or in a `.env` file.

### Referencing environment variables in the HTML
> Note: this feature is available with `react-scripts@0.9.0` and higher.

You can also access the environment variables starting with `REACT_APP_` in the
`public/index.html`. For example:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

Note that the caveats from the above section apply:

* Apart from a few built-in variables (`NODE_ENV` and `PUBLIC_URL`), variable names must start with `REACT_APP_` to work.
* The environment variables are injected at build time. If you need to inject them at runtime, [follow this approach instead](#generating-dynamic-meta-tags-on-the-server).

### Adding development environment variables In `.env`
> Note: this feature is available with `react-scripts@0.5.0` and higher.

To define permanent environment variables, create a file called `.env` in the
root of your project:

```
REACT_APP_SECRET_CODE=abcdef
```

Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv)
for more details.

> Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need these defined as well. Consult their documentation how to do this. For example, see the documentation for [Travis CI](https://docs.travis-ci.com/user/environment-variables/) or [Heroku](https://devcenter.heroku.com/articles/config-vars).

## Making a Progressive Web App
You can turn your React app into a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) by following the steps in [this repository](https://github.com/jeffposnick/create-react-pwa).

## Deployment
`npm run build` creates a `build` directory with a production build of your app. 
Set up your favourite HTTP server so that a visitor to your site is served
`index.html`, and requests to static paths like `/static/js/main.<hash>.js` are
served with the contents of the `/static/js/main.<hash>.js` file.

### Firebase
Install the Firebase CLI if you haven’t already by running:

```
npm install -g firebase-tools
```
Sign up for a [Firebase account](https://console.firebase.google.com/) and create
a new project. Run `firebase login` and login with your previous created Firebase
account.

Then run the `firebase init` command from your project’s root. You need to choose
the **Hosting: Configure and deploy Firebase Hosting sites** and choose the
Firebase project you created in the previous step. You will need to agree with
`database.rules.json` being created, choose `build` as the public directory, and
also agree to **Configure as a single-page app** by replying with `y`.

```sh
  === Project Setup

  First, let's associate this project directory with a Firebase project.
  You can create multiple project aliases by running firebase use --add,
  but for now we'll just set up a default project.

  ? What Firebase project do you want to associate as default? Example app
  (example-app-fd690)

  === Database Setup

  Firebase Realtime Database Rules allow you to define how your data should be
  structured and when your data can be read from and written to.

  ? What file should be used for Database Rules? database.rules.json
  ✔  Database Rules for example-app-fd690 have been downloaded to
  database.rules.json.
  Future modifications to database.rules.json will update Database Rules when
  you run firebase deploy.

  === Hosting Setup

  Your public directory is the folder (relative to your project directory) that
  will contain Hosting assets to uploaded with firebase deploy. If you
  have a build process for your assets, use your build's output directory.

  ? What do you want to use as your public directory? build
  ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
  ✔  Wrote build/index.html

  i  Writing configuration info to firebase.json...
  i  Writing project information to .firebaserc...

  ✔  Firebase initialization complete!
```

Now, after you create a production build with `npm run build`, you can deploy it
by running `firebase deploy`.

```sh
  === Deploying to 'example-app-fd690'...

  i  deploying database, hosting
  ✔  database: rules ready to deploy.
  i  hosting: preparing build directory for upload...
  Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
  ✔  hosting: 8 files uploaded successfully
  i  starting release process (may take several minutes)...

  ✔  Deploy complete!

  Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
  Hosting URL: https://example-app-fd690.firebaseapp.com
```

For more information see [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup).

### Now
[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.
2. Install `serve` by running `npm install --save serve`.
3. Add this line to `scripts` in `package.json`:

	```
	"now-start": "serve build/",
	```
4. Run `now` from your project directory. You will see a **now.sh** URL in your output like this:

	```
	> Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
	```

	Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.](https://zeit.co/blog/now-static)

## Advanced configuration
You can adjust various development and production settings by setting environment
variables in your shell or with [.env](#adding-development-environment-variables-in-env).

Variable | Development | Production | Usage
:--- | :---: | :---: | :---
BROWSER | :white_check_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a [browser](https://github.com/sindresorhus/opn#app) to override this behavior, or set it to `none` to disable it completely.
HOST | :white_check_mark: | :x: | By default, the development web server binds to `localhost`. You may use this variable to specify a different host.
PORT | :white_check_mark: | :x: | By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.
HTTPS | :white_check_mark: | :x: | When set to `true`, Create React App will run the development server in `https` mode.
PUBLIC_URL | :x: | :white_check_mark: | Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in [`package.json` (`homepage`)](#building-for-relative-paths). Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.
CI | :large_orange_diamond: | :white_check_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.

# License
MIT Copyright (c) 2017 Daniël Illouz.