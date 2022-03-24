import React from "react";

export default function Input() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/39t1o.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage((prevMemeImage) => ({ ...prevMemeImage, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevMemeImage) => {
      return {
        ...prevMemeImage,
        [name]: value,
      };
    });
  }

  return (
    <section className="main--container">
      <div className="form">
        <div className="input--container">
          <input
            type="text"
            className="input--box"
            name="topText"
            onChange={handleChange}
            placeholder="top text"
            value={memeImage.topText}
          />
          <input
            type="text"
            className="input--box"
            name="bottomText"
            onChange={handleChange}
            placeholder="bottom text"
            value={memeImage.bottomText}
          />
        </div>
        <button className="button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="img--box">
          <img src={memeImage.randomImage} className="memeImage" />
          <h2 className="meme--text top--text">{memeImage.topText}</h2>
          <h2 className="meme--text bottom--text">{memeImage.bottomText}</h2>
        </div>
      </div>
    </section>
  );
}
