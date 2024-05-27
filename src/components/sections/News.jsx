import Title from "../Title";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import LinkButton from "../UI/LinkButton";
import NewsItem from "../NewsItem";
import news from "@/data/news.json";

const News = ({ page }) => {
  const limitedNews = page === "news" ? news : news.slice(0, 2);

  return (
    <section
      className={`w-full h-fit pt-[177px] pb-[60px] ${
        page === "news" ? "bg-white" : "bg-lite_pink"
      }  relative`}
    >
      <Wrapper styles={""}>
        {page === "home" && (
          <div className="flex items-end justify-between">
            <div className="w-[60%]">
              <Title style={"mb-2"}>News</Title>
              <Subtitle>Discover weekly content about organic food, & more</Subtitle>
            </div>
            <LinkButton title="More News" goTo="/news" style="transparent" className="px-[45px]" />
          </div>
        )}

        <div className="w-full grid grid-cols-2 mx-auto mt-12 gap-x-[46px] gap-y-16 mb-[185px]">
          {limitedNews.map(el => (
            <NewsItem key={el.id} item={el} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default News;
