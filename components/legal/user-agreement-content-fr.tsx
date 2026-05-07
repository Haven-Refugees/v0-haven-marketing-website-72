"use client"

import { useTranslation } from "@/lib/i18n"

export function UserAgreementContentFr() {
  const { t } = useTranslation()

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          {t("Contrat de licence d'utilisation de Haven Refugees")}
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-lg font-medium mb-4">{t("Version française")}</p>
          <p className="mb-8">
            <a href="/user-agreement" className="text-primary hover:underline">
              {t("Cliquez ici pour voir la version anglaise")}
            </a>
          </p>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Introduction")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("Haven Refugees Incorporated (dénommé « Haven » ou « nous ») vous demande de prendre connaissance du présent contrat de licence d'utilisation qui régit l'utilisation de notre application (telle que décrite ci-dessous). Veuillez noter que pour pouvoir utiliser notre application, vous devez accepter les conditions ci-dessous. Si vous avez des questions, veuillez nous contacter à l'adresse suivante : info@findhaven.org. Bien que nous ne puissions pas répondre à tous les commentaires, nous tiendrons certainement compte de votre contribution et l'utiliserons afin d'améliorer d'avantage l'application Haven.")}
            </p>
            <p className="leading-relaxed">
              {t("Haven est un organisme à but non lucratif enregistré en vertu de la Loi canadienne sur les organismes à but non lucratif. Haven a son siège social à Toronto, au Canada. Haven fournit des services de réinsertion aux réfugiés en les mettant en contact avec des intervenants canadiens qui peuvent les aider. Nos services sont offerts par le biais de findhaven.org.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Contrat de licence d'utilisation")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("Le présent contrat de licence d'utilisation (le « Contrat ») est une entente légale contraignante entre vous, en tant qu'individu et entité, et Haven, qui régit l'utilisation de l'application Haven (disponible au www.findhaven.org) et tout autre service ou site Web exploité par Haven, y compris tout le contenu, le matériel et les informations qui s'y trouvent ou qui sont liés au présent Contrat (la « Plateforme »). En utilisant la Plateforme de quelque manière que ce soit, vous reconnaissez avoir lu le présent Contrat et vous acceptez d'être lié par celui-ci. Veuillez lire attentivement les modalités énoncées dans les présentes avant d'accepter le présent Contrat. Si vous n'acceptez pas le présent Contrat, vous ne pouvez utiliser quelque aspect que ce soit de la Plateforme.")}
            </p>
            <p className="leading-relaxed">
              {t("La Plateforme vous est fournie en vertu du présent Contrat uniquement pour en faire un usage personnel et non commercial. La licence accordée par les présentes (voir ci-dessous) ne vous permet pas d'utiliser la Plateforme sur tout Appareil (tel que défini à l'article 2 ci-dessous) dont vous n'êtes pas propriétaire, dont vous ne détenez pas le contrôle et que vous n'avez pas le droit d'utiliser, et vous ne pouvez pas distribuer ou rendre la Plateforme disponible sur un réseau où elle pourrait être utilisée par plusieurs appareils en même temps. L'utilisation de la Plateforme au sein d'une organisation ou l'utilisation de copies multiples de la Plateforme (à l'exception d'une copie de sauvegarde) nécessite une licence commerciale pour la Plateforme.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Octroi de la licence")}
            </h2>
            <p className="leading-relaxed">
              {t("Sous réserve de votre conformité continue au présent Contrat, Haven vous accorde par les présentes une licence limitée, non-exclusive, personnelle, révocable, sans droit de sous-licencier et non-transférable pour l'utilisation de la Plateforme à des fins personnelles et ce, sur tout appareil électronique, téléphone intelligent ou tablette compatibles (« Appareils », et chacun un « Appareil »), que vous possédez ou contrôlez. Cette licence ne vous permet pas d'utiliser la Plateforme sur des Appareils que vous ne possédez pas ou ne contrôlez pas. Il est de votre responsabilité de confirmer si l'Appareil que vous avez choisi est compatible avec tout aspect de la Plateforme et Haven ne garantit pas que l'Appareil que vous choisissez soit compatible.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Portée de la licence")}
            </h2>
            <p className="mb-4 leading-relaxed">{t("Vous ne pourrez pas, sans le consentement de Haven:")}</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="leading-relaxed">
                {t("copier, distribuer, partager, exécuter, transmettre, afficher, reproduire, traduire, modifier, améliorer ou créer des œuvres dérivées ou des améliorations basées sur ou à partir de la Plateforme ou fusionner, intégrer ou combiner la Plateforme avec toute autre Plateforme, sauf dans la mesure prévue dans le présent Contrat;")}
              </li>
              <li className="leading-relaxed">
                {t("vendre, céder, accorder une licence, sous-licencier, divulguer, distribuer, louer, prêter ou autrement transférer ou rendre disponible la Plateforme ou toute copie de la Plateforme, peu importe sous quelle forme, à des tiers;")}
              </li>
              <li className="leading-relaxed">
                {t("rétroconcevoir, désassembler, décompiler, traduire, convertir sous une forme directement lisible la Plateforme ou le code source de la Plateforme, ou autrement tenter d'effectuer l'une des opérations susmentionnées, sauf dans la mesure où cette interdiction n'est pas autorisée par une loi applicable;")}
              </li>
              <li className="leading-relaxed">
                {t("exploiter commercialement la Plateforme de quelque manière que ce soit;")}
              </li>
              <li className="leading-relaxed">
                {t("supprimer, altérer, détruire ou tenter de contourner les marques de commerce, avis, codes propriétaires, notices, légendes ou marques, moyens d'identification, informations relatives à la gestion des droits numériques ou contrats de licence de la Plateforme sur, dans ou en relation avec la Plateforme, ou contourner toute mesure de sécurité associée ou utiliser de toute autre manière les marques de commerce, avis, codes propriétaires, marques, légendes ou autres images contenues dans la Plateforme de quelque manière que ce soit, sauf dans la mesure permise par les présentes;")}
              </li>
              <li className="leading-relaxed">
                {t("décrypter, extraire ou autrement tenter de découvrir tout code source ou secret commercial contenu dans la Plateforme ou accessible via celle-ci;")}
              </li>
              <li className="leading-relaxed">
                {t("accéder à la Plateforme ou l'utiliser d'une manière qui n'est pas autrement autorisée en vertu du présent Contrat, y compris l'utilisation de la Plateforme sur un Appareil que vous ne possédez pas ou ne contrôlez pas;")}
              </li>
              <li className="leading-relaxed">
                {t("accéder à la Plateforme ou l'utiliser à des fins illégales ou d'une manière incompatible avec toute loi ou d'une manière imprudente; ou")}
              </li>
              <li className="leading-relaxed">
                {t("permettre ou aider toute autre personne à utiliser la Plateforme d'une manière qui constituerait une violation du présent Contrat.")}
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              {t("Vous vous engagez, en outre, à ne pas utiliser la Plateforme de quelque manière à transmettre des virus, des vers ou d'autres éléments malveillants ou à empiéter sur la capacité du réseau ou de quelque manière à harceler, diffamer, enfreindre ou effectuer des transmissions illégales en rapport avec l'utilisation de la Plateforme ou de toute autre Plateforme de tiers.")}
            </p>
            <p className="leading-relaxed">
              {t("Les modalités de ce Contrat régiront toutes les mises à jour fournies par Haven ou ses filiales qui remplacent ou complètent toute version antérieure de la Plateforme, à moins que cette mise à jour ou nouvelle version soit accompagnée d'une licence séparée, auquel cas les modalités de ce contrat s'appliqueront.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Titulaire de la propriété intellectuelle")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("La Plateforme est protégée par les lois canadiennes et internationales sur le droit d'auteur et d'autres lois sur la propriété intellectuelle, selon le cas. La Plateforme est la propriété exclusive de Haven et nonobstant toute licence contenue dans les présentes, Haven conserve tous titres, propriété, intérêt et droits dans et à la Plateforme, y compris, sans s'y limiter, les brevets, les marques de commerce, les secrets commerciaux, les droits d'auteur et tous les autres droits de propriété intellectuelle et industrielle, qu'ils soient enregistrés ou non, dans et à la Plateforme, y compris tous les droits au code source, aux graphiques, aux images, aux marques de commerce, aux thèmes et au texte incorporé ou contenu sur la Plateforme. À l'exception de la licence limitée accordée ci-dessus, rien dans le présent Contrat ne doit être interprété comme vous accordant un titre, une propriété, un intérêt ou des droits (y compris, sans s'y limiter, des droits de propriété intellectuelle) dans et à la Plateforme. Tous titres, propriété, intérêt et droits qui ne sont pas expressément accordés en vertu du présent Contrat sont réservés par Haven.")}
            </p>
            <p className="leading-relaxed">
              {t("Si vous faites part à Haven de vos commentaires à propos de la Plateforme (y compris toute idée ou toute suggestion d'amélioration de Haven ou documentation d'utilisateur connexe), Haven et ses concédants de licence, successeurs, ayants droit et titulaires de licence peuvent utiliser et/ou commercialiser ces commentaires de quelque manière et à quelque fin que ce soit, sans vous verser de compensation ou en verser une à toute autre personne.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Vie privée; consentement à la collecte et à l'utilisation des données")}
            </h2>
            <p className="leading-relaxed">
              {t("Haven prend votre vie privée très au sérieux. La collecte, le stockage, la divulgation et les utilisations autorisées de vos informations sont régis par la Politique de confidentialité de Haven, qui peut être consultée sur notre site. La Politique de confidentialité ainsi que ses modalités sont intégrées, par référence, au présent Contrat. En acceptant les modalités et conditions du présent Contrat, vous acceptez également les modalités de la Politique de confidentialité. Haven se réserve le droit d'amender ou de modifier la Politique de confidentialité à sa seule discrétion. Vous comprenez que des tiers peuvent à tout moment collecter, stocker, divulguer ou utiliser vos informations par le biais de votre utilisation de la Plateforme et que cette collecte, ce stockage, cette divulgation ou cette utilisation par des tiers est régie par les conditions générales du tiers qui sont applicables.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Compte et identifiants")}
            </h2>
            <p className="leading-relaxed">
              {t("Afin d'utiliser la Plateforme, vous devez créer un compte (un « Compte ») ainsi que sélectionner et inscrire un nom d'utilisateur et un mot de passe uniques (collectivement « Identifiants »). Votre Compte et vos Identifiants vous sont propres et ne peuvent être partagés avec ou transférés à toute autre personne. Vous vous assurerez que vos informations d'identification demeurent sécures et confidentielles. Vous ne permettrez à aucune autre personne d'utiliser votre Compte ou vos Identifiants, et vous nous informerez immédiatement si vous savez ou soupçonnez que votre Compte ou vos Identifiants ont été utilisés par une autre personne. Nous pouvons agir sur la base de toute communication donnée par le biais de votre Compte ou en utilisant vos Identifiants. Haven vérifiera l'identité d'un utilisateur lors de la création d'un Compte. Cependant, vous acceptez que nous ne soyons pas tenus de vérifier l'identité ou l'autorité réelle d'une personne utilisant votre Compte ou vos Identifiants après la création du Compte, mais Haven peut, à sa discrétion, exiger à tout moment la vérification de l'identité d'une personne cherchant à accéder à votre Compte et peut refuser l'accès et l'utilisation de votre Compte si nous ne sommes pas satisfaits de la vérification. Si Haven considère, à sa discrétion, que votre Compte ou vos Identifiants ne sont pas sécurisés ou qu'ils ont été utilisés de manière inappropriée, nous pouvons immédiatement annuler le Compte ou les Identifiants sans vous en informer. Il peut vous être demandé de modifier vos Identifiants de temps à autre.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Services et matériel tiers")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) La Plateforme peut permettre l'accès ou contenir des liens vers des services et des sites Web tiers (les « Services tiers »). Vous reconnaissez que vous avez examiné les conditions générales des Services tiers applicables lorsque ceux-ci s'appliquent et que vous vous conformerez à toutes les restrictions, exigences et règles applicables qui régissent le site Web à partir duquel vous avez obtenu la Plateforme.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("b) Vous acceptez qu'en utilisant l'un des Services tiers, vous puissiez vous heurter à du contenu qui peut être considéré comme étant offensant, indécent ou répréhensible, lequel contenu peut ou non être identifié comme comportant un langage explicite, et que les résultats de toute recherche ou saisie d'un lien URL particulier peuvent automatiquement et involontairement générer des liens ou des références à du matériel répréhensible. Vous acceptez d'utiliser les Services tiers à vos propres risques et vous acceptez que ni Haven ni ses filiales n'auront de responsabilité envers vous pour le contenu qui peut être trouvé, via l'utilisation de la Plateforme, comme étant offensant, indécent ou répréhensible.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("c) Certains Services tiers peuvent afficher, inclure ou rendre disponible du contenu, des données, des informations, des applications, des publicités, du matériel, des sollicitations et d'autres logiciels provenant de tiers, qui peuvent inclure des individus, des entreprises, des sociétés et d'autres organisations (le « Matériel tiers ») ou fournir des liens vers certains sites Web tiers. En utilisant les Services tiers, vous reconnaissez et acceptez que Haven n'est pas responsable de l'examen, de l'évaluation ou de la vérification du contenu, de l'exactitude, de l'exhaustivité, de l'actualité, de la validité, du respect des droits d'auteur, de la légalité, de la décence, de la qualité ou de tout autre aspect de ce Matériel tiers ou de ces sites Web. Les Services tiers sont mis à disposition uniquement à des fins pratiques, à des fins de divertissement et d'information. Haven ne garantit pas et n'endosse pas, et n'assume pas et n'aura pas de responsabilité envers vous ou toute autre personne pour tout Matériel tiers ou site Web tiers, ou pour tout autre matériel, produit ou service tiers. Le Matériel tiers et les liens vers d'autres sites Web vous sont fournis uniquement à des fins pratiques. Les données de localisation fournies par les Services tiers sont uniquement destinées à la navigation de base et ne sont pas destinées à être utilisées dans des situations où des informations de localisation précises sont nécessaires ou lorsque des données de localisation erronées, inexactes ou incomplètes peuvent entraîner la mort, un préjudice personnel, des dommages matériels ou environnementaux. Ni Haven, ni aucun de ses fournisseurs de contenu, ne garantissent la disponibilité, l'exactitude, l'exhaustivité, la fiabilité ou l'actualité des informations stockées ou des données de localisation affichées par les Services tiers.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("d) Vous reconnaissez et acceptez que tout lien vers des Services tiers n'implique en aucune façon que Haven soutienne, recommande ou approuve les Services tiers.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("e) Vous reconnaissez et acceptez que les Services tiers contiennent du contenu, de l'information et du matériel propriétaires qui sont détenus par des tiers et que vous êtes responsable de veiller à ce que votre utilisation des Services tiers, qu'elle soit en relation avec la Plateforme ou autrement, soit conforme aux conditions d'utilisation des tiers applicables et aux lois applicables.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("f) Nulle portion des Services tiers ne peut être reproduite sous quelque forme ou par quelque moyen que ce soit. Vous acceptez de ne pas modifier, louer, prêter, vendre, distribuer ou créer des œuvres dérivées basées sur les Services tiers, de quelque manière que ce soit, et vous n'exploiterez pas les Services tiers de quelque manière non autorisée quelle qu'elle ce soit, y compris, mais sans s'y limiter, par intrusion ou par surcharge de la capacité du réseau. Vous acceptez, en outre, de ne pas utiliser les Services tiers de quelque manière que ce soit pour harceler, abuser, traquer, menacer, diffamer ou autrement enfreindre ou violer les droits d'une autre partie, et que Haven n'est en aucun cas responsable d'une telle utilisation par vous, ni de tout message ou toute transmission harcelant, menaçant, diffamatoire, offensant ou illégal que vous pourriez recevoir à la suite de l'utilisation de l'un des Services tiers.")}
            </p>
            <p className="leading-relaxed">
              {t("g) En outre, les Services tiers et le Matériel tiers auxquels il est possible d'accéder à partir de l'Appareil, ou lesquels peuvent être affichés ou liés à partir de l'Appareil ne sont pas disponibles dans toutes les langues ou dans toutes les provinces ou tous les pays. Haven ne fait aucune déclaration selon laquelle ces Services tiers et Matériel tiers sont appropriés ou disponibles pour une utilisation dans un endroit particulier. Dans la mesure où vous choisissez d'accéder à de tels Services tiers ou Matériel tiers, vous le faites de votre propre initiative et vous êtes responsable de la conformité à toute loi applicable, y compris, mais sans s'y limiter, aux lois locales applicables. Haven et ses concédants de licence, s'il y a lieu, se réservent le droit de modifier, suspendre, supprimer ou désactiver l'accès à tout Service tiers à tout moment et sans préavis. En aucun cas Haven ne sera responsable de la suppression ou de la désactivation de l'accès à ces Services tiers. Haven peut également imposer des limites à l'utilisation ou à l'accès à certains Services tiers, dans tous les cas et sans préavis ni responsabilité.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Résiliation et modification")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) La licence accordée par les présentes pour l'utilisation de la Plateforme est en vigueur jusqu'à sa résiliation par vous ou par Haven. Si vous ne respectez pas le présent Contrat, vos droits seront automatiquement résiliés sans préavis. Sans préjudice à ses autres droits ou recours, Haven peut résilier le présent Contrat sans motifs, à son entière discrétion, immédiatement avec ou sans préavis.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("b) Haven peut modifier la Plateforme et le présent Contrat en vous en informant soit à votre dernière adresse électronique connue, soit en publiant un avis sur le site Web de Haven, notamment en modifiant la fonctionnalité ou l'apparence de la Plateforme, ou en modifiant la portée de la licence ou d'autres modalités du Contrat. Dans le cas où Haven modifie la Plateforme ou le présent Contrat, vous pouvez résilier le présent Contrat et cesser d'utiliser la Plateforme.")}
            </p>
            <p className="leading-relaxed">
              {t("c) Dans le cas où le présent Contrat est résilié conformément à l'article 8, vous devez immédiatement cesser d'utiliser la Plateforme et détruire toutes les copies du contenu de la Plateforme qui sont sous votre contrôle ou en votre possession. Nonobstant la résiliation du présent Contrat ou toute disposition contraire aux présentes, les articles 4, 7, 8, 10, 11, 12, 13, 14 et 17 du présent Contrat survivront à l'expiration ou à la résiliation du présent Contrat.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Exclusion de garanties")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) La Plateforme vous est fournie « TELLE QUELLE », sans aucune garantie, représentation ou condition de quelque nature que ce soit, expresse ou implicite, y compris, mais sans s'y limiter, les garanties implicites de qualité marchande, d'adéquation à un usage particulier, de non-violation des droits de propriété intellectuelle ou de propriété, ou de tout autre droit de tiers. Haven ne garantit pas que la Plateforme répondra à vos exigences ni que le fonctionnement de la Plateforme sera ininterrompu ou exempt d'erreurs. Vous reconnaissez et acceptez que le fonctionnement de la Plateforme peut ne pas être exempt de bogues, d'erreurs, de défauts et/ou d'omissions.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("b) Haven ne fait aucune déclaration quant à l'exactitude, la fiabilité, l'actualité, l'exhaustivité ou l'utilité de tout contenu ou matériel fourni, accessible ou autrement mis à disposition par ou via la Plateforme.")}
            </p>
            <p className="leading-relaxed">
              {t("c) Haven ne garantit pas la compatibilité de la Plateforme avec votre Appareil. Vous n'avez pas le droit de réclamer une indemnité de Haven si votre Appareil n'est pas compatible avec la Plateforme.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Limitation de responsabilité")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) Dans toute la mesure permise par la loi applicable, en aucun cas Haven ou l'un de ses administrateurs, dirigeants, employés, agents, concédants, successeurs ou ayants droit ne seront responsables envers vous (i) des dommages indirects, accessoires, consécutifs, spéciaux ou punitifs de toute nature (y compris les dommages pour perte de jouissance, d'affaires, de profits, de revenus ou de données), ou la perte de valeur, l'utilisation, la corruption ou le coût de l'acquisition de biens ou de services de remplacement découlant de ou lié à la Plateforme, à toute communication résultant de votre utilisation de la Plateforme, ou au présent Contrat, que ces dommages aient été causés par un délit civil (y compris la négligence), un contrat ou toute autre théorie juridique, même si Haven a été informé de la possibilité de tels dommages; et (ii) les dommages excédant le plus élevé des montants suivants : 50 $ et les montants effectivement payés par vous à Haven découlant de ou liés à la Plateforme. Ce qui précède n'affecte pas les garanties qui ne peuvent être exclues ou limitées en vertu de la loi applicable. Les limitations stipulées dans les présentes s'appliquent à toute demande découlant de ou liée à la Plateforme ou au présent Contrat.")}
            </p>
            <p className="leading-relaxed">
              {t("b) Aucun dommage ne sera accordé, et aucune autre recours ne pourra être exercé, pour toute réclamation dans le cadre du présent Contrat, à moins qu'un avis écrit de la réclamation ne soit fourni à Haven dans un délai de deux (2) ans après la date à laquelle la cause d'action relative à cette réclamation est survenue ou, si elle n'est pas détectable, dans un délai de deux (2) ans après la date à laquelle la personne qui dépose la réclamation a su ou aurait dû savoir qu'elle disposait d'une réclamation.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Indemnisation")}
            </h2>
            <p className="leading-relaxed">
              {t("Vous vous engagez par les présentes à indemniser et à dégager de toute responsabilité Haven et ses dirigeants, administrateurs, employés, partenaires, fournisseurs, filiales, ayants droit et agents, et à les défendre contre toute perte, réclamation, procédure judiciaire, demande, dommage, responsabilité, amende, pénalité et dépense (y compris les frais juridiques et autres honoraires professionnels) raisonnablement encourus ou subis découlant de ou liés à : (a) votre utilisation de la Plateforme; (b) toute réclamation alléguant une violation des droits de propriété intellectuelle ou de tout droit de tiers découlant de ou liée à votre utilisation de la Plateforme; (c) toute violation ou violation alléguée de votre part des garanties, déclarations et engagements pris en vertu des présentes; et (d) toute violation du présent Contrat.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Conformité aux lois sur le contrôle des exportations")}
            </h2>
            <p className="leading-relaxed">
              {t("Vous ne pouvez pas utiliser ou autrement exporter ou réexporter la Plateforme ou toute copie ou adaptation de celle-ci en violation de toute loi ou réglementation applicable, y compris, sans s'y limiter, les lois et réglementations canadiennes et américaines en matière d'exportation. En utilisant la Plateforme, vous déclarez et garantissez que vous n'êtes pas situé dans un pays soumis à un embargo du gouvernement canadien ou américain, ou qui a été désigné par ces gouvernements comme un pays « soutenant le terrorisme » et que vous n'êtes pas inscrit sur une liste de parties interdites ou restreintes des gouvernements canadien ou américain.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Utilisateurs du gouvernement")}
            </h2>
            <p className="leading-relaxed">
              {t("Les utilisateurs du gouvernement acquièrent la Plateforme et les services connexes avec les seuls droits énoncés dans le présent Contrat.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Divers")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("a) Si vous résidez en Ontario, le présent Contrat sera régi par et interprété conformément aux lois de la province de l'Ontario et aux lois du Canada qui s'y appliquent, sans tenir compte de ses principes de conflits de lois. Tous les litiges entre vous et Haven qui ne peuvent être résolus de manière informelle seront soumis à la compétence exclusive et au ressort des tribunaux situés à Toronto (Ontario). Si vous résidez à l'extérieur de l'Ontario ou du Canada, le présent Contrat sera régi par les lois de votre province de résidence. Les tribunaux situés dans votre province de résidence auront compétence pour statuer sur tout litige entre vous et Haven qui ne pourra pas être résolu de manière informelle.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("b) Le présent Contrat constitue l'intégralité de l'accord entre vous et Haven concernant l'objet du présent Contrat, et ne peut être modifié que par un écrit signé par les deux parties.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("c) Si une disposition du présent Contrat est jugée invalide ou inapplicable, cette disposition sera limitée ou éliminée dans la mesure minimale nécessaire afin que le présent Contrat reste pleinement en vigueur et applicable.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("d) Le défaut de l'une ou l'autre des parties d'exercer tout droit prévu aux présentes ne constitue pas une renonciation à tout autre droit prévu aux présentes.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("e) Le présent Contrat vous est personnel et aucun droit ou obligation en vertu des présentes ne peut être cédé par vous sans l'accord écrit préalable de Haven.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("f) Haven peut céder ses droits et obligations en vertu du présent Contrat, en tout ou en partie, à tout moment sans vous en informer.")}
            </p>
            <p className="mb-4 leading-relaxed">
              {t("g) Les rubriques des articles du présent Contrat sont fournies uniquement pour des raisons de commodité et ne doivent pas être interprétées comme ayant une signification juridique.")}
            </p>
            <p className="leading-relaxed">
              {t("h) Rien dans le présent Contrat ne peut être interprété comme créant une relation de partenariat, de coentreprise, d'agence, de franchise, de représentant commercial ou d'emploi entre vous et Haven. Vous n'avez pas le droit de faire ou d'accepter des offres ou des déclarations au nom de Haven. Vous ne prendrez aucune mesure qui crée l'apparence que ces mesures ont été autorisées par Haven.")}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("Nous contacter")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t("Si vous avez des questions, des plaintes ou des réclamations concernant la Plateforme, veuillez les adresser à :")}
            </p>
            <p className="leading-relaxed">
              {t("Haven Refugees Incorporated")}<br />
              {t("Courriel : info@findhaven.org")}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
