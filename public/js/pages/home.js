import Page from '../page.js'
export default class About extends Page {
    constructor() {
        super()
        this.html = `
        <section class="main">
      <article class="advortizement">
        <b>Summer course Application started <input type="button" name="button" value="Apply"></b>
      </article>
      
     
      <h1 class="type">Our Programs</h1>
        <div class="course-container">
            <div class="course_block">
            <img src="/img/art.jpg" alt="webDesignImage" class="courseimg">
                <div class="course_content">
                
                    <h2 class="coursenm">The Faculty Of Media&Arts</h2>
                    <p>With programs in design and techonoliges Students are prepated to build their professional career in IT field  in most recent techonology trands.</p>
                    <button class="button">Read More</button><br>
                </div>
            </div>
            <div class="course_block">
            <img src="/img/develop.jpg" alt="ArtsandMedia" class="courseimg">
            <div class="course_content">
                <h2 class="coursenm">Faculty Of Media&Technology</h2>
                <p>Offering a comprehensive mix of media, Arts, Music, video and Performance  programming students train to become skilled professionals as a field of their choice .</p>
                <button class="button">Read More</button><br>
            </div>
        </div>
        <div class="course_block">
        <img src="/img/business1.jpg" alt="accountingImage" class="courseimg">
                <div class="course_content">
                    <h2 class="coursenm">Faculty Of Business</h2>
                   <p>Covering over douzen of business fields, student recive relavent, hands-on education, giving them skills to suceed ,student recive relavent, hands-on education,.</p>
                    <button class="button">Read More</button><br>
                </div>
            </div>
          </div>
      <article class="quote">
        <b>Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. - Thomas Edison (Inventor)</b>
      </article>
    </section>`
    }
}