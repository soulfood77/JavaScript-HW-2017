const appContainer = $('#app-container');

// For UT purposes it's better that 
// both current and target Urls be passed as params to the function
function matchUrls(currentUrl, targetUrl) {
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
            // remove colon
            const paramName = targetUrlParts[i].slice(1);
            params[paramName] = currentUrlParts[i];
        }
    }

    return params;
}

function matchHashUrl(targetUrl) {
    // remove #
    const currentUrl = location.hash.slice(1);
    return matchUrls(currentUrl, targetUrl);
}

$(window).on('hashchange', (ev) => {
    let params = matchHashUrl('/home');
    if (params) {
        appContainer.html('Home page');
        return;
    }

    params = matchHashUrl('/user');
    if (params) {
        appContainer.html('Showing users');
        return;
    }

    params = matchHashUrl('/user/:username');
    if (params) {
        appContainer.html(`Showing info for ${params.username}`);
        console.log(params);
        return;
    }

});