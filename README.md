map, filter, reduce in array // Es6news.js
Syntax:
map:
arr.map(function(currentValue, index, arr), thisValue)
-- function:
            -currentValue : Required. Value of current element.
            -index: Optional. The array index of current element.

arr.filter(function(currentValue, index, arr), thisValue)
-- function:
            -currentValue : Required. Value of current element.
            -index: Optional. The array index of current element.
arr.reduce(function(accmulator, currentValue, index, arr), initialValue)
            -accmulator: Required. The accmulator accmulates callback's return valuess. It is the accmulated value previously returned in the last invocation of the callback
            -currentValue: Required. Value of current element.
            -index: Optional. The array index of current element.