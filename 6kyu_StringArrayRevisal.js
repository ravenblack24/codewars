/**
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be alphabet characters only. Don't worry about lower and upper case. See test cases for more examples.

Good luck!

Test cases:

describe("Basic tests", function(){
Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
});

describe("Random tests", function(){
for (var i = 0; i < 100; i++){
   arr = randArray();
   Test.assertDeepEquals(dup_mxJS12(arr),dup(arr),"It should work for random inputs too"); 
  }
});

function dup_mxJS12(arry) {
    var res = [];
    for (var k = 0; k < arry.length; k++) {
        var arr = arry[k].split("");    
        var j = 0;
        for (var i = 1; i < arr.length; i++)
        {
            if (arr[j] != arr[i])
            {
                j++;
                arr[j] = arr[i];
            }
        }
        j++;
        res.push(arr.slice(0, j).join(""));
    }
    ;
    return res;
}
;

function randArray() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var arrLen = Math.floor(Math.random() * 20) + 10;
    var len = Math.floor(Math.random() * 20) + 10;
    var c = 0;
    var arr = [];
    while (c < arrLen) {
        L = [];
        for (var i = 0; i < len; i++) {
            r = Math.floor(Math.random() * 25);
            L += letters[r]
            if (r % 2 == 0) {
                L += letters[r]
            }
        }
        ;
        arr.push(L)
        c++;
    }
    ;
    return arr;
}
;

*/

function dup(s) {
  return s.map((item) => item.replace(/(.)(?=\1)/g, ''));
}
