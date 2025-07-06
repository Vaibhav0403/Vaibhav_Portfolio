// src/data/projectsData.js
// This will hold the data for your projects
const projectsData = [
  {
    id: 'project-1',
    title: 'DvChat Web Application',
    category: 'Web Development',
    thumbnail: '../src/assets/vk.jpg', // Path to your project thumbnail image in public/images
    shortDescription: 'Developed a web-based venue booking application utilizing Python (Django) and MySQL. ',
    technologies: ['React', 'Django' , 'Python', 'MySQL'],
    link: '/projects/Dvachat.com', // Link to individual project detail page
    githubLink: 'https://github.com/DiYadav/Dvchat', // Optional GitHub link
    liveDemoLink: 'https://ecommerce-demo.vaibhav.com', // Optional live demo link
    // ... more detailed description for the full case study page (if you have one)
    fullDescription: `
      Developed a web-based venue booking application utilizing Python (Django) and MySQL, resulting in streamlined user authentication processes that reduced login issues by 30% while enhancing overall customer satisfaction.'
    `,
    screenshots: [
      '/images/ecommerce-screenshot1.jpg',
      '/images/ecommerce-screenshot2.jpg',
    ],
    challenges: ['Integrating legacy APIs', 'Optimizing image loading'],
    solutions: ['Developed custom API wrappers', 'Implemented lazy loading and WebP formats'],
    impact: ['15% increase in conversion', '20% faster page load'],
    lessonsLearned: 'Importance of early user testing.',
  },
  {
    id: 'project-2',
    title: 'Field Inspection System',
    category: 'Web Developement',
    thumbnail: '../src/assets/field.jpg',
    shortDescription: 'Developed an interactive dashboard to visualize complex inspection data for School Health centers Anganwadi.',
    technologies: ['PHP', 'HTML', 'CSS', 'Boostrap', 'PhpMyadmin'],
    link: '/projects/Field-Inspection-system',
    githubLink: 'https://github.com/Vaibhav0403/Field_inspection_kolhapur',
    liveDemoLink: 'https://dashboard-demo.vaibhav.com',
    fullDescription: `The Field Inspection System is User friendly for Inspection inspectors Beacuse the field Inspection System is collect the Data In Online In this project i use the PHP and PhpMyadmin `,
    screenshots: [],
    challenges: [],
    solutions: [],
    impact: [],
    lessonsLearned: '',
  },
  {
    id: 'project-2',
    title: 'Field Inspection System',
    category: 'Web Developement',
    thumbnail: '../src/assets/field.jpg',
    shortDescription: 'Developed an interactive dashboard to visualize complex inspection data for School Health centers Anganwadi.',
    technologies: ['PHP', 'HTML', 'CSS', 'Boostrap', 'PhpMyadmin'],
    link: '/projects/Field-Inspection-system',
    githubLink: 'https://github.com/Vaibhav0403/Field_inspection_kolhapur',
    liveDemoLink: 'https://dashboard-demo.vaibhav.com',
    fullDescription: `The Field Inspection System is User friendly for Inspection inspectors Beacuse the field Inspection System is collect the Data In Online In this project i use the PHP and PhpMyadmin `,
    screenshots: [],
    challenges: [],
    solutions: [],
    impact: [],
    lessonsLearned: '',
  },
  
  // Add more projects here
];

export default projectsData;