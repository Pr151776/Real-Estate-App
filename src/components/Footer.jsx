import "../App.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="py-20 px-40 bg-black text-white">
      <div className="flex justify-between mb-25">
        <div className="flex flex-col w-[350px] h-[150px]">
          <img
            src="about/cons_image.png"
            alt="building construction logo"
            className="cons_image relative -top-25 -left-25"
          />
          <div className="text-xl flex flex-col gap-1 relative -top-50">
            <p className="font-extralight!">Real Estate Agency</p>
            <p className="font-extralight!">Your Best Trade Property Platform</p>
            <p className="font-extralight!">14+ Experience Trade Company</p>
          </div>
        </div>
        <div className="flex flex-col w-[450px] text-xl pt-20">
          <div className="text-right font-extralight! mb-5">
            <LocationOnIcon />{" "}
            Cusat.P.O, Punnekkattumoola, Seaport - Airport Rd, Vidya Nagar
            Colony, Thrikkakara, Kalamassery, Kochi, Kerala 682022
          </div>
          <div className="text-xl text-right flex flex-col gap-1">
            <p className="font-extralight!">
                <EmailIcon />{" "}
                realestatecompany.in@gmail.com
            </p>
            <p className="font-extralight!">+123 456 789</p>
          </div>
        </div>
      </div>
      <hr className="bg-white w-full h-[2px]" />
      <div className="flex justify-center items-center text-xl font-light! mt-10">
        Copyright © 2024 Real Estate Agency All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
