import React from "react"



export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPass: "",
        isNewsletter: false,
    })

    function handleChange(event) {

      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value
          }
      })
      console.log(formData)
  }
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPass){
          console.log("your password matches, nice")
          console.log(formData)
        }else{
          console.log("stupid nigger, ur password doesnt match nigga")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form">
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="confirmPass"
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        name="isNewsletter"
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button  onClick={handleSubmit} className="form--submit">Sign up</button>
            </form>
        </div>
    )
}
