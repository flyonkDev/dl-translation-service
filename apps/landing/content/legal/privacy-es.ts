import type { LegalDoc } from './types';

const doc: LegalDoc = {
	updated: 'febrero de 2025',
	sections: [
		{
			id: 'notice',
			notice: {
				labelKey: 'legal.privacyNoticeLabel',
				body:
					'IDP Companion no está afiliado a ningún gobierno ni a la American Automobile Association (AAA). Usted adquiere un documento de traducción que acompaña a su permiso de conducir; no sustituye a su permiso y no es un Permiso Internacional de Conducir expedido por una administración pública.',
			},
		},
		{
			id: 'intro',
			heading: '1. Introducción',
			paragraphs: [
				`Esta Política de privacidad se aplica al sitio web y al servicio IDP Companion, operados por SKYFOM (Pty) Ltd (número de registro 2024/855156/07), sociedad constituida en Sudáfrica. La protección de su información personal es una prioridad para nosotros. Esta política explica cómo recopilamos, usamos, almacenamos y protegemos sus datos.`,
				`Léala con atención. Al utilizar nuestro Sitio web o Servicio, usted acepta las prácticas aquí descritas. Nuestra política está diseñada para cumplir la legislación aplicable en materia de protección de datos, incluida la Ley de Protección de la Información Personal (POPIA) de Sudáfrica y, cuando corresponda, el Reglamento General de Protección de Datos (GDPR) de la UE para usuarios del Espacio Económico Europeo.`,
				`Si tiene dudas sobre si esta política cumple los requisitos de su jurisdicción, póngase en contacto con nosotros.`,
			],
		},
		{
			id: 'eligibility',
			heading: '2. Elegibilidad',
			paragraphs: [
				`Al utilizar este Sitio web y aceptar esta Política de privacidad, usted confirma que ha alcanzado la mayoría de edad legal en su jurisdicción y tiene derecho a utilizar nuestros servicios.`,
			],
		},
		{
			id: 'collect',
			heading: '3. Información que recopilamos',
			listIntro: 'Recopilamos la información personal que usted facilita al solicitar un documento IDP Companion:',
			bullets: [
				'Nombre y apellidos',
				'Dirección de correo electrónico',
				'Número de teléfono',
				'Fecha de nacimiento',
				'Sexo',
				'País de expedición del permiso',
				'Categorías del permiso',
				'Número del permiso de conducir',
				'Fotografía del permiso de conducir',
				'Fotografía tipo retrato',
				'Firma',
			],
			trailingParagraphs: [
				`Información de pago: el pago lo procesa nuestro proveedor de pagos (Lemon Squeezy). No almacenamos los datos de su tarjeta de crédito, débito ni cuenta bancaria. Los datos de pago se rigen por la política de privacidad de Lemon Squeezy.`,
				`También podemos recopilar información automáticamente cuando utiliza nuestro Sitio web, como su dirección IP, tipo de dispositivo, navegador, páginas visitadas y tiempo en el sitio. Utilizamos cookies y tecnologías similares para ello (véase la sección 8).`,
			],
		},
		{
			id: 'use',
			heading: '4. Cómo utilizamos su información',
			listIntro: 'Utilizamos su información personal para:',
			bullets: [
				'Verificar su identidad y su permiso de conducir',
				'Generar su documento IDP Companion',
				'Tramitar su pedido y comunicarnos con usted al respecto',
				'Cumplir obligaciones legales y atender requerimientos legítimos',
				'Mejorar nuestro servicio y sitio web',
			],
			trailingParagraphs: [
				`No vendemos su información personal. No utilizamos sus datos con fines de marketing ajenos a su pedido salvo que usted haya dado su consentimiento por separado.`,
			],
		},
		{
			id: 'sharing',
			heading: '5. Cesión y divulgación',
			listIntro: 'Podemos compartir su información con:',
			bullets: [
				`Procesador de pagos (Lemon Squeezy) — para procesar su pago. Lemon Squeezy tiene su propia política de privacidad.`,
				`Proveedores de servicios — que nos prestan asistencia (p. ej., alojamiento). Están obligados a proteger sus datos.`,
				`Autoridades legales — cuando lo exija la ley, una orden judicial o para proteger nuestros derechos y la seguridad.`,
			],
			trailingParagraphs: [
				`En caso de venta del negocio, fusión o reestructuración, su información podrá transferirse al nuevo titular. Le notificaremos dichos cambios cuando la ley lo exija.`,
			],
		},
		{
			id: 'retention',
			heading: '6. Conservación de datos',
			paragraphs: [
				`Conservamos su información personal solo el tiempo necesario para prestar nuestros servicios, cumplir obligaciones legales (incluidos requisitos fiscales y contables) y resolver disputas. Puede solicitar la supresión de sus datos poniéndose en contacto con nosotros. Trataremos dichas solicitudes de conformidad con la ley aplicable. Podemos conservar datos de uso anonimizados para mejorar nuestro producto.`,
			],
		},
		{
			id: 'rights',
			heading: '7. Sus derechos',
			listIntro: 'Según su ubicación, puede tener derecho a:',
			bullets: [
				`Acceso — solicitar una copia de los datos personales que conservamos sobre usted`,
				`Rectificación — solicitar la corrección de información inexacta o desactualizada`,
				`Supresión — solicitar la eliminación de sus datos personales`,
				`Oponerse o limitar — oponerse o limitar determinados tratamientos (cuando proceda)`,
			],
			trailingParagraphs: [
				`Usuarios del EEE y del Reino Unido: si se encuentra en el Espacio Económico Europeo o en el Reino Unido, dispone de derechos adicionales en virtud del GDPR, incluidos la portabilidad de los datos y presentar una reclamación ante una autoridad de control.`,
			],
			contactWithEmail: {
				beforeKey: 'legal.privacyRightsBefore',
				afterKey: 'legal.privacyRightsAfter',
			},
		},
		{
			id: 'cookies',
			heading: '8. Cookies y tecnologías similares',
			paragraphs: [
				`Como muchos sitios web, utilizamos cookies y registros del servidor para recopilar información sobre el uso del sitio. Esto puede incluir la fecha y hora de las visitas, las páginas vistas, el tiempo en el sitio y su dirección IP.`,
				`Las cookies son pequeños archivos almacenados en su dispositivo. Puede rechazarlas ajustando la configuración del navegador; no obstante, algunas funciones pueden no operar correctamente sin ellas.`,
				`Utilizamos cookies para el funcionamiento básico del sitio, para entender patrones de uso y mejorar nuestro servicio. No utilizamos cookies con fines publicitarios conductuales o segmentados.`,
			],
		},
		{
			id: 'security',
			heading: '9. Seguridad',
			paragraphs: [
				`Nos tomamos en serio la protección de su información personal. Aplicamos medidas habituales en el sector, incluido el cifrado SSL para los datos transmitidos entre usted y nuestros servidores. Puede comprobarlo mediante el icono del candado o «https» en la barra de direcciones.`,
				`Aplicamos medidas técnicas y organizativas razonables para proteger sus datos frente a accesos no autorizados, pérdida o uso indebido. No obstante, ningún método de transmisión o almacenamiento es 100 % seguro; no podemos garantizar una seguridad absoluta.`,
				`Si tuviéramos conocimiento de una brecha de seguridad que afecte a su información personal, procuraremos notificarle a usted y a las autoridades competentes cuando la ley lo exija.`,
			],
		},
		{
			id: 'international',
			heading: '10. Transferencias internacionales',
			paragraphs: [
				`Nuestros servidores y operaciones pueden encontrarse fuera de Sudáfrica. Al utilizar nuestro Servicio, usted consiente la transferencia y el tratamiento de su información en dichas ubicaciones. Garantizamos las salvaguardias adecuadas cuando lo exija la ley aplicable.`,
			],
		},
		{
			id: 'changes',
			heading: '11. Cambios en esta política',
			paragraphs: [
				`Podemos actualizar esta Política de privacidad ocasionalmente. La fecha de «Última actualización» en la parte superior indica la última revisión. Le recomendamos revisar esta página periódicamente. El uso continuado del Sitio web y del Servicio tras la publicación de cambios implica la aceptación de la política actualizada.`,
			],
		},
		{
			id: 'contact',
			heading: '12. Contacto',
			addressLines: [
				'SKYFOM (Pty) Ltd',
				'301 Long Street, Cape Town, South Africa',
				'Número de registro: 2024/855156/07',
			],
			contactWithEmail: {
				beforeKey: 'legal.privacyContactBefore',
				afterKey: 'legal.privacyContactAfter',
			},
		},
	],
};

export default doc;
