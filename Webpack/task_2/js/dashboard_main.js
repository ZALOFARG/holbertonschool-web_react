import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<a id="logo" href="index.html"></a>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let counter = 0;

function updateCounter() {
  counter++;
  $('#count').text(`${counter} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));