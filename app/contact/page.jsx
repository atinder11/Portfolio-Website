import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          {/* Text*/}
          <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
            {/* */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[20px] bg-primary"></span>
                Say Hello 👋
              </div>
              <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
              <p className="subtitle max-w-[400px]">
                Excited to collaborate with you on creating exceptional projects
                and achieving outstanding results. Let’s combine our strengths
                to bring innovative ideas to life and make a meaningful impact
                together.
              </p>
            </div>

            {/* */}
            <div
              className="hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"
            ></div>
          </div>
          <div className="grid xl:grid-cols-2 md-24 xl:mb-32">
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
              {/*Mail */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <a href="mailto:atinderk71@gmail.com" className="">
                  atinderk71@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>
                  Noida , UttarPradesh, India
                  <br />
                  Pincode:201301
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <a href="tel:+919821023521">+91 98210 23521</a>
              </div>
            </div>
            <Form />
          </div>
        </div>
        <br />
      </section>
    </>
  );
};

export default Contact;
