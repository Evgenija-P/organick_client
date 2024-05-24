import Title from "../Title";
import Subtitle from "../Subtitle";

const Friendly = () => {
  return (
    <section className="w-full h-[931px] py-[200px] bg-friendly bg-left bg-no-repeat relative">
      <div className="w-[789px] h-[723px] py-[78px] px-[89px] rounded-[30px] bg-white absolute top-[100px] left-[calc(50%-81px)]">
        <Title style={"mb-2"}>Eco Friendly</Title>
        <Subtitle>
          Econis is a Friendly <br /> Organic Store
        </Subtitle>
        <ul className="flex flex-col gap-y-[35px] mt-[35px]">
          <li className="w-full flex flex-col gap-y-1">
            <p className="text-[25px] font-medium">Start with Our Company First</p>
            <p className="text-lg text-grey">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium. Sed ut perspiciatis.
            </p>
          </li>
          <li className="w-full flex flex-col gap-y-1">
            <p className="text-[25px] font-medium">Learn How to Grow Yourself</p>
            <p className="text-lg text-grey">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium. Sed ut perspiciatis.
            </p>
          </li>
          <li className="w-full flex flex-col gap-y-1">
            <p className="text-[25px] font-medium">Farming Strategies of Today</p>
            <p className="text-lg text-grey">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
              laudantium. Sed ut perspiciatis.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Friendly;
