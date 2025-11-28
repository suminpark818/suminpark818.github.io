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
    "A passionate AI × Unity developer 🚀 having an experience of building real-time interactive XR and multimodal emotion-aware systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IcDv5JLYmaNq0FkqksMId5ZO4-2DKzI5/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suminpark818",
  linkedin: "https://www.linkedin.com/in/sumin-park-mina",
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
  subTitle:
    "AI + XR ENGINEER BUILDING REAL-TIME INTERACTIVE EXPERIENCES IN UNITY & MULTIMODAL AI",
  skills: [
    emoji("⚡ Build real-time emotion-aware VTuber systems using Unity, Live2D Cubism, OpenCV, and ONNX models"),
    emoji("⚡ Develop multimodal AI (facial + audio + motion) pipelines with PyTorch, TensorFlow, FastAPI, and WebSocket"),
    emoji("⚡ Create AR/VR/MR applications using Unity, AR Foundation, ARKit/ARCore, and VRM avatars"),
    emoji("⚡ Design AI-driven UX systems for MR concerts, interactive storytelling, and spatial user experiences"),
    emoji("⚡ Prototype and deploy ML models (vision/audio/NLP) with ONNX, TorchAudio, Flask/FastAPI servers")
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
      skillName: "C++", fontAwesomeClassname: "devicon-cplusplus-plain" 
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "devicon-unity-original"
    },
    { 
      skillName: "PyTorch", fontAwesomeClassname: "devicon-pytorch-original" 
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
      skillName: "Flask", fontAwesomeClassname: "devicon-flask-original" 
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
      schoolName: "Duksung Women’s University",
      logo: require("./assets/images/duksung.png"),
      subHeader: "Bachelor's in Technology",
      duration: "March 2022 - Feb 2026",
      desc: "IT Media Engineering",
//      descBullets: [
//        "CGPA: 8.19/10",
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity / XR Development",
      progressPercentage: "85%"
    },
    {
      Stack: "AI / Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Real-Time Interactive Systems",
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
      role: "3D Animation Freelance Artist",
      company: "Korea University Competition",
        //fontAwesomeClassname: "blender-git-plain"
      companylogo: require("./assets/images/koreaUni.png"), // 로고 교체 필요 
      date: "Dec 2024 – Jan 2025",
      desc:
        "Created 3D visualizations of electrical engineering concepts in Blender. Produced and edited presentation videos using After Effects for clarity and impact."
    },
    {
      role: "Metaverse Research Assistant",
      company: "Dobong District Office",
        //fontAwesomeClassname: "zep-git-plain"
      companylogo: require("./assets/images/dobong.png"), // 로고 교체 필요
      date: "Sep 2023 – Dec 2023",
      desc:
        "Co-developed a Zep/Zepeto metaverse reconstruction of Dobong Old Trail. Conducted local research and built interactive environments showcased in a public exhibition."
    }
