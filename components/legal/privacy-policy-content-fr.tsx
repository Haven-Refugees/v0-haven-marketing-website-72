"use client"

import { Fragment } from "react"

type Block =
  | { type: "p"; text: string; lead?: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "table" }
  | { type: "contact" }

const tableOfContents = [
  "Qu'entend-on par « renseignements personnels »?",
  "Quels renseignements personnels Haven recueille-t-elle?",
  "Comment Haven utilise-t-elle les renseignements personnels?",
  "Filtrage des messages à des fins de sécurité",
  "Dans quelles circonstances Haven peut-elle communiquer des renseignements personnels?",
  "Comment Haven protège-t-elle les renseignements personnels?",
  "Combien de temps Haven conserve-t-elle les renseignements personnels?",
  "Transfert transfrontalier de données et conservation",
  "Quels sont vos choix?",
  "Quels sont vos droits?",
  "Renseignements concernant les mineurs",
  "Modifications de la présente politique de confidentialité",
  "Nous joindre",
]

const retentionRows: [string, string][] = [
  [
    "Renseignements ayant servi à prendre une décision concernant une personne (par exemple, dans le cadre d'un examen de sécurité)",
    "Jusqu'à 24 mois à compter de la décision, puis suppression (la loi exige au moins 12 mois)",
  ],
  [
    "Messages envoyés sur Haven",
    "Conservés à titre d'historique de conversation tant que votre compte existe, afin que vous et votre interlocuteur puissiez vous référer à ce dont vous avez discuté",
  ],
  [
    "Dossiers de filtrage et d'examen de sécurité (date, résultat, examinateur le cas échéant — aucun contenu de conversation)",
    "Jusqu'à 24 mois à compter de la décision",
  ],
  ["Documents d'admissibilité", "Supprimés lorsqu'un membre du personnel en confirme la validité"],
  [
    "Votre dossier d'acceptation de nos conditions et avis (le texte exact affiché, la date, la version, la langue)",
    "Durée de vie de votre compte, plus 24 mois",
  ],
  [
    "Renseignements de compte et de profil",
    "Durée de vie de votre compte, puis suppression ou dépersonnalisation",
  ],
  [
    "Dossiers de consentement et de retrait en matière de marketing (ce à quoi vous avez consenti ou renoncé, et à quel moment)",
    "Conservés aussi longtemps que nécessaire pour démontrer le consentement et honorer vos demandes de retrait",
  ],
]

