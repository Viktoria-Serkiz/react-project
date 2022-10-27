import { About } from "./About";

const Main = () => {
  return (
    <section className="about">
      <h2 className="visually-hidden">About me</h2>
      <article className="about__skills">
        <h3 className="about__skills--article">Tech skills</h3>
        <ul className="about__skills--list">
          <li className="about__skills--item">HTML5 / CSS / SCSS / SASS</li>
          <li className="about__skills--item">Java Script</li>
          <li className="about__skills--item">Responsive / Adaptive design</li>
          <li className="about__skills--item">GIT / GitHub</li>
          <li className="about__skills--item">Bootstrap</li>
          <li className="about__skills--item">Gulp, Webpack</li>
          <li className="about__skills--item">DOM, AJAX</li>
        </ul>
      </article>
      <article className="about__skills">
        <h3 className="about__skills--article">soft skills</h3>
        <ul className="about__skills--list">
          <li className="about__skills--item">Self-motivated</li>
          <li className="about__skills--item">Not conflicted</li>
          <li className="about__skills--item">Creative</li>
          <li className="about__skills--item">Calm</li>
          <li className="about__skills--item">Eager to learn</li>
        </ul>
      </article>
      <article className="about__skills">
        <h3 className="about__skills--article">language skills</h3>
        <ul className="about__skills--list">
          <li className="about__skills--item">English - Intermediate</li>
          <li className="about__skills--item">Ukrainian - Native</li>
        </ul>
      </article>
      <About></About>
    </section>
  );
};

export { Main };
