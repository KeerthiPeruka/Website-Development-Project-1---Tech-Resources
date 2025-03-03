import React from "react";
import TechOrgCard from "./TechOrgCard";

//import statements for the organizations logos to display 
import codepathLogo from "../assets/codepath.png";
import girlsWhoCodeLogo from "../assets/girlswhocode.png";
import ai4allLogo from "../assets/ai4all.png";
import mlhLogo from "../assets/mlh.png";
import khanAcademyLogo from "../assets/khanacademy.png";
import courseraLogo from "../assets/coursera.png";
import udemyLogo from "../assets/udemy.png";
import deepLearningLogo from "../assets/deeplearning.png";
import freeCodeCampLogo from "../assets/freecodecamp.png";
import leetCodeLogo from "../assets/leetcode.png";

//tech organizations information with their name, logo, and website link
const techOrgs = [
    { name: "CodePath", logo: codepathLogo, link: "https://www.codepath.org/" },
    { name: "Girls Who Code", logo: girlsWhoCodeLogo, link: "https://girlswhocode.com/" },
    { name: "AI4ALL", logo: ai4allLogo, link: "https://ai-4-all.org/" },
    { name: "Major League Hacking", logo: mlhLogo, link: "https://mlh.io/" },
    { name: "Khan Academy", logo: khanAcademyLogo, link: "https://www.khanacademy.org/computing/computer-programming" },
    { name: "Coursera", logo: courseraLogo, link: "https://www.coursera.org/" },
    { name: "Udemy", logo: udemyLogo, link: "https://www.udemy.com/" },
    { name: "DeepLearning.AI", logo: deepLearningLogo, link: "https://www.deeplearning.ai/" },
    { name: "freeCodeCamp", logo: freeCodeCampLogo, link: "https://www.freecodecamp.org/" },
    { name: "LeetCode", logo: leetCodeLogo, link: "https://leetcode.com/" },
];

//display board with cards containing information about all tech organizations
const TechOrgBoard = () => {
    return (
      <div className="board">
        {techOrgs.map((org, index) => (
          <TechOrgCard key={index} {...org} />
        ))}
      </div>
    );
};

//export the board
export default TechOrgBoard;
