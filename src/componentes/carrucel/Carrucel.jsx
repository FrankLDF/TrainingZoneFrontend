
export default function Carrucel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxHeight: "50vh" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.dragonrojo.net/images/entrena-tu-mente-fortalece-tu-cuerpo.jpeg"
            className="d-block w-100"
            style={{ minHeight: "45vh", maxHeight: "60vh" }}
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Transforma tu cuerpo, fortalece tu mente.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.shutterstock.com/image-photo/men-woman-dumbbells-gym-workout-600nw-2228263009.jpg"
            className="d-block w-100"
            style={{ minHeight: "45vh", maxHeight: "60vh" }}
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Bienestar y energía, aquí y ahora.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_05/2732526/190128-exercise-gym-ac-556p.jpg"
            className="d-block w-100"
            style={{ minHeight: "45vh", maxHeight: "60vh" }}
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <p>Entrena con pasión, alcanza tus metas.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
