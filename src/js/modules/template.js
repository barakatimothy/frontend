Handlebars.registerHelper('percentage', function(number1, number2) {
    if (number2 == 0) {
        return 0;
    }
    return Math.round(number1*100/number2);
});

Handlebars.registerHelper('urlForCourseId', function(courseId) {
    return "/courses/" + courseId;
});

Handlebars.registerHelper('ifItemIsCompleted', function(completion_requirement, options) {
    if (completion_requirement && completion_requirement.completed) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});