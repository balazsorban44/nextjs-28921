## Steps

1.

- Deploy this repository.
- Change `https://balazsorban-28921-balazsorban.vercel.app` with your domain.
- curl:
```sh
curl -i -X POST https://balazsorban-28921-balazsorban.vercel.app/api/event \
  --data '{"name":"pageview","url":"http://dummy.site","domain":"dummy.site","screen_width":1666}'
```

This will return 404 Not Found.

2.

- Comment out the `i18n` config in `next.config.js`
- redeploy
- curl:
```sh
curl -i -X POST https://balazsorban-28921-balazsorban.vercel.app/api/event \
  --data '{"name":"pageview","url":"http://dummy.site","domain":"dummy.site","screen_width":1666}'
```

This will return 202 Accepted, with an "ok" body.

## Notes:
`GET` works correctly even with `i18n` config: https://balazsorban-28921-balazsorban.vercel.app/js/index.js

## Resources:
- https://plausible.io/docs/events-api