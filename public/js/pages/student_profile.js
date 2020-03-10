import Page from '../page.js'


const students = [{
    id: `N01406287`,
    profilePicture: `/img/dimpy.jpg`,
    firstName: `Dimpy`,
    lastName: `Vaidya`,
    program: `webdesign`,
    contactNo: `9087654321`,
    email: `dimpy@gmail.com`,
    skills: `HTML,CSS,JavaScript,NodeJS`,
    projects: `Web Store, E-Forum, Financial Notifier`,
    standing: `Good`,
    gpa: `76.4`,
    githubURL: `https://github.com/dimpyvaidya`,
    category: `all`
}, {
    id: `N01372787`,
    profilePicture: `/img/bhawan.jpg`,
    firstName: `Bhawan`,
    lastName: `Sidhu`,
    program: `wireless`,
    contactNo: `1234567890`,
    email: `bhawan@gmail.com`,
    skills: `HTML,CSS,NodeJS`,
    projects: `Web Store, Composite`,
    standing: `Good`,
    gpa: `79`,
    githubURL: `https://github.com/bhawansidhu`,
    category: `all`
}, {
    id: `N01362595`,
    profilePicture: `/img/shreya.jpg`,
    firstName: `Shreya`,
    lastName: `Trivedi`,
    program: `multimedia`,
    contactNo: `6789054321`,
    email: `shreya@gmail.com`,
    skills: `HTML,CSS`,
    projects: `Web Store`,
    standing: `Good`,
    gpa: `65`,
    githubURL: `https://github.com/shreyatrivedi`,
    category: `all`
}, {
    id: `N0123456`,
    profilePicture: `/img/user2.png`,
    firstName: `User`,
    lastName: `Name`,
    program: `wireless`,
    contactNo: `2134567890`,
    email: `user@gmail.com`,
    skills: `JavaScript,NodeJS`,
    projects: `Project1 `,
    standing: `Poor`,
    gpa: `45`,
    githubURL: `https://github.com/abc`,
    category: `all`
}, {
    id: `N9087654`,
    profilePicture: `/img/profile.jpg`,
    firstName: `Daizy`,
    lastName: `Parekh`,
    program: `multimedia`,
    contactNo: `0987654321`,
    email: `xyz@gmail.com`,
    skills: `HTML,CSS,JavaScript,NodeJS`,
    projects: `Project2 `,
    standing: `Moderate`,
    gpa: `60`,
    githubURL: `https://github.com/xyz`,
    category: `all`
}, {
    id: `N9087654`,
    profilePicture: `/img/user5.png`,
    firstName: `Darshil`,
    lastName: `Sharma`,
    program: `webdesign`,
    contactNo: `0987654321`,
    email: `xyz@gmail.com`,
    skills: `HTML,CSS,JavaScript,NodeJS`,
    projects: `Project2 `,
    standing: `Very Good`,
    gpa: `95`,
    githubURL: `https://github.com/xyz`,
    category: `all`
}];
export default class Student extends Page {
    constructor() {
        super()
        this.html = `
        <header>
			<button id="dosomething" style="display:none;">Click me!</button>
        </header>
        <h2 style="text-align:center;">Find students by programs</h2>
        
        <ul class="programs router">
        <li class="program-name"><a href="student_profile/all">All Students</a></li>

        <li class="program-name"><a href="student_profile/webdesign">Web Design and Development</a></li>
            <li class="program-name"><a href="student_profile/wireless">Wireless Telecommunications</a></li>
            <li class="program-name"><a href="student_profile/multimedia">Visual and Digital Arts </a></li>
      </ul>
        <article id="app"></article>`
    }
    registerListeners() {
        console.log('registerListeners() from: student_profile')
        document.querySelector('#dosomething').addEventListener('click', event => {
            alert("It worked!")
        })
    }
    subrequests(path) {
        console.log(path)
        const $app = document.getElementById('app')

        if (path[0] == 'all') {
            $app.innerHTML = `<h3 style="text-align:center;"></h3>
    
          <ul class="router">`
            $app.innerHTML += students.filter(p => p.category == 'all').map(returnStudentCardAsHTML).join("\n");

        } else if (path[0] == 'webdesign') {
            $app.innerHTML = `<h3 style="text-align:center;">Students from Web Design and Development Program</h3>
          <ul class="router">
          `
            $app.innerHTML += students.filter(p => p.program == 'webdesign').map(returnStudentCardAsHTML).join("\n");

        } else if (path[0] == 'wireless') {
            $app.innerHTML = `<h3 style="text-align:center;"> Students from Wireless Telecommunication Program</h3>
          <ul class="router">
          `
            $app.innerHTML += students.filter(p => p.program == 'wireless').map(returnStudentCardAsHTML).join("\n");

        } else if (path[0] == 'multimedia') {
            $app.innerHTML = `<h3 style="text-align:center;">Students from Visual and Digital Arts Program</h3>
          <ul class="router">
          `
            $app.innerHTML += students.filter(p => p.program == 'multimedia').map(returnStudentCardAsHTML).join("\n");
        }

    }
}


function returnStudentCardAsHTML(student) {
    return `
    <article class="format">
    <div class="headbar">
    <h2>${student.firstName} ${student.lastName} (${student.id})</h2>
    <p><strong>Term : </strong>Winter 2020 continued | <strong>Standing:</strong> ${student.standing} | <strong>Overall Hours : </strong>15 | <strong>Overall GPA :</strong> ${student.gpa}</p>
</div>
<main class="structure">

    <div class="profile_block">
        <img src="${student.profilePicture}" class="profile_pic">
<br>
        
        <table style="width:100%">
            <tr>
                <td style="padding-left:3em;"><i class="material-icons">mail</i></td>
                <td><p>${student.email}</p></td>
                
            </tr>
                
                <tr>
                    <td style="padding-left:3em;"><i class="material-icons">phone</i></td>
                    <td><p>${student.contactNo}</p></td>
                    
                </tr>
                <tr>
                    <td style="padding-left:3em;" ><i class="material-icons">cake</i></td>
                    <td><p>June 13, 1994</p></td>
                    
                </tr>
                
               
        </table>
    </div>

    <div>
        <h1>Personal & Academic Details</h1><br>
        <table style="display: inline-block;  float: left; margin:0 5em; " > 
                <tr > 
                    <th>Level</th>
                    <td><p>Post-secondary</p></td>
                </tr>
                <tr>
                    <th>Class</th>
                    <td><p>Semester 2</p></td>
                </tr>
                <tr>
                    <th>Residency</th>
                    <td><p>International</p></td>
                </tr>
                <tr>
                    <th>Campus</th>
                    <td><p>North Campus</p></td>
                </tr>
                <tr>
                    <th>First Term Attended</th>
                    <td><p>Fall 2019</p></td>
                </tr>
        </table>
        <table style="display: inline-block;  margin:0 5em;" > 
                <tr > 
                    <th>Language command</th>
                    <td><p>${student.skills} </p></td>
                </tr>
                <tr>
                    <th>Projects</th>
                    <td><p>${student.projects}</p></td>
                </tr>
                <tr>
                    <th>Github Link</th>
                    <td><p>${student.githubURL}</p></td>
                </tr>
                <tr>
                    <th>Admit Term</th>
                    <td><p>Fall 2019</p></td>
                </tr>
                
                <tr>
                <th>Status</th>
                <td><p>Active</p></td>
            </tr>
        </table><br><br>
        
    </div>
    </article>
      `
}