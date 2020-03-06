import Page from '../page.js'

export default class Programs extends Page {
    constructor() {
        super()
        this.html = `
		<header>
			<h2>Our Programs</h2>
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
        <li class="program-name"><a href="Programs/arts">Arts and Media</a></li>
        <div class="length"><p>4 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      <ul class="program-row router">
        <li class="program-name"><a href="Programs/accounts">Accounting</a></li>
        <div class="length"><p>4 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      <ul class="program-row router">
        <li class="program-name"><a href="#">Wireless Telecommunications</a></li>
        <div class="length"><p>4 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      <ul class="program-row router">
        <li class="program-name"><a href="#">Multimedia Design and development</a></li>
        <div class="length"><p>3 Semester</p></div>
        <div class="location"><p>North</p></div>
      </ul>
      <article id="info"></article>
    </section>
  
		`
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
            $info.innerHTML = `<h3>Web Design and Development</h3>
            <div class="about-pro">
            <h3>About Web Design and Development Program </h3>
            <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.
            You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.
           This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.</p>
          </div>`
        } else if (path[0] == 'arts') {
            $info.innerHTML = `<h3>Arts and Media</h3>
            <div class="about-pro">
            <h3>About Arts and Media Program </h3>
            <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.
            You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.
           This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.</p>
          </div>`
        } else if (path[0] == 'accounts') {
            $info.innerHTML = `<h3>Accounting</h3>
          <div class="about-pro">
          <h3>About Accounting </h3>
          <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.
          You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.
         This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.</p>
        </div>`
        }

    }
}