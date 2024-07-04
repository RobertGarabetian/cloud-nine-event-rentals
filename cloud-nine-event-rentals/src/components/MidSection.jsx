import Cards from "./MidCards";

const MidSection = () => {  
  let info = [
    {
      text: "We believe in more than just snapping photos; we create experiences. Our stylish photobooths are equipped with state-of-the-art technology, offering a seamless blend of innovation and fun!",
      image: "5.jpg",
    },
    {
      text: "Seeing the smiles on our clients' faces as they pose with their loved ones and make priceless memories is what drives us every day!",
      image: "6.jpg",
    },
    {
      text: "We'll work closely with you to tailor our services to your unique needs, whether it's designing custom photo templates, creating themed props, or setting up the perfect backdrop to match your event's vibe!",
      image: "7.jpg",
    },
  ];

  return (
    <div className="bg-white flex flex-col relative py-20 px-4 z-10 mt-mobile-margin md:mt-[730px] w-full items-center space-y-10">

      {info.map((card, index) => (
        <Cards key={index} image={card.image} text={card.text} />
      ))}
    </div>
  );
};

export default MidSection;