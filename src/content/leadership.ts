export interface Leader {
  name: string;
  role: string;
  responsibilities: string[];
  photos?: {
    src: string;
    alt: string;
    objectPosition?: string;
  }[];
}

export const leadership: Leader[] = [
  {
    name: "Dennis Xu",
    role: "Co-President & VP of First Step Fundraising and Entrepreneurship",
    photos: [
      {
        src: "/photos/dennisxu.png",
        alt: "Dennis Xu, First Step Team co-president",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Oversee team operations and communication",
      "Seek new volunteer opportunities, funding, and external collaborations",
      "Initiate new projects",
      "Lead First Step fundraising, including yard sales, lemonade stands, bake sales, and holiday markets",
    ],
  },
  {
    name: "Angela Zhou",
    role: "Co-President & VP of Team Building",
    photos: [
      {
        src: "/photos/angelazhou.jpg",
        alt: "Angela Zhou, First Step Team co-president",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Oversee team operations and communication",
      "Seek new volunteer opportunities, funding, and external collaborations",
      "Initiate new projects",
      "Organize team building activities during summer break, Labor Day, and winter break",
    ],
  },
  {
    name: "Mason Cao",
    role: "Secretary & Webmaster",
    photos: [
      {
        src: "/photos/masoncao.png",
        alt: "Mason Cao, First Step Team secretary and webmaster",
        objectPosition: "50% 25%",
      },
    ],
    responsibilities: [
      "Keep track of member logistics and information",
      "Track meeting minutes and compile end-of-year reports",
      "Apply for awards for all volunteers",
      "Manage incoming and outgoing volunteer communications and maintain this website",
    ],
  },
  {
    name: "Brady Zhou",
    role: "President-Elect & VP of Outreach",
    photos: [
      {
        src: "/photos/bradyzhou.png",
        alt: "Brady Zhou, First Step Team president-elect",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Oversee team operations and communication",
      "Grow partnerships through outreach initiatives in East Cobb and Metro Atlanta",
      "Organize Chattahoochee Nature Center activities",
      "Initiate new projects",
    ],
  },
  {
    name: "Mathew Jiang",
    role: "VP of Clean Environment",
    responsibilities: [
      "Organize key annual trash cleaning activities",
      "Earth Day, Sweep the Hooch, Lanier Shore Sweep",
      "Back to School Cleanup, Post-Halloween cleanup, Clean Walks",
    ],
  },
  {
    name: "Chloe Lin",
    role: "VP of External Fundraising",
    photos: [
      {
        src: "/photos/chloelin.jpg",
        alt: "Chloe Lin, First Step Team vice president of external fundraising",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Organize CFF, holiday bell ringing, Salvation Army, and other fundraising events",
    ],
  },
  {
    name: "Sophie Zhou",
    role: "VP of Food Bank Activities & Co-VP of Public Speaking Workshops",
    photos: [
      {
        src: "/photos/sophiazhou.jpg",
        alt: "Sophie Zhou, First Step Team vice president of food bank activities",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Organize team trips to local food banks",
      "Feed My Starving Children and similar events",
    ],
  },
  {
    name: "Nick Xu & Mitchell Kuang",
    role: "Co-VP of Performance Team",
    photos: [
      {
        src: "/photos/nickxu.png",
        alt: "Nick Xu, First Step Team co-vice president of the performance team",
        objectPosition: "50% 30%",
      },
      {
        src: "/photos/mitchellkuang.png",
        alt: "Mitchell Kuang, First Step Team co-vice president of the performance team",
        objectPosition: "50% 30%",
      },
    ],
    responsibilities: [
      "Organize performances at senior living home centers",
      "Outreach with senior centers to find new opportunities for performing",
    ],
  },
  {
    name: "Andrew Kuang",
    role: "Co-VP of Public Speaking Workshops",
    photos: [
      {
        src: "/photos/andrewkuang.png",
        alt: "Andrew Kuang, First Step Team co-vice president of public speaking workshops",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: ["Organize public speech workshops"],
  },
  {
    name: "Claire Ling",
    role: "Treasurer, VP of Social Media & VP of MedShare Activities",
    photos: [
      {
        src: "/photos/claireling.jpg",
        alt: "Claire Ling, First Step Team treasurer",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Keep tracking income and expenses",
      "Reimburse and transfer money",
      "Coordinate First Step social media updates",
      "Organize team trips to MedShare",
    ],
  },
  {
    name: "Hannah Gao",
    role: "VP of Technology and Design",
    photos: [
      {
        src: "/photos/hannahgao.jpg",
        alt: "Hannah Gao, First Step Team vice president of technology and design",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Keep the First Step website updated",
      "Design posters, banners, websites, logos, and other graphics needed",
    ],
  },
  {
    name: "Eric Lin",
    role: "VP of Tree Planting",
    photos: [
      {
        src: "/photos/eric lin.png",
        alt: "Eric Lin, First Step Team vice president of tree planting",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: ["Organize tree planting activities around Atlanta Metro"],
  },
  {
    name: "Julia Ding",
    role: "VP of Animal Care",
    photos: [
      {
        src: "/photos/juliading.png",
        alt: "Julia Ding, First Step Team vice president of animal care",
        objectPosition: "50% 35%",
      },
    ],
    responsibilities: [
      "Organize cat care volunteer opportunities in collaboration with Pounce de Leon",
      "Coordinate training",
    ],
  },
];
