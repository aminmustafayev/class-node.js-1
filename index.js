const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
const PORT = 5050;


const data = [
  {
    id: 1,
    note: "skcfgbhyed",
    apicolor: "red",
    title: "JS",
  },
  {
    id: 2,
    note: "skcfgbhyed",
    apicolor: "red",
    title: "BS",
  },
  {
    id: 3,
    note: "skcfgbgsgsgsgsgsgsghyed",
    apicolor: "regfgd",
    title: "afafa",
  }
];

app.get("/api", (req, res) => {
  res.send("hello world");
}),
  app.get("/api/notes", (req, res) => {
    const { title } = req.query;

    if (title) {
      let filtered = data.find((x) =>
        x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
      );
      res.send({
        message: "Success",
        data: filtered,
      });
    } else {
      res.send({
        message: "Success",
        data: data,
      });
    }
  });

app.get("/api/notes/:id", (req, res) => {
  res.send({
    message: "Success",
    data: data,
  });
});
// POST method route
app.post("/api/notes", (req, res) => {
    // const id = params['id']
    const newData = req.body
    const id= new Date().valueOf()
    data.push({
        id:id,
        note: newData.note,
        apicolor: newData.apicolor,
        title: newData.title,
    })
  res.send(newData);
  
});
app.delete("/api/notes/:id",(req,res)=>{
    let id =req.params.id
    let idx= data.findIndex((note)=>note.id == id);
    const deleted = data.splice(idx,1)
    res.send(deleted)
});
app.put("/api/notes/:id", (req,res)=>{
    let id =req.params.id
    const newData = req.body
    let idx= data.findIndex((note)=>note.id == id);
    data.splice(idx,1,newData)
    res.send(data)
  
})
app.path("/api/notes/:id", (req,res)=>{
    let id = req.params.id
    const newData = req.body
    let idx = data.findIndex((note)=>note.id == id)
    
})




app.listen(PORT, () => {
  console.log(`Hello ${PORT}`);
});