//    {
//      role: "ML Engineer intern",
//      company: "SamagraX",
//      companylogo: require("./assets/images/samagra.jpg"),
//      date: "July 2023 – Present",
//      desc: "Responsible to actively contribute to the open-source community, specifically in the field of Text2sql. This involved collaborating with large language models and working extensively with expansive datasets like the spider and wikisql dataset. My goal was to develop an application capable of receiving a natural language query and a database, and generating the appropriate SQL query to produce accurate outputs."
//    },
//    {
//      role: "Data pipeline engineer intern",
//      company: "Stryze the german group",
//      companylogo: require("./assets/images/stryze.jpg"),
//      date: "October 2022 – January 2023",
//      desc: "Responsible for making automated APIs that would collect data from various sources like eBay, amazon, local websites etc. Also responsible for testing and deployment of the created APIs and Data transformation of the obtained data using DBT.",
//      // descBullets: [
//      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//      // ]
//    },
//    {
//      role: "ML Fellow",
//      company: "Fellowship.ai",
//      companylogo: require("./assets/images/download.png"),
//      date: "Jan 2015 – Sep 2015",
//      desc: "Responsible for making a CLIP model which would take in information about the product or an image of the product, and provide information on all the similar products by competitors available on the market. Streamlit was used to develop the front end and Scrapy was used to scrape competitors’ data."
//    }
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
  title: "Major Projects",
  subtitle: "AI × XR SYSTEMS I BUILT OR LED",
  projects: [
    {
      projectName: "Real-Time Emotion-Aware VTuber System",
      projectDesc:
        "Unity + Live2D + ONNX multimodal emotion models integrated into a real-time character performance system for Graduation Exhibition.",
      footerLink: [
                  {
          name: "Visit Website",
          url: "https://github.com/suminpark818/Multimodal-Emotion-Recognition-AI"
       }]
    },
    {
      projectName: "AR Interior Design App (iOS)",
      projectDesc:
        "Unity AR Foundation + ARKit/ARCore system for realistic furniture placement, plane detection, anchoring, and manipulation.",
              footerLink: [{name: "Visit Website",
          url: "https://github.com/suminpark818/AR-Interior-Design-App"
       }]

    },
    {
      projectName: "MR Live – Mixed Reality Concert System",
      projectDesc:
        "A Mixed Reality concert pipeline allowing real-time virtual performances in interactive 3D stage environments.",              footerLink: [{name: "Visit Website",
          url: "https://medium.com/@suminpark818/building-a-real-time-emotion-aware-mr-prototype-using-unity-and-ai-b26ee2b20afd"
       }]
    },
    {
      projectName: "Real-Time Speaker-Differentiated Captioning System",
      projectDesc:
        "Integrated Whisper + pyannote.audio with FastAPI WebSocket streaming to provide live speaker-labeled captions.",
       footerLink: [{name: "Visit Website",
          url: "https://github.com/suminpark818/Real-time-Speech-to-Text-Speaker-Diarization-Prototype"
       }]
    },
    {
      projectName: "Conversational AI Game Prototype",
      projectDesc:
        "Unity multiplayer prototype that integrates conversational AI for real-time interactive dialogue and user engagement.",       footerLink: [{name: "Visit Website",
          url: "https://suminpark818.medium.com/creating-a-local-conversational-npc-in-unity-with-llama-3-ollama-a453e94609d2"
       }]
 
    },
    {
      projectName: "Real-Time Hand Gesture Controller Using Mediapipe & Keras",
      projectDesc:
        "A lightweight machine-learning powered interface for gesture recognition in the browser.",
        footerLink: [{name: "Visit Website",
          url: "https://suminpark818.medium.com/real-time-hand-gesture-controller-using-mediapipe-keras-21760dd2d12b"
       }]

    },
    {
      projectName: "VR Rhythm Game Mentoring Project",
      projectDesc:
        "Led mentoring program and supervised Unity VR game development, supporting technical structure and monthly challenges.",
      footerLink: []
    }
  ],
  display: true
};

//const bigProjects = {
//  title: "Projects",
//  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//  projects: [
//    {
//      image: require("./assets/images/Logo.png"),
//      projectName: "VastuGuru",
//      projectDesc: "Generate room ideas that adhere to the principles of vast",
//      footerLink: [
//        {
//          name: "Visit Website",
//          url: "https://www.visualguru.xyz/"
//        }
//        //  you can add extra buttons here.
//      ]
//    },
//    // {
//    //   image: require("./assets/images/nextuLogo.webp"),
//    //   projectName: "Nextu",
//    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//    //   footerLink: [
//    //     {
//    //       name: "Visit Website",
//    //       url: "http://nextu.se/"
//    //     }
//    //   ]
//    // }
//  ],
//  display: true // Set false to hide this section, defaults to true
//};

// Achievement Section
// Include certificates, talks etc

