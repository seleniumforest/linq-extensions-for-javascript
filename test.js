const applyLinqExtensions = require('./linq-extensions-for-javascript');
const assert = require('assert');

applyLinqExtensions();

let testArray = [
    { id: 1, ticker: "BTC", price: 13081, tags: ["PoW", "Mineable"] },
    { id: 2, ticker: "ETH", price: 406, tags: ["Smart Contracts"] },
    { id: 3, ticker: "DOT", price: 4.06, tags: ["Crosschain", "PoS"] },
    { id: 4, ticker: "XRP", price: 0.25, tags: ["DLT"] }
]

it('Array.select test', () => {
    let actual = [...testArray].select(x => x.ticker);
    let expected = ["BTC", "ETH", "DOT", "XRP"];
    assert.deepStrictEqual(actual, expected);
});

it('Array.selectMany test', () => {
    let actual = [...testArray].selectMany((el, ind) => el.tags);
    let expected = ['PoW', 'Mineable', 'Smart Contracts', 'Crosschain', 'PoS', 'DLT'];
    assert.deepStrictEqual(actual, expected);
});

it('Array.single test', () => {
    let actual = [...testArray].single(x => x.id === 1);
    let expected = { id: 1, ticker: "BTC", price: 13081, tags: ["PoW", "Mineable"] }
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.single with default value test', () => {
    let actual = [...testArray].single(x => x.id === 1000, {});
    let expected = {}
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.any test', () => {
    let actual = [...testArray].any();
    let expected = true;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.any with delegate test', () => {
    let actual = [...testArray].any(x => x.id === 1);
    let expected = true;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.any with delegate negative test', () => {
    let actual = [...testArray].any(x => x.id === 1000);
    let expected = false;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.each test', () => {
    let actual = [...testArray].each(x => x.tags.length > 0);
    let expected = true;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.each negative test', () => {
    let actual = [...testArray].each(x => x.tags.length > 2);
    let expected = false;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.count no func test', () => {
    let actual = [...testArray].count();
    let expected = 4;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.count func test', () => {
    let actual = [...testArray].count(x => x.id > 2);
    let expected = 2;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.first func test', () => {
    let actual = [...testArray].first(x => x.tags.length === 1);
    let expected = { id: 2, ticker: "ETH", price: 406, tags: ["Smart Contracts"] };
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.first no func test', () => {
    let actual = [...testArray].first();
    let expected = { id: 1, ticker: "BTC", price: 13081, tags: ["PoW", "Mineable"] };
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.last func test', () => {
    let actual = [...testArray].last(x => x.tags.length === 2);
    let expected = { id: 3, ticker: "DOT", price: 4.06, tags: ["Crosschain", "PoS"]};
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.last no func test', () => {
    let actual = [...testArray].last();
    let expected = { id: 4, ticker: "XRP", price: 0.25, tags: ["DLT"] };
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.max test', () => {
    let actual = [1, -2, 4].max();
    let expected = 4;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.max func test', () => {
    let actual = [...testArray].max(x => x.id);
    let expected = 4;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.min test', () => {
    let actual = [1, -2, 4].min();
    let expected = -2;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.min func test', () => {
    let actual = [...testArray].min(x => x.id);
    let expected = 1;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.sum test', () => {
    let actual = [1, -2, 4].sum();
    let expected = 3;
    assert.deepStrictEqual(actual, expected);
}); 

it('Array.sum func test', () => {
    let actual = [...testArray].sum(x => x.id);
    let expected = 10;
    assert.deepStrictEqual(actual, expected);
}); 