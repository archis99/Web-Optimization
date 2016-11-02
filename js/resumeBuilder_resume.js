var bio = {
    "name": "Archisman Sahoo",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-7829509332",
        "email": "archismansahoo8@gmail.com",
        "github": "archis99",
        "twitter": "@archismns",
        "location": "Bangalore"
    },
    "welcomeMessage": "Welcome to My Resume",
    "skills": [
        "C", "C++", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"
    ],
    "biopic": "img/minified-img/Archisman.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {

        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);

    });

}();

var education = {
    "schools": [{
        "name": "R.V. College of Engineering",
        "location": "Bangalore, KA",
        "degree": "Masters",
        "majors": ["Embedded Design"],
        "dates": "2016",
        "url": "http://www.rvce.edu.in/"
    }, {
        "name": "Silicon Institute of Technology",
        "location": "Bhubaneswar, OD",
        "degree": "Bachelors",
        "majors": ["Instrumentation"],
        "dates": "2013",
        "url": "http://www.silicon.ac.in/"
    }],

    "onlineCourses": [{
        "title": "Front-End Web Developer Course",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe2"
    }]
};


education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);


        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolName = formattedSchoolName.replace("#", school.url);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajors);
        });

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);
    });

    education.onlineCourses.forEach(function(onlinecourse) {

        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlinecourse.title);
        var formattedOnlineTitle = formattedOnlineTitle.replace("#", onlinecourse.url);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlinecourse.school);

        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlinecourse.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlinecourse.url);
        $(".education-entry:last").append(formattedOnlineURL);

    });

}();

var work = {
    "jobs": [{
        "employer": "Robert Bosch",
        "title": "Internship",
        "location": "Bangalore, KA",
        "dates": "2015",
        "description": "Development of DCN Multimedia Conference Specifier Application and Review. The Specifier Application is specifically used for creation of customizable tender specification for Multimedia Conference Devices. Worked on EOL testing on Gas & Environment sensor boards using LabVIEW & TestLab. Worked on Implementation of S-Golay filter designed for data smoothing in Adulteration Detection of food items. Primarily dealt with Conversion of MATLAB libraries of Spectrometer to Microcontroller Implementable Embedded C language. Development of Coordinator and End-Devices for Lighting and Home Automation using Z-Stack Protocol. "
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });

}();

var projects = {
    "projects": [{
        "title": "1. Design of Z-Stack Automation Profile Using TI's Second Generation System-On-Chip Solution for 2.4 GHz IEEE 802.15.4",
        "dates": "2016",
        "description": "The prototype is specifically developed for Lighting control & other home automation purposes & integrated to Internet of Things(IoT) design.",
        "images": ["img/minified-img/Zigbee.jpg"]
    }, {
        "title": "2. Implementation of High Speed Low Power Encoder for a 5 Bit Flash ADC",
        "dates": "2015",
        "description": "The designing of a thermometer code to binary code is one of the challenging issues in the design of a high speed low power flash ADC. This design proposed an efficient low power encoding scheme intended for a 5GS/s 5-bit flash analog to digital converter.",
        "images": ["img/minified-img/ADC.jpg"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {

            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });

    });
}();


$("#mapDiv").append(googleMap);
