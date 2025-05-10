import tabbyPurple from "../assets/Tabby-purple.jpg";
import TabbyElectric from "../assets/Tabby-electric.jpg";
import GithubLogo from "./GithubLogo";

const Tabby = () => {
  return (
    <>
      <div className="w-1/2 flex">
        <img src={tabbyPurple} className="w-full h-full object-cover" alt="" />
        <img src={TabbyElectric} className="w-full h-full object-cover" alt="" />
      </div>
      <h3 className="w-[80%] font-bold text-3xl my-4 hover:text-blue-600 hover:border-b-1">Tabby</h3>
      <p className="w-[100px] inline-block text-gray-400 font-medium text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas
        odit enim ab fugit pariatur sunt provident, exercitationem consectetur,
        quisquam magni, et illum quibusdam atque numquam magnam dolorem!
        Dignissimos, enim.
      </p>
      <div className=" flex gap-3 items-center">
        <div className="rounded-3xl border-1 border-blue-400 font-bold py-1 px-2">
          chrome-extension
        </div>
        <div className="rounded-3xl border-1 border-blue-400 font-bold py-1 px-2">
          HTML
        </div>
        <div className="rounded-3xl border-1 border-blue-400 font-bold py-1 px-2">
          CSS
        </div>
        <div className="rounded-3xl border-1 border-blue-400 font-bold py-1 px-2">
          JavaScript
        </div>
        <div className="absolute right-10">
          <a href="https://github.com/Deepaksingh126/tabby">
            <GithubLogo />
          </a>
        </div>
      </div>
    </>
  );
};

export default Tabby;
