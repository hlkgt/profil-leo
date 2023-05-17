import { PropTypes } from "prop-types";

const Image = ({ urlImage, sizeImage }) => {
  return (
    <img
      src={urlImage}
      alt={"skill icon"}
      className={(sizeImage || "w-36") + "  h-36 bg-black mb-4"}
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
  return <p className={"text-justify"}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string,
};

const Card = ({ children }) => {
  return (
    <div className="col-span-1 bg-slate-300 text-slate-900 flex justify-center items-center flex-col rounded-xl p-4 text-center">
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

export default Card;
