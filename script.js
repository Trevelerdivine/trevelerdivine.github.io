const data = {
    id: "0001",
    name: "AAA",
    age: 20,
  };
  // ここから修正
  const jsonData = JSON.stringify(data, null, " ");
  console.log(jsonData);