import React, { useState, useId, useEffect } from 'react';

function Meme() {
  const id = useId();

  const [formData, setFormData] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  function handleChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const [memeImage, setMemeImage] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setMemeImage(data.data.memes));
  }, []);

  function getImages() {
    const randomId = Math.floor(Math.random() * memeImage.length);
    const url = memeImage[randomId].url;
    console.log(url);
    setFormData((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 input-display'>
          <form action='#' method='post' className='form-section'>
            <div className='col-md-6'>
              <label htmlFor={id + '-topText'}>Top Text</label>
              <input
                className='form-input'
                type='text'
                id={id + '-topText'}
                name='topText'
                value={formData.topText}
                onChange={handleChange}
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor={id + '-bottomText'}>Bottom Text</label>
              <input
                className='form-input'
                type='text'
                id={id + '-bottomText'}
                name='bottomText'
                value={formData.bottomText}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className='col-md-12 btn-display'>
          <button className='btn btn-dark' onClick={getImages}>
            Generate Meme Images
          </button>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12 meme-display'>
          <img src={formData.randomImage} className='meme-image' />
          <h3 className='meme-text top'>{formData.topText}</h3>
          <h3 className='meme-text bottom'>{formData.bottomText}</h3>
        </div>
      </div>
    </div>
  );
}

export default Meme;
