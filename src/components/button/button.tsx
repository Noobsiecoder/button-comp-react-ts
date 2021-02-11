import CartIcon from "./cart.svg";

interface ButtonProps {
  buttonSize?: string;
  buttonStyle?: string;
  buttonLabel?: string;
  buttonIcon?: string;
}

const Button: Function = (props: ButtonProps) => {
  switch (props.buttonIcon) {
    case "left":
      return (
        <button className={`flex gap-2 items-center ${props.buttonStyle}`}>
          <img className="w-4 h-4" src={CartIcon} alt="logo" />
          {props.buttonLabel ?? "Default"}
        </button>
      );
    case "right":
      return (
        <button className={`flex gap-2 items-center ${props.buttonStyle}`}>
          {props.buttonLabel ?? "Default"}
          <img className="w-4 h-4" src={CartIcon} alt="logo" />
        </button>
      );
    default:
      return (
        <button className={props.buttonStyle}>
          {props.buttonLabel ?? "Default"}
        </button>
      );
  }
};

export default Button;
