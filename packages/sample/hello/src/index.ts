import isEven from 'is-even';

const wait = (delay = 200) => new Promise((resolve) => setTimeout(resolve, delay));

export const main = async (args) => {
  let name = args.name || 'stranger';
  let greeting = 'Hello ' + name + '! 101 is even: ' + isEven(101);
  console.log('start wait');
  await wait();
  console.log(greeting);
  return { body: greeting };
};
