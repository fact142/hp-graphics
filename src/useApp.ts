import {Period} from "./components/Form/interfaces";
import {Character} from "./api/interfaces";
import moment from "moment";

type UseApp = {
  filterCharacterByDateOfBirth: (period: Period, characters: Character[]) => GraphsValue[]
}

export type GraphsValue = {
  name: string,
  value: number,
};

export const useApp = (): UseApp => {
  const result: GraphsValue[] = [] ;

  const filterCharacterByDateOfBirth = (period: Period, characters: Character[]): GraphsValue[] => {
    characters
      .filter(
      (character) => character.dateOfBirth && character.house
        && moment(character.dateOfBirth, 'DD-MM-YYYY').isBetween(moment(period.start, 'YYYY-MM-DD'), moment(period.end,'YYYY-MM-DD'))
      )
      .forEach((character) => result.some((value) => value.name === character.house)
        ? result[result.findIndex((value) => value.name === character.house)].value += 1
        : result.push({name: character.house, value: 1})
      )
    return result
  }


  return {filterCharacterByDateOfBirth}
}
