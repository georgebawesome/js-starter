// Create a Page class (Parent)
class Page {
  constructor(url) {
    this.url = url
  }

  open() {
    console.log('Opening page', this.url)
  }

  refresh(){
    console.log('refreshing...')
  }
}

// Create a ContactPage (child) class
class ContactPage extends Page{
  constructor(url, title) {
    super(url)
    this.title = title
  }

  open() {
    console.log('Opening page', this.url, 'with title', this.title)
  }

  get loginBtn() {
    console.log('login btn selector')
  }
}


// Create an instance of the Page class
const p1 = new Page('http://automationbro.com')
console.log(p1.url)
p1.open()

const p2 = new Page('http://google.com')
console.log(p2.url)
p2.open()
p2.refresh()



// Create an instance of the ContactPage class
const contact = new ContactPage('http://automationbro.com/contact', 'Contact Page')
contact.open()
contact.loginBtn
