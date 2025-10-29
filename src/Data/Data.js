import p1 from "../assets/images/p1.avif";
import p2 from "../assets/images/p2.avif";
import p3 from "../assets/images/p3.avif";

//Github
import github from "../assets/images/github.jpeg";

//ThinkBoard
import ThinkCreate from "../assets/images/ThinkCreate.png";
import ThinkHome from "../assets/images/ThinkHome.png";
import ThinkUpdate from "../assets/images/ThinkUpdate.png";
import ThinkLoading from "../assets/images/ThinkLoading.png";

//MoviesD
import movieHome from "../assets/images/movieHome.png";
import movieDetail from "../assets/images/movieDetail.png";
import movieList from "../assets/images/movieList.png";

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
    outcome: [
      {
        type: "image",
        src: movieHome,
        alt: "Example of A/B test design comparison",
      },
      {
        type: "text",
        content:
          "The Notes Management application is a full-stack project built using the MERN stack — MongoDB, Express.js, React.js, and Node.js. Its primary purpose is to provide a simple, intuitive, and responsive interface for managing personal notes efficiently. Users can perform all core CRUD operations: creating, reading, updating, and deleting notes. The project emphasizes seamless interaction between the frontend and backend through RESTful APIs, ensuring that each operation feels immediate and reliable. The architecture is designed to be clean, maintainable, and scalable, allowing for future enhancements such as authentication, personalized dashboards, and cloud storage.",
      },
    ],
  },

  {
    id: "2",
    heading: `Transform Simple Notes into Powerful Productivity — Built with Text CRUD Operations, Responsive UI, and Scalable Architecture.`,
    subHeading: "ThinkBoard",
    image: ThinkCreate,
    duration: "2 Weeks",
    role: "FullStack Developer",
    link1: "https://thinkboard-uf3o.onrender.com/",
    link2: "https://github.com/virendrapratapsinghyadav/ThinkBoard",
    context:
      "Built using the MERN stack (MongoDB, Express, React, Node.js), this note-taking app showcases seamless CRUD operations for creating, reading, updating, and deleting notes in real time. Designed with a responsive UI, it ensures smooth performance across devices. Its scalable architecture makes it easy to expand features — from user authentication to cloud storage — while maintaining speed and reliability.",
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
    heading: "Discover, Explore, and Learn More About Your Favorite Movies",
    subHeading: "Movie Explorer App",
    image: movieHome,
    duration: "2 Weeks",
    role: "Reactjs Developer",
    link1: "https://github.com/virendrapratapsinghyadav/MoviesD",
    link2: "https://github.com/virendrapratapsinghyadav/MoviesD",
    context: `This project is a React.js-based Movie App designed to display information about popular, top-rated, and favorite movies.
              Movie data is fetched dynamically using the Fetch API, and each movie card provides an interactive experience powered by React Router for smooth navigation between pages.
              The app features a carousel section for trending movies, and React Skeleton is used for better UX while content loads.
              Each movie card can be clicked to open a detailed movie page, which displays extended information about the movie — including title, description, release date, ratings, and multiple external links for further exploration.`,
    outcome: [
      {
        type: "text",
        content:`The homepage serves as the central hub for the Movie Explorer App. It welcomes users with a clean and minimalistic design, built entirely using React components and custom CSS styling. The home section includes a carousel that highlights trending or featured movies, implemented using a lightweight React carousel library. This provides a visually appealing and interactive way to present the latest and most popular titles.
                 When the page loads, React Skeleton components temporarily occupy the space of images and text, ensuring that the layout remains consistent while data is fetched asynchronously. This approach prevents content shifts and improves perceived performance — a small detail that makes a big difference in user experience.
                 The navigation bar allows users to move effortlessly between sections like “Popular Movies,” “Top Rated,” and “Favorites.” The layout and color scheme were designed to keep the focus on movie posters and visual content while maintaining clarity and simplicity in the interface.`
          
      },
      {
        type: "image",
        src: movieList,
        alt: "Example of A/B test design comparison",
      },
      {
        type: "text",
        content:`The Popular Movies page dynamically fetches and displays a collection of trending or widely watched movies. Each movie is represented by a card that includes the poster, title, release date, and an overview snippet. Clicking on a card triggers a navigation event handled by React Router, taking the user to the detailed movie page.
                 This page showcases how React state management and component reuse can create a clean, efficient, and maintainable codebase. The movie cards are generated through mapping over fetched API data, demonstrating proficiency in handling asynchronous operations and rendering lists in React.
                 In addition, the use of conditional rendering ensures that the UI remains clean even when certain pieces of movie data are missing or temporarily unavailable. The combination of functional components, props, and hooks such as useState and useEffect allows the app to handle updates smoothly and efficiently.`  
      },
      {
        type: "image",
        src: movieDetail,
        alt: "Example of A/B test design comparison",
      },
      {
        type: "text",
        content:`The Movie Detail page is the highlight of the application, designed to provide users with in-depth information about a selected movie. Once a user clicks on a movie card from the home or popular movies section, they are redirected to this page. Using React Router’s dynamic routing, each movie’s unique ID is used to fetch detailed information about that specific title.
                The page displays the movie’s poster, title, rating, release date, runtime, genre, and a full description. Additionally, there are multiple external resource links (e.g., IMDb, official trailers, or Wikipedia pages) that users can visit to learn more. This feature not only enhances the informational depth of the app but also demonstrates an understanding of integrating third-party links and handling external navigation securely. 
                From a design perspective, the layout is intentionally spacious, with content divided into sections for easy readability. Although the app is currently not responsive, its structure and CSS organization make it adaptable for future upgrades. Each section is clearly separated, ensuring the app remains usable across different window sizes, even without full responsive behavior.`   
      },
      {
        type: "text",
        content:`This project allowed me to gain significant hands-on experience in building modern web applications using React.js. I practiced integrating external APIs through the Fetch API, implemented smooth client-side routing using React Router, and enhanced the user experience with React Skeleton loaders and visual components like carousels.
                 Additionally, the project helped strengthen my understanding of component reusability, state management, and asynchronous data handling. It also reinforced the importance of design consistency, error handling, and smooth navigation in user-facing applications.
                 Overall, the Movie Explorer App is a practical demonstration of how front-end technologies can come together to build an engaging, data-driven interface — with clear opportunities for future improvements, including responsiveness, advanced filtering, and backend integration for user favorites or authentication.`
      },

    ],
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
