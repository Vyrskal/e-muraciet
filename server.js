import express from "express";
import fileUpload from "express-fileupload";
console.log("server.js");
const app = express();

app.use(fileUpload());
console.log("server.js");
// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// app.listen(3000, () => console.log("Server Started..."));
