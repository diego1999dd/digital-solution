import bgMain from "@/assets/bg.jpg";
// FontAwesome e outros imports podem ser removidos se não forem usados nesta parte.
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import avatar3D from "@/assets/avatar-3d.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewAvatars from "../../components/reviews/Reviews";
// import ReviewAvatars from "../../components/reviews/Reviews";

function Home() {
  return (
    <main
      style={{ backgroundImage: `url(${bgMain})` }}
      className="w-full min-h-[64vh] font-sans p-8 md:p-16 lg:p-24"
    >
      {/* Container principal, removi a altura fixa e o space-y */}
      <div className="container  mx-auto max-w-7xl relative flex flex-row justify-center gap-16">
        {/* Seu container original, agora os elementos internos vão se empilhar corretamente */}
        <div className="h-auto w-5/12 space-y-3">
          {/* Textos do topo com estilo */}
          <div className="">
            <p>Great Design Services</p>
            <p>Without The Pretentiousness.!</p>
          </div>

          {/* O h1 com a classe "leading-none" para ajustar a altura da linha */}
          <div>
            <h1 className="text-[180px] font-gallery text-background leading-none mt-2">
              Digital
            </h1>
          </div>
          <div>
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="relative bg-accent rounded-[40px] pr-24 py-8 font-bold mt-6">
                  <p className="pl-6 text-left font-jakarta text-2xl">
                    WEB <br />
                    DESIGN
                  </p>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-24 bg-background px-6 py-6 rounded-[45px]">
                    <img src={avatar3D} alt="3D Avatar" className="w-20 h-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="self-center flex flex-row gap-10 my-20 ">
            <div className="w-2/3 flex flex-col">
              <p className="leading-relaxed ">
                We believe that the surest measure of success is when our
                partners with us more than half It's more than just the <br />{" "}
                visuals. We're here to support your growth.
              </p>
              <a
                href="#"
                className="mt-6 font-bold text-base justify-end  flex"
              >
                <span className="border-b-2 border-background">
                  View All Services
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
            <div className="flex flex-col items-end">
              <ReviewAvatars />
              <p className="font-semibold mt-2">Excellent: 4,000+ Reviews</p>
            </div>
          </div>
          <h1 className="absolute text-[180px] -mt-8 -ml-44 font-gallery text-background leading-none">
            Solution
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
