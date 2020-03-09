import Page from '../page.js'


const students = [{
    id: 1001,
    profilePicture: `/img/dimpy.jpg`,
    firstName: `Dimpy`,
    lastName: `Vaidya`,
    program: `webdesign`,
    contactNo: `9087654321`,
    email: `dimpy@gmail.com`,
    skills: `HTML,CSS,JavaScript,NodeJS`,
    projects: `Web Store, E-Forum, Financial Notifier`,
    githubURL: `https://github.com/dimpyvaidya`
}, {
    id: 1002,
    profilePicture: `/img/bhawan.jpg`,
    firstName: `Bhawan`,
    lastName: `Sidhu`,
    program: `wireless`,
    contactNo: `1234567890`,
    email: `bhawan@gmail.com`,
    skills: `HTML,CSS,NodeJS`,
    projects: `Web Store, Composite`,
    githubURL: `https://github.com/bhawansidhu`
}, {
    id: 1003,
    profilePicture: `/img/shreya.jpg`,
    firstName: `Shreya`,
    lastName: `Trivedi`,
    program: `multimedia`,
    contactNo: `6789054321`,
    email: `shreya@gmail.com`,
    skills: `HTML,CSS`,
    projects: `Web Store, `,
    githubURL: `https://github.com/shreyatrivedi`
}, {
    id: 1004,
    profilePicture: `/img/user2.png`,
    firstName: `User`,
    lastName: `abc`,
    program: `wireless`,
    contactNo: `2134567890`,
    email: `user@gmail.com`,
    skills: `JavaScript,NodeJS`,
    projects: `Project1 `,
    githubURL: `https://github.com/abc`
}, {
    id: 1005,
    profilePicture: `/img/user6.png`,
    firstName: `User`,
    lastName: `xyz`,
    program: `multimedia`,
    contactNo: `0987654321`,
    email: `xyz@gmail.com`,
    skills: `HTML,CSS,JavaScript,NodeJS`,
    projects: `Project2 `,
    githubURL: `https://github.com/xyz`
}];
export default class Student extends Page {
    constructor() {
        super()
        this.html = `
        <header>
			<button id="dosomething" style="display:none;">Click me!</button>
        </header>
        <h2>Find students by programs</h2>
        <ul class="router">
        <li><a href="student_profile/webdesign">Web Design and Development</a></li>
        <li><a href="student_profile/wireless">Wireless Telecommunication</a></li>
        <li><a href="student_profile/multimedia">Visual and Digital Arts </a></li>    
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
        if (path[0] == 'webdesign') {
            $app.innerHTML = `<h3>Web Design and Development</h3>
    
          <ul class="router">`
            $app.innerHTML += students.filter(p => p.program == 'webdesign').map(returnStudentCardAsHTML).join("\n");

        } else if (path[0] == 'wireless') {
            $app.innerHTML = `<h3>Wireless Telecommunication</h3>
          <ul class="router">
          `
            $app.innerHTML += students.filter(p => p.program == 'wireless').map(returnStudentCardAsHTML).join("\n");

        } else if (path[0] == 'multimedia') {
            $app.innerHTML = `<h3>Visual and Digital Arts </h3>
          <ul class="router">
          `
            $app.innerHTML += students.filter(p => p.program == 'multimedia').map(returnStudentCardAsHTML).join("\n");
        }
    }
}

function returnStudentCardAsHTML(student) {
    return `
    <div class="headbar">
    <h2>${student.firstName} (${student.id})</h2>
</div>
<div class="headbar">
    <p><strong>Term : </strong>Winter 2020 continued | <strong>Standing:</strong> Good Standing | <strong>Overall Hours : </strong>15 | <strong>Overall GPA :</strong> 76.4</p>
</div>
<main class="structure">

    <div class="profile_block">
        <img src="${student.profilePicture}" class="profile_pic">
<br>
        
        <table style="width:100%">
            <tr>
                <td><i class="material-icons">mail</i></td>
                <td>${student.email}</td>
                
            </tr>
                
                <tr>
                    <td><i class="material-icons">phone</i></td>
                    <td>${student.contactNo}</td>
                    
                </tr>
                <tr>
                    <td><i class="material-icons">cake</i></td>
                    <td>June 13, 1994</td>
                    
                </tr>
                
                <tr>
                    <th style="width:1em;"><i class="material-icons">person_pin_circle</i></td>
                    <td>1, Hari villa Street<br>Toronto, Canada<br>L6P4J7</td>
                    
                </tr>
        </table>
    </div>

    <div>
        <h1>Personal & Academic Details</h1><br>
        <strong><h2 >General Information</h2></strong>
        <table style="display: inline-block;  float: left; margin:0 5em; " > 
                <tr > 
                    <th>Level</th>
                    <td>Post-secondary</td>
                </tr>
                <tr>
                    <th>Class</th>
                    <td>Semester 2</td>
                </tr>
                <tr>
                    <th>Residency</th>
                    <td>International</td>
                </tr>
                <tr>
                    <th>Campus</th>
                    <td>North Campus</td>
                </tr>
                <tr>
                    <th>First Term Attended</th>
                    <td>Fall 2019</td>
                </tr>
        </table>
        <table style="display: inline-block;  margin:0 5em;" > 
                <tr > 
                    <th>Language command</th>
                    <td>${student.skills} </td>
                </tr>
                <tr>
                    <th>Projects</th>
                    <td>${student.projects}</td>
                </tr>
                <tr>
                    <th>Github Link</th>
                    <td>${student.githubURL}</td>
                </tr>
                <tr>
                    <th>Admit Term</th>
                    <td>Fall 2019</td>
                </tr>
                
                <tr>
                <th>Status</th>
                <td>Active</td>
            </tr>
        </table><br><br>
        
    </div>
      `
}