const sections: { title: string; blocks: Block[] }[] = [
  {
    title: "1. Qu'entend-on par « renseignements personnels »?",
    blocks: [
      {
        type: "p",
        text: "Dans la présente politique de confidentialité, « renseignements personnels » s'entend généralement de tout renseignement concernant une personne physique identifiable.",
      },
      {
        type: "p",
        text: "Cela peut comprendre, par exemple, votre nom, votre numéro de téléphone, votre adresse résidentielle, votre adresse courriel, votre date de naissance ou d'autres renseignements vous concernant. Cela peut également comprendre d'autres types de renseignements de nature plus technique, mais uniquement lorsque ces renseignements permettent de vous identifier en tant que personne. Les renseignements anonymisés de manière irréversible, qui ne permettent plus d'identifier la personne directement ou indirectement et qui ne peuvent être associés à une personne identifiable, ne sont pas considérés comme des renseignements personnels.",
      },
    ],
  },
  {
    title: "2. Quels renseignements personnels Haven recueille-t-elle?",
    blocks: [
      { type: "h3", text: "2.1 Renseignements que vous nous fournissez directement" },
      { type: "h4", text: "Quand" },
      { type: "p", text: "Nous pouvons vous demander de fournir des renseignements personnels lorsque :" },
      {
        type: "ul",
        items: [
          "vous utilisez le Site Web pour créer un compte d'utilisateur;",
          "vous communiquez directement avec nous par téléphone ou par plateforme de visioconférence;",
          "nous vous accordons un compte d'utilisateur avec plein accès au Site Web;",
          "vous participez à une promotion commerciale ou publicitaire;",
          "vous vous inscrivez à un webinaire ou à un autre événement organisé par Haven, ou y assistez;",
          "vous participez à des programmes que nous pouvons offrir de temps à autre;",
          "vous participez à des conversations avec d'autres utilisateurs de Haven par l'entremise du Site Web.",
        ],
      },
      {
        type: "p",
        text: "Si vous choisissez de nous fournir les renseignements personnels d'un tiers (son nom, son adresse courriel et d'autres renseignements personnels pertinents) en référant des utilisateurs à Haven, vous déclarez avoir obtenu la permission de ce tiers.",
      },
      { type: "h4", text: "Quoi" },
      {
        type: "p",
        text: "Nous recueillons des renseignements personnels pouvant comprendre vos prénom et nom, votre adresse courriel, votre numéro de téléphone, votre date de naissance, les images que vous téléversez sur le Site Web, votre ville et votre pays actuels, votre ville et votre pays de destination, votre ville et votre pays de naissance, la ou les langues que vous parlez, l'étape de votre parcours d'établissement, la composition et la structure de votre famille, les commentaires que vous formulez sur le site Web, ainsi que tout autre renseignement biographique que vous pourriez fournir (y compris tout ce que vous décidez de nous communiquer au sujet de votre profil, par exemple votre situation de logement ou vos conditions de vie générales).",
      },
      {
        type: "p",
        lead: "Messages.",
        text: "Lorsque vous envoyez des messages au moyen de la messagerie de Haven, ces messages sont traités par nos systèmes de sécurité. La section 4 explique pourquoi, qui peut les consulter et quelles limites strictes s'appliquent.",
      },
      {
        type: "p",
        lead: "Documents d'admissibilité.",
        text: "Pour certains programmes, nous demandons à une partie des candidats des documents confirmant leur identité, leur statut d'immigration ou de personne réfugiée, ou leur admissibilité au programme. Un membre du personnel formé examine le document et consigne le résultat, puis le document est supprimé. Nous ne conservons aucune copie des documents d'admissibilité après leur examen et nous ne les utilisons jamais, non plus que les renseignements qu'ils contiennent, à des fins de publicité, de marketing ou à toute autre fin que la confirmation de l'admissibilité.",
      },
      { type: "h3", text: "2.2 Renseignements que nous recueillons automatiquement à partir de votre appareil" },
      { type: "h4", text: "Quand" },
      {
        type: "p",
        text: "Comme la plupart des services en ligne, nous pouvons utiliser des témoins (« cookies ») et d'autres technologies, telles que des balises Web, le stockage Web et des identifiants publicitaires uniques, pour recueillir des renseignements sur votre activité, votre navigateur et votre appareil lorsque vous utilisez le Site Web. Nos fournisseurs de services et nous pouvons également recueillir automatiquement certains renseignements techniques provenant de votre ordinateur ou de votre appareil mobile, au fil du temps et sur différents sites Web, lorsque vous utilisez le Site Web.",
      },
      { type: "h4", text: "Quoi" },
      {
        type: "p",
        text: "Les renseignements que nous recueillons lorsque vous accédez au Site Web peuvent comprendre votre adresse IP, le type d'appareil que vous utilisez, le pays depuis lequel vous consultez le Site Web, votre type de navigateur, votre système d'exploitation, les pages que vous consultez sur le Site Web, les pages que vous consultez immédiatement avant et après avoir accédé au Site Web, les termes de recherche que vous saisissez sur le Site Web et les liens sur lesquels vous cliquez. Ces renseignements nous permettent de vous reconnaître et de personnaliser votre expérience si vous revenez sur le Site Web, ainsi que d'améliorer celui-ci.",
      },
    ],
  },
  {
    title: "3. Comment Haven utilise-t-elle les renseignements personnels?",
    blocks: [
      { type: "p", text: "Nous pouvons utiliser vos renseignements personnels à diverses fins, notamment pour :" },
      {
        type: "ul",
        items: [
          "rendre votre profil accessible aux autres utilisateurs du Site Web;",
          "développer, exploiter, améliorer, offrir, entretenir et protéger le Site Web;",
          "protéger la sécurité des participants aux programmes de Haven, notamment en filtrant les messages envoyés sur Haven afin d'y déceler des signes de préjudice, comme il est décrit à la section 4;",
          "personnaliser votre expérience lorsque vous utilisez le Site Web, par exemple en offrant des éléments interactifs ou personnalisés et en vous proposant du contenu en fonction de vos intérêts;",
          "suivre et analyser les tendances et l'utilisation du Site Web;",
          "améliorer le service à la clientèle, notamment pour répondre plus efficacement à vos demandes et à vos besoins de soutien;",
          "protéger la sécurité ou l'intégrité du Site Web, de nos activités ou de nos services, notamment pour prévenir la fraude et d'autres activités interdites ou illégales;",
          "vous transmettre des communications de marketing, du matériel promotionnel ou des publicités susceptibles de vous intéresser, lorsque vous y avez consenti, notamment par courriel ou par message texte. Vous pouvez en tout temps choisir de cesser de recevoir des messages de marketing en cliquant sur « se désabonner » dans un courriel ou en répondant STOP à un message texte;",
          "vous transmettre des communications, notamment par courriel, téléphone, message texte ou visioconférence. Par exemple, nous pouvons utiliser le courriel pour répondre à des demandes de soutien ou pour vous transmettre des renseignements sur le Site Web ou des avis exigés par la loi;",
          "faire respecter nos Règles de la communauté, notre Contrat de licence d'utilisateur final et nos autres politiques d'utilisation, enquêter sur les conduites qui y contreviennent et les signaler, répondre aux demandes des autorités policières et respecter les exigences légales;",
          "toute autre fin qui vous est communiquée au moment de la collecte ou qui est exigée ou permise par la loi.",
        ],
      },
      {
        type: "p",
        text: "Nous ne vendons vos renseignements à aucun tiers. Nous n'utilisons vos renseignements personnels à aucune fin qui n'est pas décrite dans la présente politique de confidentialité; si nous envisagions une nouvelle fin, nous vous en informerions et, lorsque la loi l'exige, nous vous demanderions votre consentement.",
      },
    ],
  },
  {
    title: "4. Filtrage des messages à des fins de sécurité",
    blocks: [
      {
        type: "p",
        text: "En bref : un système informatique vérifie les messages envoyés sur Haven afin d'y déceler des signes de préjudice. Personne chez Haven ne lit vos messages, à moins que le système ne signale un problème possible. C'est une personne, jamais le système seul, qui décide de la suite.",
      },
      {
        type: "p",
        lead: "Ce qui se passe.",
        text: "Un logiciel filtre les messages envoyés au moyen de la messagerie de Haven afin d'y déceler des signes de préjudice envers les participants : demandes d'argent ou de renseignements financiers; messages ou sollicitations à caractère sexuel; menaces, intimidation ou harcèlement; et pressions visant à poursuivre la conversation à l'extérieur de Haven. Le logiciel analyse le contenu et la conduite de la conversation à la recherche de ces signes.",
      },
      {
        type: "p",
        lead: "Pourquoi.",
        text: "Haven jumelle des personnes qui ont pu traverser des circonstances très difficiles avec des bénévoles issus du grand public. Le filtrage n'existe que pour une seule raison : la sécurité des participants.",
      },
      {
        type: "p",
        lead: "Qui voit quoi.",
        text: "Personne chez Haven ne lit vos messages, à moins que le logiciel ne signale un problème possible. Le cas échéant, les membres du personnel de Haven formés dont les fonctions l'exigent examinent le contenu signalé; l'accès est limité à ces personnes et chaque accès est consigné. Le contenu des messages n'est jamais utilisé par les autres systèmes de Haven, y compris les outils d'analyse ou de publicité, et n'est jamais communiqué à des fournisseurs de publicité.",
      },
      {
        type: "p",
        lead: "Comment fonctionne la technologie.",
        text: "Le logiciel de filtrage analyse le contenu et la conduite des conversations afin d'évaluer le comportement à la recherche des signes énumérés ci-dessus. Il s'agit d'un élément obligatoire de l'utilisation de la messagerie de Haven — il ne peut être désactivé et il s'applique à tous les messages envoyés sur la Plateforme. Il sert uniquement à déceler les préjudices décrits dans la présente section.",
      },
      {
        type: "p",
        lead: "C'est toujours une personne qui décide.",
        text: "Aucune décision vous concernant — avertissement, restriction, suspension, retrait — n'est jamais prise par un logiciel seul. Dans tous les cas, un membre du personnel de Haven examine le contenu et prend la décision.",
      },
    ],
  },
  {
    title: "5. Dans quelles circonstances Haven peut-elle communiquer des renseignements personnels?",
    blocks: [
      {
        type: "p",
        text: "Nous pouvons communiquer les renseignements que nous recueillons auprès de vous par l'entremise du Site Web dans les cas suivants :",
      },
      {
        type: "ul",
        items: [
          "à d'autres organisations et entreprises qui nous fournissent des services (par exemple, des fournisseurs d'hébergement, des fournisseurs d'analyse de sécurité, des fournisseurs de vérification d'identité et d'antécédents, et des fournisseurs d'entretien de site Web). Nous exigeons de ces fournisseurs de services, par entente écrite, qu'ils protègent les renseignements personnels au moyen de mesures de sécurité appropriées, qu'ils les utilisent uniquement pour nous fournir des services et qu'ils nous les retournent ou les suppriment à la fin de leur mandat;",
          "lorsque la loi l'exige, par exemple pour se conformer à une assignation ou à une autre procédure judiciaire, ou pour respecter des obligations de déclaration gouvernementales — y compris toute obligation de signaler un préjudice ou un risque de préjudice à l'égard d'un enfant aux autorités de protection de la jeunesse;",
          "lorsque nous croyons de bonne foi que la communication est nécessaire a) pour protéger nos droits, l'intégrité du Site Web, votre sécurité ou celle d'autrui, ou b) pour déceler, prévenir ou traiter la fraude, la contrefaçon de propriété intellectuelle, les violations de nos politiques, les violations de la loi ou d'autres utilisations abusives du Site Web. Lorsque la loi permet la communication afin de protéger une personne d'un risque grave et urgent, nous ne communiquons que ce qui est nécessaire et nous consignons la communication;",
          "à des fournisseurs de services, à des conseillers, à des partenaires transactionnels potentiels ou à d'autres tiers dans le cadre de l'examen, de la négociation ou de la réalisation d'une opération d'entreprise par laquelle nous serions acquis par une autre société ou fusionnés avec elle, ou par laquelle nous vendrions, liquiderions ou transférerions la totalité ou une partie de nos actifs. Nous prendrons des mesures pour que vos renseignements personnels demeurent protégés conformément à la loi applicable.",
        ],
      },
      {
        type: "p",
        text: "Nous pouvons également communiquer à des tiers qui nous fournissent des services des renseignements agrégés, anonymisés ou dépersonnalisés, dans la mesure permise par les lois applicables.",
      },
      {
        type: "p",
        text: "Nous vous informerons si nous avons communiqué vos renseignements personnels en vertu de la présente section, sauf si la loi nous en empêche ou si le fait de vous en informer mettrait une personne en danger.",
      },
    ],
  },
  {
    title: "6. Comment Haven protège-t-elle les renseignements personnels?",
    blocks: [
      {
        type: "p",
        text: "Nous nous engageons à protéger la sécurité de l'ensemble des renseignements personnels que nous recueillons et utilisons. Nous employons diverses mesures de protection physiques, administratives et techniques conçues pour les protéger contre l'accès, l'utilisation et la communication non autorisés.",
      },
    ],
  },
  {
    title: "7. Combien de temps Haven conserve-t-elle les renseignements personnels?",
    blocks: [
      {
        type: "p",
        text: "Nous ne conservons vos renseignements personnels que le temps raisonnablement nécessaire ou pertinent aux fins déterminées, ou pour la durée permise ou exigée par la loi applicable. Pour les catégories ci-dessous, cela signifie :",
      },
      { type: "table" },
      {
        type: "p",
        text: "Lorsque la loi nous oblige à conserver des renseignements plus longtemps — par exemple, des renseignements faisant l'objet d'une demande ou d'une procédure —, cette période plus longue s'applique.",
      },
      {
        type: "p",
        text: "Les renseignements vous concernant qui ne sont plus nécessaires ni pertinents à la prestation de nos services peuvent être anonymisés ou agrégés à d'autres données non personnelles. Ces renseignements peuvent fournir à Haven des données utiles, telles que des statistiques sur l'utilisation du Site Web.",
      },
    ],
  },
  {
    title: "8. Transfert transfrontalier de données et conservation",
    blocks: [
      {
        type: "p",
        text: "Dans certains cas, les renseignements personnels que nous gérons peuvent être transférés, traités et stockés à l'extérieur du Canada, notamment aux États-Unis, et pourraient donc être accessibles aux autorités gouvernementales en vertu d'ordonnances et de lois applicables dans ces territoires étrangers. Nous nous appuyons sur des mécanismes prévus par la loi pour transférer légalement des données à l'étranger, tels que des contrats intégrant des obligations de protection et de partage des données, et nous évaluons la protection des renseignements personnels avant de les confier à un fournisseur de services situé à l'extérieur de la province ou du pays, comme la loi applicable l'exige.",
      },
      {
        type: "p",
        text: "Vous pouvez demander des renseignements écrits sur nos politiques et pratiques à l'égard des fournisseurs de services situés à l'extérieur du Canada, ou poser des questions sur la manière dont ils recueillent, utilisent, communiquent ou stockent les renseignements personnels, en communiquant avec notre responsable de la protection des renseignements personnels à privacy@findhaven.org.",
      },
    ],
  },
  {
    title: "9. Quels sont vos choix?",
    blocks: [
      {
        type: "p",
        lead: "Témoins.",
        text: "Les témoins nécessaires au fonctionnement du Site Web sont toujours actifs. Les témoins non essentiels et les technologies similaires — y compris ceux servant à l'analyse et à la mesure de notre rayonnement — sont inactifs jusqu'à ce que vous les autorisiez, et vous pouvez modifier vos choix en tout temps dans nos paramètres de confidentialité. Lorsque ces technologies peuvent servir à vous identifier, à vous localiser ou à établir votre profil, elles sont désactivées par défaut et ne sont activées que si vous choisissez de les autoriser. Vous pouvez également configurer votre navigateur pour refuser les témoins, bien que le Site Web puisse alors ne pas fonctionner comme prévu.",
      },
      {
        type: "p",
        lead: "Outils d'analyse et de publicité.",
        text: "Haven utilise Google Analytics, Google Tag Manager, le pixel Meta et PostHog pour obtenir des renseignements sur les activités des visiteurs du Site Web, y compris les pages consultées et le temps passé sur le Site Web, ainsi que pour mesurer notre rayonnement. Si vous souhaitez désactiver Google Analytics, vous pouvez utiliser le module complémentaire de désactivation de Google à l'adresse https://tools.google.com/dlpage/gaoptout. Nous ne transmettons jamais à ces fournisseurs vos messages, vos documents d'admissibilité, vos renseignements relatifs à votre statut de personne réfugiée ou d'immigration, ni vos renseignements de sécurité, et nous ne fournissons pas vos coordonnées aux plateformes publicitaires pour créer des audiences publicitaires.",
      },
      {
        type: "p",
        lead: "Courriels.",
        text: "Les communications par courriel visent à vous tenir informé des nouvelles, des activités et des événements de Haven, ainsi qu'à d'autres fins précises qui pourraient survenir. Vous pouvez en tout temps choisir de ne pas recevoir de messages de marketing ou promotionnels de notre part par courriel en cliquant sur « se désabonner » dans tout courriel que vous recevez. Veuillez noter que même si vous avez indiqué votre choix de ne pas recevoir de messages commerciaux de notre part, nous pouvons tout de même communiquer avec vous relativement à notre Site Web, conformément à la loi applicable (par exemple, pour vous transmettre un message de service à la clientèle ou une notification de service). De plus, l'enregistrement d'un changement de préférence dans l'ensemble de nos dossiers peut prendre jusqu'à dix (10) jours ouvrables.",
      },
      {
        type: "p",
        lead: "Messages texte.",
        text: "Les messages texte de marketing ne sont envoyés que si vous y avez consenti, et ce consentement n'est jamais une condition d'utilisation des services de Haven. Répondez STOP à tout message texte pour cesser de recevoir des textos, ou HELP pour obtenir de l'aide; les retraits sont traités dans un délai de dix (10) jours ouvrables. Le retrait du consentement aux messages texte de marketing ne met pas fin aux messages de service concernant votre compte. Le Contrat de licence d'utilisateur final décrit en détail notre programme de messages texte.",
      },
    ],
  },
  {
    title: "10. Quels sont vos droits?",
    blocks: [
      {
        type: "p",
        text: "Selon votre lieu de résidence et les lois qui vous sont applicables, vous pouvez disposer de certains droits en matière de vie privée, notamment le droit d'accéder à vos renseignements personnels et d'en demander la rectification s'ils sont inexacts, sous réserve des exceptions limitées prévues par les lois applicables, ainsi que le droit de recevoir dans un format technologique structuré et couramment utilisé les renseignements personnels informatisés que vous nous avez fournis. Pour accéder à vos renseignements personnels ou les faire rectifier, veuillez communiquer avec nous par écrit aux coordonnées indiquées à la section « Nous joindre » ci-dessous. Nous répondons par écrit dans les 30 jours. Lorsqu'un appel ou une conversation fait intervenir une autre personne, nous vous fournissons vos propres renseignements personnels et retirons les éléments permettant d'identifier l'autre personne. Si vous avez besoin d'aide pour formuler une demande ou pour comprendre ce que nous vous demandons d'accepter, dites-le-nous et nous vous aiderons, en français ou en anglais.",
      },
      {
        type: "p",
        text: "Moyennant un préavis raisonnable et sous réserve de restrictions légales ou contractuelles, vous pouvez retirer votre consentement à l'utilisation et à la communication de vos renseignements personnels par Haven. Par exemple, vous pouvez retirer votre consentement à l'utilisation de vos renseignements personnels à des fins de marketing. Pour retirer votre consentement, veuillez utiliser les coordonnées indiquées à la section « Nous joindre » ci-dessous. Le retrait de votre consentement peut avoir une incidence sur les services que nous sommes en mesure de vous offrir.",
      },
      {
        type: "p",
        text: "Si notre réponse ne vous satisfait pas, vous pouvez porter plainte auprès du responsable de la protection des renseignements personnels de Haven, auprès de l'autorité de protection de la vie privée de votre province (au Québec, la Commission d'accès à l'information) ou auprès du Commissariat à la protection de la vie privée du Canada.",
      },
    ],
  },
  {
    title: "11. Renseignements concernant les mineurs",
    blocks: [
      {
        type: "p",
        text: "Notre Site Web ne s'adresse pas — et nous ne le destinons pas — aux personnes de moins de 18 ans, et c'est pourquoi nous ne recueillons pas sciemment de renseignements personnels auprès de personnes de moins de 18 ans. Si vous avez moins de 18 ans, n'utilisez pas le Site Web. Si nous apprenons que nous détenons des renseignements personnels concernant une personne de moins de 18 ans, nous les supprimerons.",
      },
    ],
  },
  {
    title: "12. Modifications de la présente politique de confidentialité",
    blocks: [
      {
        type: "p",
        text: "Nous pouvons modifier la présente politique de confidentialité de temps à autre. Nous vous informerons de toute mise à jour en publiant une nouvelle politique de confidentialité sur cette page. Si nous apportons des modifications qui changent de façon importante la manière dont nous traitons ou protégeons vos renseignements, nous vous en aviserons de façon additionnelle et obtiendrons votre consentement lorsque la loi l'exige avant que la modification ne vous soit applicable. Nous ne considérons pas la poursuite de votre utilisation du Site Web comme une acceptation d'une modification importante. La date d'entrée en vigueur figurant au haut de la présente politique indique la date de sa dernière mise à jour.",
      },
    ],
  },
  {
    title: "13. Nous joindre",
    blocks: [
      {
        type: "p",
        text: "Vous pouvez communiquer avec nous pour exercer vos droits ou obtenir de plus amples renseignements sur vos renseignements personnels et nos pratiques en matière de confidentialité en écrivant à notre responsable de la protection des renseignements personnels :",
      },
      { type: "contact" },
      { type: "p", text: "Nous répondons par écrit aux demandes en matière de confidentialité dans les 30 jours." },
    ],
  },
]

