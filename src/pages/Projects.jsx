import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import profileLeo from "../assets/profile-leo.png";
import elfooDrink from "../assets/elfooDrink.png";
import questel from "../assets/questel.png";
import ukkSekolah from "../assets/ukkSekolah.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-full bg-slate-900">
        <div className="min-h-screen container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-12 pb-24">
            <Card>
              <Card.Image
                urlImage={profileLeo}
                sizeImage={"w-full h-32 md:80 lg:h-32"}
              />
              <Card.Title title={"Profile Leo"} />
              <Card.Text
                text={
                  "Web Profile pribadi saya untuk menampilkan project yang pernah saya buat dan skill yang saya kuasai"
                }
              />
              <Card.Button>
                <a
                  href={"https://profil-leo.vercel.app"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={
                    "w-full py-2 text-lg font-semibold bg-teal-400 mb-2 hover:bg-teal-700 hover:text-white"
                  }
                >
                  Live Preview <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </a>
                <a
                  href={"https://github.com/hlkgt/profil-leo"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"w-full py-2 text-lg font-semibold bg-orange-400 hover:bg-orange-700 hover:text-white"}
                >
                  Source Github{" "}
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </Card.Button>
            </Card>
            <Card>
              <Card.Image
                urlImage={elfooDrink}
                sizeImage={"w-full h-32 md:h-80 lg:h-32"}
              />
              <Card.Title title={"elfooDrink"} />
              <Card.Text
                text={
                  "elfooDrink Adalah sebuah template e-commerce yang saya bikin menggunakan framework Frontend berbasis React dan Tailwind"
                }
              />
              <Card.Button>
                <a
                  href={"https://elfood-drink.vercel.app"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={
                    "w-full py-2 text-lg font-semibold bg-teal-400 mb-2 hover:bg-teal-700 hover:text-white"
                  }
                >
                  Live Preview <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </a>
                <a
                  href={"https://github.com/hlkgt/elfood-drink"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"w-full py-2 text-lg font-semibold bg-orange-400 hover:bg-orange-700 hover:text-white"}
                >
                  Source Github{" "}
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </Card.Button>
            </Card>
            <Card>
              <Card.Image
                urlImage={questel}
                sizeImage={"w-full h-32 md:h-80 lg:h-32"}
              />
              <Card.Title title={"questel"} />
              <Card.Text
                text={
                  "questel Web seperti soal dari 4 kategori mapel yaitu Matematika, Ipa, Ips, Dan Sains, untuk melatih pemahaman saya dalam menggunakan API dari API yang saya bikin Sendiri"
                }
              />
              <Card.Button>
                <a
                  href={"https://questel.vercel.app"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={
                    "w-full py-2 text-lg font-semibold bg-teal-400 mb-2 hover:bg-teal-700 hover:text-white"
                  }
                >
                  Live Preview <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </a>
                <a
                  href={
                    "https://github.com/hlkgt/react-questions/tree/main/reactQuestions"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"w-full py-2 text-lg font-semibold bg-orange-400 hover:bg-orange-700 hover:text-white"}
                >
                  Source Github{" "}
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </Card.Button>
            </Card>
            <Card>
              <Card.Image
                urlImage={ukkSekolah}
                sizeImage={"w-full h-32 md:h-80 lg:h-32"}
              />
              <Card.Title title={"Project UKK"} />
              <Card.Text
                text={
                  "Project UKK adalah sebuah project tugas akhir dari sebuah bentuk hasil yang dicapai pada waktu magang"
                }
              />
              <Card.Button>
                <a
                  href={""}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"w-full py-2 text-lg font-semibold bg-orange-400 hover:bg-orange-700 hover:text-white"}
                >
                  Source Github{" "}
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </Card.Button>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
