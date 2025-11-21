/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sumin Park",
  title: "Hi all, I'm Sumin Park",
  subTitle: emoji(
    "A passionate Data scientist and software developer 🚀 having an experience of building applications with Python."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WUryvfadyZvrzCmHjyFcdLT-x7N4rkWk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suminpark818",
  linkedin: "https://www.linkedin.com/in/sumin-park-a5961438a",
  gmail: "suminpark818@gmail.com",
  Medium: "https://medium.com/@suminpark818",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A CREATIVE DEVELOPER BUILDING INTERACTIVE AI & XR EXPERIENCES",
  skills: [
    emoji("⚡ Develop real-time emotion-aware VTuber and XR interaction systems using Unity and Live2D"),
    emoji("⚡ Integrate multimodal AI models (facial + audio emotion recognition) with Flask/FastAPI servers"),
    emoji("⚡ Design and implement user-centered UI/UX and MR live systems for virtual performances"),
    emoji("⚡ Build AI prototypes with Python, PyTorch, TensorFlow, and deploy them with ONNX"),
    emoji("⚡ Develop interactive AR/VR applications using Unity, AR Foundation, and OpenCV tracking")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "devicon-tensorflow-original"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "devicon-numpy-original"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "devicon-pandas-original"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "devicon-jupyter-plain"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "devicon-unity-original"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "devicon-opencv-plain"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "devicon-fastapi-plain"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "devicon-googlecloud-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "devicon-linux-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIT Rourkela",
      logo: require("./assets/images/NIT_Rourkela_Colour_Logo.svg.png"),
      subHeader: "Bachelor's in Technology",
      duration: "March 2020 - May 2024",
      desc: "Electronics and Intrumentation Engineering",
      descBullets: [
        "CGPA: 8.19/10",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Mother's Public School",
      logo: require("./assets/images/Mother-Public-School-Bapuji-Nagar-Bhubaneswar.png"),
      subHeader: "CBSE",
      duration: "March 2018 - March 2020",
      desc: "11th and 12th grade",
      descBullets: ["12th Percentage: 95.4%"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML Engineer intern",
      company: "SamagraX",
      companylogo: require("./assets/images/samagra.jpg"),
      date: "July 2023 – Present",
      desc: "Responsible to actively contribute to the open-source community, specifically in the field of Text2sql. This involved collaborating with large language models and working extensively with expansive datasets like the spider and wikisql dataset. My goal was to develop an application capable of receiving a natural language query and a database, and generating the appropriate SQL query to produce accurate outputs."
    },
    {
      role: "Data pipeline engineer intern",
      company: "Stryze the german group",
      companylogo: require("./assets/images/stryze.jpg"),
      date: "October 2022 – January 2023",
      desc: "Responsible for making automated APIs that would collect data from various sources like eBay, amazon, local websites etc. Also responsible for testing and deployment of the created APIs and Data transformation of the obtained data using DBT.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "ML Fellow",
      company: "Fellowship.ai",
      companylogo: require("./assets/images/download.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Responsible for making a CLIP model which would take in information about the product or an image of the product, and provide information on all the similar products by competitors available on the market. Streamlit was used to develop the front end and Scrapy was used to scrape competitors’ data."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Logo.png"),
      projectName: "VastuGuru",
      projectDesc: "Generate room ideas that adhere to the principles of vast",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.visualguru.xyz/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Dr.Reddy's Laboratories National Hackathon winner",
      subtitle:
        "Won the nation-wide hackathon organized by Dr.Reddy's Laboratories where more than 1500+ teams participated.",
      image: require("./assets/images/RDY.png"),
      imageAlt: "Dr.Reddy's Logo",
      footerLink: [
        {
          name: "Post",
          url: "https://www.linkedin.com/posts/dr--reddys-laboratories_digitalhealthhackathon-goodhealthcantwait-activity-7019909087953903616-QkQQ/?originalSubdomain=np"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Amazon ML Summer School",
      subtitle:
        "Industry practices and Complex models were learned",
      image: require("./assets/images/amazon.jpg"),
      imageAlt: "Amazon Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Un84z9qRrcGaTAHpFlvM7AZ_cVLj5ygC/view"
        }
      ]
    },

    {
      title: "Deep Learning specialization",
      subtitle: "Completed the DL specialization course provided by Deeplearning.ai",
      image: require("./assets/images/deeplearning.png"),
      imageAlt: "Deeplearning.ai logo",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/c142beef-03ef-4da6-a1c0-948d61dd3786?source=linked_in_profile"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@goyalpramod1729/how-i-made-my-first-contribution-to-c4gt-as-someone-who-has-never-worked-in-open-source-6b6c7b71da3b",
      title: "How I made my first contribution to C4GT as someone who has never worked in open-source",
      description:
        "Learn about steps to contribute to open source for the first time."
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9853618169",
  email_address: "goyalpramod1729@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
