function solve() {
    return function() {
        var template = [
            '<h1>{{Title}}</h1>',
            '<ul>',
            '{{#posts}}',
            '<li>',
            '<div class="post">',
            '{{#if author}}',
            '<p class="author"><a class="anonymous">{{author}} </a></p>',
            '{{else}}',
            '<p class="author"><a class="anonymous">Anonymous </a></p>',
            '{{/if}}',
            '<pre class="content">{{text}}</pre>',
            '</div>',
            '<ul>',
            '{{#comments}}',
            '<li>',
            '<div class="comment">',
            '<p class="author">{{author}} <a class="user" href="#">{{text}} </a></p>',
            '</div>',
            '</li>',
            '{{/comments}}',
            '</ul>',
            '</li>',
            '{{/posts}}',
            '</ul>'
        ].join('\n');

        return template;
    }
}

// submit the above

if (typeof module !== 'undefined') {
    module.exports = solve;
}