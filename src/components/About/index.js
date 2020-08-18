import React from 'react';

const About = () => (
  <div className="about-us">
    <h2> THE FORCE BEHIND kenyaTeachers PLATFORM</h2>
    <p>
      We are a team of young technology enthusiastic who are ready to
      revolutionilize the existing infrastrure in line with the
      millenia vision in technology and seamless access to
      information.
    </p>

    <h2> ABOUT THE PLATFORM</h2>
    <p>
      This site allows its users (teacher)to connect with other
      teachers to share ideas and experience. The Site gives
      access to all available vacancies within the schools and other
      related jobs. Internship opportunities are availed to all
      students in the teaching profession.
    </p>
    <p>
      {' '}
      The Site hosts a Mentorship Program which currently is running
      as an experimental Lab. Also Get access to all available
      Scholarships.
    </p>
    <p>
      The platform utilizes the latest{' '}
      <span className="feature">tt-feature</span>
      algorithm designed to allows teachers looking for transfer
      easily find a match transfer to their area of trransfer.
    </p>
    <cout className="contacts-box">
      <h2 className="contacts"> Contacts</h2>
      <ul className="contacts-links">
        <li>
          <a href="/"> email</a>
        </li>
        <li>
          <a href="/"> facebook</a>
        </li>
        <li>
          <a href="/">twitter </a>
        </li>
      </ul>


    </cout>
  </div>
);
export default About;
