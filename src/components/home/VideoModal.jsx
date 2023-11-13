const VideoModal = ({ modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className="modal h-screen z-[10000] flex items-center justify-center">
          <div
            onClick={() => setModal(false)}
            className="overlay w-screen h-[100rem] z-[9999]"
          ></div>
          <div className="p-20 z-[10000] shadow-lg rounded-md flex items-center justify-center">
            <video width={500} height={500} src={"/demo.mp4"} controls></video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
