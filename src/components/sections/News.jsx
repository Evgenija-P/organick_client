import Title from "../Title";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import LinkButton from "../UI/LinkButton";
import NewsItem from "./news/NewsItem";
import { baseURL } from "@/api/configurations";

export const getAllNews = async () => {
  try {
    const response = await fetch(`${baseURL}/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const News = async ({ page }) => {
  const news = await getAllNews();

  const limitedNews = page === "news" ? news : news?.slice(0, 2);

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
              <Title style={"mb-2"}>Новини</Title>
              <Subtitle>Дізнайтесь більше про нове зі світу екологічних продуктів</Subtitle>
            </div>
            <LinkButton
              title="Більше новин"
              goTo="/news"
              style="transparent"
              className="px-[45px]"
            />
          </div>
        )}

        <div className="w-full grid grid-cols-2 mx-auto mt-12 gap-x-[46px] gap-y-16 mb-14">
          {limitedNews.map(el => (
            <NewsItem key={el.id+70} item={el} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default News;
