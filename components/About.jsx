import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Atinder Kumar",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9821023521",
  },
  {
    icon: <MailIcon size={20} />,
    text: "atindek71@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BTech in Computer Science Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Noida, Uttar Pradesh, India",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        College: "Jaypee Institute of Information Technology (JIIT), Noida",
        qualification:
          "Bachelor of Technology in Computer Science and Engineering (CSE)",
        year: "2021-2025",
      },
      {
        College: "Modern School, Noida",
        qualification: "Higher Secondary ",
        year: "2019-2021",
        percentage: "Percentage: 95.2%",
      },
      {
        College: "Modern School, Noida",
        qualification: "Higher School",
        year: "2017-2019",
        percentage: "Percentage: 94.2%",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "Kaboodle Innovations",
        role: "Software Development Engineer (SDE) Intern",
        year: "June-July 2024",
      },
      {
        Company: "Bharat Heavy Electricals Limited (BHEL)",
        role: "Digitalization & Engineering Automation (D&EA) Intern",
        year: "Dec 2023-Jan 2024",
      },
      {
        Company: "CodeClause",
        role: "Web Development Intern",
        year: "July-August 2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "Languages: C/C++, Python, SQL",
      },
      {
        name: "Front-end Development: ",
      },
      {
        name: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, Material UI",
      },

      {
        name: "Back-end Development:",
      },
      {
        name: "Node.js , Express.js, API, MySQL, Mongodb, Git/Github",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <>
      <section className="xl:h-[868px] pb-12 xl:py-24">
        <br />
        <div className="container mx-auto">
          <br />
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About Me
          </h2>
          <div className="flex flex-col xl:flex-row">
            {/* image */}
            <div className="hidden xl:flex flex-1 relative">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/assets/about/atinder.png"
                imgSize="w-100 h-100"
              />
            </div>
            {/* */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList
                  className="w-full grid xl:grid-cols-3 xl:max-w-[520px]
              xl:border dark:border none"
                >
                  <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value="qualification"
                  >
                    Qualification
                  </TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                </TabsList>

                {/*  */}
                <div className="text-lg mt-12 xl:mt-8">
                  <TabsContent value="personal">
                    <div className="text-center cl:text-left">
                      <h3 className="h3 md-4">
                        Unmatched services for over 10 yr
                      </h3>
                      <p className="subtitle max-w-xl max-auto xl:mx-0">
                        Specialize in crafting website
                      </p>

                      {/* */}
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item, index) => {
                          return (
                            <div
                              className="flex items-center gap-x-4 mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="text-primary">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          );
                        })}
                      </div>
                      {/* */}
                      <div className="flex flex-col gap-y-2">
                        <div className="text-primary">Langauge Skill</div>
                        <div className="border-b border-border"></div>
                        <div>English , Hindi</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="qualification">
                    <div>
                      <h3 className="h3 mb-8 text-center xl:text-left">
                        My Awesome Journey
                      </h3>
                      <div className="grid md:grid-cols-2 gap-y-8">
                        {/* */}
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px]">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "Experience").title}
                            </h4>
                          </div>
                          {/* */}
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, "Experience").data.map(
                              (item, index) => {
                                const { Company, role, year } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div
                                        className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                      ></div>
                                    </div>
                                    <div>
                                      <div
                                        className="font-semibold text-xl leading-none
                                  mb-2"
                                      >
                                        {Company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {year}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        {/* Education */}

                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px]">
                            <GraduationCap size={28} />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "Education").title}
                            </h4>
                          </div>
                          {/* */}
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, "Education").data.map(
                              (item, index) => {
                                const {
                                  College,
                                  qualification,
                                  percentage,
                                  year,
                                } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div
                                        className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                    group-hover:translate-y-[84px] transition-all duration-500"
                                      ></div>
                                    </div>
                                    <div>
                                      <div
                                        className="font-semibold text-xl leading-none
                                  mb-2"
                                      >
                                        {College}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {qualification}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {percentage}
                                      </div>
                                      <div className="text-base font-medium">
                                        {year}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="skills">
                    <div className="text-center xL:text-left">
                      <div className="mb-16">
                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                        <div className="border-b border-border mb-6"></div>
                        <div className="">
                          {getData(skillData, "Skills").data.map(
                            (item, index) => {
                              const { name } = item;
                              return (
                                <div
                                  className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                  key={index}
                                >
                                  <div className="font-medium">{name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
