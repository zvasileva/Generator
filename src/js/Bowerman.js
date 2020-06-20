import Character from './Character';

export default class Bowerman extends Character {
  constructor(...params) {
    super(...params);
    this.attack = 25;
    this.defence = 25;
  }
}
