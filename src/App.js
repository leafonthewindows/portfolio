import React, {useState} from "react";
import Modal from "./components/UI/Modal/Modal"
import NavBar from "./components/UI/Nav/Nav"
import Intro from "./components/Content/Intro/Intro"
import About from "./components/Content/About/About"
import Skills from "./components/Content/Skills/Skills"
import Projects from "./components/Content/Projects/Projects"
import Contact from "./components/Content/Contact/Contact"

import styles from "./App.module.css"

function App() {
  const [modalVis, setModalVis] = useState(false);

  const openModal = () => {
    setModalVis(true);
  };

  const closeModal = () => {
    setModalVis(false);
  };

  return (
      <div className={styles["wrapper"]}>
        {/* if modal state is true, show modal.  Else, don't show modal */}
        {modalVis && (
        <Modal
        onCloseModal={closeModal}
        />)}
        <NavBar
        onOpenModal={openModal}
        />
        <main className={styles["content"]}>
          {/*intro div has id for nav*/}
          <div id="intro"></div>
          <Intro/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
      </div>
  );
}

export default App;
