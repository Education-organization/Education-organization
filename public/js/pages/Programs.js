import Page from '../page.js'

export default class Programs extends Page {
    constructor() {
        super()
        this.html = `
		<header>
		
			<button id="dosomething" style="display:none;">Click me!</button>
    </header>
    <section class="Program-page">
      <div class="program-image"> </div>
      <div class="heading-pro">
        <p>CONTINUING EDUCATION</p>
        <h2>Programs List</h2>
      </div>
    </section>
    <section class="program-list">
      <div class="program-row">
        <div class="program-name-heading"><a href="#">Program</a>
        </div>
        <div class="length-heading">
          <p>Length</p>
        </div>
        <div class="loc-heading">
          <p>Location</p>
        </div>
      </div>
      <ul class="program-row router">
        <li class="program-name"><a href="Programs/webdesign">Web Design and Development</a></li>
        <div class="length"><p>2 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      <ul class="program-row router">
        <li class="program-name"><a href="Programs/wireless">Wireless Telecommunications</a></li>
        <div class="length"><p>4 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      <ul class="program-row router">
        <li class="program-name"><a href="Programs/multimedia">Visual and Digital Arts </a></li>
        <div class="length"><p>4 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      
      <article id="info"></article>
    </section>	`
    }
    registerListeners() {
        console.log('registerListeners() from: Programs')
        document.querySelector('#dosomething').addEventListener('click', event => {
            alert("It worked!")
        })
    }
    subrequests(path) {
        console.log(path) // The path (after the page) as an Array

        const $info = document.getElementById('info')

        // Depending on the first directive in the URL, load up different content (these can also be Page components!)
        if (path[0] == 'webdesign') {
            $info.innerHTML = `<article class="program-desc">
            <div class="program-image1"></div>
            <div class="program-highlight">
              <h2>Web Design And Development</h2>
              <p>CERTIFICATE OF ACHIEVEMENT | CODE: WDD911</p>
            </div>
          
            <div class="about-pro">
            <strong> <h3>About the Program </h3></strong>
            <p>You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career. If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. 
            
           This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.</p>
          </div>
          </article>`

        }
        
        else if (path[0] == 'wireless') {
      
            $info.innerHTML = `<article class="program-desc">
            <div class="program-image2"></div>
            <div class="program-highlight">
              <h2>Wireless Telecommunication</h2>
              <p>CERTIFICATE OF ACHIEVEMENT | CODE: WMC711</p>
            </div>
          
            <div class="about-pro">
            <strong> <h3>About the Program </h3></strong>
            <p>You will  learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.
            You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.
           This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.</p>
          </div>
          </article>`



        } else if (path[0] == 'multimedia') {
            $info.innerHTML = `<article class="program-desc">
            <div class="program-image3"></div>
            <div class="program-highlight">
              <h2>Visual and Digital Arts </h2>
              <p>CERTIFICATE OF ACHIEVEMENT | CODE: MDD811</p>
            </div>
          
            <div class="about-pro">
            <strong> <h3>About the Program </h3></strong>
            <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.
            You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.
           This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.</p>
          </div>
          </article>`
        }

    }
}