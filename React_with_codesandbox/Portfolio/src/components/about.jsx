import { IoSchoolOutline } from "react-icons/io5";
import { GiRibbonMedal } from "react-icons/gi";

const about = () => {
  return (
    <>
      <div
        className="flex justify-around items-center p-10 
        lg:flex-col ssm:flex-col ssm:space-y-10 text-white font-mono"
      >
        <div className="text-center">
          <p className="mt-4 text-1xl ssm:mt-2">Get to know</p>
          <h2
            className="mt-4 text-4xl font-bold
             bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text"
          >
            About Me
          </h2>
          <p className="mt-4 text-lg ssm:p-2 ssm:text-base ssm:text-left">
            Highly motivated and results-oriented Web Developer with a passion
            for creating user-friendly and responsive web experiences. Proven
            ability to leverage HTML, CSS, and JavaScript to design and develop
            modern websites. Adept at managing project deadlines and delivering
            high-quality code. Eager to contribute my skills and knowledge to a
            collaborative and innovative team environment.
          </p>
        </div>
      </div>
      <div
        className="flex justify-around text-white pb-10 font-mono leading-loose
        lg:flex-row 
        ssm:flex-col ssm:items-center ssm:w-full"
      >
        <div
          className="bg-orange-500 w-80 h-auto p-5 rounded-lg mb-10 
          hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 inline-block
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-orange-800/100"
        >
          <h2 className="text-3xl uppercase">Eduction</h2>
          <p className="text-lg">Bachelor of Computer Application (BCA)</p>
          <IoSchoolOutline size={60} className="m-3" />
        </div>
        <div
          className="bg-orange-500 w-80 h-auto p-5 rounded-lg mb-10
           hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 inline-block
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-orange-800/100"
        >
          <h2 className="text-3xl uppercase">Experience</h2>
          <p className="text-lg">
            Unified Mentor Pvt Ltd.
            <br />
            Web Developer
          </p>
          <GiRibbonMedal size={60} className="m-3" />
        </div>
      </div>
    </>
  );
};

export default about;
