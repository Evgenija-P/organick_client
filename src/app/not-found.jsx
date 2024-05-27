import LinkButton from "@/components/UI/LinkButton";

export default function Page() {
  return (
    <main className="w-full h-[1030px] pb-[130px]">
      <section className="w-full h-full bg-notFound bg-no-repeat flex flex-col relative">
        <div className="w-fit right-[260px] top-[150px] absolute">
          <p className="text-[#8FA8A8] text-[300px] font-black leading-none">404</p>
          <p className="text-main text-[70px] font-extrabold text-center">Page not found</p>
          <p className="text-grey text-lg mb-6">
            The page you are looking for doesn't exist or has been moved
          </p>
          <LinkButton title="Go to Homepage" goTo="/" style={"main"} page="notfound"/>
        </div>
      </section>
    </main>
  );
}
