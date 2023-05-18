import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import HTMLlogo from "../assets/html.png";
import CSSlogo from "../assets/css.png";
import JSlogo from "../assets/js.png";
import SaasLogo from "../assets/saas.png";
import TailwindLogo from "../assets/tailwind.png";
import BootstrapLogo from "../assets/bootstrap.png";
import NodeLogo from "../assets/node.png";
import PhpLogo from "../assets/php.png";
import MysqlLogo from "../assets/mysql.png";
import LaravelLogo from "../assets/laravel.jpg";
import ReactLogo from "../assets/react.png";

const Skills = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-full bg-slate-900">
        <div className="min-h-screen container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-12 pb-24">
            <Card>
              <Card.Image urlImage={HTMLlogo} />
              <Card.Title title={"HTML"} />
              <Card.Text text={"Paham Tentang HTML"} />
            </Card>
            <Card>
              <Card.Image urlImage={CSSlogo} />
              <Card.Title title={"CSS"} />
              <Card.Text text={"Paham Tentang CSS"} />
            </Card>
            <Card>
              <Card.Image urlImage={JSlogo} />
              <Card.Title title={"Javascript"} />
              <Card.Text text={"Paham Tentang Javascript"} />
            </Card>
            <Card>
              <Card.Image urlImage={SaasLogo} />
              <Card.Title title={"SCSS"} />
              <Card.Text text={"Paham Tentang CSS pre-processor"} />
            </Card>
            <Card>
              <Card.Image urlImage={TailwindLogo} />
              <Card.Title title={"Tailwind"} />
              <Card.Text text={"Paham Mengenai Framework CSS"} />
            </Card>
            <Card>
              <Card.Image urlImage={BootstrapLogo} />
              <Card.Title title={"Bootstrap"} />
              <Card.Text text={"Paham Tentang Framework CSS"} />
            </Card>
            <Card>
              <Card.Image urlImage={NodeLogo} />
              <Card.Title title={"Node.js"} />
              <Card.Text text={"Memahami Node.JS"} />
            </Card>
            <Card>
              <Card.Image urlImage={PhpLogo} />
              <Card.Title title={"PHP"} />
              <Card.Text text={"Paham Tentang PHP"} />
            </Card>
            <Card>
              <Card.Image urlImage={MysqlLogo} />
              <Card.Title title={"MySql"} />
              <Card.Text text={"Paham Tentang Database"} />
            </Card>
            <Card>
              <Card.Image urlImage={LaravelLogo} />
              <Card.Title title={"Laravel"} />
              <Card.Text text={"Paham Tentang Framework PHP"} />
            </Card>
            <Card>
              <Card.Image urlImage={ReactLogo} />
              <Card.Title title={"React"} />
              <Card.Text text={"Paham Tentang Konsep Framework Frontend"} />
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
