import bgMain from "../../assets/bg.jpg";

function Home() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center w-full">
        <img src={bgMain} alt="Background da Home" />
      </div>
    </>
  );
}

export default Home;
