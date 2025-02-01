
"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";
const Grid = () => {

  const content = [
    {
      title: "Brief Introduction",
      description:
        "I’m Shreyas Bharadhwaj S P, a Computer Science Engineering student at Dayananda Sagar College of Engineering. I’m passionate about technology and enjoy working on innovative solutions. I thrive on challenges and am always eager to learn new skills. Outside of tech, I play the electric guitar as a hobby and participate in my band, Tarana, performing at various events.",
      content: (
        <Image
        src="/aboutme.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
      ),
    },
    {
      title: "Technical Skills",
      description:
        "I’m skilled in full-stack development, working with React, Node.js, Express, PostgreSQL, MongoDB, and SQL. During my internships, I built scalable solutions, like an MVP for a music marketplace and optimized routes for waste collection in the Routecraft project. I’m comfortable with both front-end and back-end development.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/technicalskills.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Music and Band Involvement",
      description:
        "Though music is a hobby, I actively play electric guitar and perform with my band, Tarana. We blend semi-classical and rock genres, and I’ve performed at events like TEDx and Under 25 Summit. It’s a creative outlet that I enjoy alongside my tech work.",
      content: (
        <Image
        src="/band.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
      ),
    },
    {
      title: "Future Goals",
      description:
        "My goal is to build a career in software engineering, focusing on AI, system optimization, and real-world problem-solving. I want to work on innovative projects that drive efficiency and growth, continuously expanding my skills in advanced algorithms and scalable systems.",
      content: (
        <Image
        src="/career.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
      ),
    },
  ];
  
  return (
    <div className="p-10">
      <h1 className="heading py-10" id="#about">About me</h1>
      <StickyScroll content={content} />
    </div>
  );
};

export default Grid;