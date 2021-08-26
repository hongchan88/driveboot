class Imageupload {
  constructor() {
    this.url = process.env.REACT_APP_API_URL_CLOUDNARY; // env 사용하려면 npm 리스타트
  }
  async upload(UploadFile) {
    const formData = new FormData();
    formData.append("file", UploadFile);
    formData.append("upload_preset", "ml_default");
    return await fetch(this.url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => data);
  }
}

export default Imageupload;
