interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Zalo',
  lastName: 'Farfan',
  age: 29,
  location: 'Peru'
}

const student2: Student = {
  firstName: 'Benja',
  lastName: 'Ontiveros',
  age: 32,
  location: 'Netherlands'
}

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');

  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerFirstName.textContent = 'Location';

  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);

  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable();
