import styles from "./style";

import { Navbar, Hero } from "./components/home";

const App = () => (
  <div className="min-h-screen w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} md:block hidden`}>
      <hr />
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth} pb-12`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paragraph} ${styles.paddingX}`}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Matias Sanchez</a>.
    </div>
  </div>
);

export default App;
