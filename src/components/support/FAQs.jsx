import React from 'react';

function FAQs() {
// Datos de preguntas frecuentes con preguntas y respuestas
  const faqs = [
    {
      question: "¿Qué tipos de cámaras de seguridad ofrece Smart Shield?",
      answer: "Smart Shield ofrece una amplia gama de cámaras de seguridad, incluyendo cámaras para interiores y exteriores, domos, cámaras bala, cámaras PTZ, cámaras IP, cámaras inalámbricas y timbres inteligentes. Nuestros productos son ideales para la seguridad de hogares y empresas."
    },
    {
      question: "¿Cómo elijo el sistema de seguridad adecuado para mis necesidades?",
      answer: "Para elegir el sistema de seguridad adecuado, considere el tamaño del área que desea monitorear, las necesidades de interior y exterior, la resolución, las opciones de conectividad y su presupuesto. Nuestro equipo puede ofrecerle una consulta gratuita para recomendarle el sistema más adecuado a sus necesidades específicas."
    },
    {
      question: "¿Funcionan las cámaras Smart Shield durante cortes de energía?",
      answer: "Muchos de nuestros sistemas de seguridad incluyen opciones de respaldo de batería para garantizar la monitorización continua durante cortes de energía. También ofrecemos cámaras con energía solar y sistemas con sistemas de alimentación ininterrumpida (SAI) para necesidades de seguridad críticas."
    },
    {
      question: "¿Puedo ver las imágenes de mi cámara de seguridad de forma remota?",
      answer: "Sí, todos los sistemas de cámaras Smart Shield incluyen aplicaciones móviles e interfaces web que permiten ver grabaciones en vivo y remotamente desde cualquier lugar con conexión a internet. Nuestras opciones de almacenamiento en la nube también garantizan la seguridad y el acceso a sus grabaciones."
    },
    {
      question: "¿Smart Shield ofrece instalación profesional?",
      answer: "Sí, ofrecemos servicios de instalación profesional para todos nuestros sistemas de seguridad. Nuestros técnicos certificados se asegurarán de que su sistema esté correctamente instalado, configurado y optimizado para sus necesidades de seguridad específicas."
    },
    {
      question: "¿Qué garantía ofrece Smart Shield en sus productos?",
      answer: "Smart Shield ofrece una garantía estándar de 2 años para todos los productos. También ofrecemos opciones de garantía extendida de hasta 5 años. Nuestra garantía cubre defectos de fabricación y el desgaste normal. Consulte el producto específico para obtener información detallada sobre la garantía."
    },
    {
      question: "¿El soporte técnico está incluido con mi compra?",
      answer: "Sí, todas las compras incluyen soporte técnico gratuito. Nuestro equipo de soporte está disponible por teléfono, correo electrónico y chat en vivo para ayudarle con la instalación, la resolución de problemas y cualquier otra pregunta que pueda tener sobre su sistema de seguridad."
    },
    {
      question: "¿Smart Shield ofrece servicios de monitoreo?",
      answer: "Sí, ofrecemos servicios de monitoreo profesional 24/7 por una tarifa mensual adicional. Nuestro centro de monitoreo le avisará a usted y a las autoridades competentes en caso de cualquier fallo de seguridad o emergencia detectada por su sistema."
    },
    {
      question: "¿Cuál es la política de devolución de los productos Smart Shield?",
      answer: "Ofrecemos una garantía de devolución de dinero de 30 días en todos nuestros productos. Si no está satisfecho con su compra por cualquier motivo, puede devolverla en su estado original para obtener un reembolso completo o un cambio dentro de los 30 días posteriores a la compra."
    },
    {
      question: "¿Qué tan seguros están los datos de mis cámaras de seguridad?",
      answer: "Smart Shield se toma muy en serio la seguridad de sus datos. Nuestros sistemas utilizan cifrado de extremo a extremo para toda la transmisión y el almacenamiento de video. También implementamos múltiples capas de seguridad para proteger contra el acceso no autorizado a sus grabaciones de seguridad e información personal."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes
</h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-2">¿Aún tienes preguntas?</h3>
        <p className="text-gray-600 mb-4">
          Comuníquese con nuestro equipo de soporte para obtener ayuda con cualquier otra pregunta o inquietud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/support" 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Contactar con soporte
          </a>
          <a 
            href="tel:+15551234567" 
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llámanos
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;