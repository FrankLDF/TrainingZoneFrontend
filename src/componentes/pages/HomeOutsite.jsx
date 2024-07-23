import Carrucel from "../carrucel/Carrucel";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer"

export default function HomeOutsite() {
  return (
    <div className="bg-secondari text-defaul">
      <Navbar />
      <h1 className="text-center p-3 text-primari font-secondari">
        Bienvenido a Training Zone
      </h1>
      <p className="text-center font-primari  ">
        Descubre cómo transformar tu cuerpo y mente con Training Zone.{" "}
      </p>
      <Carrucel />
      <Footer/>
      <h2 className="w-50 font-secondari text-primari p-5 text-center mt-5 ms-auto me-auto">
        Únete a nosotros hoy!
      </h2>
      <h3 className="w-50 font-primari p-5 text-center mt-5 ms-auto me-auto">
        ¡Explora nuestras instalaciones y sé parte de nuestra comunidad de
        entrenamiento! Inicia sesión para acceder a tu cuenta y descubrir todo
        lo que Training Zone tiene para ofrecerte.
      </h3>
      
    </div>
  );
}
