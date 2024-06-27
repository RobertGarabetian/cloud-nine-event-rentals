const PackCards = () => {
  return (
    <div className="flex flex-col space-y-36 w-screen p-4 md:p-20">
      <div className="card lg:card-side bg-transparent w-full lg:h-[600px] rounded-none">
        <div className="card-body bg-transparent flex justify-center">  
            <h2 className="card-title text-slate-400 text-6xl py-8 border-b-2 border-slate-400">Silver</h2>
            {/* <div className="divider"></div> */}
            <ul className="text-black text-3xl pt-8">
              <li>Photobooth</li>
              <li>Digital copies of images, gifs, and boomerangs</li>
              <li>Props</li>
              <li>White backdrop</li>
            </ul>
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
          <h2 className="card-title text-yellow-400 text-6xl grid text-right py-8 border-b-2 border-yellow-400">
            Gold
          </h2>
          {/* <div className="divider"></div> */}
          <ul className="text-black text-3xl pt-8">
            <li>Photobooth</li>
            <li>Digital copies of images, gifs, and boomerangs</li>
            <li>Props</li>
            <li>White backdrop</li>
            <li>Physical photo strips printed immediately</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackCards;
