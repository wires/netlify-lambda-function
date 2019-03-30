# AWS Lambda Functions on Netlify

The code in `functions` is deployed as AWS Lambda Functions by Netlify, you do not need to setup anything.

To test it locally, run

```sh
npm run serve
```

This will start a server that hosts code from `functions` on `/.netlify/functions/name` where name is the basename of the source file, in this case `functions/name.js`.

It listen to [localhost:40404](http://localhost:40404)

## Functions

Functions must look like this, see [Netlify docs](https://www.netlify.com/docs/functions/#javascript-lambda-functions) for details.

```js
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({abc:123})
  };
}
```

To start just the functions server, run

```sh
npm run serve:functions
```

It will be hosted on [localhost:9000](http://localhost:9000)

## Static Site

The static site is served from `public`.

To start just the site (dev) server, run

```sh
npm run serve:site
```

It will be hosted on [localhost:40404](http://localhost:40404)