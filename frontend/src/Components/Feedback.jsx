import React from 'react';
import './Feedback.css';
class Feedback extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h2>CONTACT ME</h2>
        <form action="https://formsubmit.co/8f8fd67ec1a4e2aad1bf22fcebd43b23" method="POST">
          <input type="hidden" name="_next" value="https://graphworld.netlify.app/thankyou.html" />
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="Email" id="email" placeholder="email@domain.tld" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3.3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>Send
            </button>
            <p>You can also send me an email directly by clicking  <a href="mailto:sportdev.ksj8g@simplelogin.com">here!</a>.</p>

          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;
