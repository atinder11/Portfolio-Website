import { CodeXml, Globe, Gem, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <CodeXml size={72} strokeWidth={0.8} />,
    title: "DSA Enthusiast",
    description:
      "Strong foundation in Data Structures and Algorithms, which I apply to solve complex problems efficiently. I consistently improve my skills by participating in competitive programming on platforms like CodeChef and HackerRank.",
  },
  {
    icon: <Globe size={72} strokeWidth={0.8} />,
    title: "Full Stack Developer",
    description:
      "Hands-on experience with front-end technologies like HTML, CSS, JavaScript, and React. On the back end, I work with Node.js and Express.js to build scalable applications, and I’m proficient in database management using MySQL and MongoDB. My expertise extends to tools like Git/GitHub for version control and collaborative development",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Open Source Contributor",
    description:
      "Actively contribute to projects that enhance accessibility and functionality for a broader audience. My contributions reflect my commitment to continuous learning and community engagement.",
  },
];

function Services() {
  return (
    <>
      <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
          <h2 className="section-title mb-12 xl:mb-24 text-current mx-auto">
            My Skills
          </h2>

          <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
            {servicesData.map((item, index) => {
              return (
                <Card
                  className="w-full max-w-[420px] h-[400px] flex flex-col pt-14 pb-10 justify-center items-center relative"
                  key={index}
                >
                  <CardHeader className="text-primary absolute -top-[60px] mb-3">
                    {" "}
                    {/* Added mb-6 for margin-bottom */}
                    <div className="w-[140px] h-[75px]  bg-white dark:bg-background flex justify-center items-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-4 mt-2">
                      {" "}
                      {/* Added mt-8 for margin-top */}
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <br/>
      </section>
    </>
  );
}

export default Services;
