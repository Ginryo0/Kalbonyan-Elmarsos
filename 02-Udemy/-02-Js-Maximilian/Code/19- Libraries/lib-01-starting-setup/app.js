const customers = ['Teeto', 'Zeezo', 'Keeko'];

const activeCustomers = ['Teeto', 'Zeezo'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
