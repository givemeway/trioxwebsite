import Footer from "./Footer";
import Header from "./Header";
import slide1 from "./assets/slide-01@2x.jpg";
const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full grow">
        <div className="w-full overflow-auto flex flex-row">
          <img src={slide1}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
