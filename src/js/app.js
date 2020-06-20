// TODO: write your code here
import sum from './basic';

import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';
import Team from './Team';

console.log('worked');

console.log(sum([1, 2]));

const bowerman = new Bowerman('IvanBow', 'Bowerman');
const swordsman = new Swordsman('IvanSw', 'Swordsman');
const magician = new Magician('IvanM', 'Magician');
const undead = new Undead('IvanUnd', 'Undead');
const zombie = new Zombie('IvanZ', 'Zombie');
const daemon = new Daemon('IvanD', 'Daemon');
const team = new Team();

team.add(daemon);

team.add(daemon);

team.add(bowerman);

team.addAll(zombie, zombie, daemon, undead, magician, magician, swordsman);

for (const member of team) {
  console.log(member);
}
