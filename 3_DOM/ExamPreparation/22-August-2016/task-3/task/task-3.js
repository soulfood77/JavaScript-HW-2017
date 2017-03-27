function solve() {
    return function() {
        var template = `
    <header id="main-header">
        <ul class="nav">
        {{#if logo}}
            <li class="nav-item logo">
                {{#logo}}
                    <a href="{{url}}"><img src="{{image}}"></a>
                {{/logo}}
            </li>
        {{/if}}
        {{#items}}
            <li class="nav-item">
                <a href="{{url}}">{{title}}</a>
                {{#if items}}
                    <ul class="subnav">
                    {{#items}}
                        <li class="nav-item">
                            <a href="{{url}}">{{title}}</a>
                        </li>
                    {{/items}}
                    </ul>
                {{/if}}
            </li>            
        {{/items}}
        </ul>
    </header>
        `;
        return template;
    };
}

module.exports = solve;