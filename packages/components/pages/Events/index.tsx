import React from 'react';
import { VStack } from '@chakra-ui/react';
import PageTitle from '@packages/components/core/PageTitle';
import Background from '@packages/components/core/Background';
import EventCard from './EventCard';
import { eventComp } from './utils';

const eventList = [
  {
    name: 'Village des étrangers',
    href: 'https://discord.com/channels/843826987466227722/843847698373148683/904329286763298847',
    tags: ['PvE'],
    startDate: '2021-10-31',
    continuous: true,
    RPDescription: `Vikings du Valhabba ! Aujourd'hui marque un sinistre tournant dans l'histoire de ces terres. Aujourd'hui la fragile confiance que vous pouviez porter à vos confrères humains vient de voler éclat.
Prenez garde à ceux que vous croisez, une forme humaine n'est plus un signe de confiance.

Alors que les membres de ma confrérie ramenaient en ces terres un nouvel artefact de vision, ils se sont arrêtés à un campement humain. Bien mal leur a pris. Ils furent dépouillés et exécutés !
Leur mission était de permettre le libre partage de connaissance, mais ce pouvoir est maintenant tombé aux mains d'étranges voyageurs. Assurément ces hommes ne sont pas ici par la volonté d'Odin, mais uniquement par les manigances de Yagluth. 

Pire encore, par cet artefact, dont je voulais vous faire cadeau, ils ont dressé une route entre nos terres et les leurs, et sont maintenant en train d'arriver en masse et de se créer une enclave en nos terres !
Guerrier du Valhabba, ceci n'est pas qu'un affront à vos dieux, c'est un affront à tous les véritables vikings du  Valheim !

Vikings, en ce jour sinistre, méfiez-vous des humains que vous croiserez et vengez vos dieux ! En ce jour si spécial n'ayez pas peur et prenez le large. Partez des terres communales (les terres immédiatement à l'ouest de l'île des déchus), allez au sud-ouest en longeant d'abord la cote (EN ÉVITANT LA ZONE MAUDITE/BOGUÉE --> https://discord.com/channels/843826987466227722/879308355913543700/904320964182044712), quittez le premier cercle et prenez au sud, vous tomberez rapidement (sans avoir à franchir un nouveau cercle) sur l'île où ces étrangers se sont installés, ou sur le petit marécage voisin.

Massacrez-les jusqu'aux derniers ! Que pas un seul ne survive. Exercer le courroux de vos dieux, et ils vous souriront en retour !`,
    description: `Pour cette quête, il vous est conseillé de prendre un lit à l'auberge du village. Vous y réapparaitrez après chaque mort. 
À cette auberge se trouve un portail déconnecté, ne changer pas son nom ! Une fois que vous aurez trouvé l'île des étrangers, vous pourrez relier un nouveau portail à celui ci. Cela vous permettra de rapidement revenir sur l'île après chaque mort.

Voici la petite cabane contenant le portail de retour à proximité de l'île des étrangers. Il est à bonne distance de l'île, mais y est relié par une fine langue de terre ; n'en tombez pas !
Pour activer le portail, retirez simplement la dernière lettre de son nom. 
Désactivez-le, une fois la quête finie pour ne rien spoiler aux autres. 

La destruction des bâtiments de la quête est bien entendu à éviter. Néanmoins, une nouvelle méthode de réparation est expérimentée ici. Elle remplace les pièces détruites par des pièces fantômes que les admins pourront remplacer après chaque passage.

(Cette quête sera renouvelée après chaque complétion par les admins, signalez le nous quand vous videz la zone !)`,
  },
  {
    name: 'Piraterie et escorte de marchands',
    href: 'https://discord.com/channels/843826987466227722/894670935842508831/907694015183482930',
    tags: ['PvP', 'Escorte', 'Marin'],
    startDate: '2021-11-13T20:30',
    continuous: false,
    description: `Bonjour, je propose ce samedi 20h30 un événement "attaque de marchands". Je transporterai un drakkar bien chargé, serai en pvp et serai d'accord pour me faire attaquer et voler bateau et cargaison (enfin...hrp bien sûr...la marchande n'est surtout pas d'accord ^^'). Je recruterai des escortes, et les pirates sont libres de s'organiser ou non comme ils veulent !
Pour un maximum de fun, voici les quelques règles que je propose pour cet événement :
- PVP obligatoire pour tous les participants à partir de 20h30
- Il y aura un grand panneau au départ et une balise à l'arrivée. Si un pirate peut voir le panneau de départ [son jeu le charge], il n'a pas le droit d'attaquer le camp du marchand, et il ne peut pas attaquer quoi que ce soit dans le rayon de la balise d'arrivée. Par contre, l'escorte du marchand peut attaquer d'où elle veut.
- Le pillage de tombe, la destruction de bâtiments, portails, panneaux sont interdits. Seuls le pvp, le vol de navires participants et le pillage de la cargaison sont autorisés. Les réparations sont autorisées.
- Quiconque porte de la cargaison sur soi ne peut brandir plus qu'un bouclier, et doit la déposer au plus vite dans une cale/un coffre.
- Après le début de l'événement, les trahisons pour ou contre le marchand sont interdites.
- L'événement se termine quand tout est arrivé dans la balise d'arrivée, ou que le marchand déclare forfait sur les ressources perdues.
- Si vous me volez plus de la moitié de ma cargaison, j'exige de pouvoir en racheter au moins cette moitié aux tarifs du serveur (je l'ai miné avec mes petites mimines quand même !).
- J'ai vu en songe, que les perdants subiront une malédiction des dieux...`,
  },
  {
    name: 'Course de sangliers',
    href: 'https://discord.com/channels/843826987466227722/867077906294767647/910618272246939729',
    tags: ['Course', '🐗', 'Paris'],
    startDate: '2021-11-20T20:00',
    continuous: false,
    location: 'Sanglidrome de Sofrin',
    RPDescription: `Demain à 20h se tiendra la première édition de la course à dos de sanglier, qui aura lieu au Sanglidrome de @Sofrin  .
Un TP sera mis à disposition, et toutes les personnes voulant assister à l'event sont les bienvenues. 
Un système de pari sera également mis en place.

Venez prouver que vous êtes le plus rapide ! `,
    description: `=> Arrivée des participants 10 minutes à l'avance
=> Les sangliers ainsi que les selles seront prétées si vous n'en avez pas (Basic Saddle)
=> Les sangliers sont des 2* rapides pour plus de fun
=> L'event sera sous forme de tournoi à élimination directe avec deux participants par course, la piste n'étant pas faite pour accueillir tous les participants en même temps (un second Sanglidrome plus spacieux pourrait voir le jour suivant comment sera reçu ce premier event)
=> Le premier cavalier a terminer 5 tours de Sanglidrome sera désigné vainqueur et accédera à la manche suivante
=> Des gradins sont disponibles pour les personnes attendant leur tour, ou qui veulent simplement regarder
Récompenses :
🥇 : 1000 piastres
🥈 : 750 piastres
🥉  : 500 piastres
Lot de consolation : 20 Viandes de Lox crues (les trois premiers en bénéficierons également)`,
  },
  {
    name: 'Chasse aux artefacts',
    href: 'https://discord.com/channels/843826987466227722/843847698373148683/900856477504376883',
    tags: ['Chasse au trésor'],
    startDate: '2021-10-21T20:00',
    continuous: true,
    location: 'Terres communales',
    RPDescription: `Vikings du Valhabba ! En ces terres torturées par les maléfices de Yagluth, je vous apporte la lumière. Moi, @Heimdallr, ai profité du rapprochement des mondes pour amener au Valhabba des artefacts de vision façonnés par d’étranges hommes. Des hommes d’une autre terre et d’un autre temps.`,
    description: `Ces artefacts sont pour ceux qui savent déjà ouvrir les yeux. Afin de les guider j’ai laissé sur vos terres communales° 10 indices numérotés. Trouvez-les et assembler les pour invoquer brièvement°° le bifrost. Il vous mènera aux artefacts ! 
Une fois là-bas, prenez en un et un seul artefact puis rejoignez la mer avant de retourner chez vous.

Ceci est une quête de type “chasse au trésor” 😄
° : les terres communales sont dans la zone au nord-Ouest de l’île des déchus, au dessus des terres interdites, cernée d’eau et de murailles de pierres.
°° : Afin de laisser l’accès au portail aux suivants, utiliser l’astuce du renommage : avant de prendre le portail final. 
1) Entrez le nom du portail, 
2) attendez (10 secondes) qu’il se connecte, 
3) changez le nom et précipitez-vous dans le portail avant que le Bifrost ai eu le temps de se reconnectez.
 Ça vous emmènera au portail final tout en le déconnectant derrière vous.
(De toute manière le portail final est à sens unique)
Cette quête n'est pas une course les artefacts seront renouvelés s'ils viennent à manquer.
Et bien entendu n'altérez PAS les indices que vous trouverez.`,
  },
  {
    name: 'Le Trésor des Eacides',
    href: 'https://discord.com/channels/843826987466227722/851883429162647582/912165420029607956',
    tags: ['Chasse au trésor'],
    startDate: '2021-11-27',
    continuous: true,
    location: 'Île de départ',
    RPDescription: `Serez-vous le prochain brave qui parviendra à se saisir du Trésor des Eacides?!`,
    description: `Oyez, oyez, braves vikings! J'ai la joie de vous annoncer la naissance d'une nouvelle quête: la Quête du Trésor des Eacides.
C'est une quête permanente mais qui n'est accomplissable qu'une seule fois! (il sera peut-être possible, d'ici quelques temps, de la refaire en fonction des modifications qui lui sera apporté)
Pour débuter la quête je vous demande tout d'abord de déclarer sur ce canal que vous la commencez, (mais vous n'avez, pour le moment, pas besoin d'attendre mon accord pour débarquer dans l'aventure 😉)
Une fois que vous vous êtes déclaré rendez-vous sur l'île du départ (île en forme d'étoile où vous commencez le jeu). Sur l'une des pointes de l'île (regarder la carte) vous trouverez le portail par lequel vous débuterez la quête. LISEZ BIEN les pancartes que vous croiserez!
IMPORTANT:
L'utilisation du marteau durant la quête est STRICTEMENT INTERDIT! Toutes destructions ou créations d'une quelconque structure situé sur les zones de la quête est considéré comme de la TRICHE! En cas de triche vous ne pourrez plus tenter d'accomplir la quête, aucune récompense ne vous attendra dans le trésor (ou soit se sera une récompense "troll" si je suis d'humeur taquin) et votre nom sera affiché sur le mur "des vikings sans bravoure"! 
Néanmoins, si vous mourrez durant la quête et que c'est vraiment trop compliqué pour vous de récupérer votre tombe pas de problèmes: contactez moi et nous irons ensemble la récupérer. Bien entendu vous pourrez ensuite continuer de chercher le Trésor des Eacides. En résumé, il vaut mieux venir me parler que faire des bétises 😉 
Pour pouvoir accomplir cette quête il vous faut être au moins au niveau bronze (mais dans ce cas là je vous conseille de la faire à 2). Elle est accomplissable en solo à partir du niveau fer. 
Notez qu'il vous faudra vous protéger du grand froid! Si vous n'avez pas encore de quoi vous protéger de la neige pas de problèmes! Des potions de résistance au gel sont achetables à la demeure de Pyrrhus (où se situe la première étape de la quête) 
Enfin, il est possible de louer un lit à la demeure de Pyrrhus pour 50 piastres (ce tarif comprend également un accès aux ateliers et à un coffre personnel en plus de vous permettre de réapparaitre pas très loin si jamais vous mourrez durant la quête)
Pour cela contactez moi et je vous donnerez une chambre.
DERNIERE CHOSE IMPORTANTE: Une fois que vous aurez trouvé le Trésor des Eacides veuillez prendre un screen-shoot de vous devant la pancarte "Trésor des Eacides" et publiez le sur le canal 📸screenshot (avec un petit récit de vos exploits 😉  ) 
SVP faite le, cela est très important pour que le Trésor "magique" des Eacides puisse se remplir à nouveau, pour que les autres personnes puissent savoir si le trésor est vide ou non et surtout pour que votre nom apparaisse sur le Mur des Braves! 
À noter qu'il est tout a fait possible à plusieurs personnes de faire la quête en même temps. Libre à vous de vous entraider ou non et de partager la récompense ou non. (Ça pourrait même être vraiment drôle de voir plusieurs personnes tenter de récupérer le trésor en même temps, je soutiens cela à 100%, ceux qui n'y parviendront pas auront bien entendu le droit de retenter leur chance) (tant que vous n'avez pas réussi à obtenir le trésor des Eacides vous avez le droit de recommencer la quête) 
Courage et bonne aventure!
(Vu que vous allez rentrer dans ma demeure je me permet de vous rappeler qu'aucun vol n'est toléré. Je vous demande également de manière plus générale de respecter les lieux ainsi que vos possibles concurrents, merci) 
(Le ou la tout(e) premier(e) qui finira l'événement aura le droit à une récompense un peu plus élevé)😉`,
  },
  {
    name: 'Championnat PvP',
    href: 'https://discord.com/channels/843826987466227722/843847698373148683/912371951341801642',
    tags: ['PvP', 'Duel', 'Tournoi', 'Paris'],
    startDate: '2021-11-26T21:30',
    continuous: false,
    location: 'Arène PvP',
    RPDescription: `TAPER !`,
    description: `Ce vendredi soir aura lieu le cinquième championnat pvp du Valhabba !

La désignation des combattants se fera de manière aléatoire.

Pour rappel : 
- Il est attendu de vous un comportement correct, pas de spam vocal ou écrit ainsi que du fair play. (la bonne ambiance est le ciment d'une communauté ❤️ )
- Si nous dépassons les 10 participants une proposition de championnat en double et avec désignation aléatoire sera mise au vote.
- La nourriture, les armes et les pièces d'armures seront fournies sur place et seront dévoilé plus tard !
-  Pour rejoindre cet event il vous sera demandé de créer un nouveau personnage entre 20h50 et 21h le soir même.
- Les paris sont libres et doivent être écrit sur un canal dédié.

Sont à détrôner : 
- Championne en titre : Titre à récupérer, Brynhild la valkyrie ayant rejoint le Valhalla après quatre victoires consécutives. 
- Second : @Alrek, Le Bien Fourni
- Troisième : Klesk mais il n'est plus des nôtres

Vous trouverez ci-dessous le lien pour vous inscrire, si vous ne souhaitez pas créer un compte n'hésitez pas à réagir par l'émoji :Vikingwar: pour être compté comme participants.
Les personnes qui ne seront pas inscrites ne pourront pas combattre.

Résultats : 
Vainqueur : Mildos 
Second : Bwïrm, Le Cartographe 
Troisième : Sofrin`,
  },
  {
    name: 'Défaire le déchu "Aîné"',
    href: 'https://discord.com/channels/843826987466227722/843847698373148683/917418006294982747',
    tags: ['PvE', 'Boss'],
    startDate: '2021-12-10T21:00',
    continuous: false,
    location: 'Ruines à côté du village communautaire',
    RPDescription: `Un homme vêtu intégralement de noir et encapuchonné marche dans la brume de la forêt noire. Il s’approche d’un groupe de @Viking  assis autour d’un feu de camp, proche du village communautaire.

Ces derniers étaient en pleine discussion pour savoir à combien allait passer le prix de référence des morceaux de chitine. Quand ils aperçurent le vieil homme, ils se turent.

« Braves Guerrier e.s », entonna le sombre vieillard d’une voix rauque.

« Nous sommes nombreux à vous avoir précédés, portés par la volonté d’Odin de faire son œuvre. Là où nous avons échoué, vous devez réussir. L’Ainé s’est réveillé et son pouvoir grandit de jours en jour, il faut que vous y mettiez un terme.

Allez maintenant guerrier.e.s, faites parvenir la parole d’Odin, et rassemblez vos compagnons, armez-vous de ce qui se trouve dans ces coffres et allez défaire le Déchu qui a trop longtemps défié la volonté d’Odin. »

Soudainement, la brume disparaît et laisse place autour du groupe de vikings à de vieilles ruines de pierre, un portail et des coffres remplis d’équipements.`,
    description: `Organisateur: @[Valk] Vidar , merci à toi 🙂
		
Rendez-vous au village communautaire et descendez vers le port, vous trouverez sur votre gauche de vieilles ruines, c’est ici que commence l’évent.

1) Un combat contre l’Aîné, avec équipement de bronze fourni par les Dieux pour prouver à Odin votre valeur. Des coffres seront a votre disposition numérotés de 1 à 5, avec tout l’équipement et armement level max correspondant à la période du bronze et précédent. Après chaque combat, les guerrier.e.s devront rapporter la totalité de l’équipement emprunté. Je vous conseille de prendre un lit à l'auberge du village commun pour éviter de faire de multiples portails dans la zone du village communal. Le combat se fera par équipes de moins de 5 joueurs qui passeront les uns après les autres (si on est 12 inscrits, ce sera 3 équipes de 4).

2) La preuve de votre réussite devra être exposée aux yeux de tous, ainsi vous devrez ramener un trophée de l’Aîné, l’accrocher sur l’un des pylônes dans les ruines et inscrire votre nom sur le panneau en dessous. Il y a douze emplacements, douze trophées à ramener pour débloquer le pouvoir que vous accordera Odin. Il n’est pas obligatoire de participer à l’évent de combat pour pouvoir ramener un trophée, par contre il n’y a qu’un seul trophée de déposable par personne.`,
  },
  {
    name: "L'atelier du cartographe",
    href: 'https://discord.com/channels/843826987466227722/843851399943290921/908369086138953738',
    tags: ['Fabrication'],
    startDate: '2021-11-11',
    continuous: true,
    location: 'Terres communales',
    RPDescription: `Le campement des étrangers avait été maintes fois rasé. Mais à chaque fois, ils revenaient, grâce à l'artefact dérobé à Heimdallr ils naviguaient avec aise dans les eaux du Valhabba, ils connaissaient les cols à prendre, les marais à éviter.
Comment de tels ignares réussissaient-ils des exploits que les vikings eux-mêmes, les envoyés d'Odin, peinaient à réaliser ?
Heimdallr entreprit de résoudre ce mystère. Son regard sonda les bateaux de ces étrangers, leurs ports, leurs maisons, leurs ateliers.
Son enquête lui apporta d'abord une grande frustration, nulle part il ne trouvait l'artefact dérobé !
Où ces étrangers l'avait-il caché ? L'avait-il seulement encore ?!?
Redoublant d'efforts il se mit à sonder les tréfonds du Valhabba et là ! Il trouva une épave où gisait l'artefact, brisé. La nature même avait puni ces étrangers, ou peut-être était-ce Njörd lui-même ?
Mais alors, s'il ne le possédait plus comment naviguaient-ils ?

Heimdallr observa ces envahisseurs longuement, il apprit leurs mœurs, leurs langues, leurs règles, leurs passions la hiérarchie qu'ils respectaient, quand ils en respectaient une. Enfin, après plusieurs lunes, il comprit.
Ces envahisseurs employaient des esclaves plus instruits qu'eux. Ce qu'Heimdallr avait d'abord pris pour de simples serviteurs étaient en faites un autre type d'étrangers eux-mêmes asservi aux envahisseurs du Valhabba. De ses observations, Heimdallr apprit qu'ils servaient de cartographes aux étrangers.

Ils utilisaient une sorte de réplique de l'artefact volé. Certes cette réplique était grossière, elle était fragile et ne servait qu'une seule fois, mais elle reproduisait le but premier de l'artefact. Grâce à ces répliques les étrangers réussissaient à communiquer entre eux leur découverte des terres du Valhabba.

En poursuivant ses observations tout en prêtant plus d'attentions à ces esclaves, une scène retint l'intérêt d'Heimdallr. Un de ces cartographes était d'origine viking. Mieux encore, après avoir fait appel à Odin et Loki, il réussit à tromper le capitaine de son bateau et les conduisit dans des récifs à proximité d'une petite île dont les longs bras de terres rendaient les alentours difficilement navigables. Le choc coula le navire et la plupart de l'équipage, les survivants furent ensuite achevés à coups de pierre par le cartographe sur la plage où ils s'étaient échoués.
Blessé, confus, mais ivre de sang et de liberté l'homme erra ensuite quelque temps, puis trouva refuge derrière de grandes murailles de pierres. Il entreprit alors de se construire une petite maison, et d'être discret pour ne pas attirer l'attention des étrangers.
En secret cependant, il se construisit tout un atelier et consigna jalousement ses connaissances sur le papier.
Observant tout ceci, Heimdallr sourit. Aucune chance qu'un tel homme ne partage ses connaissances avec les autres vikings du Valhabba, mais ils avaient des ennemis communs. Surement si les envoyés d'Odin allaient le trouver, il pourrait les aider de ses talents !`,
    description: `Une (et une seule) table de cartographe est cachée dans les terres communales. Rendez-y vous avec d'autres vikings afin d'y partager votre carte°. Une fois ce partage fait, détruisez la table afin d'en effacer les informations que vous venez d'y consigné. 
La table se trasnformera alors en une construction fantôme afin de pouvoir être reconstruite et utilisée par les suivants.

° : Attention, toute votre carte sera partagée si vous interagissez avec la table de cartographe. Je répète TOUTE votre carte sera partagée.`,
  },
  {
    name: 'Triathlon viking',
    href: 'https://discord.com/channels/843826987466227722/843847698373148683/935908439157256213',
    tags: ['Marin', "Tir à l'arc", 'Course'],
    startDate: '2022-01-29',
    continuous: false,
    location: "Fin d'aprem/Début de soirée",
    description: `Samedi 29/01/22 fin d'aprèm / début de soirée ( horaires encore à définir) se tiendra un évent un peu long. 

Au programme, un triathlon viking : 
1) Course de drakkar
2) Tir de précision à l'arc.
3) Course à pied à poil bien entendu.

- Ces trois épreuves se dérouleront en équipe de deux et uniquement avec celles et ceux qui auront réagit à ce message par l'émoji suivant : :casquedor: (Il n'y aura pas de tolérance si vous n'êtes pas inscrit)
- Vous connaissez déjà la chanson, les participants devront obligatoirement venir avec un personnage nouvellement créé et avec stats à zéro lors du départ de la course de drakkar (ensuite par contre c'est votre choix de sautiller, nager, courir ou frapper ce que vous voulez)

Récompenses : 
Elles seront différentes selon l'ordre d'arrivée et dévoilées en fin de semaine.

- Si vous avez une remarque, conseil, avis veuillez me contacter par ticket via 🚨joindre-les-admins en précisant dans votre message les tenants et aboutissants de votre message sinon il risque de ne pas être pris en compte. Astuce : Écrivez votre message comme si vous voudriez le recevoir si vous organisiez un event sur le serveur 🙂
- Si vous voulez participer à la création des parcours et non aux events veuillez me contacter par ticket via 🚨joindre-les-admins

Selon les retours il est possible que cet event s'étale sur deux jours.`,
  },
];

const Events = () => {
  const events = eventList;

  const now = new Date();
  events.sort(eventComp(now));

  return (
    <Background>
      <VStack spacing="7">
        <PageTitle title="Événements" />
        {events.map((event, index) => (
          <EventCard
            key={event.name}
            event={event}
            elementCategories={['event', index.toString()]}
          />
        ))}
      </VStack>
    </Background>
  );
};

export default Events;
