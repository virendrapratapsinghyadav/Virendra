import p1 from "../assets/images/p1.avif";
import p2 from "../assets/images/p2.avif";
import p3 from "../assets/images/p3.avif";
import ThinkCreate from "../assets/images/ThinkCreate.png";
import ThinkHome from "../assets/images/ThinkHome.png";
import ThinkUpdate from "../assets/images/ThinkUpdate.png";
import ThinkLoading from "../assets/images/ThinkLoading.png";
import github from "../assets/images/github.jpeg";

const Data = [
  {
    id: "1",
    heading: "Revolutionising WhatsApp Collaboration with Meetup",
    subHeading: "UX Case Study",
    image: p1,
    duration: "12 Weeks",
    role: "Sole UX/UI Designer",
    link1: "https://github.com/virendrapratapsinghyadav/Trello",
    link2: "https://github.com/virendrapratapsinghyadav/Trello",
    context:
      "During my time at university, I was challenged to enhance the collaborative features within WhatsApp. After considering multiple solutions, Meetup for WhatsApp was born. This project aims to seamlessly integrate event planning functionality through Meetup. Rooted in extensive user research, persona development, and iterative design processes, Meetup seeks to address common pain points such as difficulty organising group plans and finding crucial information within chat threads. By adhering to WhatsApp design guidelines and maintaining cohesion with its interface, I endeavoured to redefine the user experience, empowering individuals to effortlessly coordinate gatherings while enhancing the platforms utility and appeal.",
    outcome:
      "Meetup introduces a seamless event planning feature within WhatsApp, enabling users to effortlessly organise gatherings, meetings, and events directly within their chat environment. By integrating collaborative functionality, such as scheduling and centralised event information management, Meetup addresses users frustrations with existing limitations, streamlining the planning process and enhancing communication efficiency.",
  },

  {
    id: "2",
    heading:
      `CRUD Operations, Responsive UI, and Scalable Architecture`,
    subHeading: "ThinkBoard",
    image: ThinkCreate,
    duration: "2 Weeks",
    role: "FullStack Developer",
    link1: "https://thinkboard-uf3o.onrender.com/",
    link2: "https://github.com/virendrapratapsinghyadav/ThinkBoard",
    context:
      "Cheil is a digital agency owned by Samsung Group. During my time there as a graduate, I was on the conversion rate optimisation (CRO) team focusing on improving samsung.com/au. My role was user experience graduate where I would work closely with the team to research insights based on data, heuristic principles and competitors. With these insights, I would design modifications to the site, hand off designs to developers and then run an A/B test to determine if our hypothesise were accurate. During my time as a graduate, we designed and shipped approximately 35 different A/B tests; this case study will focus on 2 tests.",
    outcome: [
      {
        type: "text",
        content:
          "The Notes Management application is a full-stack project built using the MERN stack — MongoDB, Express.js, React.js, and Node.js. Its primary purpose is to provide a simple, intuitive, and responsive interface for managing personal notes efficiently. Users can perform all core CRUD operations: creating, reading, updating, and deleting notes. The project emphasizes seamless interaction between the frontend and backend through RESTful APIs, ensuring that each operation feels immediate and reliable. The architecture is designed to be clean, maintainable, and scalable, allowing for future enhancements such as authentication, personalized dashboards, and cloud storage.",
      },
      {
        type: "image",
        src: ThinkHome,
        alt: "Example of A/B test design comparison",
      },
      {
        type: "text",
        content:
          "The first image showcases the homepage, where all notes are listed. Each note includes easy-to-recognize icons for editing, deleting, and viewing details, providing quick access to essential actions. The homepage layout ensures that users can navigate and manage their notes without unnecessary clicks or confusion. It is designed with usability in mind, making the process of managing multiple notes intuitive and efficient. The real-time update of the notes list reflects the successful integration of the frontend and backend, demonstrating the app’s functional robustness.",
      },
      {
        type: "image",
        src: ThinkLoading,
        alt: "Workshop insights whiteboard",
      },
      {
        type: "text",
        content:
          "The second image captures the empty-state screen, which is displayed when no notes are present. This clean and visually friendly design guides users to create their first note, maintaining engagement even when the database is empty. Thoughtful UX design in the empty state prevents the interface from appearing broken or confusing. Instead, it offers clear visual cues and encourages interaction, ensuring that users immediately understand what action to take next. This design approach improves overall usability and leaves a positive impression on first-time users.",
      },
      {
        type: "image",
        src: ThinkUpdate,
        alt: "Workshop insights whiteboard",
      },
      {
        type: "text",
        content:
          "The third image highlights the update note feature. When users edit an existing note, the current content is pre-filled in the form, allowing for smooth and efficient modifications. This ensures that users do not have to re-enter existing information, streamlining the update process. The form is designed to provide immediate feedback, with clear save options, making the CRUD experience consistent and user-friendly. Additionally, the app handles rate-limit scenarios gracefully by showing a dedicated page to inform users when API limits are reached, avoiding confusion or crashes.",
      },
      {
        type: "text",
        content:
          "Overall, the project demonstrates a strong foundation for a full-stack application. It effectively balances functionality, usability, and maintainability. While currently focused on CRUD operations, the project has clear potential for future enhancements, including secure user authentication, personalized dashboards, and cloud-based note storage. These future improvements will expand the app into a fully-featured, reliable, and scalable note management platform suitable for everyday users.",
      },
    ],
  },
  {
    id: "3",
    heading: "Relaunching Coachbase to the World",
    subHeading: "UX Case Study",
    image: p3,
    duration: "6 Weeks",
    role: "UX Designer, Copywriter",
    link1: "https://github.com/virendrapratapsinghyadav/MoviesD",
    link2: "https://github.com/virendrapratapsinghyadav/MoviesD",
    context:
      "In early 2024, I was approached by a founder of a Saas product that was a game changer for online coaches, about a website refresh. His current site had a high bounce rate, looked outdated and was not optimised for conversion. Coachbase is a tool that online coaches can use to build meal plans for their clients rapidly. The founder wanted to promote 3 main benefits of this on the new site and ultimately foster more sign ups online.",
    outcome:
      "I loved the challenge of this project as it allowed me to empathise with a new set of users and work closely with a passionate founder. This project ultimately ended in the design and development of the new Coachbase website. The overall result was positive as the new site has gone live, has already seen a conversion increase of 38% and accurately represents the benefits of having Coachbase in your corner.",
  },
  {
    id: "4",
    heading: "Checkout Projects",
    subHeading: "Frontend Development",
    image: github,
    duration: "3 Months",
    role: "Reactjs Developer",
    link1: "https://github.com/virendrapratapsinghyadav",
    link2: "https://github.com/virendrapratapsinghyadav",
    context: `I'm a frontend developer with a focus on building modern, responsive, and accessible web applications. I primarily work with React.js, JavaScript, HTML, CSS, and Tailwind CSS, and enjoy turning UI designs into functional interfaces. Currently, my GitHub consists mostly of frontend projects, ranging from simple interfaces to component-driven applications using React. Each project reflects my intent to improve user experience, follow best practices, and write clean, maintainable code. I’m also in the process of transitioning toward full-stack development. I'm actively learning Node.js, Express.js, and MongoDB, with the goal of building complete MERN stack applications in the near future.`,
    outcome: `Through consistent practice and project-based learning, I've built a growing portfolio of frontend projects that demonstrate my understanding of modern web development.

My GitHub reflects:
Proficiency in React and component-driven design
Use of Tailwind CSS for fast and scalable UI styling
A solid foundation in vanilla JavaScript and DOM manipulation
An evolving path toward full-stack development (MERN)
In the coming months, you can expect to see backend integration, API development, and full-stack apps added to this repository. I'm also open to feedback, collaboration, and learning from the developer community.
Thanks for visiting!`,
  },
];

export default Data;
