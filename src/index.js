/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
var size = preferences.length;
for (var i = 0; i < size;i++)
{
    for (var j = 0; j < size; j++)
    {
      if (i == j)
      {
          continue;
      };
        if (preferences[i] == (j+1))
        {
            if (j == k || k == i)
            {
                continue;
            };
            for (var k = 0; k < size; k++)
            {
              if ((preferences[j] == (k+1)) && preferences[k] == (i+1))
              {
                  count++;
              };
            };
        };
    };
};
return count/3;
};
