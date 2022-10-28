https://www.youtube.com/watch?v=9ZEjSxDRIik&list=WL&index=6
https://github.com/pmndrs/react-three-fiber
```
npx create-react-app my-app
cd my-app
npm install three @react-three/cannon @react-three/drei @react-three/fiber 
npm start
```
https://create-react-app.dev/



Success! Created my-app at /workspaces/threejs/try2/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start


### hot reload issues. 

https://stackoverflow.com/questions/71297042/react-hot-reload-doesnt-work-in-docker-container

### background
 in `index.css`, I added
 ```css

html {
  height: 100%;

}

#root {
  height: 100%;
  background: #272727;

}
 ```

also added `  height: 100%;` to the `body {}`

### other
`boxBufferGeometry` is changed to `boxGeometry`
