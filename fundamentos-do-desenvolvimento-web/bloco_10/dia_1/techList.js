function techList(tech, name) {
  if (tech.length === 0) return 'Vazio!';

  tech.sort();
  return tech.map(technology => ({
    tech: technology,
    name,
  }));
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

module.exports = techList;