import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className="font-custom bg-cream flex h-full min-h-screen flex-col">
        <div className="flex flex-1 flex-col gap-2 p-4 text-lg">
          <Header />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
