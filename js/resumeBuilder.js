/*
This is empty on purpose! Your code to build the resume will go here.
 */
 

 var name = "Mohammed Behairy"
 var formattedName = HTMLheaderName.replace("%data%", name);

 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 var imgURL = "images/fry.jpg"
 var formattedBioPic = HTMLbioPic.replace("%data%", imgURL);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").prepend(formattedBioPic);


var bio = {
	"name": "Mohammed Shaaban",
	"role": "Web Developer",
	"img": "../images/fry.jpg",
	"skills": ["Building Startups", "Team Building & Management", "Web Development", "Marketing Strategy"],
	"contacts":{
		"phone": "4152309169",
		"email": "m.shaaban101@gmail.com",
		"linkedin": "https://www.linkedin.com/in/mohammadshaaban",
		"location": "San Jose, California"
	}
}


var workExperience = {
	"work": [
	{
	"employer": "Shopnchef",
	"title": "CEO",
	"location": "CA, USA",
	"date": "From July 2014 to present",
	"description": "Started the company and built the team. Managed the company through different pivots and changes in the idea and business model. Managed and developed the product based on customers feedback. Built relationships with partners (clinics, gyms) and investors."
	},
	{
	"employer": "Eshtery",
	"title": "CEO",
	"location": "Cairo, Egypt",
	"date": "From Oct 2011 to June 2014",
	"description": "Started the company and built the team. Managed the company through different pivots and changes in the idea and business model. Managed and developed the product based on customers feedback. Built relationships with partners (grocery stores and other suppliers) and investors (raised seed fund and series A with total of 1.57M EGP. Managed the company's expansion to Dubai and increased the revenue 120x in 2 years)."
	}
	]
}


var education = {
	"school": [
	{
	"schoolName": "Ain Shams University",
	"Degree": "Bachelor of Commerce",
	"Year": "2006",
	"location": "Cairo, Egypt"
	},
	
	{
	"schoolName": "Udacity",
	"Degree": "Web Development Nanodegree",
	"Year": "2016",
	"location": "San Jose, California"
	}
	]
}

var projects = {
	"softwareProjects": [
	{
	"name": "Onero",
	"type": "Web Project",
	"link": "www.onirotechnologies.com",
	"year": "2016",
	"proimg": "images/fry.jpg"
	},
	{
	"name": "coachsphillips",
	"type": "Web Project",
	"link": "http://coachsphillips.com/",
	"year": "2015",
	"proimg": "images/fry.jpg"
	}
	]
}


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill = 0; skill < bio.skills.length; skill++) {
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  	$("#skills").append(formattedSkill);
  };
};


var displayWork = function(){
 for (job = 0; job < workExperience.work.length; job++) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", workExperience.work[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", workExperience.work[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  var formattedWorkDate = HTMLworkDates.replace("%data%", workExperience.work[job].date);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", workExperience.work[job].description);
 
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedWorkDate);
  $(".work-entry:last").append(formattedWorkDescription);
};
}

displayWork();



projects.display = function(){
  for (var proj = 0; proj < projects.softwareProjects.length; proj++) {
  $("#projects").append(HTMLprojectStart);
  var formattedProjectName = HTMLprojectTitle.replace("%data%", projects.softwareProjects[proj].name);
  var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.softwareProjects[proj].year);
  var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.softwareProjects[proj].type);
  var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.softwareProjects[proj].proimg);
  $(".project-entry:last").append(formattedProjectName);
  $(".project-entry:last").append(formattedprojectDates);
  $(".project-entry:last").append(formattedProjectDescription);
  $(".project-entry:last").append(formattedprojectImage);
  };
}



education.display = function(){
  for (var edu = 0; edu < education.school.length; edu++) {
  $("#education").append(HTMLschoolStart);
  var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[edu].schoolName);
   $(".education-entry:last").append(formattedSchoolName);
  var formattedschoolDdate = HTMLschoolDates.replace("%data%", education.school[edu].Year);
   $(".education-entry:last").append(formattedschoolDdate);
  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.school[edu].location);
   $(".education-entry:last").append(formattedschoolLocation);
  var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.school[edu].Degree);
   $(".education-entry:last").append(formattedschoolMajor);
  };
}

education.display();

projects.display();

$("#mapDiv").append(googleMap);

 $("#main").append(internationalizeButton);

