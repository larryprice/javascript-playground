function Employee() {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = new Employee;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = new Employee;

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = new WorkerBee;

function Engineer() {
  WorkerBee.call(this);
  this.dept = "engineering";
  this.machine = "";
}
Engineer.prototype = new WorkerBee;

var mark = new Engineer;
console.log(mark.specialty);
Employee.prototype.specialty = "none";
console.log(mark.specialty);