import React from 'react';

const ContactForm =()=>{
    return(
        <div id="cform">
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                  </div>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect2">Select Order Number</label>
                  <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Please write your message here</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-primary mb-2">Submit Now</button>
              </form>
        </div>
    );
}

export default ContactForm;