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

### Step 1E: Use the version of Node use just installed

Before invoking `node` or `npm` or `npx` from the command line, make sure to activate nvm. You do this by running `nvm use node` (e.g. `npm init`). After that, all invocations of `node` and `npm` within that shell will use the version of node installed by nvm.

If you want to have a shell that always uses whatever version of node is managed by nvm, so that you don't have to do `nvme use node` every time you open a shell, use NVM shim by following the instructions here:

https://github.com/iamogbz/nvshim?tab=readme-ov-file#nvm-shim

(Note this requires a working Python install on your system.)

## Step 2:

Clone this project by doing
