import Footer from "./components/footer";
import Header from "./components/header";
import Chart from "./components/chart";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-cream font-custom md:items-center">
        <div className="~sm/md:~p-2/4 flex flex-1 flex-col justify-center gap-4 text-lg md:w-[500px]">
          <Header />
          <Chart />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
