import Carrucel from "../carrucel/Carrucel";
import Navbar from "../Navbar/navbar";

export default function HomeOutsite() {
  return (
    <div className="bg-secondari text-defaul">
      <Navbar />
      <h1 className="text-center p-3 text-primari font-secondari">
        BIENVENIDO A TRAINING ZONE
      </h1>
      <p className="text-center font-primari  ">
        Descubre cómo transformar tu cuerpo y mente con Training Zone.{" "}
      </p>
      <Carrucel />
      <h3 className="w-50 font-primari p-5 text-center mt-5 ms-auto me-auto">
        En nuestro gimnasio ubicado en la Avenida Imbert, La Vega, República
        Dominicana, ofrecemos un ambiente de entrenamiento de primera clase
        respaldado por años de experiencia desde nuestra fundación en Nueva York
        en 2001 y nuestra expansión a La Vega en 2017 con nuestras tiendas de
        suplementos Recoveryzone1. Gracias a nuestros esfuerzos, hemos ganado
        una reputación excepcional por la confianza, seguridad y profesionalismo
        que brindamos a nuestros clientes.
      </h3>
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
