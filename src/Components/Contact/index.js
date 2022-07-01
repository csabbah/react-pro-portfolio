import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
    document.getElementById('email-status').textContent = '';
    e.preventDefault();
    if (
      fromName == '' ||
      from_email == '' ||
      subjectText == '' ||
      message == ''
    ) {
      statusEl.innerText =
        'Message sent failed, please fill in all required fields.';
      statusEl.style.color = '#d16262';
    } else {
      if (validateEmail(from_email)) {
        statusEl.innerText = 'Message sent successfully.';
        statusEl.style.color = '#1d3557';
        setTimeout(() => {
          statusEl.innerText = '';
        }, 1500);
      } else {
        statusEl.innerText = 'Invalid email format, please update.';
        statusEl.style.color = '#d16262';
      }
    }
    console.log(formData);
  };

  // Capture the form data as it is being inputted
  const storeData = (e) => {
    document.getElementById('status').textContent = '';
    document.getElementById('email-status').textContent = '';

    if (e.target.name == 'from_email') {
      const emailStatusEl = document.getElementById('email-status');

      if (e.target.value == '') {
        emailStatusEl.innerText = '';
      } else {
        if (validateEmail(e.target.value)) {
          emailStatusEl.innerText = 'Valid Email.';
          emailStatusEl.style.color = '#1d3557';
        } else {
          emailStatusEl.innerText = 'Invalid email format, please update.';
          emailStatusEl.style.color = '#d16262';
        }
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log(formData);
  };

  const updateEl = (e, errorPlacholder, defaultPlaceholder, id) => {
    if (e.target.value == '') {
      document.getElementById(id).placeholder = errorPlacholder;
      document.getElementById(id).style.border = '2px solid red';
    } else {
      document.getElementById(id).placeholder = defaultPlaceholder;
      document.getElementById(id).style.border = '2px solid transparent';
    }
  };
  const checkForm = (e) => {
    if (e.target.name == 'fromName') {
      updateEl(e, 'Full name  Required*', 'Full name*', 'fromName');
    }
    if (e.target.name == 'from_email') {
      updateEl(e, 'E-mail  Required*', 'E-mail*', 'from_email');
    }
    if (e.target.name == 'subjectText') {
      updateEl(e, 'Subject  Required*', 'Subject*', 'subjectText');
    }
    if (e.target.name == 'message') {
      updateEl(e, 'Message  Required*', 'Message*', 'msg');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <h1 id="main-section-header">Contact</h1>
      <hr id="main-section-hr" />
      <div className="form-inner-container">
        <input
          onBlur={(e) => checkForm(e)}
          onChange={storeData}
          className="name"
          type="text"
          name="fromName"
          id="fromName"
          placeholder="Full name*"
        />
        <input
          onBlur={(e) => checkForm(e)}
          onChange={storeData}
          name="from_email"
          id="from_email"
          className="email"
          type="email"
          placeholder="E-mail*"
        />
        <input
          onBlur={(e) => checkForm(e)}
          onChange={storeData}
          name="subjectText"
          id="subjectText"
          className="subject"
          type="text"
          placeholder="Subject*"
        />
        <textarea
          onBlur={(e) => checkForm(e)}
          onChange={storeData}
          name="message"
          id="msg"
          placeholder="Message*"
        ></textarea>
      </div>
      <p id="email-status"></p>
      <p id="status"></p>
      <button id="sendBtn">Send</button>
    </form>
  );
};

export default Contact;
