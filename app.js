app.route("/").get((req, res) => {
  res.send("Hello Employees :)");
});

app.route("employees").get((req, res) => {
  res.send(employees);
});
