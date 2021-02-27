describe('forms test', () => {
  
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })
  
  
  const url = () => cy.url()
  const a = () => cy.get('a') // different on different pages
  const button = () => cy.get('button') // different on different pages
  
  //  /pizza only inputs
  const select = () => cy.get('select')

  const originalRed = () => cy.get(':nth-child(2) > ``div > :nth-child(1) > input')
  const garlicRanch = () => cy.get(':nth-child(2) > ``div > :nth-child(2) > input')
  const bbqSauce = () => cy.get(':nth-child(2) > ``div > :nth-child(3) > input')
  const spinachAlfredo = () => cy.get(':nth-child(2) > ``div > :nth-child(4) > input')
  
  const pepperoni = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const sausage = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const cbacon = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const italy = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const chicken = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const onions = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const green = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const tomatoes = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const olives = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const garlic = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const hearts = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const cheese = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const pinaple = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')
  const extra = () => cy.get(':nth-child(3) > div > :nth-child(1) > input')

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
    
  })
})