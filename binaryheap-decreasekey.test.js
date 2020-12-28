const BinaryHeap = require('./binaryheap-decreasekey');

test('min heap', () => {
  const queue = new BinaryHeap(
    (a) => a.value,
    (a) => {
      return a.id;
    },
    'value'
  );
  let objs = [
    {
      id: 0,
      value: 1,
    },
    {
      id: 1,
      value: 5,
    },
    {
      id: 2,
      value: 10,
    },
    {
      id: 3,
      value: -5,
    },
  ];
  for (let i = 0; i < objs.length; i++) {
    queue.push(objs[i]);
  }
  expect(queue.pop()).toBe(objs[3]);
  expect(queue.pop()).toBe(objs[0]);
  expect(queue.pop()).toBe(objs[1]);
  expect(queue.pop()).toBe(objs[2]);
  expect(queue.pop()).toBe(undefined);
});

test('max heap', () => {
  const queue = new BinaryHeap(
    (a) => -a.value,
    (a) => {
      return a.id;
    },
    'value'
  );
  let objs = [
    {
      id: 0,
      value: 1,
    },
    {
      id: 1,
      value: 5,
    },
    {
      id: 2,
      value: 10,
    },
    {
      id: 3,
      value: -5,
    },
  ];
  for (let i = 0; i < objs.length; i++) {
    queue.push(objs[i]);
  }
  expect(queue.pop()).toBe(objs[2]);
  expect(queue.pop()).toBe(objs[1]);
  expect(queue.pop()).toBe(objs[0]);
  expect(queue.pop()).toBe(objs[3]);
  expect(queue.pop()).toBe(undefined);
});
