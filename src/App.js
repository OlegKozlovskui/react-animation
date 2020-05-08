import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Modal from './Modal';
import Accordion from './Accordion';
import Nav from './Nav';
import Squares from './Squares';
import Slideshow from './Slideshow';

function App() {
  const [value, setValue] = useState(0);
  const [isToggle, setToggle] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  console.log(isToggle);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <Slideshow />
        <Squares />
        <Accordion />
        <AnimatePresence>
          {isToggle && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: value + "px" }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        <button onClick={() => setToggle(!isToggle)}>Toggle</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Modal isToggle={isToggle} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100
            }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                transition={{ opacity: {
                    duration: 0
                  }
                }}
              >
                <Card
                  drag="x"
                  onDragEnd={(event, info) => {
                    if (info.point.x > 200) {
                      setIsCardActive(false);
                    }
                  }}
                  dragConstraints={{
                    left: 0,
                    right: 0
                  }}
                  style={{
                    x,
                    opacity: isCardActive ? opacity : 0,
                    background: "var(--blue)"
                  }}>
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card
            style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
