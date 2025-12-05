const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "Full Stack Developer",
    description:
      "Aarav specializes in MERN stack and cloud-native applications, building scalable solutions with modern tooling.",
    tags: ["JavaScript", "Cloud", "MERN", "Developer"],
  },
  {
    fullName: "Sara Mehta",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description:
      "Sara creates clean, minimalist, user-centered designs with a strong focus on accessibility and visual storytelling.",
    tags: ["UI/UX", "Figma", "Design", "Prototyping"],
  },
  {
    fullName: "Kabir Malhotra",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    profession: "Machine Learning Engineer",
    description:
      "Kabir works on building ML models that solve real business problems and loves working with deep learning frameworks.",
    tags: ["AI", "ML", "Python", "Deep Learning"],
  },
  {
    fullName: "Priya Nair",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Data Analyst",
    description:
      "Priya turns raw data into actionable insights using SQL, Python, and BI tools with visually compelling dashboards.",
    tags: ["Data Analysis", "SQL", "Power BI", "Python"],
  },
  {
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Cybersecurity Specialist",
    description:
      "Rohan focuses on digital security, penetration testing, and preventing cyber threats for enterprise systems.",
    tags: ["Cybersecurity", "Pentesting", "Networking", "Ethical Hacking"],
  },
];
var sum=''
users.forEach((elem,idx) => {
     sum=sum+`<div class="card">
               <img src="${elem.image}" alt="">
               <h3>${elem.fullName}</h3>
               <h4>${elem.profession}</h4>
               <p>${elem.description}</p>
          </div>`
});
var main=document.querySelector('main')
main.innerHTML=sum 