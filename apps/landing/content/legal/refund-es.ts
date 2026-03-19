import type { LegalDoc } from './types';

const doc: LegalDoc = {
	updated: 'febrero de 2025',
	sections: [
		{
			id: 'overview',
			heading: 'Resumen',
			paragraphs: [
				`IDP Companion proporciona un documento digital de traducción del permiso de conducir en formato PDF. No es un Permiso Internacional de Conducir (IDP) expedido por una administración pública. Nuestro documento está pensado como complemento de traducción para ayudar a rentadoras y otras partes a entender su permiso cuando viaja al extranjero.`,
				`Respaldamos nuestro producto. Si no entregamos el servicio o si una rentadora de vehículos no acepta el documento en las circunstancias descritas a continuación, le reembolsaremos. Todas las solicitudes de reembolso deben ir acompañadas de la documentación de respaldo cuando sea necesario.`,
			],
		},
		{
			id: 'rental',
			heading: '1. Rechazo de la rentadora — reembolso completo',
			paragraphs: [
				`Si una rentadora se niega a aceptar su documento IDP Companion cuando lo presenta junto con su permiso de conducir original, le emitiremos un reembolso completo.`,
			],
			listIntro: 'Requisitos:',
			bullets: [
				'Prueba escrita del rechazo por parte de la rentadora (p. ej., correo, carta o declaración firmada en papel con membrete)',
				'El rechazo debe haber ocurrido dentro del periodo de validez del plan adquirido',
				'Debe haber presentado tanto el documento IDP Companion como su permiso de conducir original',
			],
			trailingParagraphs: [
				`Contáctenos en {{EMAIL}} con los datos de su pedido y la documentación de respaldo. Los reembolsos se procesan en un plazo de 5 a 10 días laborables.`,
			],
		},
		{
			id: 'download',
			heading: '2. Documento no disponible para descarga — reembolso completo',
			paragraphs: [
				`Su documento está disponible para descarga en nuestro sitio web inmediatamente después del pago. En esta fase no hay entrega física ni envío por correo: descarga el PDF directamente en el sitio.`,
				`Si su PDF no está disponible para descarga en un plazo de 2 horas tras completar el pago (por un error nuestro), tiene derecho a un reembolso completo. Esto aplica cuando su solicitud incluía documentos e información completos y aprobados.`,
				`Contáctenos en {{EMAIL}} con los datos de su pedido. Investigaremos y le reembolsaremos el importe íntegro si el retraso fue por nuestra parte.`,
			],
		},
		{
			id: 'changeOfMind',
			heading: '3. Arrepentimiento — ventana de 12 horas',
			paragraphs: [
				`Si cambia de opinión en un plazo de doce (12) horas desde la compra, puede solicitar un reembolso completo.`,
				`Debe contactarnos en {{EMAIL}} dentro de ese plazo. Incluya en su correo:`,
			],
			bullets: [
				'Su ID de pedido o el correo utilizado en la compra',
				'Una breve explicación del motivo del reembolso',
			],
			trailingParagraphs: [
				`Las solicitudes por arrepentimiento transcurridas más de 12 horas no están garantizadas y se evaluarán caso por caso.`,
			],
		},
		{
			id: 'notRefunded',
			heading: '4. Qué no reembolsamos',
			bullets: [
				`Aceptación por fuerzas de seguridad o policía — No garantizamos que nuestro documento sea aceptado por la policía u otras autoridades. Es un complemento de traducción orientado al alquiler de vehículos y usos similares. No se conceden reembolsos únicamente por rechazo de las fuerzas de seguridad.`,
				`Rechazo sin documentación — Las solicitudes por rechazo de la rentadora deben incluir prueba escrita de la empresa. No podemos tramitar solicitudes sin documentación de respaldo.`,
				`Documentos perdidos — Si pierde su PDF, contáctenos: podemos ayudarle a recuperarlo. No es un supuesto de reembolso.`,
			],
		},
		{
			id: 'howTo',
			heading: '5. Cómo solicitar un reembolso',
			listIntro: 'Envíe un correo a {{EMAIL}} con:',
			bullets: [
				'Su ID de pedido o el correo utilizado en la compra',
				'El motivo de la solicitud de reembolso',
				'Documentación de respaldo (en caso de rechazo de la rentadora: prueba de la empresa)',
			],
			trailingParagraphs: [
				`Responderemos en un plazo de 2 días laborables y procesaremos los reembolsos elegibles en 5–10 días laborables. Los reembolsos se emiten al método de pago original.`,
			],
		},
		{
			id: 'contact',
			heading: '6. Contacto',
			paragraphs: [
				`IDP Companion es operado por SKYFOM (Pty) Ltd, 301 Long Street, Cape Town, South Africa.`,
			],
			contactWithEmail: {
				beforeKey: 'legal.refundClosingBefore',
				afterKey: 'legal.refundClosingAfter',
			},
		},
	],
};

export default doc;
