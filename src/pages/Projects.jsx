import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Projects = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-full bg-slate-900">
        <div className="min-h-screen container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-12 pb-24">
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
            <Card>
              <Card.Image urlImage={"hehehe"} sizeImage={"w-full h-48"} />
              <Card.Title title={"lamravel"} />
              <Card.Text
                text={
                  "lamra lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi."
                }
              />
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