//const achievementSection = {
//  title: emoji("Achievements And Certifications 🏆 "),
//  subtitle:
//    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
//
//  achievementsCards: [
//    {
//      title: "Dr.Reddy's Laboratories National Hackathon winner",
//      subtitle:
//        "Won the nation-wide hackathon organized by Dr.Reddy's Laboratories where more than 1500+ teams participated.",
//      image: require("./assets/images/RDY.png"),
//      imageAlt: "Dr.Reddy's Logo",
//      footerLink: [
//        {
//          name: "Post",
//          url: "https://www.linkedin.com/posts/dr--reddys-laboratories_digitalhealthhackathon-goodhealthcantwait-activity-7019909087953903616-QkQQ/?originalSubdomain=np"
//        },
//        // {
//        //   name: "Award Letter",
//        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//        // },
//        // {
//        //   name: "Google Code-in Blog",
//        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//        // }
//      ]
//    },
//    {
//      title: "Amazon ML Summer School",
//      subtitle:
//        "Industry practices and Complex models were learned",
//      image: require("./assets/images/amazon.jpg"),
//      imageAlt: "Amazon Logo",
//      footerLink: [
//        {
//          name: "Certification",
//          url: "https://drive.google.com/file/d/1Un84z9qRrcGaTAHpFlvM7AZ_cVLj5ygC/view"
//        }
//      ]
//    },
//
//    {
//      title: "Deep Learning specialization",
//      subtitle: "Completed the DL specialization course provided by Deeplearning.ai",
//      image: require("./assets/images/deeplearning.png"),
//      imageAlt: "Deeplearning.ai logo",
//      footerLink: [
//        {name: "Certification", url: "https://www.credly.com/badges/c142beef-03ef-4da6-a1c0-948d61dd3786?source=linked_in_profile"},
//        // {
//        //   name: "Final Project",
//        //   url: "https://pakistan-olx-1.firebaseapp.com/"
//        // }
//      ]
//    }
//  ],
//  display: true // Set false to hide this section, defaults to true
//};
const achievementSection = {
  title: emoji("Achievements & Awards 🏆"),
  subtitle: "Highlighted recognitions from competitions and academic projects.",

  achievementsCards: [
    {
      title: "Challenge! K-Startup Student League Finalist",
      subtitle: "Selected among U300+ teams for the final round.",
      image: require("./assets/images/award-symbol.png"),
      imageAlt: "Award",
        footerLink: []
    },
    {
      title: "University Data Innovation Contest Finalist",
      subtitle: "Recognized for innovative data-driven prototype design.",
      image: require("./assets/images/award-symbol.png"),
      imageAlt: "Award",
        footerLink: []
    },
    {
      title: "University Hackathon Finalist",
      subtitle: "Awarded for creative technical implementation in a team project.",
      image: require("./assets/images/award-symbol.png"),
      imageAlt: "Award",
        footerLink: []
    }
  ],
  display: true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about AI, XR, and real-time interaction systems.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@suminpark818/how-mr-technology-redefines-the-vtuber-experience-5b82bd38e1cc",
      title: "How MR Technology Redefines the VTuber Experience",
      description:
        "Exploring how immersive mixed reality performances are changing the landscape of virtual entertainment."
    },
    {
      url: "https://medium.com/@suminpark818/building-a-real-time-emotion-aware-mr-prototype-using-unity-and-ai-b26ee2b20afd",
      title: "Building a Real-Time Emotion-Aware MR Prototype Using Unity and AI",
      description:
        "Bridging research and implementation through real-time multimodal interaction."
    },    
    {
      url: "https://medium.com/@suminpark818/real-time-hand-gesture-controller-using-mediapipe-keras-21760dd2d12b",
      title: "Real-Time Hand Gesture Controller Using Mediapipe & Keras",
      description:
        "A lightweight machine-learning powered interface for gesture recognition in the browser."
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
  number: "+82-1027238239",
  email_address: "suminpark818@gmail.com"
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
