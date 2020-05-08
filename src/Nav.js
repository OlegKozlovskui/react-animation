import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const variants = {
  open: { x: 0 },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.2
    }
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: { y: -20, opacity: 0 },
};

const ulVariants = {
  open: {
    scale: 1.02,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      when: 'afterChildren'
    }
  },
  closed: { },
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;  
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 5px;
    a {
      color: white;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: 0.3s ease border;
      font-size: 20px;
      &:hover {
        border-bottom: 2px solid var(--blue);
      } 
    }
  }
`;

const links = [
  'One', 'Two', 'Three', 'Four'
];

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 500 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <motion.ul variants={ulVariants}>
        {links.map(link => (
          <motion.li variants={liVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  );
};

export default Nav;
