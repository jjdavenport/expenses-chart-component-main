import Footer from "./components/footer";
import Header from "./components/header";
import Chart from "./components/chart";

function App() {
  return (
    <>
      <div className="flex h-screen min-h-full flex-col bg-cream font-custom md:items-center">
        <div className="flex flex-1 flex-col justify-center gap-4 p-4 text-lg md:w-[500px]">
          <Header />
          <Chart />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
