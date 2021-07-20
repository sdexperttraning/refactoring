const tenPercentRaise = person => {
  person.salary = person.salary.multiply(1.1)
}
const fivePercentRaise = person => {
  person.salary = person.salary.multiply(1.05)
}

const raise = (person, factor) => {
  person.salary = person.salary.multiply(1 + factor)
}
