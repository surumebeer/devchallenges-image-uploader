import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex-1 max-w-min">
        <h2>Upload your image</h2>
        <p>File should be Jpeg, Png...</p>
        <div>
          <Image src="/images/image.svg" width={114} height={88} />
          <p>Drag & Drop your image here</p>
        </div>
        <p>or</p>
        <label htmlFor="upload">Choose a file</label>
        <input type="file" id="upload" name="upload" />
      </div>
    </div>
  );
};

export default HomePage;
