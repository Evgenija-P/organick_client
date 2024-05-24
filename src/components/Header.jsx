import Menu from "./Menu";
import Logo from "./UI/Logo";

export const Header = () => {
  return (
    <header className="flex justify-between items-center font-bold w-[1480px] px-[40px] py-[50px] mx-auto">
      <Logo />
      <Menu />
      <div className="flex gap-x-8">
        <div>search form</div>
        <div>cart</div>
      </div>
    </header>
  );
};
