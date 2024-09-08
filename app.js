// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way
        // Get user input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('education').value;
        var school = document.getElementById('school').value;
        var year = document.getElementById('year').value;
        var skills = document.getElementById('skills').value;
        var work = document.getElementById('work').value;
        // Populate resume with user input
        var personalInfo = document.getElementById('personal-info');
        var educationInfo = document.getElementById('education-info');
        var skillsInfo = document.getElementById('skills-info');
        var workInfo = document.getElementById('work-info');
        personalInfo.innerHTML = "\n            <h2>Personal Information</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact Number:</strong> ").concat(contact, "</p>\n        ");
        educationInfo.innerHTML = "\n            <h2>Education</h2>\n            <p><strong>Degree:</strong> ".concat(education, "</p>\n            <p><strong>School/College Name:</strong> ").concat(school, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(year, "</p>\n        ");
        skillsInfo.innerHTML = "\n            <h2>Skills</h2>\n            <p>".concat(skills, "</p>\n        ");
        workInfo.innerHTML = "\n            <h2>Work Experience</h2>\n            <p>".concat(work, "</p>\n        ");
        // Show the generated resume
        resumeDisplay.style.display = 'block';
    });
});
