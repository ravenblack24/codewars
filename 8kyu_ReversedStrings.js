/**

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

Test Cases:
Test.expect(solution('world') == 'dlrow')
Test.expect(solution('hello') == 'olleh')
Test.expect(solution('') == '')
Test.expect(solution('h') == 'h')

*/

function solution(str){
  return str.split('').reverse().join('');
}
