import ContentContainer from "../components/content-container";

const Page = () => {
  return (
    <div className="relative bg-white-background w-full overflow-hidden flex flex-row items-start justify-center">
      <div className="absolute my-0 mx-[!important] w-full top-[0px] right-[0%] left-[0%] h-[804px] z-[0]">
        <img
          className="absolute w-full top-[311.5px] right-[0%] left-[0%] max-w-full overflow-hidden h-[492.5px] object-cover"
          alt=""
          src="/Free Food Scene 1.png"
        />
        <div className="absolute w-full top-[311px] right-[0%] left-[0%] [background:linear-gradient(180deg,_#f7fcff,_rgba(247,_252,_255,_0))] h-[198px]" />
        <img
          className="absolute top-[315px] left-[calc(50%_-_200px)] w-[330px] h-[580px]"
          alt=""
          src="/samsung-galaxy-s21-ultravertical-frontblack.svg"
        />
        <img
          className="absolute top-[409px] left-[calc(50%_-_62px)] w-[268px] h-[480px]"
          alt=""
          src="/samsung-galaxy-s21-ultravertical-frontblack1.svg"
        />
      </div>
      <div className="flex-1 relative h-[804px] z-[1]">
        <ContentContainer />
      </div>
    </div>
  );
};

export default Page;
