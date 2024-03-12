import Input from "../Input";
import {FormEvent, useState} from "react";
import Button from "../Button";
import './styles.sass'
import {FormProps} from "./interfaces";

const Form = ({setCurrentPeriod}: FormProps) => {
  const [startPeriod, setStartPeriod] = useState('');
  const [endPeriod, setEndPeriod] = useState('');

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCurrentPeriod({
      start: startPeriod,
      end: endPeriod,
    })
  }

  return (
    <form
      onSubmit={onHandleSubmit}
      className="form"
    >
      <fieldset className="fieldset">
        <label>
          Начало диапозона
          <Input
            value={startPeriod}
            onChange={(e) => setStartPeriod(e.target.value)}
          />
        </label>
        <label>
          Конец диапозона
          <Input
            value={endPeriod}
            onChange={(e) => setEndPeriod(e.target.value)}
          />
        </label>
        </fieldset>
          <Button text="Выбрать" onClick={onHandleSubmit}/>
    </form>
)
}

export default Form;