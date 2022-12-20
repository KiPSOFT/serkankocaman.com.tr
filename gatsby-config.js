module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://serkankocaman.com.tr`,
    // Your Name
    name: 'Serkan KOCAMAN',
    // Main Site Title
    title: `Serkan KOCAMAN | node.js Developer, Full-Stack Developer, Rust hobbiest.`,
    // Description that goes under your name in main bio
    description: `Hi everyone 🖖`,
    // Optional: Twitter account handle
    author: `@KiPSOFT`,
    // Optional: Github account URL
    github: `https://github.com/KiPSOFT`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/serkankocaman/`,
    // Content of the About Me section
    about: `I'm Serkan KOCAMAN, Fullstack developer from Izmir, Turkey. I have twenty years of developer experience. I started developing with pascal. then Delphi. I have been working with web technologies and node.js for about 6 years. I have knowledge of PHP, c#, c, python. I am interested in rust and go as a hobby. I have experience with MongoDB, MySQL, AWS ECS, AWS Fargate, Kubernetes, AWS CloudFront, AWS S3 and GCP.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {name: 'Coder Quiz Bot', description: 'CoderQuiz Telegram Bot: Quiz bot for coders.', link: 'https://t.me/CoderQuizBot'},
      {name: 'RadioGarden Bot', description: 'RadioGarden link generator Telegram bot.', link: 'https://t.me/radiogardenbot'}
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, PHP, Express.js, React, Vue, Angular 2.x, Angular 1.x',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/.well-known`,
        name: `.well-known`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `serkankocamandevfolio`,
        short_name: `serkankocamandevfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/profile-pic.png`,
      },
    },
  ],
};
