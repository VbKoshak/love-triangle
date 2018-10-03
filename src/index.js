module.exports = function getLoveTrianglesCount(preferences = []) {

let count = 0;

let size = preferences.length;

for (let i = 0; i < size; i++)
{
    let first = preferences[i] - 1;
    let second = preferences[first] - 1;

    if (first == i) continue;
    else if (second == i) continue;
    else if (second == first) continue;

    if (preferences[second] == i + 1) count++;
}
return count/3;
};
