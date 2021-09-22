import sevenupLogo from "./assets/7up-logo.webp";
import sevenupMockup from "./assets/sevenup-mockup.png";
import foodrLogo from './assets/Foodr.svg'
import foodrMockup from './assets/foodr-mockup.png'
import mcLogo from './assets/mc-logo-white.svg'
import personalizationMockup from "./assets/mc-personalization-mockup.png"

const projectData = [
    {
        id: 1,
        mobile: false,
        logo: sevenupLogo,
        name: 'sevenup-clone',
        title: '7up Clone',
        technologies: ['Gatsby', 'Sanity.io', 'Netlify', 'Sass'],
        description: "A clone of 7up.com. Result is a faster, smoother, more efficient website. Google Page Insight scored the clone a 91 compared to the original's 43 points. Boom roasted.",
        // description: '7up.com is a very intuitive website; however, one thing that is very apparent is its slow speed. The inefficiency of the site affects the experience with delayed page loads and choppy animations, so this project aimed to not only re-create the design and experience of the website, but also make it more efficient. To quantify the results, I plugged both of the official 7up site and this project into Google Page Insights, and unsurprisingly, this project outperformed the official site by 48 points (43 to 91).',
        links: {
            github: 'https://github.com/jayamano57/7up-clone',
            website: 'https://7up-clone-jay.netlify.app/',
        },
        mockup: sevenupMockup,
        bgColor: '#019e5f'
    },
    {
        id: 2,
        mobile: true,
        logo: foodrLogo,
        name: 'foodr',
        title: 'Foodr',
        technologies: ['React Native', 'Expo', 'Google Firebase'],
        description: "Tinder, but for food. Swipe between images pulled from Yelp API to figure out what's on the menu for the night.",
        // description: '7up.com is a very intuitive website; however, one thing that is very apparent is its slow speed. The inefficiency of the site affects the experience with delayed page loads and choppy animations, so this project aimed to not only re-create the design and experience of the website, but also make it more efficient. To quantify the results, I plugged both of the official 7up site and this project into Google Page Insights, and unsurprisingly, this project outperformed the official site by 48 points (43 to 91).',
        links: {
            demo: 'https://youtu.be/NOWgOJzJaaY'
        },
        mockup: foodrMockup,
        bgColor: '#FF4694'
    },
    {
        id: 3,
        mobile: false,
        logo: mcLogo,
        name: 'personalization',
        title: 'Personalization',
        technologies: ['Backbone.js', 'jQuery', 'LESS'],
        description: "Personalization by Modern Campus is a personalization engine tailored towards higher education that allows schools to create dynamic content for their websites. I acted as the lead front end developer for this project.",
        // description: '7up.com is a very intuitive website; however, one thing that is very apparent is its slow speed. The inefficiency of the site affects the experience with delayed page loads and choppy animations, so this project aimed to not only re-create the design and experience of the website, but also make it more efficient. To quantify the results, I plugged both of the official 7up site and this project into Google Page Insights, and unsurprisingly, this project outperformed the official site by 48 points (43 to 91).',
        links: {
            demo: 'https://vimeo.com/542841920'
        },
        mockup: personalizationMockup,
        bgColor: '#ff5c39'
    },
]

export default projectData;