import React from 'react';
import TextBox from './TextBox';
import Image from './Image';

const contentData = [
  {
    id: 1,
    title: "Choose the perfect design", 
    description: "Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.",
    imgSrc: "./intro-img/layout-bg.png",
    background: "#fb8500",
    bottom: true
  },
  {
    id: 2,
    title: "Know your audience", 
    description: "Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.",
    imgSrc: "./intro-img/world.png",
    background: "#2a9d8f",
    bottom: false
  },
  {
    id: 3,
    title: "Hang onto your memories", 
    description: "Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with BlogIt.",
    imgSrc: "./intro-img/family.png",
    background: "#DC2626",
    bottom: false
  },
];

function Content() {
  return (
    <div>
      {contentData.map((item) => (
        <div
          key={item.id} // Unique key is essential
          className="w-full h-[70vh] md:h-[90vh] flex flex-col items-center md:flex-row text-white relative overflow-hidden"
          style={{ backgroundColor: item.background }} // Dynamic background color
        >
          <TextBox 
            title={item.title}
            description={item.description}
          />
          {item.bottom ? <Image imgSrc={item.imgSrc} /> : <img className='w-[50vw] md:w-[40vw]' src={item.imgSrc}></img>}
        </div>
      ))}
    </div>
  );
}

export default Content;
