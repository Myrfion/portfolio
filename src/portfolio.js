const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://myrfion.github.io"',
  title: 'TL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tymur Levtsun',
  role: 'Software Engineer',
  description:
    'A passionate software developer with hands-on experience in full-stack and mobile development using popular web technologies. Strong expertise in React.js, React Native, and Node.js with a clear understanding of project development processes. Eager to contribute to team success through hard work, constant learning, attention to detail, and excellent organizational skills.',
  resume: 'https://aqua-sianna-30.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/tymur-levtsun-439757172/',
    github: 'https://github.com/Myrfion',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sprowt',
    description:
      'Sprowt is a meditation app for IOS and Android made with React Native, providing users with various meditation sessions to listen to.',
    stack: ['React Native', 'TypeScript', 'Firebase', 'Next.js'],
    appStore:
      'https://apps.apple.com/us/app/sprowt-emotion-meditation/id1560829178',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.sprowt&hl=en&gl=US',
  },
  {
    name: '100% Brain Capacity Brainwaves',
    description:
      '100% Brain Capacity is a brainwave synchronization app that uses binaural and isochromatic beats, and natural rhythms to enhance cognitive performance, memory, concentration, and mental clarity. ',
    stack: ['React Native', 'Javascript'],
    appStore:
      'https://apps.apple.com/us/app/100-brain-capacity-brainwaves/id1554869360',
  },
  {
    name: 'Gideon Admin Panel',
    description:
      'Gideon is an admin panel designed for the eponymous project. With Gideon, users can manage database entries for conditions, systems, symptoms, and users.',
    stack: ['React', 'Material UI'],
    livePreview: 'https://admin.medpurehealth.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Firebase',
  'Node.js',
  'Material UI',
  'Chakra UI',
  'Tailwindcss',
  'Git',
  'CI/CD',
  'Jest',
  'Detox',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'levtsuntimur@gmail.com',
}

export { header, about, projects, skills, contact }
