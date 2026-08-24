"use client"

import { useTranslation } from "@/lib/i18n"

export function UserAgreementContentFr() {
  const { t } = useTranslation()

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t("Contrat de licence d'utilisateur final de Haven Refugies")}
        </h1>

        <p className="text-muted-foreground mb-8">
          <strong>{t("En vigueur le")} : </strong>
          {t("24 août 2026 (remplace la version antérieure)")}
          <br />
          <span>{"This Agreement is also available in English. "}</span>
          <a href="/en/user-agreement" className="text-primary hover:underline">
            {"See the English version"}
          </a>
        </p>

        <div className="prose prose-lg max-w-none text-foreground/80">
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("Introduction")}</h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "Haven Refugies (« Haven », « nous » ou « notre ») vous invite à prendre connaissance des modalités du présent contrat de licence d'utilisateur final, qui régit l'utilisation de notre application (telle que décrite ci-dessous). Veuillez noter que pour utiliser notre application, vous devez accepter les modalités énoncées ci-dessous. Pour toute question, écrivez-nous à : info@findhaven.org. Bien que nous ne puissions répondre à tous les commentaires, nous en tiendrons certainement compte pour améliorer l'application Haven.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Haven est un organisme de bienfaisance enregistré au Canada et une personne morale sans but lucratif constituée en vertu de la Loi canadienne sur les organisations à but non lucratif. Le siège social de Haven est situé à Toronto, au Canada. Haven offre des services d'établissement aux personnes réfugiées en les mettant en relation avec des accompagnateurs canadiens qui peuvent les aider. Nos services sont offerts par l'intermédiaire de findhaven.org.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("1. Contrat de licence d'utilisateur final")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "Le présent contrat de licence d'utilisateur final (le « Contrat ») constitue une entente juridiquement contraignante entre vous, à titre de personne physique ou morale, et Haven, et régit l'utilisation de l'application Haven (accessible au www.findhaven.org) ainsi que de tout autre service ou site Web exploité par Haven, y compris l'ensemble du contenu, du matériel et des renseignements qui s'y trouvent ou qui renvoient au présent Contrat (la « Plateforme »). En utilisant la Plateforme de quelque manière que ce soit, vous reconnaissez avoir lu le présent Contrat et acceptez d'y être lié. Veuillez lire attentivement les modalités énoncées aux présentes avant d'accepter le Contrat. Si vous n'acceptez pas le présent Contrat, vous ne pouvez utiliser aucun aspect de la Plateforme.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "La Plateforme vous est fournie en vertu du présent Contrat uniquement pour votre usage personnel et non commercial. La licence octroyée aux présentes (voir ci-dessous) ne vous autorise pas à utiliser la Plateforme sur un Appareil (au sens de la section 2 ci-dessous) dont vous n'êtes pas propriétaire, que vous ne contrôlez pas ou que vous n'avez pas le droit d'utiliser, et vous ne pouvez pas distribuer la Plateforme ni la rendre accessible sur un réseau où elle pourrait être utilisée simultanément par plusieurs appareils. L'utilisation de la Plateforme au sein d'une organisation ou l'utilisation de multiples copies de la Plateforme (à l'exception d'une copie de sauvegarde) exige une licence commerciale.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("2. Octroi de licence")}</h2>
            <p className="leading-relaxed">
              {t(
                "Sous réserve du respect continu du présent Contrat, Haven vous octroie par les présentes une licence limitée, non exclusive, personnelle, révocable, non susceptible de sous-licence et incessible vous permettant d'utiliser la Plateforme pour votre usage personnel sur tout appareil électronique, téléphone intelligent ou tablette compatible (les « Appareils », et chacun, un « Appareil ») dont vous êtes propriétaire ou que vous contrôlez. Cette licence ne vous autorise pas à utiliser la Plateforme sur des Appareils dont vous n'êtes pas propriétaire ou que vous ne contrôlez pas. Il vous incombe de vérifier si l'Appareil que vous avez choisi est compatible avec la Plateforme, et Haven ne garantit pas la compatibilité de l'Appareil que vous choisissez.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("3. Portée de la licence")}</h2>
            <p className="mb-4 leading-relaxed">{t("Vous ne pouvez, sans le consentement de Haven :")}</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="leading-relaxed">
                {t(
                  "copier, distribuer, partager, exécuter, transmettre, afficher, reproduire, traduire, modifier, améliorer ou créer des œuvres dérivées ou des améliorations fondées sur la Plateforme ou en découlant, ni fusionner, intégrer ou combiner la Plateforme avec toute autre plateforme, sauf de la manière décrite dans le présent Contrat;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "vendre, céder, licencier, sous-licencier, divulguer, distribuer, louer, donner à bail, prêter ou autrement transférer ou rendre accessible la Plateforme ou toute copie de celle-ci, sous quelque forme que ce soit, à des tiers;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "faire de l'ingénierie inverse, désassembler, décompiler, traduire ou convertir sous une forme lisible par l'humain la Plateforme ou son code source, ni tenter de le faire, sauf dans la mesure où une telle interdiction n'est pas permise par la loi applicable;",
                )}
              </li>
              <li className="leading-relaxed">
                {t("exploiter commercialement la Plateforme de quelque manière que ce soit;")}
              </li>
              <li className="leading-relaxed">
                {t(
                  "retirer, modifier, détruire ou tenter de contourner toute marque de commerce, tout avis, tout code exclusif, toute mention, tout moyen d'identification, tout renseignement sur la gestion des droits numériques ou tout contrat de licence apparaissant sur la Plateforme, dans celle-ci ou s'y rapportant, ni contourner les mesures de sécurité connexes, ni autrement utiliser les marques de commerce, avis, codes exclusifs, mentions ou autres images contenus dans la Plateforme, sauf de la manière permise aux présentes;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "déchiffrer, extraire ou autrement tenter de découvrir un code source ou un secret commercial contenu dans la Plateforme ou accessible par celle-ci;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "accéder à la Plateforme ou l'utiliser d'une manière non autorisée par le présent Contrat, y compris l'utiliser sur un Appareil dont vous n'êtes pas propriétaire ou que vous ne contrôlez pas;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "accéder à la Plateforme ou l'utiliser à des fins illégales, d'une manière contraire à la loi ou de manière imprudente; ou",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "permettre à une autre personne d'utiliser la Plateforme d'une manière qui contreviendrait au présent Contrat, ou l'aider à le faire.",
                )}
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">
              {t(
                "Vous convenez en outre de ne pas utiliser la Plateforme pour transmettre des virus, des vers ou d'autres logiciels malveillants, pour porter atteinte à la capacité du réseau ou la surcharger, ni de quelque manière que ce soit pour harceler, diffamer, enfreindre des droits ou effectuer des transmissions illégales dans le cadre de l'utilisation de la Plateforme ou de toute plateforme tierce.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Les modalités du présent Contrat régiront toute mise à niveau fournie par Haven ou ses sociétés affiliées qui remplace ou complète une version antérieure de la Plateforme, sauf si cette mise à niveau ou nouvelle version est accompagnée d'une licence distincte, auquel cas les modalités de cette entente prévaudront.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("4. Propriété intellectuelle")}</h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "La Plateforme est protégée par les lois canadiennes et internationales sur le droit d'auteur et les autres droits de propriété intellectuelle, selon le cas. La Plateforme est la propriété exclusive de Haven et, malgré toute licence prévue aux présentes, Haven conserve l'intégralité des titres, de la propriété, des intérêts et des droits relatifs à la Plateforme, y compris, sans s'y limiter, les brevets, marques de commerce, secrets commerciaux, droits d'auteur et tous les autres droits de propriété intellectuelle et industrielle, enregistrés ou non, relatifs à la Plateforme, y compris tous les droits sur le code source, les graphiques, les images, les marques de commerce, les thèmes et les textes qui y sont intégrés ou contenus. À l'exception de la licence limitée octroyée ci-dessus, rien dans le présent Contrat ne saurait être interprété comme vous conférant un titre, une propriété, un intérêt ou des droits (y compris des droits de propriété intellectuelle) relatifs à la Plateforme. Tous les titres, propriétés, intérêts et droits qui ne sont pas expressément accordés en vertu du présent Contrat sont réservés par Haven.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Si vous formulez des commentaires au sujet de la Plateforme (y compris des idées ou des suggestions d'améliorations à l'intention de Haven ou de la documentation destinée aux utilisateurs), Haven ainsi que ses concédants, successeurs, ayants droit et licenciés pourront utiliser ces commentaires ou les commercialiser de quelque manière et à quelque fin que ce soit, sans verser de contrepartie à vous ou à toute autre personne.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("5. Vie privée; consentement à la collecte et à l'utilisation de renseignements")}
            </h2>
            <p className="leading-relaxed">
              {t(
                "Haven prend votre vie privée très au sérieux. La collecte, le stockage, la communication et les utilisations permises de vos renseignements sont régis par la Politique de confidentialité de Haven, accessible au https://findhaven.org/fr/privacy-policy. La Politique de confidentialité et ses modalités sont intégrées au présent Contrat par renvoi. En acceptant les modalités du présent Contrat, vous acceptez également les modalités de la Politique de confidentialité. Haven peut mettre à jour la Politique de confidentialité de la manière qui y est décrite : les modifications importantes vous sont communiquées et, lorsque la loi exige votre consentement à une modification, Haven vous le demandera. Vous comprenez que des tiers peuvent en tout temps recueillir, stocker, communiquer ou utiliser vos renseignements dans le cadre de votre utilisation de la Plateforme, et que cette collecte, ce stockage, cette communication ou cette utilisation par des tiers sont régis par les modalités applicables de ces tiers.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("6. Admissibilité, compte et identifiants")}
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Âge.")}</strong>{" "}
              {t(
                "Les services de Haven s'adressent aux adultes. Vous devez être âgé d'au moins 18 ans pour créer un Compte ou utiliser la Plateforme. En créant un Compte, vous confirmez que vous avez 18 ans ou plus et que les renseignements que vous fournissez sont véridiques, exacts et complets, et vous vous engagez à les tenir à jour.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Documents d'admissibilité.")}</strong>{" "}
              {t(
                "Certains programmes exigent une confirmation d'identité ou d'admissibilité. Si nous vous demandons des documents, un membre du personnel formé les examinera, consignera le résultat, puis les documents seront supprimés, comme il est décrit dans la Politique de confidentialité. La présentation de documents falsifiés constitue une violation du présent Contrat.",
              )}
            </p>
            <p className="leading-relaxed">
              <strong>{t("Compte et identifiants.")}</strong>{" "}
              {t(
                "Pour utiliser la Plateforme, vous devez ouvrir un compte (un « Compte ») ainsi que choisir et enregistrer un nom d'utilisateur et un mot de passe uniques (collectivement, les « Identifiants »). Votre Compte et vos Identifiants vous sont propres et ne peuvent être partagés avec une autre personne ni lui être transférés. Vous devez garder vos Identifiants sécurisés et confidentiels en tout temps. Vous ne permettrez à aucune autre personne d'utiliser votre Compte ou vos Identifiants et vous nous aviserez immédiatement si vous savez ou soupçonnez que votre Compte ou vos Identifiants ont été utilisés par une autre personne. Nous pouvons donner suite à toute communication transmise au moyen de votre Compte ou de vos Identifiants. Haven vérifiera l'identité de l'utilisateur au moment de la création d'un Compte. Toutefois, vous convenez que nous ne sommes pas tenus de vérifier l'identité réelle ou l'autorisation d'une personne utilisant votre Compte ou vos Identifiants après la création du Compte, mais que Haven peut, à sa discrétion et en tout temps, exiger la vérification de l'identité d'une personne cherchant à accéder à votre Compte et peut lui refuser l'accès et l'utilisation du Compte si nous ne sommes pas satisfaits de cette vérification. Si Haven estime, à sa discrétion, que votre Compte ou vos Identifiants ne sont pas sécurisés ou ont été utilisés de façon inappropriée, nous pouvons annuler immédiatement le Compte ou les Identifiants sans préavis. Il pourrait vous être demandé de modifier vos Identifiants de temps à autre.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("7. Programmes et conversations de pratique")}
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Jumelage et conversations.")}</strong>{" "}
              {t(
                "Haven jumelle des nouveaux arrivants avec des accompagnateurs bénévoles pour des conversations de pratique individuelles. Le jumelage dépend de la disponibilité et de la compatibilité; Haven ne garantit aucun jumelage ni aucun jumelage en particulier.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Programme linguistique Haven.")}</strong>{" "}
              {t(
                "Les conversations de pratique font partie intégrante du Programme linguistique Haven (« HLP »). Les étudiants du HLP sont tenus de participer à des conversations de pratique dans le cadre du programme.",
              )}
            </p>
            <p className="leading-relaxed">
              <strong>{t("Exceptions.")}</strong>{" "}
              {t(
                "Si vous éprouvez une difficulté réelle à l'égard d'une exigence du programme, vous pouvez demander une exception à Haven en écrivant à info@findhaven.org et en expliquant votre situation. Haven examine chaque demande individuellement et peut, à sa discrétion, permettre à un étudiant de demeurer dans le programme selon des exigences modifiées. L'octroi d'une exception n'est pas garanti.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("8. Conduite acceptable et mesures de sécurité")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "Haven a pour mission d'offrir un espace sécuritaire où les nouveaux arrivants et les bénévoles peuvent pratiquer la conversation. Lorsque vous utilisez la Plateforme, vous convenez de ne pas :",
              )}
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="leading-relaxed">
                {t(
                  "demander à un autre utilisateur de l'argent, des cadeaux, une aide financière ou des renseignements financiers, ni lui en offrir;",
                )}
              </li>
              <li className="leading-relaxed">
                {t(
                  "faire des avances sexuelles, amoureuses ou autrement intimes à un autre utilisateur, ni transmettre de contenu sexuel;",
                )}
              </li>
              <li className="leading-relaxed">
                {t("menacer, intimider, harceler, rabaisser ou maltraiter un autre utilisateur;")}
              </li>
              <li className="leading-relaxed">
                {t("exercer des pressions sur un autre utilisateur pour communiquer ou se rencontrer à l'extérieur de Haven;")}
              </li>
              <li className="leading-relaxed">
                {t("donner une fausse représentation de votre identité, de votre âge ou des raisons de votre présence sur Haven;")}
              </li>
              <li className="leading-relaxed">
                {t(
                  "utiliser la Plateforme pour recruter, solliciter, faire du prosélytisme ou promouvoir des services, des causes ou des entreprises; ou",
                )}
              </li>
              <li className="leading-relaxed">{t("utiliser la Plateforme en violation d'une loi applicable.")}</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              <strong>{t("Mesures de sécurité.")}</strong>{" "}
              {t(
                "Si nous avons des motifs de croire que votre conduite contrevient à la présente section ou met un autre utilisateur en danger, nous pouvons prendre toute mesure que nous jugeons appropriée pour protéger les utilisateurs, y compris limiter des fonctionnalités de votre Compte (par exemple, les nouveaux appels ou les nouveaux jumelages) pendant qu'un membre du personnel formé examine la situation, restreindre votre Compte, mettre fin à un jumelage ou vous retirer définitivement de la Plateforme, avec ou sans préavis. Les décisions de restreindre votre Compte ou de le supprimer sont prises par une personne, jamais par un logiciel seul. Certaines protections sont automatiques — par exemple, les messages contenant des coordonnées peuvent être bloqués. Lorsque la loi vous confère le droit de demander quels renseignements ont été utilisés pour prendre une décision à votre sujet, vous pouvez l'exercer de la manière décrite dans la Politique de confidentialité.",
              )}
            </p>
            <p className="leading-relaxed">
              <strong>{t("Signalement.")}</strong>{" "}
              {t(
                "Si un autre utilisateur vous met mal à l'aise ou si vous croyez qu'une personne est en danger, signalez-le dans l'application ou écrivez à info@findhaven.org. Lorsque la loi oblige Haven à signaler un préjudice ou un risque de préjudice à l'égard d'un enfant, Haven en fait le signalement aux autorités de protection de la jeunesse. Si une personne est en danger immédiat, composez le 911.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("9. Services et contenus de tiers")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "La Plateforme peut permettre l'accès à des services et sites Web de tiers, ou contenir des liens vers ceux-ci (les « Services de tiers »). Vous reconnaissez avoir pris connaissance des modalités applicables à ces Services de tiers, le cas échéant, et vous vous engagez à respecter l'ensemble des restrictions, exigences et règles régissant le site Web à partir duquel vous avez obtenu la Plateforme.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Vous convenez qu'en utilisant les Services de tiers, vous pourriez être exposé à du contenu jugé offensant, indécent ou répréhensible, lequel contenu peut ou non être signalé comme comportant un langage explicite, et que les résultats d'une recherche ou la saisie d'une adresse URL particulière peuvent générer automatiquement et involontairement des liens ou des renvois vers du matériel répréhensible. Vous convenez d'utiliser les Services de tiers à vos propres risques et que ni Haven ni ses sociétés affiliées ne sauraient être tenues responsables envers vous d'un contenu accessible par la Plateforme qui serait jugé offensant, indécent ou répréhensible.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Certains Services de tiers peuvent afficher, comprendre ou rendre accessibles du contenu, des données, des renseignements, des applications, des publicités, du matériel, des sollicitations et d'autres logiciels provenant de tiers, lesquels peuvent comprendre des personnes physiques, des entreprises, des sociétés et d'autres organisations (les « Contenus de tiers »), ou fournir des liens vers certains sites Web de tiers. En utilisant les Services de tiers, vous reconnaissez et convenez que Haven n'est pas responsable d'examiner, d'évaluer ou de vérifier le contenu, l'exactitude, l'exhaustivité, l'actualité, la validité, le respect du droit d'auteur, la légalité, la décence, la qualité ou tout autre aspect de ces Contenus de tiers ou sites Web. Les Services de tiers sont rendus accessibles uniquement à des fins de commodité, de divertissement et d'information. Haven ne garantit ni n'endosse les Contenus de tiers ou sites Web, ni tout autre matériel, produit ou service de tiers, et n'assume aucune responsabilité à leur égard envers vous ou toute autre personne. Les Contenus de tiers et les liens vers d'autres sites Web sont fournis uniquement à titre de commodité. Les données de localisation fournies par des Services de tiers servent uniquement à des fins de navigation de base et ne doivent pas être utilisées dans des situations où des renseignements de localisation précis sont nécessaires ou lorsque des données de localisation erronées, inexactes ou incomplètes pourraient entraîner un décès, des blessures corporelles ou des dommages matériels ou environnementaux. Ni Haven ni ses fournisseurs de contenu ne garantissent la disponibilité, l'exactitude, l'exhaustivité, la fiabilité ou l'actualité des renseignements ou des données de localisation affichés par les Services de tiers.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Vous reconnaissez et convenez que le fait de créer un lien vers des Services de tiers n'implique d'aucune façon que Haven soutient, recommande ou endosse ces Services de tiers.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Vous reconnaissez et convenez que les Services de tiers contiennent du contenu, des renseignements et du matériel exclusifs appartenant à des tiers et qu'il vous incombe de veiller à ce que votre utilisation des Services de tiers, dans le cadre de la Plateforme ou autrement, soit conforme aux modalités d'utilisation de ces tiers et aux lois applicables.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Aucune partie des Services de tiers ne peut être reproduite sous quelque forme ou par quelque moyen que ce soit. Vous convenez de ne pas modifier, louer, donner à bail, prêter, vendre ou distribuer les Services de tiers, ni créer d'œuvres dérivées fondées sur ceux-ci, de quelque manière que ce soit, et de ne pas les exploiter de façon non autorisée, notamment en portant atteinte à la capacité du réseau ou en la surchargeant. Vous convenez en outre de ne pas utiliser les Services de tiers pour harceler, maltraiter, traquer, menacer, diffamer une autre partie ou autrement porter atteinte à ses droits, et que Haven n'est aucunement responsable d'une telle utilisation par vous, ni des messages ou transmissions harcelants, menaçants, diffamatoires, offensants ou illégaux que vous pourriez recevoir en utilisant les Services de tiers.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "De plus, les Services de tiers et les Contenus de tiers accessibles depuis l'Appareil, affichés sur celui-ci ou liés à celui-ci ne sont pas offerts dans toutes les langues ni dans toutes les provinces ou tous les pays. Haven ne déclare pas que ces Services de tiers et Contenus de tiers conviennent à un lieu particulier ou y sont accessibles. Si vous choisissez d'accéder à ces Services de tiers ou Contenus de tiers, vous le faites de votre propre initiative et il vous incombe de respecter les lois applicables, notamment les lois locales applicables. Haven et ses concédants, le cas échéant, se réservent le droit de modifier, de suspendre, de retirer ou de désactiver l'accès à tout Service de tiers en tout temps et sans préavis. Haven ne saurait en aucun cas être tenue responsable du retrait ou de la désactivation de l'accès à de tels Services de tiers. Haven peut également imposer des limites à l'utilisation de certains Services de tiers ou à l'accès à ceux-ci, dans tous les cas sans préavis ni responsabilité.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("10. Résiliation et modification")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "La licence octroyée aux présentes pour l'utilisation de la Plateforme demeure en vigueur jusqu'à sa résiliation par vous ou par Haven. Si vous ne respectez pas le présent Contrat, vos droits prendront fin automatiquement et sans préavis. Sans préjudice de ses autres droits et recours, Haven peut résilier le présent Contrat par commodité, à son entière discrétion, immédiatement, avec ou sans préavis.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Haven peut modifier la Plateforme et le présent Contrat moyennant un avis qui vous est transmis à votre dernière adresse courriel connue ou par la publication d'un avis sur le site Web de Haven, y compris en modifiant les fonctionnalités ou l'apparence de la Plateforme, ou en modifiant la portée de la licence ou d'autres modalités du Contrat. Lorsque la loi exige votre consentement à une modification, Haven vous le demandera. Si Haven modifie la Plateforme ou le présent Contrat, vous pouvez résilier le Contrat et cesser d'utiliser la Plateforme.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "En cas de résiliation du présent Contrat conformément à la présente section 10, vous devez immédiatement cesser d'utiliser la Plateforme et détruire toutes les copies du contenu de la Plateforme sous votre contrôle ou en votre possession. Malgré la résiliation du présent Contrat ou toute disposition contraire aux présentes, les sections 4, 9, 10, 12, 13, 14, 15, 16 et 18 du présent Contrat survivront à l'expiration ou à la résiliation du Contrat, demeureront pleinement en vigueur et lieront les parties.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("11. Mises à jour, entretien et exigences techniques")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "Haven peut, à son entière et seule discrétion, rendre accessibles ou fournir des mises à jour, des mises à niveau, de l'entretien et du soutien relativement à la Plateforme ou de nouvelles versions de celle-ci, ce qui peut comprendre des correctifs, des améliorations, de nouvelles fonctionnalités, des fonctionnalités supprimées, des modifications ou d'autres améliorations (collectivement, les « Mises à jour »). Les Mises à jour peuvent entraîner le retrait de certaines fonctionnalités. Si Haven publie une Mise à jour de la Plateforme, vous convenez de cesser d'utiliser la version antérieure. Malgré ce qui précède, vous comprenez et convenez que Haven n'a aucune obligation de fournir ou de rendre accessibles des Mises à jour ni de conserver les fonctionnalités offertes dans la Plateforme ou dans une Mise à jour subséquente, et que Haven ne saurait être tenue responsable des dommages, coûts, responsabilités, frais ou dépenses que vous subiriez en raison du retrait d'une fonctionnalité de la Plateforme ou d'une Mise à jour subséquente.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Il vous incombe uniquement de déterminer si la Plateforme et votre utilisation de celle-ci permettront d'atteindre les résultats souhaités, ainsi que d'obtenir, de configurer et de protéger l'ensemble de l'équipement et des services n��cessaires à l'installation et à l'utilisation de la Plateforme et de toutes les Mises à jour, données, programmes ou plateformes tierces utilisés en lien avec celle-ci. Haven ne saurait en aucun cas être responsable de ce qui précède.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("12. Exclusion de garanties")}</h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "VOUS RECONNAISSEZ ET CONVENEZ QUE VOUS UTILISEZ LA PLATEFORME À VOS SEULS RISQUES. DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, LA PLATEFORME AINSI QUE TOUT LE CONTENU QUI Y FIGURE OU QUI EST ACCESSIBLE À PARTIR DE CELLE-CI VOUS SONT FOURNIS « TELS QUELS », AVEC TOUS LEURS DÉFAUTS ET VICES, ET SANS AUCUNE DÉCLARATION, GARANTIE, CONDITION OU ASSURANCE DE QUELQUE NATURE QUE CE SOIT, EXPRESSE OU IMPLICITE, LÉGALE OU DÉCOULANT DES USAGES, DU COMMERCE OU D'UNE HABITUDE DE FAIRE AFFAIRE OU D'EXÉCUTION, Y COMPRIS, SANS S'Y LIMITER, LES GARANTIES D'ADAPTATION À UN USAGE PARTICULIER, DE QUALITÉ MARCHANDE, D'ABSENCE DE CONTREFAÇON, DE RENDEMENT, DE RÉSULTATS, DE CONVENANCE, DE QUALITÉ, D'ACTUALITÉ, DE TITRE ET DE FAÇON, LESQUELLES SONT PAR LES PRÉSENTES EXCLUES PAR HAVEN, EN SON PROPRE NOM ET AU NOM DE SES SOCIÉTÉS AFFILIÉES, FILIALES, SUCCESSEURS ET AYANTS DROIT, DANS TOUTE LA MESURE PERMISE PAR LA LOI. SANS LIMITER LA PORTÉE GÉNÉRALE DE CE QUI PRÉCÈDE, HAVEN NE DÉCLARE NI NE GARANTIT QUE : (I) LA PLATEFORME SERA COMPATIBLE AVEC VOS APPAREILS ET L'ÉQUIPEMENT, LES LOGICIELS, LES APPLICATIONS OU LES SYSTÈMES CONNEXES; (II) LA PLATEFORME SERA ACCESSIBLE OU FONCTIONNERA SANS INTERRUPTION OU SANS ERREUR, OU QUE LES ERREURS SERONT CORRIGÉES; (III) LA PLATEFORME RÉPONDRA À VOS EXIGENCES; (IV) LES DONNÉES TRAITÉES PAR LA PLATEFORME SERONT EXACTES, VALIDES, COMPLÈTES OU ACTUELLES; (V) CERTAINS RÉSULTATS POURRONT ÊTRE OBTENUS PAR L'UTILISATION DE LA PLATEFORME; (VI) L'UTILISATION DE LA PLATEFORME SERA EXEMPTE D'ERREURS, DE VIRUS OU D'AUTRES ÉLÉMENTS DESTRUCTEURS OU PERTURBATEURS; OU (VII) L'UTILISATION DE LA PLATEFORME NE PORTERA PAS ATTEINTE AUX DROITS (Y COMPRIS LES DROITS DE PROPRIÉTÉ INTELLECTUELLE) D'UNE PERSONNE. HAVEN DÉCLINE TOUTE RESPONSABILITÉ À L'ÉGARD DE CES QUESTIONS DANS TOUTE LA MESURE PERMISE PAR LA LOI. AUCUN RENSEIGNEMENT NI CONSEIL, VERBAL OU ÉCRIT, DONNÉ PAR LE CONCÉDANT OU SON REPRÉSENTANT AUTORISÉ NE SAURAIT CRÉER UNE GARANTIE. VOUS ASSUMEZ TOUS LES COÛTS LIÉS À L'ENTRETIEN, À LA RÉPARATION OU À LA CORRECTION DE VOS APPAREILS AINSI QU'AU CONTRÔLE DE LA SÉCURITÉ ET DE LA CONFIDENTIALITÉ DE VOS DONNÉES. HAVEN NE SAURAIT EN AUCUN CAS ÊTRE TENUE RESPONSABLE DE QUELQUE DOMMAGE QUE CE SOIT, Y COMPRIS, SANS S'Y LIMITER, LES DOMMAGES DÉCOULANT DE LA PERTE DE DONNÉES, DE DOMMAGES À L'ÉQUIPEMENT, D'UNE DÉFAILLANCE MATÉRIELLE OU LOGICIELLE, OU DE TOUTE AUTRE PERTE PÉCUNIAIRE DÉCOULANT DE L'UTILISATION OU DE L'IMPOSSIBILITÉ D'UTILISER LA PLATEFORME, MÊME SI VOUS AVEZ ÉTÉ AVISÉ DE LA POSSIBILITÉ DE TELS DOMMAGES.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "CERTAINS TERRITOIRES NE PERMETTENT PAS L'EXCLUSION OU LA LIMITATION DES GARANTIES IMPLICITES NI LA LIMITATION DES DROITS LÉGAUX APPLICABLES AUX CONSOMMATEURS; PAR CONSÉQUENT, CERTAINES OU L'ENSEMBLE DES EXCLUSIONS ET LIMITATIONS CI-DESSUS POURRAIENT NE PAS S'APPLIQUER À VOUS.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("13. Limitation de responsabilité")}
            </h2>
            <p className="mb-4 leading-relaxed">
              {t(
                "DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE ET MALGRÉ TOUTE AUTRE DISPOSITION DU PRÉSENT CONTRAT, HAVEN, SES SOCIÉTÉS AFFILIÉES, SUCCESSEURS OU AYANTS DROIT, AINSI QUE LEURS CONCÉDANTS, FOURNISSEURS DE SERVICES, EMPLOYÉS, MANDATAIRES, REPRÉSENTANTS, COMMANDITAIRES, PARTENAIRES, DIRIGEANTS, ADMINISTRATEURS, CADRES OU MEMBRES RESPECTIFS NE SAURAIENT EN AUCUN CAS ÊTRE TENUS RESPONSABLES ENVERS VOUS DE BLESSURES DE QUELQUE NATURE QUE CE SOIT, CORPORELLES OU AUTRES, NI DE QUELQUE MONTANT, PERTE OU RÉCLAMATION QUE CE SOIT, NI DES RÉCLAMATIONS DE TIERS ALLÉGUANT QUE LA PLATEFORME PORTE ATTEINTE AUX DROITS DE PROPRIÉTÉ INTELLECTUELLE D'UN TIERS, NI DE QUELQUE PRÉJUDICE OU DOMMAGE ACCESSOIRE, SPÉCIAL, PUNITIF, EXEMPLAIRE, INDIRECT OU CONSÉCUTIF QUE CE SOIT, Y COMPRIS LES DOMMAGES POUR PERTE DE REVENUS, PERTE D'ACTIVITÉS, PERTE DE DONNÉES, PERTE DE CLIENTÈLE, D'ÉCONOMIES, DE REVENUS, DE PROFITS, D'USAGE OU DE PRODUCTION PRÉVUE, INTERRUPTION DES ACTIVITÉS, DÉFAILLANCE OU AUTRE, DÉFAUT DE FOURNIR DU SOUTIEN, DES MISES À JOUR OU DE L'ENTRETIEN, OU TOUT AUTRE DOMMAGE OU PERTE COMMERCIALE DÉCOULANT DE VOTRE UTILISATION DE LA PLATEFORME OU S'Y RAPPORTANT, QUELLE QUE SOIT LA CAUSE.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "CE QUI PRÉCÈDE NE PORTE PAS ATTEINTE À LA RESPONSABILITÉ QUI NE PEUT ÊTRE EXCLUE OU LIMITÉE EN VERTU DE LA LOI APPLICABLE; TOUTEFOIS, DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, LES LIMITATIONS QUI PRÉCÈDENT S'APPLIQUERONT QUE LES DOMMAGES DÉCOULENT D'UNE VIOLATION DE CONTRAT, D'UN DÉLIT (Y COMPRIS LA NÉGLIGENCE) OU AUTREMENT, ET QUE CES DOMMAGES AIENT ÉTÉ PRÉVISIBLES OU NON, ET QUE HAVEN AIT ÉTÉ AVISÉE OU NON DE LEUR POSSIBILITÉ.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "CERTAINS TERRITOIRES NE PERMETTENT PAS CERTAINES LIMITATIONS DE RESPONSABILITÉ; PAR CONSÉQUENT, CERTAINES OU L'ENSEMBLE DES LIMITATIONS CI-DESSUS POURRAIENT NE PAS S'APPLIQUER À VOUS.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("14. Recours exclusif")}</h2>
            <p className="leading-relaxed">
              {t(
                "Dans toute la mesure permise par la loi applicable, votre recours exclusif relativement à l'utilisation de la Plateforme consiste à résilier le présent Contrat et la licence octroyée aux présentes, et à cesser d'utiliser la Plateforme.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("15. Renonciation et quittance")}</h2>
            <p className="leading-relaxed">
              {t(
                "Vous êtes seul responsable de votre utilisation de la Plateforme et de vos interactions avec les commerçants et les autres sites. Dans la mesure permise par la loi applicable, vous libérez par les présentes Haven de toute réclamation, demande, procédure ou responsabilité liée aux Services de tiers ou aux Contenus de tiers, y compris à l'égard de toute offre, de tout produit ou de tout service.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("16. Indemnisation")}</h2>
            <p className="leading-relaxed">
              {t(
                "Vous, ainsi que toute personne que vous représentez et qui utilise la Plateforme, indemniserez, défendrez et tiendrez à couvert Haven ainsi que ses dirigeants, employeurs, employés, entrepreneurs, personnel, commanditaires, gestionnaires, mandataires, sociétés mères, filiales, sociétés affiliées, représentants et autres partenaires à l'égard de tout dommage direct, indirect, accessoire, spécial, consécutif ou exemplaire, ainsi que de toute réclamation, demande, poursuite ou procédure, menacée ou en cours, découlant directement ou indirectement de votre utilisation de la Plateforme, de toute autre question relative à la Plateforme ou de toute négligence, inconduite ou violation du présent Contrat de votre part, ou s'y rapportant.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("17. Conformité aux lois applicables")}
            </h2>
            <p className="leading-relaxed">
              {t(
                "Vous convenez d'utiliser la Plateforme conformément à l'ensemble des lois et règlements applicables, qu'ils soient locaux, provinciaux, nationaux ou étrangers, y compris les lois applicables en matière d'exportation. Vous déclarez et garantissez à Haven que vous ne vous trouvez pas dans un pays où votre utilisation de la Plateforme contreviendrait aux lois locales ou étrangères. Haven se réserve le droit de modifier, de suspendre, de retirer ou de désactiver l'accès à la Plateforme en tout temps et sans préavis. Haven ne saurait en aucun cas être tenue responsable du retrait ou de la désactivation de l'accès à la Plateforme.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("18. Droit applicable")}</h2>
            <p className="leading-relaxed">
              {t(
                "Le présent Contrat, la Plateforme et l'utilisation de celle-ci sont régis par les lois de la province de l'Ontario et les lois fédérales du Canada qui s'y appliquent. Chacune des parties aux présentes reconnaît et accepte irrévocablement la compétence exclusive des tribunaux de la province de l'Ontario et convient en outre d'intenter toute procédure pouvant découler des présentes devant les tribunaux du district judiciaire de Toronto, dans la province de l'Ontario.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t("19. Dispositions générales")}</h2>
            <p className="leading-relaxed">
              {t(
                "Le présent Contrat constitue l'intégralité de l'entente entre vous et Haven et remplace toute autre communication ou publicité relative à la Plateforme. Haven peut modifier les modalités du présent Contrat de temps à autre, de la manière décrite à la section 10. Vous ne pouvez céder le présent Contrat sans le consentement de Haven, lequel peut être refusé à son entière discrétion. Haven peut céder le présent Contrat à son entière discrétion, sans avoir à obtenir votre consentement. Aucun consentement ni aucune renonciation à l'égard de vos obligations aux termes des présentes ne sera valide à moins d'être écrit et signé par Haven. Si une disposition du présent Contrat est jugée invalide ou inexécutoire, les autres dispositions demeureront pleinement en vigueur, sans atteinte ni invalidation. Dans le présent Contrat : a) les titres ne servent qu'à des fins de référence; b) « personne » comprend une personne morale; c) les mots au singulier comprennent le pluriel, et inversement; d) les mots d'un genre comprennent les deux genres; et e) « y compris » ou « comprend » signifie y compris ou comprend, sans limitation ni restriction.",
              )}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t("20. Programme de messages texte de Haven")}
            </h2>
            <p className="mb-4 leading-relaxed">{t("Haven envoie deux types de messages texte.")}</p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Les messages de service concernent votre Compte et votre participation : codes de vérification, alertes de sécurité, notifications de jumelage et de messages, rappels d'horaire et de cours, mises à jour de programme, avis de sécurité et réponses du soutien. Ils font partie du fonctionnement de votre Compte.",
              )}
            </p>
            <p className="mb-4 leading-relaxed">
              {t(
                "Les messages marketing — nouvelles, programmes, événements et campagnes de Haven — sont facultatifs. Nous ne les envoyons que si vous y avez consenti, et vous pouvez vous désabonner en tout temps. Le consentement n'est jamais une condition d'utilisation de la Plateforme.",
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Vous pouvez gérer les messages que vous recevez dans les paramètres de notification de votre compte. Répondez STOP à tout message pour cesser de recevoir des textos; les désabonnements sont traités dans un délai de dix (10) jours ouvrables. Selon le numéro d'envoi, répondre STOP peut mettre fin à tous les textos provenant de ce numéro; les avis essentiels concernant votre compte et votre sécurité pourraient tout de même vous être transmis par un autre canal lorsque la loi le permet. Répondez HELP pour obtenir de l'aide, ou écrivez à info@findhaven.org. La fréquence des messages varie. Des frais de messagerie et de données peuvent s'appliquer. Haven ne vend pas de numéros de téléphone et ne les communique pas à des fins de marketing par des tiers.",
              )}
            </p>
          </section>

          <section className="mb-10 border-t border-border pt-8">
            <p className="mb-2 leading-relaxed">
              <strong>{t("Questions au sujet du présent contrat")} : </strong>
              <a href="mailto:info@findhaven.org" className="text-primary hover:underline">
                info@findhaven.org
              </a>
            </p>
            <p className="leading-relaxed">
              <strong>{t("Questions concernant la vie privée ou vos droits")} : </strong>
              {t("Responsable de la protection des renseignements personnels")} —{" "}
              <a href="mailto:privacy@findhaven.org" className="text-primary hover:underline">
                privacy@findhaven.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
