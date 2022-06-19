import { MutableRefObject, useEffect, useRef } from "react";

const Cookies: React.FC = () => {
  const cookieRef = useRef<any>(null);

  useEffect(() => {
    const cookieModal = cookieRef.current;

    if (cookieModal) {
      cookieModal.classList.add("modal-open");
    }
  }, []);

  const handleClose = () => {
    const cookieModal = cookieRef.current;

    if (cookieModal) {
      cookieModal.classList.remove("modal-open");
    }
  };

  return (
    <>
      <input type="checkbox" id="cookie-modal" className="modal-toggle" />
      <div ref={cookieRef} className="pb-4 modal modal-bottom">
        <div className="w-11/12 max-w-5xl bg-opacity-75 modal-box">
          <button
            onClick={handleClose}
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">
            Este site usa políticas de cookies!
          </h3>
          <p className="py-4">
            Caso permaneça na página isso significa que aceitas todas as
            diretrizes de cookies.
          </p>
          <div className="modal-action">
            <button className="btn" onClick={handleClose}>
              Aceitar
            </button>
            <button
              className="btn"
              onClick={() => {
                (window as any).location.href = "https://www.google.com/";
              }}
            >
              Recurar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
