const ContentContainer = () => {
  return (
    <div className="absolute w-full top-[0px] right-[0%] left-[0%] flex flex-col pt-20 px-2 pb-6 box-border items-center justify-start gap-[24px] text-center text-13xl text-black-main font-headline-large">
      <b className="self-stretch relative leading-[40px]">
        Создай свой персональный рацион за пару минут
      </b>
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_4px_16px_rgba(0,_0,_0,_0.08)] w-[160.05px] h-[54.99px]">
          <div className="absolute top-[0px] left-[0px] rounded-[7.97px] bg-secondary w-[160.05px] h-[54.99px]" />
          <div className="absolute h-[53.05%] w-[73.39%] top-[23.08%] right-[13.39%] bottom-[23.87%] left-[13.22%]">
            <img
              className="absolute h-full w-[23.06%] top-[0%] right-[76.94%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <div className="absolute top-[0.27px] left-[37.46px] w-20 h-[28.28px]">
              <div className="absolute top-[0px] left-[0px] text-[8.46px] font-inter text-white text-left">
                Запуск скоро!
              </div>
              <div className="absolute top-[11.28px] left-[0px] text-mini-1 font-inter text-white text-left">
                Google Play
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_4px_16px_rgba(0,_0,_0,_0.08)] w-[160.05px] h-[55.14px]">
          <div className="absolute top-[0px] left-[0px] rounded-[7.97px] bg-main w-[160.05px] h-[55.14px]" />
          <div className="absolute h-[55.12%] w-[72.02%] top-[23.01%] right-[13.88%] bottom-[21.86%] left-[14.1%]">
            <img
              className="absolute h-[98.97%] w-[21.85%] top-[0%] right-[78.15%] bottom-[1.03%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[2.12px] left-[37.26px] w-[78px] h-[28.28px]">
              <div className="absolute top-[0px] left-[0px] text-[8.46px] font-inter text-white text-left">
                Запуск скоро!
              </div>
              <div className="absolute top-[11.28px] left-[0px] text-mini-1 font-inter text-white text-left">
                Apple Store
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContentContainer;
