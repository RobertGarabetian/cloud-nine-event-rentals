import "./styles.css";
import PackCards from "./components/PackCards";
const Packages = () => {
  return (
    <div className="w-screen h-screen">
      <div className="p-4 md:p-10 bg-slate-400 h-1/3 w-screen text-center content-center flex items-end  ">
        <h1 class="p-2 text-6xl md:text-8xl font-bold text-white">
          Our Packages
        </h1>
      </div>
      <div className="flex flex-col w-full bg-white items-center">
        <PackCards />
      </div>
      <div className="flex flex-col w-full bg-slate-50 items-center p-14">
        <h3 className="text-5xl text-slate-500 text-center">Add Ons</h3>
        <div className="flex justify-center">
          <div className="h-16 " />
          <div className="divider divider-horizontal divider-primary flex justify-center"></div>
          <div className="h-16 " />
        </div>
        <div className="h-auto w-3/5 bg-transparent border-r-2 border-t-2 border-indigo-500" />
        
      </div>
    </div>
  );
};

export default Packages;
