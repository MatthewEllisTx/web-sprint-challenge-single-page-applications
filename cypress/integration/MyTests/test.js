describe('forms test', () => {
  
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })
  
  
  const url = () => cy.url()
  const a = () => cy.get('a') // different on different pages
  const button = () => cy.get('button') // different on different pages
  
  //  /pizza only inputs
  const select = () => cy.get('select')

  const originalRed = () => cy.get(':nth-child(2) > div > :nth-child(1) > input')
  const garlicRanch = () => cy.get(':nth-child(2) > div > :nth-child(2) > input')
  const bbqSauce = () => cy.get(':nth-child(2) > div > :nth-child(3) > input')
  const spinachAlfredo = () => cy.get(':nth-child(2) > div > :nth-child(4) > input')
  
  const pepperoni = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const sausage = () => cy.get(':nth-child(3) > div > :nth-child(2) > input')
  const cbacon = () => cy.get(':nth-child(3) > div > :nth-child(3) > input')
  const italy = () => cy.get(':nth-child(3) > div > :nth-child(4) > input')
  const chicken = () => cy.get(':nth-child(3) > div > :nth-child(5) > input')
  const onions = () => cy.get(':nth-child(3) > div > :nth-child(6) > input')
  const green = () => cy.get(':nth-child(3) > div > :nth-child(7) > input')
  const tomatoes = () => cy.get(':nth-child(3) > div > :nth-child(8) > input')
  const olives = () => cy.get(':nth-child(3) > div > :nth-child(9) > input')
  const garlic = () => cy.get(':nth-child(3) > div > :nth-child(10) > input')
  const hearts = () => cy.get(':nth-child(3) > div > :nth-child(11) > input')
  const cheese = () => cy.get(':nth-child(3) > div > :nth-child(12) > input')
  const pinaple = () => cy.get(':nth-child(3) > div > :nth-child(13) > input')
  const extra = () => cy.get(':nth-child(3) > div > :nth-child(14) > input')

  const gluten = () => cy.get(':nth-child(4) > div > label > input')

  const quantity = () => cy.get('form > :nth-child(5) > input')

  const details = () => cy.get('form > :nth-child(6) > input')


  // pizza ready to confirm details
  const size = () => cy.get('#root > :nth-child(2) > div > :nth-child(2)')
  const sauce = () => cy.get('div > :nth-child(3)')
  const toppings = () => cy.get('div > :nth-child(4)')
  const gluttenFreeCheck = () => cy.get('div > :nth-child(5)')
  const instructions = () => cy.get('div > :nth-child(6)')
  const quantityCheck = () => cy.get('div > :nth-child(7)')





  it('check present buttons on / and /pizza', () => {
    a().should('exist')
      .click()
    
    url().should('contain', 'pizza')

    select().should('exist')

    originalRed().should('exist')
    garlicRanch().should('exist')
    bbqSauce().should('exist')
    spinachAlfredo().should('exist')

    pepperoni().should('exist')
    sausage().should('exist')
    cbacon().should('exist')
    italy().should('exist')
    chicken().should('exist')
    onions().should('exist')
    green().should('exist')
    tomatoes().should('exist')
    olives().should('exist')
    garlic().should('exist')
    hearts().should('exist')
    cheese().should('exist')
    pinaple().should('exist')
    extra().should('exist')

    gluten().should('exist')

    quantity().should('exist')

    details().should('exist')

    button().should('exist')
  })

  it('check buttons work', () => {
    a().should('exist')
      .click()
    
    url().should('contain', 'pizza')

    select().select('Small')

    originalRed().click()
    garlicRanch().click()
    bbqSauce().click()
    spinachAlfredo().click()

    pepperoni().click()
    sausage().click()
    cbacon().click()
    italy().click()
    chicken().click()
    onions().click()
    green().click()
    tomatoes().click()
    olives().click()
    garlic().click()
    hearts().click()
    cheese().click()
    pinaple().click()
    extra().click()

    gluten().click()

    //quantity().click()

    //details().type("Carbonisé s'il vous plaî")

    button().should('exist')
  })
})