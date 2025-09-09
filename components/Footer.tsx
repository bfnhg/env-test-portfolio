import { FaLocationArrow } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'


import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";


const Footer = () => {
   const { i18n ,t} = useTranslation()
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        {/* <h1 className="heading lg:max-w-[45vw]">
          {t("Ready to take")} <span className="text-purple">{t("your")}</span> {t("digital presence to the next level?")}
        </h1> */}
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          {t("Reach out to me today and let's discuss how I can help you achieve your goals.")}
        </p> */}
        {/* <a href="mailto:aitreqbaa@gmail.com?subject=Project Inquiry&body=Hi Adham,%0D%0A">
  <MagicButton
    title="Let's get in touch"
    icon={<FaLocationArrow />}
    position="right"
  />
</a> */}

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
  <p className="md:text-base text-sm md:font-normal font-light">
    {t("Copyright")}
  </p>

  <div className="flex items-center md:gap-3 gap-6">
    {socialMedia.map((info) => (
      <a
        key={info.id}
        href={info.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      >
        <img src={info.img} alt={info.img.split("/")[1].split(".")[0]} width={20} height={20} />
      </a>
    ))}
  </div>
</div>
    </footer>
  );
};

export default Footer;
