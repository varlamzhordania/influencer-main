const ThanksModal = ({ modal, setModal, toggleModal }) => {
  return (
    <>
      {modal && (
        <div className="modal z-50">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlnx="http://www.w.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
                Your response has been successfully submitted
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  We will get in touch soon
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  style={{
                    background:
                      "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                    boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                  }}
                  type="submit"
                  onClick={() => toggleModal()}
                  className="text-lg z-20 px-4 py-2 w-1/2 text-white rounded-full"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThanksModal;
