import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col text-center">
          <h1 className="pt-4 pb-2">LA PÁGINA NO EXISTE</h1>
          <p>
          <i class="bi bi-emoji-frown display-1"></i>
          </p>
          <p className="pt-4 fs-3">
            La página que estás buscando no existe.
          </p>
          <p className="pb-4">
            <Link to={"/"} className="btn bg-black text-white fs-5">
              Volver a la página Principal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
