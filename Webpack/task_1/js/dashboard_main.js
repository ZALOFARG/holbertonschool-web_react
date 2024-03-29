import _ from 'lodash';
import $ from 'jquery';

let count = 0;
function updateCounter() {
  count++;
  $('#count').text('{count} clicks on the button');
}

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const debouncedFunction = _.debounce(updateCounter, 500);

$('button').on('click', debouncedFunction);
