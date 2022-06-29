import React, { useState } from 'react';

const Contact = () => {
  // Declare status element and setup form data state object (as well as the destructure)
  const statusEl = document.getElementById('status');
  const [formData, setFormData] = useState({
    fromName: '',
    from_email: '',
    subjectText: '',
    message: '',
  });
  const { fromName, from_email, subjectText, message } = formData;

  // Handle form submission (check the form data)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fromName == '' ||
      from_email == '' ||
      subjectText == '' ||
      message == ''
    ) {
      statusEl.innerText =
        'Message sent failed, please fill in all required fields.';
      statusEl.style.color = 'red';
    } else {
      statusEl.innerText = 'Message sent successfully.';
      statusEl.style.color = 'green';
    }
    console.log(formData);
  };

  // Capture the form data as it is being inputted
  const storeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" onSubmit={handleSubmit}>
      <form>
        <h1>Let's talk!</h1>
        <div className="form-inner-container">
          <input
            onChange={storeData}
            className="name"
            type="text"
            name="fromName"
            id="fromName"
            placeholder="Full name*"
          />
          <input
            onChange={storeData}
            name="from_email"
            id="from_email"
            className="email"
            type="email"
            placeholder="E-mail*"
          />
          <input
            onChange={storeData}
            name="subjectText"
            id="subjectText"
            className="subject"
            type="text"
            placeholder="Subject*"
          />
          <textarea
            onChange={storeData}
            name="message"
            id="msg"
            placeholder="Message*"
          ></textarea>
        </div>
        <p id="status"></p>
        <button id="sendBtn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
