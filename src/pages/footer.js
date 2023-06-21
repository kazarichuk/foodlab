const Footer = () => {
  return (
    <footer className="relative bg-gray-200 w-full flex flex-col items-center justify-start text-center text-sm text-white font-secondary-text">
      <div className="self-stretch flex flex-row pt-4 px-1 pb-2 items-start justify-center">
        <div className="flex-1 relative leading-[20px]">
          <p className="m-0">Лучший рацион у тебя уже в руках!</p>
          <p className="m-0">Начни свой день по новому.</p>
        </div>
      </div>
      <div className="self-stretch flex flex-col py-0 px-6 items-center justify-start">
        <div className="self-stretch flex flex-col pt-10 px-2 pb-6 items-center justify-start gap-[12px]">
          <a
            className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]"
            href="mailto:info@mcookie.io?subject=Hey Mcookie team, "
          >
            info@foodlabs.info
          </a>
          <div className="self-stretch relative leading-[20px]">
            Россия, Москва
          </div>
          <i className="self-stretch relative text-[12px] leading-[20px] font-light text-gray-100">
            Page is Designed and Developed by Kazarichuk in 2023
          </i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
