import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="my-3">About MedAI</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button">
              <strong>Doctors at your Footstep</strong>
            </button>
          </h2>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              MedAI is dedicated to providing free medical services to underprivileged communities in remote areas. Leveraging technology, we deliver healthcare solutions directly to households via smartphones. Our platform offers services like a hospital finder, medical report analysis, and community forums. We aim to raise awareness about health issues and empower individuals to take control of their well-being. With our AI bot, users can receive personalized healthcare insights. Join us in democratizing healthcare access for all.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button">
              <strong>Free to use </strong>
            </button>
          </h2>
          <div className="accordion-collapse">
            <div className="accordion-body">
              MedAI is a Cloud notebook and reminder tool that provides features to add, edit and delete notes. NotesDesk is a free open sourced software which is of zero cost. Thus it is suitable for writing text, storing text and ofcourse accessing the notes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div className="accordion-collapse">
            <div className="accordion-body">
              This cloud MedAI software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to store as many notes you would want to which your brain might forget, But do not forget that NoteDesk is there to keep you reminded.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
