const About = () => {
  return (
    <section className="education">
      <h2 className="visually-hidden">Education</h2>
      <article>
        <h3 className="education__title">Education</h3>
        <ul className="education__list">
          <li className="education__list--item">
            Kyiv Institute of Intellectual Property and Law of the National
            University Odessa Law Academy
            <p className="education__list--text">
              Master's degree of science of law with honors 2018 - 2020
            </p>
          </li>
          <li className="education__list--item">
            National Academy of Internal Affairs of Ukraine
            <p className="education__list--text">
              Bachelor of science of law 2014 - 2018
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3 className="education__title">Additional Education</h3>
        <ul className="education__list">
          <li className="education__list--item">
            Hillel (IT school)
            <p className="education__list--text">
              Front-End Basic (March 2022 - June 2022)
            </p>
          </li>
          <li className="education__list--item">
            Hillel (IT school)
            <p className="education__list--text">
              Front-End Pro (July 2022 - present)
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export { About };
