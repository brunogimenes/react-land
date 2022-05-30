# React Land - Share TypeScript code between your React Native, Next.JS and CRA apps.

The objective of this boilerplate is to make it easier and faster to deploy your MVPs.

You can get started by simple cloning it and change the name of the folders and projects.

## Projects and recommended purposes

- #### Next.js TypeScript Web

  A simple Next.js web project. If you have a way to deploy it somwhere (like Vercel), this is the recommended way to go to have your backend and web app.
  It has a great SEO, it is very fast and you can't manage backend stuff using Next.JS Routes API.

- #### ReactJS TypeScript App (with Ionic and Capacitor included)

  You can use this project to build a hybrid app (or a web SPA).

- #### React Native TypeScript Native App

  Basic React Native project ready for use

- #### NodeJS Express App (coming soon)

- #### Shared TypeScript Library
  A library shared between all the other projects. With this you can have a lot of real code sharing. You can have components, business logic, packages, types and anything that fits for your needs.

## Set up

After you clone or download this repo, all you need to do to set it up is run `yarn install` at the root level

## Run

For sure you will not work in all the projects at the same time, so, it is not recommended to open the root folder in your IDE. It will be really hard to find files and navigate after it starts to grow.

I recommended you to open an instance of the IDE with the project you need.

Most of the times it will be the Shared Library and some other.

You need to manually run each project in it's own terminal, so you can see bugs and logs you need.

### Shared Library

`yarn dev`

This will start `tsc` in `watch mode`, so, all the changes you make in your library will be automatic available to your other projects (and your hot reloading should work as well, for example, try running some of your projects along with shared library, and change the string `Hey` to `Hello` inside `my_project_shared/src/utils/sum.ts`).

### Next.js app

The same commands that work with a regular Next.js will work here. Start to code by running `yarn dev` and you are done.

### CRA + Ionic + Capacitor

This is a regular React App using `react-scripts`. You can start it by running `yarn dev`.

For people that needs to prototype fast and validate a business idea, I also added Ionic and Capacitor here, so you can use it's commands to launch it as an hybrid app in Android and iOS.

### React Native (Expo)

If you want to run it on the Web or using the Expo App, you can use `yarn dev` to start the Expo Server.

Also, you can use a real device or emulator with the following commands:

`yarn android`
`yarn ios`
`yarn web`

This project needed some heavy setup to work with yarn workspaces in this monorepo. If anything goes wrong, please let me know.

## Why there is a RN and an Ionic app?

React Native is for sure more performatic and the definitive way to go for JavaScript developers in mobile development (In my opinion).

But, as I am also a product guy and I understand the value of validating an idea, I also understand that it can be done faster using an hybrid framework, like Ionic and Capacitor.

With this monorepo strategy, we can easily share a lot of code between projects, but, sharing UI between React Native and Web can be really tricky. (I know we have a lot of ways to do that, but, at least for me, it is still not that smooth to work with).

So, using Ionic, with today's smartphones, you can have a really good performance and share almost 100% of your code between platforms (it is web after all).

After validating the idea, you can start to migrate your mobile apps to the React Native code. 

Rembember: Your users have no idea what is an hybrid or a native app.

Said that, I hope this repo help you start your business and share your code.
