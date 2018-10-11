# Simple DLL Plugin Example
## From [blog](https://medium.com/@emilycoco/how-to-use-the-dll-plugin-to-speed-up-your-webpack-build-dbf330d3b13c)
```

Install the dependencies and start the server.

```
npm/yarn install
npm/yarn start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
