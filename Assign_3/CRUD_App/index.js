const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/music")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const songSchema = new mongoose.Schema({
  songname: String,
  film: String,
  music_director: String,
  singer: String,
  actor: String,
  actress: String,
});
const Song = mongoose.model("Song", songSchema);

app.get("/insert-songs", async (req, res) => {
  await Song.insertMany([
    {
      songname: "Tum Hi Ho",
      film: "Aashiqui 2",
      music_director: "Mithoon",
      singer: "Arijit Singh",
    },
    {
      songname: "Tera Ban Jaunga",
      film: "Kabir Singh",
      music_director: "Akhil Sachdeva",
      singer: "Akhil Sachdeva",
    },
    {
      songname: "Raataan Lambiyan",
      film: "Shershaah",
      music_director: "Tanishk Bagchi",
      singer: "Jubin Nautiyal",
    },
    {
      songname: "Kalank",
      film: "Kalank",
      music_director: "Pritam",
      singer: "Arijit Singh",
    },
    {
      songname: "Kun Faya Kun",
      film: "Rockstar",
      music_director: "A.R. Rahman",
      singer: "Mohit Chauhan",
    },
  ]);
  res.send("Inserted initial songs!");
});

app.get("/songs", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

app.post("/add-song", async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.json({ message: "Song added successfully" });
});

app.delete("/delete-song/:songname", async (req, res) => {
  await Song.deleteOne({ songname: req.params.songname });
  res.json({ message: "Song deleted successfully" });
});

app.put("/update-song", async (req, res) => {
  const { songname, actor, actress } = req.body;
  await Song.updateOne({ songname }, { $set: { actor, actress } });
  res.json({ message: "Song updated successfully" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
