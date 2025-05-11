import tabbyPurple from "../assets/Tabby-purple.jpg";
import TabbyElectric from "../assets/Tabby-electric.jpg";
import GithubLogo from "./GithubLogo";

const Tabby = () => {
  return (
    <>
      <div className="w-1/2 flex">
        <img src={tabbyPurple} className="w-full h-full object-cover" alt="" />
        <img
          src={TabbyElectric}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <h3 className="w-[80%] font-bold text-3xl my-4 hover:text-blue-600 hover:border-b-2">
        Tabby
      </h3>
      <h3 className="text-gray-400 mb-4 max-w-[800px] text-base">
        This extension is designed primarily for developers to address the issue
        of frequent tab switching, which can slow down system performance,
        clutter the tab layout, and waste time searching for frequently visited
        websites.
      </h3>
      <div className="flex gap-3 items-center w-[80%] flex-wrap">
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
        <div className="absolute right-10 bottom-4">
          <a href="https://github.com/Deepaksingh126/tabby">
            <GithubLogo />
          </a>
        </div>
      </div>
    </>
  );
};

export default Tabby;
