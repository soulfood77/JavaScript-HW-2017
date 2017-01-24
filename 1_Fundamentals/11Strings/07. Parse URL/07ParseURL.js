function parseURL(args) {
    let str = args[0];
    let protocol, server, resource,
        endProtocol = str.indexOf('://'),
        endServer = str.indexOf('/', endProtocol + 3),
        len = str.length;

        protocol = str.substring(0, endProtocol);
        server = str.substring(endProtocol + 3, endServer);
        resource = str.substring(endServer, len);

        console.log(`protocol: ${protocol}`);
        console.log(`server: ${server}`);
        console.log(`resource: ${resource}`);
}

// ZERO TESTS
parseURL(['http://telerikacademy.com/Courses/Courses/Details/239']);