// import { HTMLAttributes } from "react";

const Card = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="card text-center shadow-xl">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
