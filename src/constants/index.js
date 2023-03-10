import {
    mobile,
    backend,
    creator,
    web,
    meta,
    crypto,
    shopify,
    tripguide,
    cryptoexp,
    earpluse,
     dalle,
     tesla,
     textanalyzer
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DSA Programmer",
      icon: creator,
    },
  ];
  
  
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "CryptoCove",
      icon: crypto,
      iconBg: "#383E56",
      date: "April 2022 -  June 2022",
      points: [
        "Developed this web applications using React.js and other related technologies.",
        "A crypto website is a platform that provides information and resources related to cryptocurrencies and blockchain technology.",
        "These websites offer a range of services, such as news updates, price tracking, market analysis, and educational content.",
        "Our crypto websites feature real-time price charts that allow users to track the value of various cryptocurrencies. They also offer in-depth analysis of market trends and insights into the latest developments in the blockchain industry.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Earpluse",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Developing this web applications using Next.js and other related technologies.",
        "Customers can browse through the website to find the earbuds that best suit their needs, preferences, and budget.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Earbuds selling websites may also offer additional services, such as free shipping, returns, and exchanges, as well as customer support and assistance with technical issues.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "CryptoBidApp",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Jan 2023",
      points: [
        "A crypto bidding app is a software platform designed to facilitate the buying and selling of cryptocurrencies through a bidding system.",
        "Crypto bidding apps can provide a more transparent and efficient way to trade cryptocurrencies than traditional exchanges.",
        "The app would allow users to place bids on various cryptocurrencies, and then match them with corresponding bids from other users. ",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Acquiring knowledge on Full Stack Development and undertaking a project in this area, as well as delving into the realm of web3.0 technologies, including Solidity and Blockchain development",
        "In addition, exploring emerging technologies like web3.0 and Blockchain development is a formal undertaking that requires a deep understanding of Solidity, a programming language specifically designed for writing smart contracts, and knowledge of the underlying Blockchain technology",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CryptoCove",
      description:
        "Our crypto websites feature real-time price charts that allow users to track the value of various cryptocurrencies. They also offer in-depth analysis of market trends and insights into the latest developments in the blockchain industry.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: cryptoexp,
      source_code_link: "https://github.com/vishusharmaX/CryptoCove-React",
    },
    {
      name: "RentEstate",
      description:
        "Users can browse through the website's offerings and select the items they wish to rent or buy. For renting, users usually have the option to choose the rental duration, ranging from a few days to several weeks or months, depending on the product. Renting may also require users to submit a security deposit, which is typically refunded upon the safe return of the rented item.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/vishusharmaX/RentEstate",
    },
    {
      name: "Earpluse",
      description:
        "Customers can browse through the website to find the earbuds that best suit their needs, preferences, and budget.Earbuds selling websites may also offer additional services such as free shipping, returns, and exchanges, as well as customer support and assistance with technical issues.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: earpluse,
      source_code_link: "https://github.com/vishusharmaX/Earpluse-NEXT.js",
    },
    {
      name: "DALLE-2.0",
      description:
        "DALL-E AI is a generative model created by OpenAI that is capable of producing imaginative and visually stunning images based on natural language inputs. This groundbreaking AI technology can create images of objects, animals, and scenes that do not exist in reality, based solely on textual descriptions provided by the user.",
      tags: [
        {
          name: "react.js and vite",
          color: "blue-text-gradient",
        },
        {
          name: "openApi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/vishusharmaX/Earpluse-NEXT.js",
    },
    {
      name: "TextAnalyzer",
      description:
        "TextAnalyzer -Word Counter ,Character Counter , Remove Spaces The word counter function of TextAnalyzer calculates the number of words in a given text. This can be useful for writers, editors, and researchers who need to track the length of their writing or analyze the frequency of specific words in their text ",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: textanalyzer,
      source_code_link: "https://github.com/vishusharmaX/TextAnalyzer-using-React.js",
    },
  ];
  
  export { services, experiences, testimonials, projects };