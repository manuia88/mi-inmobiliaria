import { Shield, Lock, Eye, FileText } from 'lucide-react'

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-xl text-primary-100">
            Livoo Bienes Raíces
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Fecha de última actualización */}
          <div className="mb-8 pb-6 border-b">
            <p className="text-sm text-gray-500">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Introducción */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-primary-600" />
              1. Introducción
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En <strong>Livoo Bienes Raíces</strong> ("nosotros", "nuestro" o "la empresa"), 
              nos comprometemos a proteger la privacidad y seguridad de sus datos personales. 
              Este Aviso de Privacidad describe cómo recopilamos, utilizamos, almacenamos y 
              protegemos su información personal cuando utiliza nuestros servicios.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Al utilizar nuestros servicios, usted acepta las prácticas descritas en este 
              Aviso de Privacidad. Si no está de acuerdo con alguna parte de este aviso, 
              le recomendamos que no utilice nuestros servicios.
            </p>
          </section>

          {/* Responsable */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-primary-600" />
              2. Responsable del Tratamiento de Datos
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Razón Social:</strong> Livoo Bienes Raíces
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Correo Electrónico:</strong> manuel@livoo.io
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Teléfono:</strong> +52 55 4064 6386
              </p>
            </div>
          </section>

          {/* Datos Recopilados */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-primary-600" />
              3. Datos Personales que Recopilamos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Recopilamos los siguientes tipos de datos personales cuando utiliza nuestros servicios:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Datos de Identificación:</strong> Nombre completo, correo electrónico, 
                número de teléfono.
              </li>
              <li>
                <strong>Datos de Propiedades:</strong> Información sobre propiedades que desea 
                comprar, vender o rentar, incluyendo dirección, características, precio, etc.
              </li>
              <li>
                <strong>Datos de Comunicación:</strong> Mensajes, consultas y comunicaciones 
                que nos envía a través de nuestros formularios de contacto.
              </li>
              <li>
                <strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, páginas 
                visitadas, fecha y hora de acceso (recopilados automáticamente).
              </li>
            </ul>
          </section>

          {/* Finalidad */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2 text-primary-600" />
              4. Finalidad del Tratamiento de Datos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos sus datos personales para las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Gestión de Leads:</strong> Procesar y gestionar sus solicitudes de 
                información sobre propiedades, compra, venta o renta de bienes raíces.
              </li>
              <li>
                <strong>Comunicación:</strong> Responder a sus consultas, proporcionar 
                información sobre propiedades disponibles y mantener comunicación relacionada 
                con nuestros servicios.
              </li>
              <li>
                <strong>Mejora de Servicios:</strong> Analizar el uso de nuestros servicios 
                para mejorar la experiencia del usuario y optimizar nuestros procesos.
              </li>
              <li>
                <strong>Cumplimiento Legal:</strong> Cumplir con obligaciones legales y 
                regulatorias aplicables.
              </li>
            </ul>
          </section>

          {/* Compartir Datos */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Compartir Datos con Terceros
            </h2>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed font-semibold mb-2">
                No compartimos sus datos personales con terceros, excepto en las siguientes 
                circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Cuando sea necesario para cumplir con una obligación legal o una orden judicial.
                </li>
                <li>
                  Con proveedores de servicios que nos ayudan a operar nuestro negocio (como 
                  servicios de hosting, análisis de datos), siempre bajo estrictos acuerdos 
                  de confidencialidad.
                </li>
                <li>
                  En caso de una fusión, adquisición o venta de activos, previa notificación 
                  a los usuarios afectados.
                </li>
              </ul>
            </div>
          </section>

          {/* Seguridad */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Medidas de Seguridad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus 
              datos personales contra acceso no autorizado, alteración, divulgación o destrucción. 
              Estas medidas incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Encriptación de datos en tránsito y en reposo.</li>
              <li>Acceso restringido a datos personales solo para personal autorizado.</li>
              <li>Uso de Google reCAPTCHA para prevenir spam y abuso.</li>
              <li>Monitoreo regular de nuestros sistemas de seguridad.</li>
            </ul>
          </section>

          {/* Derechos ARCO */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Sus Derechos (Derechos ARCO)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Acceso:</strong> Solicitar información sobre los datos personales que 
                tenemos sobre usted.
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o 
                incompletos.
              </li>
              <li>
                <strong>Cancelación:</strong> Solicitar la eliminación de sus datos personales 
                cuando ya no sean necesarios.
              </li>
              <li>
                <strong>Oposición:</strong> Oponerse al tratamiento de sus datos personales 
                para fines específicos.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Para ejercer estos derechos, puede contactarnos en: <strong>manuel@livoo.io</strong>
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro 
              sitio web. Puede configurar su navegador para rechazar cookies, aunque esto puede 
              afectar algunas funcionalidades del sitio.
            </p>
          </section>

          {/* Cambios */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Cambios a este Aviso de Privacidad
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de actualizar este Aviso de Privacidad en cualquier 
              momento. Le notificaremos sobre cambios significativos mediante un aviso en nuestro 
              sitio web o por correo electrónico. La fecha de última actualización se indica al 
              inicio de este documento.
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contacto
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas, comentarios o solicitudes relacionadas con este Aviso de 
                Privacidad o el tratamiento de sus datos personales, puede contactarnos:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Email:</strong> manuel@livoo.io<br />
                <strong>Teléfono:</strong> +52 55 4064 6386
              </p>
            </div>
          </section>

          {/* Footer del documento */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-gray-500">
              Este Aviso de Privacidad cumple con la Ley Federal de Protección de Datos Personales 
              en Posesión de los Particulares (LFPDPPP) de México.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

