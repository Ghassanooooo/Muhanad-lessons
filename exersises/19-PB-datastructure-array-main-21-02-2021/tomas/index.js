let log = console.log;

const myWar = [ 'item1', 'item2', ['subSubItem1', 'subSubItem2' ] ];
myWar.unshift('Spain')
myWar[2] = 'SET item2'
myWar[3].pop();
myWar[3][0] = 'Berlin'
myWar[3].push('subSubItem1')
myWar.push('Germany')
log('required output:', myWar)

