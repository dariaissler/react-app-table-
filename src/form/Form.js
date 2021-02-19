
import React, {useState} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [isFormDisplayed, setIsFormDisplayed] = useState(false)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    
 const submitHandler = (e) => {
     e.preventDefault()
     props.getData({id, firstName, lastName, email, phone})
     setId('')
     setFirstName('')
     setLastName('')
     setEmail('')
     setPhone('')
}
 

    return(
        <div>
{ !isFormDisplayed ? 
                <button onClick={() =>  {setIsFormDisplayed(true)}} className="btn btn-light mb-3 mt-3">Add user</button>
                :
                <form onSubmit={submitHandler} className="needs-validation form mb-3 mt-3" noValidate>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <input value={id} onChange={(event) => {setId(event.target.value)}} type="text" className="form-control" id="validationTooltip01" placeholder="Id" required/>
          <div className="valid-tooltip">
    
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <input value={firstName} onChange={(event) => {setFirstName(event.target.value)}}  type="text" className="form-control" id="validationTooltip02" placeholder="First name" required/>
          <div className="valid-tooltip">
            
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <input value={lastName} onChange={(event) => {setLastName(event.target.value)}}   type="text" className="form-control" id="validationTooltip03" placeholder="Last name" required/>
          <div className="valid-tooltip">
          </div>
        </div>
        
        <div className="col-md-4 mb-3">
          <div className="input-group">
            <input value={email} onChange={(event) => {setEmail(event.target.value)}}  type="text" className="form-control" id="validationTooltipUsername" placeholder="Email" aria-describedby="validationTooltipUsernamePrepend" required/>
            <div className="invalid-tooltip">
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <input value={phone} onChange={(event) => {setPhone(event.target.value)}}  type="text" className="form-control" id="validationTooltip04" placeholder="Phone" required/>
          <div className="valid-tooltip">
          </div>
        </div>

        <div className="col-md-4 mb-3">
        <button className="btn btn-light" type="submit">Submit form</button>
        </div>

      </div>
    
    </form>
}
        </div>
    )
}

