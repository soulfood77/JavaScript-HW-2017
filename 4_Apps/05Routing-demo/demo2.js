const appContainer = $('#app-container');

// Extracted class to simplify callback of $(window).on('hashchange', callback);
class MyRouter {
    constructor() {
        this._routes = [];
    }

    on(targetUrl, callback) {
        this._routes.push({
            targetUrl,
            callback
        });

        return this;
    }

    navigate() {
        const currentUrl = location.hash.slice(1);

        // Destructuring assignment
        for (const { targetUrl, callback }
            of this._routes) {
            const params = MyRouter.matchUrls(currentUrl, targetUrl);
            if (params) {
                callback(params);
                break;
            }
        }
    }

    // For UT purposes it's better that 
    // both current and target Urls be passed as params to the function
    static matchUrls(currentUrl, targetUrl) {
        const currentUrlParts = currentUrl.split(/\//g);
        const targetUrlParts = targetUrl.split(/\//g);

        if (targetUrlParts.length !== currentUrlParts.length) {
            return false;
        }

        const params = {};
        const len = currentUrlParts.length;
        // Loop and extract only parts starting with colon
        for (var i = 0; i < len; i++) {
            if (targetUrlParts[i][0] !== ':') {
                if (currentUrlParts[i] !== targetUrlParts[i]) {
                    return false;
                }
            } else {
                // Remove colon
                const paramName = targetUrlParts[i].slice(1);
                params[paramName] = currentUrlParts[i];
            }
        }

        return params;
    }
}

const router = new MyRouter();

router.on('', () => appContainer.html('Page loaded'))
    .on('/home', () => appContainer.html('Home page'))
    .on('/user', () => appContainer.html('Showing users'))
    .on('/user/:username', (params) => appContainer.html(`Showing info for ${params.username}`));

$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());