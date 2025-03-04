import '../Component/Navbar.css'

const contact = () => {
    const handleFormSubmit = (formData)=>{
const formInputData = Object.formEntries(formData.entries());
console.log(formInputData);
    }
  return (
    <>
      <div id="form">
         <form action={handleFormSubmit}>

          <h2>Fill Your Details</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
<br />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" required />
<br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
<br />
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Write something here..." required></textarea>
<br />
          <button id='btn' type="submit">Submit</button>
          
        </form>
      </div>
    </>
  )
}

export default contact
