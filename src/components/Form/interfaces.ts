export type FormProps = {
  setCurrentPeriod: (period: Period) => void
}

export type Period = {
  start: string,
  end: string,
}
