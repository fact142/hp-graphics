import {ButtonProps} from "./interfaces";
import './styles.sass';

const  Button = ({text, onClick}: ButtonProps) => (
    <input
      type="button"
      className="primary"
      value={text}
      onClick={onClick}
    />
)

export default Button;