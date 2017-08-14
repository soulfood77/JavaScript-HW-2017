<img src="https://raw.githubusercontent.com/TelerikAcademy/Common/master/logos/telerik-header-logo.png" />


# Data Mining Expert
Web applications with Node.js - Workshop 1, 11 July 2017

Write and unit test a data scraper

## Application description

You are hired at a very reputable Bulgarian company (that has unit tests :O) to do some data mining for them. All goes well until you are given your first task - you need to mine out data from the telerikacademy.com student system about the courses and forum posts that have been published throughout the years. 

## Part 1 - Courses

Firstly, you need to implement the following model:

- **Course** has required data fields `name`, `startingDate`, `endingDate` and `lecturesPerWeek`. Save the dates as they are, no need to convert them to another format. The class should not instantiate if any of those has an invalid or falsy value.

As usual, the program should work with some input commands. Those commands **must pass though NPM.**

- **courses [..courseIdsList]** - Aquire data about the courses, given the passed Ids (which are comma seperated) and print them to the console in a `format of your choosing`.

### Example

#### Input
```
npm start -- courses 430,431
```

#### Output (doesn't have to be the same!)

```
{
    "name": "Бази данни (май 2017)",
    "startingDate": "2017-05-15",
    "endingDate": "2017-06-13",
    "lecturesPerWeek": "3"
}
{
    "name": "Шаблони за дизайн (май 2017)",
    "startingDate": "2017-05-16",
    "endingDate": "2017-06-15",
    "lecturesPerWeek": "2"
}
```

### Tests

Write unit tests that cover the following functionality:

- Properly reading the command parameters.
- Properly processing the command parameters (calls the right methods).
- Properly parses the fetched HTML (mock HTML should be made). **[Advanced]**
- Properly instansiates `Course` class.
- Properly prints to the console.

**You need to test not only the cases stated above, but also their failure counterparts. You also have to test all other cases you can think of. (It depends on how abstract you make your application)**

### Hints

- **process.argv** is cool. Reserach it.
- **start** is an NPM script that you should implement yourself.
- **console.log(JSON.stringify(course, null, 4));** prints the object in the same format as shown in the example.
- Ask for help when you need it!

## Part 2 - Forum posts

Secondly, you need to implement the following model:

- **Post** has required data fields `name`, `responsesCount` and `votes`. The `votes` field should contain the votes status string. _Example: '-3'_. The class should not instantiate if any of those has an invalid or falsy value.

As usual, the program should work with some input commands. Those commands **must pass though NPM.**

- **forum [postsCount]** - Aquire data about the most recent `postsCount` posts in the forum and print them in the console in a `format of your choosing`, where `postsCount` cannot exceed 15. If you are up for the challange, you could make it work with more than 15 posts.

### Example

#### Input
```
npm start -- forum 2
```

#### Output (doesn't have to be the same!)

```
{
    "name": "[DSA] Mini Exam I - 01.07.2017",
    "responsesCount": "5",
    "votes": "+1",
}
{
    "name": "[Бази данни] Критерии за проверка",
    "responsesCount": "13",
    "votes": "+4",
}
```

### Tests

Write unit tests that cover the following functionality:

- Properly reading the command parameters.
- Properly processing the command parameters (calls the right methods).
- Properly parses the fetched HTML (mock HTML should be made). **[Advanced]**
- Properly instansiates `Post` class.
- Properly prints to the console.

**You need to test not only the cases stated above, but also their failure counterparts. You also have to test all other cases you can think of. (It depends on how abstract you make your application)**

## Part 3 - Express interface

You've rached this part, you are truely a master! Now, take all of this functionality and swap the console interface for a web interface, using Express and Pug. You are required to test the controller and routing funcionality. 

### Pages

- **Home** - Just a generic welcome page
- **Courses** - A simple page with a single button and an input field. When the button is clicked, information about the selected courses is shown.
- **Posts** - A simple page with a single button and an input field. When the button is clocked, information about the latest **X** posts is shown.

### Additional requirements
- Implement user accounts
    - Only logged in users can view/invoke the crawling functionality pages.
    - Unit and Integration test the register/login/logout functionality.
- Follow the best practices for the application's architecture

### Hints

- Use AJAX to call the courses/posts functionality from the first two parts.
- The requirements for this workshop are quite broad. There isn't a specific way to implement them. Use your imagination.

### End goal
The idea is to have a fully tested application, that can run both a console interface and a web interface.

### Additional things to do

- Implement data caching
- Implement admin role.
  - Add administration for manually resetting the cache
  - Add administration for disabling a select functionality
  - Add administration for managing users 
    - Reset catche / Disable functionality for specific user
- Implement data persistency in MongoDB