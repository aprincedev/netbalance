# NetBalance
### Financial Investment Rebalancer Application

## Description
Over time, even a passively managed portfolio will deviate from its intended target allocation due to the constant fluctuation of the market. Rebalancing is the process of realigning the weightings of a portfolio of assets.

NetBalance aims to expedite that process with ease by automatically calculating the steps needed to keep your portfolio in balance. This tool offers an easy way to group and categorize holdings, set target allocations and fetch current stock prices for calculation.

## Install

    $ git clone https://github.com/aprincedev/netbalance.git
    $ cd netbalance
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

## Languages & tools

### JavaScript

- [JSHint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [JSCS](https://npmjs.org/package/jscs) is used to check coding conventions.
- [React](http://facebook.github.io/react) is used for UI and logic.
- [FontAwesome](https://fontawesome.com/) React package is used for icons.
- [uuid](https://fontawesome.com/) package is used for simple and quick generation of RFC4122 UUIDS.

### CSS

- [Sass](https://sass-lang.com/) is used to write cleaner and more efficient CSS.
