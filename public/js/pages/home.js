import Page from '../page.js'

export default class home extends Page {
	constructor() {
		super()
        this.html = `
        <section class="main">
      <article class="advortizement">
        <b>Summer course Application started <input type="button" name="button" value="Apply"></b>
      </article>
      <article class="aboutUs">
       
          <h2 >About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel cumque, repellat magni et labore soluta veritatis laborum distinctio quasi odit amet harum eaque,
            suscipit ratione temporibus, magnam doloribus voluptatum cum.
          </p>
      </article>
      <article class="courseblog">
        <section>
          <h2>course1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae hic corporis deserunt consequuntur commodi doloribus facilis itaque
            minima laboriosam, maxime facere autem culpa odio laudantium modi, 
            laborum enim odit ipsam!
          </p>
          <input type="button" value="button" >
        </section>
        <section>
          <h2>course2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae hic corporis deserunt consequuntur commodi doloribus facilis itaque
            minima laboriosam, maxime facere autem culpa odio laudantium modi, 
            laborum enim odit ipsam!
          </p>
          <input type="button" value="button" >
        </section>
        <section>
          <h2>course3</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae hic corporis deserunt consequuntur commodi doloribus facilis itaque
            minima laboriosam, maxime facere autem culpa odio laudantium modi, 
            laborum enim odit ipsam!
          </p>
          <input type="button" value="button" >
        </section>
      </article>
      <article class="quote">
        <b>Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. - Thomas Edison (Inventor)</b>
      </article>
    </section>`}
}
