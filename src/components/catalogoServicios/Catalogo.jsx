import React, { useState } from 'react'
import Header from '../Header'
import { Card } from './Card'
import '../../styles/catalogoServicios/catalogo.css'
import img1 from "../../assets/catalogoServiciosImgs/sharedimage15.jpg";
import img2 from "../../assets/catalogoServiciosImgs/Ciberseguridad.png";
import img3 from "../../assets/catalogoServiciosImgs/sharedimage18.jpg";
import img4 from "../../assets/catalogoServiciosImgs/sharedimage14.jpg";
import img5 from "../../assets/catalogoServiciosImgs/sharedimage16.jpg";
import img6 from "../../assets/catalogoServiciosImgs/sharedimage17.jpg";
import img7 from "../../assets/catalogoServiciosImgs/sharedimage7.jpg";
import img8 from "../../assets/catalogoServiciosImgs/analisisdedatos.png";
import img9 from "../../assets/catalogoServiciosImgs/desarrollositioweb.png";
import img10 from "../../assets/catalogoServiciosImgs/sharedimage19.jpg";
import CopyRight from '../CopyRight';

export const Catalogo = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      img: img1,
      name: "Servicios de infraestructura en la nube",
      price: 3000000,
      description: "Nuestros servicios de infraestructura en la nube te ofrecen una plataforma robusta y flexible para tu negocio. Proveemos los recursos tecnológicos esenciales (servidores, almacenamiento, redes) de manera escalable, para que solo pagues por lo que realmente usas. Esto te permite enfocarte en la innovación y el crecimiento, mientras nosotros nos encargamos del mantenimiento."
    },
    {
      img: img2,
      name: "Ciberseguridad",
      price: 3000000,
      description: "Protege la integridad de tus sistemas y datos con soluciones avanzadas de ciberseguridad. Ofrecemos monitoreo constante, prevención de intrusiones, análisis de vulnerabilidades y respuesta ante incidentes. Nuestro enfoque integral te asegura un entorno confiable, minimizando riesgos y manteniendo la continuidad de tu negocio frente a amenazas digitales emergentes."
    },
    {
      img: img3,
      name: "Soporte técnico y mesa de ayuda",
      price: 3000000,
      description: "Nuestro servicio de soporte técnico garantiza el correcto funcionamiento de tu infraestructura tecnológica. Contamos con especialistas disponibles para resolver incidentes, brindar mantenimiento preventivo y apoyar en la optimización de sistemas. Con atención rápida y personalizada, aseguramos que tu operación no se detenga y que tu equipo siempre tenga respaldo confiable."
    },
    {
      img: img4,
      name: "Consultoría tecnológica",
      price: 3000000,
      description: "Ofrecemos consultoría estratégica en tecnología para acompañar a tu empresa en procesos de innovación y transformación digital. Evaluamos tu entorno actual, diseñamos planes de mejora y recomendamos las soluciones que mejor se adapten a tus necesidades. Nuestro objetivo es ayudarte a aprovechar herramientas tecnológicas para aumentar eficiencia y lograr tus metas."
    },
    {
      img: img5,
      name: "Desarrollo e integracion de CRM y ERP",
      price: 3000000,
      description: "Creamos e integramos soluciones de CRM y ERP que centralizan la gestión de clientes, ventas, procesos y recursos de tu empresa. Con plataformas adaptadas a tu sector, optimizas la comunicación, la toma de decisiones y la eficiencia en todas las áreas. Te ayudamos a implementar sistemas escalables y seguros que potencian tu crecimiento y competitividad."
    },
    {
      img: img6,
      name: "Inteligencia artificial",
      price: 3000000,
      description: "Implementamos soluciones de inteligencia artificial diseñadas para impulsar la innovación en tu empresa. Aplicamos algoritmos avanzados para analizar datos, automatizar procesos, mejorar la toma de decisiones y personalizar experiencias. Desde chatbots hasta sistemas predictivos, la IA se convierte en una herramienta clave para transformar la manera en que operas."
    },
    {
      img: img7,
      name: "Automatización de procesos",
      price: 3000000,
      description: "Diseñamos soluciones de automatización que reducen errores humanos y mejoran la productividad. Al eliminar tareas repetitivas, tu equipo puede concentrarse en actividades estratégicas. Nuestros sistemas permiten integrar flujos de trabajo, optimizar recursos y ahorrar tiempo. La automatización se convierte en un aliado que impulsa la eficiencia y el crecimiento empresarial."
    },
    {
      img: img8,
      name: "Analisis de datos",
      price: 3000000,
      description: "Convierte grandes volúmenes de datos en información útil con nuestras soluciones de análisis avanzado. Te ayudamos a identificar patrones, optimizar procesos y mejorar la toma de decisiones. Con metodologías modernas de business intelligence y big data, obtendrás reportes claros y estratégicos que brindan ventaja competitiva y apoyan el desarrollo sostenible de tu negocio."
    },
    {
      img: img9,
      name: "Desarrollo de sitios web",
      price: 3000000,
      description: "Diseñamos y desarrollamos sitios web modernos, escalables y totalmente adaptados a tu marca. Nos enfocamos en ofrecer experiencias rápidas, seguras y responsivas que conecten con tus clientes. Desde páginas corporativas hasta portales complejos, garantizamos una estructura optimizada para SEO, alto rendimiento y facilidad de administración para tu equipo interno."
    },
    {
      img: img10,
      name: "Desarrollo de software a la medida",
      price: 3000000,
      description: "Creamos software personalizado que se ajusta a los objetivos y procesos específicos de tu organización. Desde el análisis de requisitos hasta la implementación, nuestro equipo desarrolla soluciones robustas, escalables y seguras. Con un enfoque flexible, aseguramos que la herramienta evolucione con tu negocio, aportando valor real y mejorando continuamente la productividad."
    }
  ];


  return (
    <>
      <Header />
      <h1>Catálogo de servicios</h1>

      <section className="servicesSection">
        <div className="serviceCardSection">
          {services.map((service, index) => (
            <div className='containerCard' key={index} onClick={() => setSelectedService(service)}>
              <Card imgService={service.img} nameService={service.name} />
            </div>
          ))}
        </div>
      </section>
      <hr />
      <CopyRight />

      {/* Modal */}
      {selectedService && (
        <div className="modalCatalogo" onClick={() => setSelectedService(null)}>
          <div className="modalBoxCatalogo" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtnCatalogo" onClick={() => setSelectedService(null)}>✕</button>

            <h2 className="modalTitleCatalogo">{selectedService.name}</h2>
            <div className="modalContentCatalogo">
              <Card imgService={selectedService.img} nameService={selectedService.name} />
              <div className="modalInfoCatalogo">
                <h4>Acerca del servicio</h4>
                <p>{selectedService.description}</p>
                <button className="btnPrimaryCatalogo">Adquirir Servicio</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
