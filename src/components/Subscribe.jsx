import Button from "./UI/Buttons";

const SubscribeForm = () => {
  return (
    <article className="w-full h-[323px] flex items-center justify-between px-[71px] bg-subscribe rounded-[30px]">
      <h4 className="w-[357px] text-[50px] font-extrabold text-white leading-none">
        Subscribe to our Newsletter
      </h4>
      <form className="w-[575px] flex gap-x-[6px]">
        <input
          type="email"
          className="w-[349px] h-[80px] bg-white rounded-2xl pl-6 py-[23px] text-lg text-[#ABABAB] italic outline-none"
        />

        <Button btnType="submit" style={"main"}>
          Subscribe
        </Button>
      </form>
    </article>
  );
};

export default SubscribeForm;
