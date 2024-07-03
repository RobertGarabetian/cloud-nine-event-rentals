import "./styles.css";
import PackCards from "./components/PackCards";
const Packages = () => {
  window.scrollTo(0, 0);
  
  return (
    <div className="w-screen h-screen">
      <div className="p-4 md:p-10 bg-slate-400 h-1/5 w-screen flex items-end  ">
        <h1 class="p-2 text-6xl md:text-8xl font-bold text-white">
          Our Packages
        </h1>
      </div>
      <div className="flex flex-col w-full bg-white items-center">
        <PackCards />
      </div>
      <div className="flex flex-col w-full bg-slate-50 items-center p-14 h-auto">
        <h3 className="text-5xl text-indigo-600 text-center">Add Ons</h3>
        <div className="flex justify-center">
          <div className="h-16 " />
          <div className="divider divider-horizontal divider-primary flex justify-center"></div>
          <div className="h-16 " />
        </div>
        <div className="h-auto w-1/2 bg-transparent border-r-2 border-t-2 border-indigo-500" />
        <div className="w-full flex flex-row justify-around">
          <div className="w-1/2 md:w-1/3 h-40 bg-transparent text-black text-center flex flex-col pt-8">
            <h3 className="text-xl md:text-3xl text-indigo-500">Inflatable Tent</h3>
            <p className="text-slate-500 mt-auto">
              $100/day
            </p>
          </div>
          <div className="w-1/2 md:w-1/3 h-40 bg-transparent text-black text-center pt-8 flex flex-col">
            <h3 className="text-xl md:text-3xl text-indigo-500">Custom Props <br />and Backdrops</h3>
            <p className="text-slate-500 mt-auto">
              contact for price estimate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
