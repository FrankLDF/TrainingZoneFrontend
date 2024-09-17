
import nosotros from "./sobrenosotros.module.css";
import gym5 from "../../assets/gym 5.jpg";
import gym6 from "../../assets/gym 6.jpg";
import gym7 from "../../assets/gym 7.jpg";
import Navbar from "../navbar/navbar";

const SobreNosotros = () => {
    return (
      <div style={{ backgroundColor: "rgb(32, 32, 32)"}}>
      <div className={nosotros.heading}>
          <Navbar/>
      <h1>Sobre Nosotros</h1>
      <p>
        En Training Zone, La Vega, nos dedicamos a ofrecer una experiencia de
        fitness completa y accesible para todos nuestros miembros. Nuestro
        gimnasio está diseñado para proporcionar un ambiente amigable y de apoyo
        donde puedes alcanzar tus objetivos de salud y bienestar.
      </p>

      <div className={nosotros.container}>
        <section className={nosotros.about}>
          <div className={nosotros.aboutimage}>
            <img src={gym5} alt="Instalaciones del gimnasio" />
          </div>
          <div className={nosotros.aboutcontent}>
            <h2>Nuestras Instalaciones</h2>
            <p>
              Contamos con instalaciones modernas y completamente equipadas para
              satisfacer todas tus necesidades de entrenamiento. Desde pesas
              libres y máquinas de resistencia hasta áreas de entrenamiento
              funcional y cardio, encontrarás todo lo que necesitas para un
              entrenamiento efectivo.
            </p>
          </div>
        </section>

        <section className={nosotros.about}>
          <div className={nosotros.aboutimage}>
            <img src={gym6} alt="Clases grupales" />
          </div>
          <div className={nosotros.aboutcontent}>
            <h2>Clases Grupales</h2>
            <p>
              Ofrecemos una variedad de clases grupales para mantenerte motivado
              y ayudarte a alcanzar tus objetivos de fitness. Entre nuestras
              clases más populares se encuentran Zumba, entrenamiento de
              combate, y condicionamiento de fuerza.
            </p>
          </div>
        </section>

        <section className={nosotros.about}>
          <div className={nosotros.aboutimage}>
            <img src={gym7} alt="Entrenadores personales" />
          </div>
          <div className={nosotros.aboutcontent}>
            <h2>Entrenadores Personales</h2>
            <p>
              Nuestro equipo de entrenadores personales está aquí para guiarte y
              apoyarte en cada paso de tu camino hacia una mejor salud. Nuestros
              entrenadores son expertos en diversas áreas del fitness,
              incluyendo control de peso corporal, calistenia, ganancia muscular
              y pérdida de grasa. Ellos están comprometidos con tu éxito y te
              ayudarán a superar tus límites y alcanzar tus metas.
            </p>
          </div>
        </section>

        <section className={nosotros.about}>
          <div className={nosotros.aboutcontent}>
            <h2>Ambiente Comunitario</h2>
            <p>
              En Training Zone, creemos en la importancia de una comunidad
              fuerte y solidaria. Nuestros miembros y personal crean un ambiente
              acogedor donde todos se sienten motivados y apoyados. Nos
              enorgullece ofrecer un espacio donde puedes sentirte parte de una
              familia mientras trabajas para mejorar tu salud y bienestar.
            </p>
          </div>
        </section>

        <section className={nosotros.about}>
          <div className={nosotros.aboutcontent}>
            <h2>Acceso 24 Horas</h2>
            <p>
              Para tu comodidad, ofrecemos acceso 24 horas a nuestros miembros,
              permitiéndote entrenar en el horario que mejor se adapte a tu
              estilo de vida.
            </p>
          </div>
        </section>

        <section className={nosotros.about}>
          <div className={nosotros.aboutcontent}>
            <h2>Ubicación y Horarios</h2>
            <p>
              <strong>Dirección:</strong> TrainingZoneGym Avenida Imbert Entre
              Aspen Plaza y Imbert Mall, La Vega
            </p>
            <p>
              <strong>Horario de atención del personal:</strong>
            </p>
            <p>Lunes a Viernes: 4 am – 9 pm</p>
            <p>Sábado: 9 am – 6 pm</p>
            <p>Domingo: Cerrado</p>
            <p>
              <strong>Contacto:</strong>
            </p>
            <p>Teléfono: (530) 742-7473</p>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default SobreNosotros;
