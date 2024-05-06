import { outlier, ttc, angularis, tesla } from "../assets/images";
import {
    csharp,
    cplus,
    java,
    python,
    ios,
    android,
    appstore,
    playstore,
    azuredevops,
    figma,
    mpf,
    safestudent,
    openroad,
    car,
    dart,
    contact,
    css,
    flutter,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
   
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
        skill: "expert"
    },
    {
        imageUrl: dart,
        name: "Dart",
        type: "Frontend",
        skill: "expert"
    },
   
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
        skill: "intermediate"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
        skill: "intermediate"
    },
    {
        imageUrl: cplus,
        name: "C Plus",
        type: "Language",
        skill: "intermediate"
    },
    {
        imageUrl: csharp,
        name: "C Sharp",
        type: "Language",
        skill: "intermediate"
    },     
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        skill: "beginner"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        skill: "intermediate"
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        skill: "intermediate"
    },
    {
        imageUrl: azuredevops,
        name: "Azure DevOps",
        type: "Version Control",
        skill: "intermediate"
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        skill: "intermediate"
    }, 
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        skill: "intermediate"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        skill: "intermediate"
    },
    {
        imageUrl: ios,
        name: "iOS",
        type: "Platform",
        skill: "intermediate"
    },
    {
        imageUrl: android,
        name: "Python",
        type: "Language",
        skill: "intermediate"
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
        skill: "beginner"
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        skill: "beginner"
    },
    {
        imageUrl: playstore,
        name: "Google Play Store",
        type: "Frontend",
        skill: "beginner"
    },
    {
        imageUrl: appstore,
        name: "Apple App Store",
        type: "Frontend",
        skill: "beginner"
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        skill: "beginner"
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
        skill: "intermediate"
    },
];

export const experiences = [
    {
        title: "AI Prompt Engineer (Casual)",
        company_name: "Outlier AI",
        icon: outlier,
        iconBg: "#accbe1",
        date: " March 2024 - Current",
        points: [
            "Crafted, reviewed, and optimized prompts utilizing various programming languages, fostering diverse stimuli to fuel AI model comprehension and response generation.",
            "Identify errors in AI-generated responses through meticulous examination, leveraging knowledge of multiple coding languages to correct and optimize the outputs, ensuring precision and coherence in the final results.",
        ],
    },
    {
        title: "Flutter Developer",
        company_name: "Angularis",
        icon: angularis,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developed a cross-platform agricultural contractor field app, OpenRoad, using Dart/Flutter, integrating OpenID Connect for authentication, and implementing offline data sync for intermittent network connections.",
            "Implemented features including mapping functionality with Mapbox, photo management, unit/integration testing, and data transmission via .NET Core web API, while managing app publishing in Apple and Google app stores. ",
        ],
    },
    {
        title: "Flutter Developer",
        company_name: "Think then Create",
        icon: ttc,
        iconBg: "#fbc3bc",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developed the cross-platform app Safe Student using Dart/Flutter, featuring GPS-based movement tracking via beacons and a panic button for foreign students.",
            "Took the design from a previously published app with over 100 users to completely rebuild the app from the ground up using modern systems and architectures.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: openroad,
        theme: 'btn-back-green',
        name: 'OpenRoad',
        description: 'Developed a cross-platform agricultural contractor field app, "OpenRoad," using Dart/Flutter, integrating OpenID Connect for authentication, and implementing offline data sync for intermittent network connections.',
        link: 'https://play.google.com/store/apps/details?id=app.openrd',
    },
    {
        iconUrl: safestudent,
        theme: 'btn-back-red',
        name: 'Safe Student',
        description: 'Developed the cross-platform app, "Safe Student" using Dart/Flutter, featuring GPS-based movement tracking via beacons and a panic button for foreign students.',
        link: 'https://apps.apple.com/au/app/safe-student/id1289564486',
    },
    {
        iconUrl: mpf,
        theme: 'btn-back-blue',
        name: 'My Plastic Footprint',
        description: 'Crafted, reviewed, and optimized prompts utilizing various programming languages, fostering diverse stimuli to fuel AI model comprehension and response generation.',
        link: 'https://github.com/clleboeuf/PlasticReductionProject',
    },
];