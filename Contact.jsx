function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">

        <h1>Contact Us</h1>

        <h3>Daily Stores</h3>

        <p>
          Tamil Nadu's No.1 trusted neighbourhood store
          for daily essentials.
        </p>

        <div className="contact-info">
          <h2>Store Information</h2>

          <p>
            📞 Phone: 7708729141
          </p>

          <p>
            📧 Email: support@dailystores.com
          </p>

          <p>
            📍 Daily Stores,
            Hyper Biokem Private Limited,
            Erode,
            Tamil Nadu,
            India
          </p>

          <p>
            🚚 Door Delivery Available
          </p>

          <p>
            🕒 Monday - Sunday
            <br />
            8:00 AM - 9:00 PM
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="5"
            placeholder="Write your message"
          ></textarea>

          <button>
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;