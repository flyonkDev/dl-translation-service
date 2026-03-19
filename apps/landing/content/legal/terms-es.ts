import type { LegalDoc } from './types';

const doc: LegalDoc = {
	updated: 'febrero de 2025',
	sections: [
		{
			id: 'intro',
			heading: 'Introducción',
			paragraphs: [
				`Este sitio web («Sitio web») lo opera SKYFOM (Pty) Ltd (número de registro 2024/855156/07), una sociedad constituida en Sudáfrica, que presta el servicio IDP Companion. En este documento, «nosotros», «nos» y «nuestro» se refieren a SKYFOM (Pty) Ltd. Ponemos a su disposición este Sitio web, incluida toda la información, herramientas y servicios, condicionado a que usted («Usted», «usted», «Cliente») acepte todos los términos, condiciones, políticas y avisos aquí establecidos.`,
				`Al visitar o utilizar nuestro Sitio web o Servicios, usted utiliza nuestro «Servicio» y acepta quedar vinculado por los presentes términos y condiciones («Términos y condiciones», «Términos»), incluidos los términos y políticas adicionales a los que se haga referencia o que estén disponibles mediante hipervínculo.`,
				`Toda la comunicación con el Cliente, como confirmaciones de pedido y recibos, se realizará por medios electrónicos.`,
				`Estos Términos se aplican a todos los usuarios del Sitio web. Léalos con atención antes de acceder o utilizar el Sitio web. Si no está de acuerdo con todos los términos y condiciones, no podrá acceder al Sitio web ni utilizar los Servicios.`,
			],
		},
		{
			id: 'eligibility',
			heading: '1. Elegibilidad',
			listIntro: 'Al utilizar nuestros Servicios, usted confirma que:',
			bullets: [
				'Tiene al menos 18 años.',
				`Dispone de un permiso de conducir válido expedido por la administración, que no esté caducado, suspendido, revocado o anulado, y que siga siendo válido al menos un (1) mes desde la fecha de la solicitud.`,
				`Reconoce que el documento IDP Companion que proporcionamos es una traducción informativa de su permiso nacional de conducir y no es un documento autónomo. Debe utilizarse siempre junto con su permiso válido expedido por la administración.`,
				'Es plenamente responsable de cumplir la normativa de tráfico local, regional o internacional que le sea aplicable.',
				`Acepta no conducir basándose únicamente en nuestro documento y entiende que sirve exclusivamente como documento complementario de traducción de su permiso de conducir vigente.`,
			],
		},
		{
			id: 'nature',
			heading: '2. Naturaleza del documento IDP Companion',
			listIntro: 'El documento IDP Companion:',
			bullets: [
				`Es un documento PDF digital con una traducción informativa de los datos de su permiso de conducir.`,
				`No es un Permiso Internacional de Conducir (IDP) expedido por una administración pública. Es un documento complementario de traducción prestado por una entidad privada para ayudar a rentadoras y otras partes a entender su permiso cuando viaja al extranjero.`,
				`Está destinado a usarse junto con su permiso de conducir original en todo momento.`,
				'Se entrega en formato digital; no hay entrega física.',
			],
		},
		{
			id: 'responsibility',
			heading: '3. Su responsabilidad en el uso',
			listIntro: 'Usted comprende y acepta que es el único responsable de:',
			bullets: [
				'Determinar si en su país de destino se exige un documento de traducción o un IDP oficial.',
				`Comprobar si nuestro documento IDP Companion será aceptado por una autoridad u organización concreta (p. ej., rentadoras de vehículos, fuerzas de seguridad, control fronterizo) en el país donde pretenda utilizarlo.`,
			],
			closingWithLink: {
				before:
					'No garantizamos que nuestro documento sea aceptado en ningún país o situación concretos. La falta de comprobación previa de su aceptación no constituye motivo de reembolso, salvo lo expresamente previsto en nuestra ',
				path: '/refund-policy',
				linkLabelKey: 'legal.linkRefundPolicy',
				after: '.',
			},
		},
		{
			id: 'dataPrivacy',
			heading: '4. Almacenamiento de datos y privacidad',
			listIntro:
				'Al contratar nuestro Servicio, usted acepta la recopilación y el almacenamiento seguro de sus datos personales, incluidos nombre, dirección, datos del permiso de conducir y documentación de apoyo. Esta información se conserva:',
			bullets: [
				'Exclusivamente para verificar y confirmar la autenticidad de su solicitud y del documento generado.',
				'Para cumplir requerimientos legales o de las fuerzas de seguridad cuando proceda.',
				'De conformidad con la legislación aplicable en materia de protección de datos y privacidad.',
			],
			closingWithLink: {
				before:
					'No vendemos ni cedemos sus datos a terceros con fines de marketing u otros fines comerciales ajenos a nuestros Servicios. Para más información, consulte nuestra ',
				path: '/privacy-policy',
				linkLabelKey: 'legal.linkPrivacyPolicy',
				after: '.',
			},
		},
		{
			id: 'acceptableUse',
			heading: '5. Uso aceptable',
			listIntro:
				'Usted se compromete a utilizar el Sitio web y los Servicios únicamente con fines lícitos. Entre otras conductas, queda prohibido:',
			bullets: [
				'Violar los derechos de terceros.',
				'Realizar actividades fraudulentas, abusivas o perjudiciales.',
				'Utilizar cualquier parte del Sitio web o del Servicio con fines comerciales sin nuestro consentimiento previo por escrito.',
			],
		},
		{
			id: 'services',
			heading: '6. Servicios, precios y pago',
			bullets: [
				'Todos los Servicios se prestan exclusivamente en línea.',
				'Nos reservamos el derecho a modificar o interrumpir cualquier servicio sin previo aviso.',
				'Los precios se muestran en la divisa indicada en el Sitio web y pueden no incluir IVA, aranceles u otros impuestos, según su ubicación.',
				'El pago se procesa a través de nuestro proveedor de pagos autorizado (Paddle). Debe facilitar datos de pago exactos y completos.',
				{
					kind: 'link',
					before: 'Ofrecemos reembolsos en condiciones concretas, descritas en nuestra ',
					path: '/refund-policy',
					linkLabelKey: 'legal.linkRefundPolicy',
					after:
						'. No somos responsables si nuestro documento no es aceptado debido a que usted no haya verificado su idoneidad o aceptación en una jurisdicción determinada.',
				},
			],
		},
		{
			id: 'ip',
			heading: '7. Propiedad intelectual',
			paragraphs: [
				`Todo el contenido de nuestro Sitio web está protegido por la legislación aplicable en materia de derechos de autor. Puede descargar una copia del documento generado para su uso personal y no comercial únicamente. Queda prohibida la distribución, modificación o uso comercial de nuestro contenido sin nuestro consentimiento previo por escrito.`,
			],
		},
		{
			id: 'thirdParty',
			heading: '8. Servicios y enlaces de terceros',
			paragraphs: [
				`Podemos utilizar servicios de terceros (como procesadores de pago) o proporcionar enlaces a sitios externos. Usted los utiliza bajo su propio riesgo. No somos responsables de su contenido, exactitud ni prácticas de privacidad.`,
			],
		},
		{
			id: 'feedback',
			heading: '9. Comentarios y sugerencias',
			paragraphs: [
				`Si nos envía ideas, comentarios o sugerencias, acepta que podemos utilizarlas libremente sin obligación hacia usted. Usted es el único responsable del contenido que envíe y no debe infringir la ley ni los derechos de terceros.`,
			],
		},
		{
			id: 'disclaimers',
			heading: '10. Exenciones de responsabilidad y limitación de responsabilidad',
			paragraphs: [
				`Nuestros Servicios se ofrecen «tal cual» y «según disponibilidad». No garantizamos un acceso ininterrumpido o libre de errores. Renunciamos a todas las garantías implícitas y no seremos responsables de ningún daño, incluida la pérdida de datos, ingresos u oportunidades, salvo cuando la ley lo exija.`,
			],
		},
		{
			id: 'indemnification',
			heading: '11. Indemnización',
			paragraphs: [
				`Usted se compromete a indemnizar y mantener indemne a SKYFOM (Pty) Ltd (que opera como IDP Companion), así como a sus filiales y representantes, frente a reclamaciones derivadas del incumplimiento de estos Términos o del uso indebido de nuestros Servicios.`,
			],
		},
		{
			id: 'governing',
			heading: '12. Ley aplicable',
			paragraphs: [
				`Estos Términos se rigen por las leyes de la República de Sudáfrica. Cualquier controversia se resolverá exclusivamente ante los tribunales de Sudáfrica.`,
			],
		},
		{
			id: 'changes',
			heading: '13. Cambios en los Términos',
			paragraphs: [
				`Podemos actualizar estos Términos en cualquier momento publicando los cambios en esta página. El uso continuado del Sitio web y del Servicio implica la aceptación de los Términos actualizados.`,
			],
		},
		{
			id: 'contact',
			heading: '14. Contacto',
			addressLines: [
				'SKYFOM (Pty) Ltd',
				'301 Long Street, Cape Town, South Africa',
				'Número de registro: 2024/855156/07',
				'Número fiscal: 9293459260',
			],
			contactWithEmail: {
				beforeKey: 'legal.termsContactBefore',
				afterKey: 'legal.termsContactAfter',
			},
		},
	],
};

export default doc;