const urlPattern = /(https?:\/\/[^\s]+)/g
const emailPattern = /([\w.+-]+@[\w-]+\.[\w.]+)/g

function renderWithLinks(text: string) {
  return text.split(urlPattern).flatMap((part, partIndex) => {
    if (part.match(/^https?:\/\//)) {
      const trailing = part.match(/[.,;:)]+$/)?.[0] ?? ""
      const url = trailing ? part.slice(0, part.length - trailing.length) : part

      return [
        <Fragment key={`url-${partIndex}`}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 break-words hover:no-underline"
          >
            {url.replace(/^https?:\/\//, "")}
          </a>
          {trailing}
        </Fragment>,
      ]
    }

    return part.split(emailPattern).map((chunk, chunkIndex) => {
      const key = `text-${partIndex}-${chunkIndex}`

      if (chunk.match(emailPattern)) {
        return (
          <a
            key={key}
            href={`mailto:${chunk}`}
            className="text-primary underline underline-offset-2 break-words hover:no-underline"
          >
            {chunk}
          </a>
        )
      }

      return <Fragment key={key}>{chunk}</Fragment>
    })
  })
}

function RetentionTable() {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-border">
      <table className="w-full my-0 text-left text-base border-collapse">
        <thead>
          <tr className="bg-muted/50">
            <th scope="col" className="p-3 font-semibold text-foreground align-top border-b border-border">
              Renseignements
            </th>
            <th scope="col" className="p-3 font-semibold text-foreground align-top border-b border-border">
              Durée de conservation
            </th>
          </tr>
        </thead>
        <tbody>
          {retentionRows.map(([information, retention]) => (
            <tr key={information} className="border-b border-border last:border-0">
              <th scope="row" className="p-3 font-normal text-foreground align-top">
                {information}
              </th>
              <td className="p-3 text-muted-foreground align-top">{retention}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h3":
      return (
        <h3 key={index} className="text-xl font-semibold text-foreground mb-3">
          {block.text}
        </h3>
      )
    case "h4":
      return (
        <h4 key={index} className="text-lg font-medium text-foreground mb-2">
          {block.text}
        </h4>
      )
    case "ul":
      return (
        <ul key={index} className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{renderWithLinks(item)}</li>
          ))}
        </ul>
      )
    case "table":
      return <RetentionTable key={index} />
    case "contact":
      return (
        <p key={index} className="mb-4">
          Responsable de la protection des renseignements personnels, Haven Refugees{" "}
          <a href="mailto:privacy@findhaven.org" className="text-primary hover:underline">
            privacy@findhaven.org
          </a>
        </p>
      )
    default:
      return (
        <p key={index} className="mb-4">
          {block.lead ? <strong className="font-semibold text-foreground">{block.lead} </strong> : null}
          {renderWithLinks(block.text)}
        </p>
      )
  }
}

export function PrivacyPolicyContentFr() {
  return (
    <article className="prose prose-lg max-w-none [&>section]:scroll-mt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Politique de confidentialité</h1>
      <p className="text-muted-foreground mb-8">
        <strong>En vigueur le : </strong>24 août 2026 (remplace la version en vigueur le 2 février 2023)
        <br />
        <span>{"This policy is also available in English. "}</span>
        <a href="/en/privacy-policy" className="text-primary hover:underline">
          See the English version
        </a>
      </p>

      <p className="mb-6">
        {
          "Haven Refugees / Haven Refugies (« Haven », « nous », « notre ») est un organisme de bienfaisance enregistré au Canada et une personne morale sans but lucratif constituée en vertu de la Loi canadienne sur les organisations à but non lucratif, dont le siège social est situé à Toronto, au Canada. Haven offre des services d'établissement au Canada aux personnes réfugiées en les mettant en relation avec des accompagnateurs locaux qui peuvent les aider."
        }
      </p>
      <p className="mb-6">
        {
          "Lorsque vous consultez ou utilisez le www.findhaven.org ou l'application mobile de Haven (ensemble, le « Site Web »), vous nous communiquez certains renseignements personnels et nous recueillons des renseignements personnels à votre sujet. Les services de Haven s'adressent aux adultes âgés de 18 ans et plus."
        }
      </p>
      <p className="mb-6">
        {
          "Nous souhaitons faire preuve de transparence quant aux renseignements que nous recueillons, à la façon dont nous les utilisons, aux personnes avec qui nous les partageons et aux moyens de contrôle que nous vous offrons à l'égard de vos renseignements personnels. La présente politique de confidentialité décrit la manière dont Haven recueille, utilise et communique vos renseignements personnels, ainsi que la façon dont vous pouvez exercer vos droits en matière de vie privée."
        }
      </p>
      <p className="mb-8">
        {
          "Lorsque la loi exige votre consentement à la collecte, à l'utilisation ou à la communication de vos renseignements personnels, Haven vous demande ce consentement séparément, au moment de la collecte ou avant celle-ci. Nous ne considérons pas la poursuite de votre utilisation du Site Web comme un consentement."
        }
      </p>

      <div className="bg-muted/50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          {tableOfContents.map((title, index) => (
            <li key={title}>
              <a href={`#section-${index + 1}`} className="hover:text-primary">
                {title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {sections.map((section, sectionIndex) => (
        <section key={section.title} id={`section-${sectionIndex + 1}`} className="scroll-mt-28 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
          {section.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
        </section>
      ))}
    </article>
  )
}
