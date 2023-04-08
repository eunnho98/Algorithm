function solution(name, yearning, photo) {
  const newPhoto = photo.map((people) => {
    return people.filter((person) => name.includes(person));
  });

  const name_year = {};

  for (let i = 0; i < name.length; i++) {
    name_year[name[i]] = yearning[i];
  }

  const answer = newPhoto.map((people) => {
    return people.map((person) => name_year[person]);
  });

  const result = answer.map((ans) => {
    return ans.reduce((a, b) => a + b, 0);
  });

  return result;
}
