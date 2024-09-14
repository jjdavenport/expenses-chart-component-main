import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className="bg-softRed flex justify-between rounded-lg p-4">
        <div className="flex flex-col">
          <span>My balance</span>
          <span>$921.48</span>
        </div>
        <div>
          <img src={logo} />
        </div>
      </header>
    </>
  );
};

export default Header;
