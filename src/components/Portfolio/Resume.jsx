import React from "react";

const Resume = () => {
  return (
    <React.Fragment>
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
             Here are the reflection of my Educational and career journey if you would like to see than go thorough my resume
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Muhammad Rafiq</h4>
                <p>
                  <em>
                    Innovative and deadline-driven UX Design and MERN Stack developer with 1+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </em>
                </p>
                <ul>
                  <li>Gilgit Baltistan</li>
                  <li>(923) 487-753039</li>
                  <li>sameergg704@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor's of Computer Science</h4>
                <h5>2019 - 2022</h5>
                <p>
                  <em>University of Baltistan, Skardu</em>
                </p>
                <p>
                I have completed my 4 years of Bachelor's degree in Computer Science at University of Baltistan, skardu
                </p>
              </div>
              <div className="resume-item">
                <h4>Intermediate (F.sc/ICS)</h4>
                <h5>2015 - 2018</h5>
                <p>
                  <em>Public School and college Sadpara Road, Skardu</em>
                </p>
                <p>
                I have completed my intermediate schooling at Public School and college Sadpara Road, Skardu
                </p>
              </div>
              <div className="resume-item">
                <h4>Google certified UX Designer</h4>
                <h5>6 months</h5>
                <p>
                  <em>Google Learning Program at Coursera with Google cerficate</em>
                </p>
                <p>
                 I have also completed the UX designer course from Google at Coursera platform. 
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Intermediate level UX/UI Designer</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Rinor Technologies</em>
                </p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    UX desings, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.{" "}
                  </li>
                  <li>
                    Supervise the assessment of all UX design in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $150 - $500
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Junior MERN Stack Developer</h4>
                <h5>2023 -present</h5>
                <p>
                  <em>At Rinor Technologies</em>
                </p>
                <ul>
                  <li>
                    Developed numerous marketing programs (Dashboards,
                    Interprise App, Ecommerce App, Web App Shops, presentations, and much more).
                  </li>
                  <li>
                    Managed up to 5 projects or tasks at a given time while
                    under pressure
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate MERN Stack developer
                  </li>
                  <li>
                    Created 4+ design presentations and proposals a month for
                    clients and account managers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Resume;
