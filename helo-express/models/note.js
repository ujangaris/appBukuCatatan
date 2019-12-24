const NOTES = [{
    id: 1,
    title: 'How to learn Node.js',
    body: 'This is my notes on how to learn node.js',
    created_at: new Date('2019-12-24')
}, {
    id: 2,
    title: 'Talk is cheap',
    body: 'Talk is cheap. Show me code!',
    created_at: new Date('2019-12-25')
}, ];

function getAll() {
    return NOTES;
}

function add(data) {
    const newData = data;
    newData['id'] = NOTES.length - 1;
    NOTES.push(newData);
    return NOTES;
}

module.exports = {
    getAll: getAll,
    add: add
}