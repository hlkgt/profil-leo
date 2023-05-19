import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-full min-h-screen bg-slate-900">
        <div className="w-full min-h-screen container px-8 mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <h1
                className={
                  "text-lg lg:text-6xl text-center font-semibold text-slate-200 mb-6"
                }
              >
                Selamat Datang Di Web Portfolio,{" "}
                <span className={"block text-4xl lg:text-6xl"}>
                  Saya <span className={"text-blue-600"}>Leo Marselio</span>{" "}
                </span>
              </h1>
              <p
                className={
                  "lg:w-[50rem] text-center mx-auto lg:text-xl font-semi-bold text-slate-400 mb-8"
                }
              >
                Web portofolio ini saya bikin untuk menampilkan skill, project
                yang pernah saya bikin, dan tentang pengalaman pengalaman apa
                saja yang pernah saya kerjakan, semua akan tertera disini,
                begitu juga dengan kepribadian saya
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={""}
                  className={
                    "px-2 lg:px-4 py-3 lg:py-4 border rounded-lg border-slate-400 text-slate-500 hover:bg-slate-400 hover:text-slate-900 font-semibold text-xl"
                  }
                >
                  Download CV{" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <Link
                  to={"/about"}
                  className={
                    "px-2 lg:px-4 py-3 lg:py-4 rounded-lg bg-blue-700 text-white hover:bg-slate-400 hover:text-slate-900 font-semibold text-xl"
                  }
                >
                  Learn About{" "}
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
