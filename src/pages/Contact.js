const Contact = () => {
  return (
    <div className="Contact-container">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
      
      <div className="contact-card">
        <p className="text-gray-700 mb-4 text-lg">
          Feel free to reach out to me via email, phone, or LinkedIn.
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-700 font-medium text-lg">📧 Email: 
            <a href="mailto:fardeenfar18@gmail.com" className="text-blue-600 hover:underline ml-1">
              fardeenfar18@gmail.com
            </a>
          </p>
          <p className="text-gray-700 font-medium text-lg">📞 Mobile: 
            <a href="tel:+91 9894141224" className="text-blue-600 hover:underline ml-1">
              +91 9894141224
            </a>
          </p>
          <p className="text-gray-700 font-medium text-lg">🔗 LinkedIn: 
            <a href="https://linkedin.com/in/fardeen-i-738296243/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
              linkedin.com/in/fardeen-i-738296243/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
