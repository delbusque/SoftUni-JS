export function querystringMiddleware(ctx, next) {
    let qstring = {};

    if (ctx.querystring) {
        qstring = ctx.querystring.split('&').map(x => x.split('='))
            .reduce((a, [key, value]) => {
                a[key] = value;
                return a;
            }, {});
    }

    ctx.qstring = qstring;

    next();
}