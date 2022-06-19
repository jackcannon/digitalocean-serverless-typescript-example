# digitalocean-serverless-typescript-example

> an example setup for a Digital Ocean serverless function written in TypeScript

## Step 1 - Install doctl and connect

```bash
brew install doctl
doctl auth init
doctl account get
doctl serverless install
doctl serverless connect
doctl serverless status
```

## Step 2 - Clone repo and install dependencies

```bash
git clone git@github.com:jackcannon/digitalocean-serverless-typescript-example.git typescript-example
cd typescript-example
yarn
```

## Step 3 - Build

```bash
yarn build
yarn deploy
```

OR

```bash
yarn upload
```

## Step 4 - Run

### Remotely

```bash
doctl serverless functions invoke sample/age -p year:1992
doctl serverless functions invoke sample/name -p firstName:Jack -p surname:Cannon
```
