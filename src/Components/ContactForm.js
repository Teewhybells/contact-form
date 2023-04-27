import React, {useRef} from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter your name' required />
            <input type='email' placeholder='Enter your email' required/>
            <input type='text' placeholder='Enter your subject' />
            <textarea></textarea>
            <button>Contact us</button>

        </form>
    </div>
  )
}

export default ContactForm