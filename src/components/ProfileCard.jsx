import { Github, Globe, Linkedin, Mail } from "lucide-react";
import SocialLink from "./util-components/SocialLink";

const ProfileCard = () => (
  <div className="bg-white md:p-6 p-10 rounded-2xl shadow-xl lg:w-80 w-100 mx-auto">
    <div className="min-h-28 rounded-xl flex justify-center items-center">
      <img
        src="/profile-photo.jpg"
        alt="Profile"
        className="w-50 h-50 rounded-xl"
      />
    </div>
    <h2 className="text-xl font-bold text-center mt-3 text-gray-800">
      Jay Tin
    </h2>
    <p className="text-center text-gray-600 text-sm mt-2">
      A Software Engineer who loves learning new things, and developing reliable
      and user-friendly web applications.
    </p>
    <div className="flex justify-center space-x-4 mt-8 text-orange-600">
      <SocialLink href="https://www.linkedin.com/in/jaytintran">
        <Linkedin />
      </SocialLink>
      <SocialLink href="https://github.com/jaytintran">
        <Github />
      </SocialLink>
      <Globe className="cursor-pointer" />
      <Mail className="cursor-pointer" />
    </div>
  </div>
);

export default ProfileCard;
