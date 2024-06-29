import "../styles.css";
const PackCards = () => {
  return (
    <div className="flex flex-col space-y-36 w-screen p-4 md:p-20">
      <div className="card lg:card-side bg-transparent w-full lg:h-[600px] rounded-none">
        <div className="card-body bg-transparent flex justify-center">  
            
            <h2 className="card-title text-6xl py-8 border-b-2 border-slate-400 
            bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text bg-300% animate-gradient">
                Silver
            </h2>
            <ul className="text-black text-3xl pt-8">
              <li>Photobooth</li>
              <li>Digital copies of images, gifs, and boomerangs</li>
              <li>Props</li>
              <li>White backdrop</li>
            </ul>
            <p className="text-slate-500 flex flex-col bottom-0 justify-end">from $150/hour</p>
        </div>
        <figure className="lg:w-2/5 w-full h-full overflow-hidden">
          <img
            src="2.jpg"
            alt="Album"
            className="w-full h-full object-cover rounded-sm"
          />
        </figure>
      </div>

       <div className="card lg:card-side bg-transparent w-full lg:h-[600px] rounded-none ">
        <figure className="order-last lg:order-first lg:w-2/5 w-full h-full overflow-hidden">
          <img
            src="3.jpg"
            alt="Album"
            className="w-full h-full object-cover rounded-sm"
          />
        </figure>
        <div className="card-body bg-transparent flex justify-center text-right">
          <h2 className="card-title text-6xl grid text-right py-8 border-b-2 border-yellow-400
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text bg-300% animate-gradient">
            Gold
          </h2>
          <ul className="text-black text-3xl pt-8">
            <li>Photobooth</li>
            <li>Digital copies of images, gifs, and boomerangs</li>
            <li>Props</li>
            <li>White backdrop</li>
            <li>Physical photo strips printed immediately</li>
          </ul>
          <p className="text-slate-500 flex flex-col bottom-0 justify-end">from $200/hour</p>
        </div>
      </div> 


    </div>
  );
};

export default PackCards;
