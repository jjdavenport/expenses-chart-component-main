import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className="flex h-screen min-h-full flex-col bg-cream font-custom md:items-center">
        <div className="flex flex-1 flex-col justify-center gap-4 p-4 text-lg md:w-[500px]">
          <Header />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
