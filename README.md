# Webpack Docker Windows watch reproduction

To reproduce, on a **Windows 10** machine:

1. Run: `docker-compose up --build`.
1. View the app at http://localhost:8080/.
1. Edit `src/index.js` to change the message and save the file.
1. Observe the page does not update and Webpack does not rebuild.

With polling, the issue is fixed:

1. Uncomment `poll: 500` in `webpack.config.js`.
1. Run: `docker-compose up --build`.
1. Edit `src/index.js` to change the message and save the file.
1. Observe the page reload and display the new message.
