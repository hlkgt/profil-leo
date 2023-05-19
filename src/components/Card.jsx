import { PropTypes } from "prop-types";

const Image = ({ urlImage, sizeImage }) => {
  return (
    <img
      src={urlImage}
      alt={"skill icon"}
      className={(sizeImage || "w-36") + " bg-white mb-4 object-fill"}
    />
  );
};
Image.propTypes = {
  urlImage: PropTypes.string,
  sizeImage: PropTypes.string,
};

const Title = ({ title }) => {
  return <h1 className={"text-xl font-medium mb-2"}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};

const Text = ({ text }) => {
  return <p className={"text-center mb-4"}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string,
};

const Button = ({ children }) => {
  return children;
};

const Card = ({ children }) => {
  return (
    <div className="col-span-1 bg-slate-300 text-slate-900 flex justify-between items-center flex-col rounded-xl p-4 text-center">
      {children}
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.node,
};

Card.Image = Image;
Card.Title = Title;
Card.Text = Text;
Card.Button = Button;

export default Card;
