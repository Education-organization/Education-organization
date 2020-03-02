import Page from '../page.js'

export default class About extends Page {
	constructor() {
		super()
        this.html = `
        <div class="headbar">
        <h2>DIMPY VAIDYA (N01406287)</h2>
    </div>
    <div class="headbar">
        <p><strong>Term : </strong>Winter 2020 continued | <strong>Standing:</strong> Good Standing | <strong>Overall Hours : </strong>15 | <strong>Overall GPA :</strong> 76.4</p>
    </div>
    <main class="structure">

        <div class="profile_block">
            <img src="/img/profile.jpg" class="profile_pic">
            <h1>DIMPY </h1><br>
            
            <table style="width:100%">
                <tr>
                    <td><i class="material-icons">mail</i></td>
                    <td>dimpy@gmail.com</td>
                    
                </tr>
                    <tr>
                        <td><i class="material-icons">stay_current_portrait</i></td>
                        <td>+1 437-890-1234</td>
                        
                    </tr>
                    <tr>
                        <td><i class="material-icons">phone</i></td>
                        <td>+1 905-234-1234</td>
                        
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
            <h1>Personal Details</h1><br>
            <strong><h2>General Information</h2></strong>
            <table style="width:100%" > 
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
                        
                        <th>Status</th>
                        <td>Active</td>
                    </tr>
                    <tr>
                        
                        <th>Student Type</th>
                        <td>Continuing</td>
                    </tr>
                    <tr>
                        
                        <th>First Term Attended</th>
                        <td>Fall 2019</td>
                    </tr>
                   
                    
                   
            </table>
            
        </div>`
    }
    
}