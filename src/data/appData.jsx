// This file contains all the static data for the application.

export const offerings = [
  {
    category: "Job Bootcamp",
    tag: "For graduates",
    courses: [
      {
        title: "Full Stack Web Development with GenAI",
        stats: ["140+ hrs of content", "600+ Problems", "10k+ Learners"],
        icon: "https://files.codingninjas.com/codestudio-logo-24647.svg",
        image: "https://placehold.co/600x300/3A5576/FFFFFF?text=Web+Dev",
      },
      {
        title: "Data Analytics with GenAI",
        stats: ["100+ hrs of content", "300+ Problems", "2000+ Learners"],
        icon: "https://files.codingninjas.com/ca-icon-27929.svg",
        image: "https://placehold.co/600x300/6B4F94/FFFFFF?text=Data+Analytics",
      },
    ],
  },
  {
    category: "IIT Certifications",
    sections: [
      {
        tag: "For graduates",
        courses: [
          {
            title: "PG Certification in Data Analytics with GenAI",
            institution: "E&ICT Academy, IIT Guwahati",
            partners: ["meta", "ibm"],
            duration: "6 months",
            image:
              "https://placehold.co/600x300/944F4F/FFFFFF?text=IIT+Guwahati",
          },
          {
            title: "PG Certification in Data Science with GenAI",
            institution: "E&ICT Academy, IIT Guwahati",
            partners: ["meta", "ibm"],
            duration: "5 months",
            image:
              "https://placehold.co/600x300/944F4F/FFFFFF?text=IIT+Guwahati",
          },
          {
            title: "Advanced Certification in GenAI for Non-Tech Professionals",
            institution: "IITM Pravartak, TBI IIT Madras",
            partners: ["aws", "intel"],
            duration: "6 months",
            image: "https://placehold.co/600x300/4F947D/FFFFFF?text=IIT+Madras",
          },
        ],
      },
      {
        tag: "For college students",
        courses: [
          {
            title: "Training and Internship Certification in Advanced DSA",
            institution: "IITM Pravartak, TBI IIT Madras",
            partners: ["aws", "intel"],
            duration: "4 months",
            image: "https://placehold.co/600x300/4F947D/FFFFFF?text=IIT+Madras",
          },
          {
            title: "Training and Internship Certification in Data Analytics",
            institution: "E&ICT Academy, IIT Guwahati",
            partners: ["meta", "ibm"],
            duration: "6 months",
            image:
              "https://placehold.co/600x300/944F4F/FFFFFF?text=IIT+Guwahati",
          },
          {
            title:
              "Training and Internship Certification in Full Stack Web Development",
            institution: "IITM Pravartak, TBI IIT Madras",
            partners: ["aws", "intel"],
            duration: "9 months",
            image: "https://placehold.co/600x300/4F947D/FFFFFF?text=IIT+Madras",
          },
        ],
      },
    ],
  },
  {
    category: "New Launches",
    tag: "For graduates",
    courses: [
      {
        title: "Advanced Certification in GenAI & Multi Agent Systems",
        stats: ["100+ hrs of content", "300+ Problems", "500+ Learners"],
        icon: "https://files.codingninjas.com/codestudio-logo-24647.svg",
        image: "https://placehold.co/600x300/94834F/FFFFFF?text=New+Launch",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Prakash S.",
    role: "Placed at Google",
    text: "The DSA course was a game-changer. The mentors were amazing and helped me crack Google's tough interviews.",
    image: `https://placehold.co/100x100/E2E8F0/4A5568?text=PS`,
  },
  {
    name: "Riya Sharma",
    role: "SDE at Amazon",
    text: "Coding Ninjas provided the perfect platform to learn and grow. The structured curriculum and constant support are commendable.",
    image: `https://placehold.co/100x100/E2E8F0/4A5568?text=RS`,
  },
  {
    name: "Aman Verma",
    role: "Software Engineer at Microsoft",
    text: "I owe my success to the well-designed courses and the mock interviews which simulated the real experience perfectly.",
    image: `https://placehold.co/100x100/E2E8F0/4A5568?text=AV`,
  },
];

export const hiringData = [
  { student: "Rahul S.", company: "Google" },
  { student: "Priya Singh", company: "Microsoft" },
  { student: "Amit Patel", company: "Amazon" },
  { student: "Sneha Reddy", company: "Adobe" },
  { student: "Vikram Kumar", company: "Flipkart" },
  { student: "Anjali Gupta", company: "Walmart" },
  { student: "Rohan Desai", company: "Morgan Stanley" },
  { student: "Neha Joshi", company: "Samsung" },
];

export const heroStats = [
  { text: "128% average hike via our placement cell" },
  { text: "1.5 Lac+ learners cracked top tech companies" },
  { text: "1,400+ alumni in MAANG & 103 unicorn startups" },
];

export const experienceOptions = [
  "Working Professional - Technical Roles",
  "Working Professional - Non Technical",
  "College Student - Final Year",
  "College Student - 1st to Pre-final Year",
  "Others",
];

export const comparisonData = [
  {
    feature: "Structured + problem solving based",
    cn: true,
    free: false,
    others: true,
  },
  {
    feature: "Fastest 1:1 doubt support",
    cn: true,
    free: false,
    others: false,
  },
  { feature: "Integrated prep platform", cn: true, free: false, others: false },
  {
    feature: "Profiles highlighted on Naukri",
    cn: true,
    free: false,
    others: false,
  },
];
