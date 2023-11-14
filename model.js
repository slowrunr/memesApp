const PREVIEW_MOCK = {
  // url: "",
  textTop: "text above",
  textBottom: "text under",
};

export class Model {
  constructor({ onCurrentMemeIdChange, onMemesChange }) {
    this.memes = [];
    // this.preview = PREVIEW_MOCK;
    this.textTop = "";
    this.textBottom = "";
    this.currentMemeId = null;

    this.onMemesChange = onMemesChange;
    this.onCurrentMemeIdChange = onCurrentMemeIdChange;
  }

  getMemes() {
    return this.memes;
  }

  setMemes(memes) {
    this.memes = memes;
    this.currentMemeId = memes[0].id;

    this.onMemesChange(this.memes);
    this.onCurrentMemeIdChange();
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;

    this.onCurrentMemeIdChange();
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getPreview = () => {
    return {
      textTop: this.textTop,
      textBottom: this.textBottom,
      url: this.getCurrentMeme().url,
    };
  };

  getCurrentMeme() {
    let currentMeme = null;

    this.memes.forEach((meme) => {
      // console.log(this.getCurrentMemeId());
      if (meme.id === this.getCurrentMemeId()) {
        currentMeme = meme;
      }
    });

    return currentMeme;
  }
}
