import Image from "next/image";

const DevImg = ({ imgSrc, containerStyles, imgSize = "w-60 h-50" }) => {
  return (
    <div
      className={`${containerStyles} ${imgSize} rounded-full overflow-hidden`}
    >
      <Image
        src={imgSrc}
        alt="Developer Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default DevImg;
