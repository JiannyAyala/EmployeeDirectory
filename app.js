app.route("/").get((req, res) => {
  res.send("Hello Employees :)");
});

app.route("employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

app.route("employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees[id];
  if (!employee) return res.status(404).send("Wrong EMPLOYEE");
  res.send(employee);
});

app.route("/employees/random").get((req, res) => {});
