"use client";

import React from 'react';

import { Navbar } from '../../components/ui/Navbar';
import { Footer } from '../../components/ui/Footer';

import styles from './page.module.css';

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /app/about_us/inspirations
  return (
    <p> ADD OUR VALUES HERE </p>
  );
};

const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /app/about_us/inspirations
  return (
    <p> ADD OUR CREW HERE </p>
  );
}

const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /app/about_us/inspirations
  return (
    <p> ADD OUR Partners HERE </p>
  );
}


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <Navbar />
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew/>
        </section>

         {/* TASK - React 1 week 1 */}
         {/* Add in the <OurPartners /> component here */}
      </main>
      {/* TASK - React 1 week 1 */}
      {/* Import and use the Footer component here */}
      {/* Footer found in the ui/Footer.js folder */}
    </div>
  );
}

export default Crew;
