import Styles from '../Styles'
import { Form, Field } from 'react-final-form'
import Card from '../Card'
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from '../cardUtils'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// To display entered value in JSON Format
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default function CreditCard() {
  return(
  <Styles>
    <h1>Dhwani Rural Information Systems Pvt. Ltd.</h1>
    <h2>Credit Card Input Field Component</h2>
    <Form
      onSubmit = {onSubmit}
      render = {({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active
      }) => {
        return (
          <form onSubmit = {handleSubmit}>
            <Card
              number = {values.number || ''}
              name = {values.name || ''}
              expiry = {values.expiry || ''}
              cvc = {values.cvc || ''}
              focused = {active}
          />
          <div>
              {/* Input Field for Card Number */}
          <Field 
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
          </div>
          <div>
              {/* Input Field for Card Holder Name */}
            <Field 
              name = "name"
              component = "input"
              type = "text"
              placeholder = "Name"
            />
          </div>
          <div>
              {/* Input Field for Expiry Month & Year */}
              <Field 
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
              />
              {/* Input Field for CVC */}
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
            <div classname = "buttons">
                 {/* Submit Button (Stores entered value temporary in JSON Format) */}
              <button type  = "submit" disabled = {submitting}>
                Submit
              </button>
               {/* Reset Button (To delete/reset the entered value) */}
              <button type = "button" onClick = {form.reset} disabled = {submitting || pristine}>
                Reset
              </button>
            </div>
          </form>
        )
      }}
    />
  </Styles>
  )
}