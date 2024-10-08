import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between rounded-xl bg-softRed p-6">
        <div className="flex flex-col gap-1 text-paleOrange">
          <span className="font-normal">My balance</span>
          <span className="text-2xl font-bold">$921.48</span>
        </div>
        <div>
          <img src={logo} />
        </div>
      </header>
    </>
  );
};

export default Header;
