import {InputProps} from "./intefaces";
import './styles.sass'

const Input = ({value, onChange, min, max}: InputProps) => (
  <input
    className="input"
    value={value}
    onChange={onChange}
    type="date"
    min={min}
    max={max}
  />
)

export default Input;