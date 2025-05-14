app.route("/").get((req, res) => {
  res.send("Hello Employees :)");
});

app.route("employees").get((req, res) => {
  res.send(employees);
});

app.route("employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees[id];
  if (!employee) return res.status(404).send("Wrong EMPLOYEE");
  res.send(employee);
});
