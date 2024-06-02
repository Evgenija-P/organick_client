const NewsPost = ({ info }) => {
  return (
    <article className="w-[936px] flex flex-col gap-y-[50px] mx-auto">
      <h2 className="text-[50px] font-extrabold leading-10">{info.first_subtitle}</h2>
      <p className="text-2xl text-justify">{info.first_text}</p>
      <blockquote className="w-full h-fit py-[70px] px-[60px] text-center bg-[#F1EDEA] rounded-[30px] mx-auto">
        <p className="text-xl font-bold leading-10">{info.quote}</p>
      </blockquote>
      <h3 className="text-[35px] font-extrabold">{info.second_subtitle}</h3>
      <p className="text-2xl text-justify">{info.second_text}</p>
    </article>
  );
};

export default NewsPost;
