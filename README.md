# To use this on your machine to build and run a nodejs project

## Step 1: install NVM on your machine

### Step 1A: If you have a bash shell (i.e. your running Mac OS, Linux, or have something like git-bash on Windows)

Follow the instructions here:

https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

### Step 1B: If you don't have a bash shell (i.e. your running Windows without WSL or git-bash)

Get a bash shell and start over! If you're on windows the best way to run bash and do everything else in terms of writing and running code is to use WSL, **not the native Windows environment**. Follow the instructions here:

https://learn.microsoft.com/en-us/windows/wsl/setup/environment

Then go back and install NVM via bash inside your running instance of WSL.

### Step 1C: Make sure the install of NVM worked

By following the instructions here:

https://github.com/nvm-sh/nvm?tab=readme-ov-file#verify-installation

### Step 1D: Use NVM to download and install the latest verison of Node

In bash, run

```bash
nvm install node
```

### Step 1E: Use the version of Node you just installed

Before invoking `node` or `npm` or `npx` from the command line, make sure to activate nvm. You do this by running `nvm use node` (e.g. `npm init`). After that, all invocations of `node` and `npm` within that shell will use the version of node installed by nvm.

If you want to have a shell that always uses whatever version of node is managed by nvm, so that you don't have to do `nvme use node` every time you open a shell, use NVM shim by following the instructions here:

https://github.com/iamogbz/nvshim?tab=readme-ov-file#nvm-shim

(Note this requires a working Python install on your system.)

## Step 2: Clone and install this repo

Clone this project by doing...

```bash
git clone https://github.com/stuvjordan-uroc/node-typescript-eslint-starter.git
```

...Then cd into the directory just created... (of course, feel free to change the directory name)...

```bash
cd node-typescript-eslint-starter
```

...Then set up the shell your using to use the node managed by NVM...

```bash
nvm use node
```

...Then install the packages required

```bash
npm install
```

## Step 3: Install the eslint extension for VSCode

You're going to write your code using VSCode...**right**????

90% of the benefits of using this setup come from writing in VSCode while using the eslint extension. So if you're not going to use VSCode, there's no point in using this starter!

Here's the extension:

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

# Understanding what this is

This starter is set up as a base for writing an ES6 module that is meant to run in Nodejs (as opposed to being run in a browser), and that is compiled from source code written in Typescript.

## What's an ES6 Module?

It's a javascript module that export stuff using ES6 syntax, like this...

```javascript
//hello-world.ts or hello-world.js
export function helloWorld() {
  console.log("Hello, world.");
}
```

...and that can be imported by other Javascript or Typescript source code using E6 syntax like this:

```javascript
import { helloWorld } from "hello-world";

helloWorld();
```

## What's Typescript?

Typescript is an extension of Javascript that allows you to use type annotations. This helps you to catch mistakes in your code before you make them. When you first start using it, it will be a huge pain in the ass, relative to writing plain Javascript. But once you get used to it, you will be able to work much faster than you would in plain Javascript. The best resource both to learn Typescript and as a reference is the Typescript Handbook:

https://www.typescriptlang.org/docs/handbook/intro.html

## Basic Typescript Usage

To write in typescript, write in ".ts" files, such as "index.ts" in this repo. In recent versions of node, you can run a .ts file in node, just like this: `node index.ts`.

When you're developing code and want to run it (or run it in a test environment like jest), you can just use node to run your .ts files, as in `node index.ts`.

When you want to build what you've written into a module for use in other projects, you'll want to run the code through the typescript complier, as in `tsc index.ts`.

A key feature of how Typescript code behaves is the `tsconfig.json` file that configures Typescript. If you're wanting to change the way typescript behaves in this project, edit the `tsconfig.json`. Here's the docs about tsconfig.json:

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## What's ESLint?

ESLint checks your javascript and typescript code for syntax errors. When combined with VSCode, it produces real-time warnings and hints that help you write code faster and catch mistakes before you make them.

Technically, this project uses eslint-typescript, which is a variant of eslint that can handle Typescript code.

Eslint's behavior is highly configurable, using a file call `eslint.config.mjs`. If you want to change how eslint behaves in this project, edit `eslint.config.mjs`.

Here's the docs:

https://typescript-eslint.io/getting-started/
