<script>
  export default {
    title: "L'homme qui goutait à ses propres macédoines",
    id: 1,
    chapters: {
      1: {
        text: "Citoyen grec depuis presque 60 ans, vous êtes las de ces Dieux qu’il vous faut adorer : bien que capables de marcher sur un nuage, ils ont plus de défauts que l’humain moyen, et ne vous aident guère dans vos entreprises. Vous abhorrez encore plus l’esclavage : nombre de vos voisins possèdent au moins une poignée de serviteurs, mais vous n’avez jamais eu les moyens d’en acquérir un seul, votre travail dans un atelier de céramiques ne vous rapportant pas suffisamment de drachmes.\n" +
        "Aussi, quand Zeus, durant une des ses nombreuses et mesquines colères, frappa votre habitation, ce fut définitivement le coup de foudre pour une civilisation bien plus sage que la vôtre : Rome. \n" +
        "Vous avez donc récupéré quelques affaires au milieu des gravats fumants que fut votre maison, et vous vous préparez à partir pour la Cité aux sept Collines. Une question basique se pose cependant : comment vous y rendre ?",
        options: [
          {
            text: "Traverser la mer lionienne",
            chapter: 3
          },
          {
            text: "Voyager sur la terre ferme",
            chapter: 7
          },
        ]
      },
      2: {
        text: "Le singe est amoché et ne semble plus bouger. Vous vous souvenez alors que votre maman était bénévole à la SPA. Que penserait-elle de vous ? Vous vous sentez terriblement coupable.",
        options: [
          {
            text: "Vérifier que le pauvre animal est bien mort",
            chapter: 6
          },
          {
            text: "L'équipage prend l'avantage, allez dans la soute pour attendre la fin du voyage",
            chapter: 12
          }
        ]
      },
      3: {
        text: "Avec vos économies, vous parvenez à vous trouver une place en tant que passager sur un navire marchand se rendant justement à Rome, avec une importante cargaison d’ouzo. Hélas celui-ci ne peut vous servir d’anti-vomitif et le début de la traversée est désagréable. Alors que, après quelques jours, vous commencez à peine à prendre le pied marin, un navire pirate est entraperçu dans la brume matinale. Puis, quelques minutes plus tard, vous le voyez fondre sur votre vaisseau. Les grappins des bandits sont bien vite accrochés à votre navire, et les flibustiers débarquent, armés jusqu’aux dents, entamant sans tarder le combat avec l’équipage. Le chef ennemi porte sur son épaule un petit singe, une espèce de macaque qui saute par terre en vous apercevant caché derrière une barrique. Il semble décidé à vous affronter…",
        options: [
          {
            text: "En appeler à Poséidon pour vaincre ce terribla adversaire",
            chapter: 11
          },
          {
            text: "Appeler au secours un matelot, qui après s'être gaussé de vous, écrasera le singe en s'asseyant dessus",
            chapter: 6
          },
          {
            text: "Vous occuper de la bête personnellement",
            chapter: 4
          }
        ]
      },
      4: {
        text: "Vous devez affronter le macaque dans un duel sanglant. Ses crocs d’un centimètre de long vous semble particulièrement dangereux…",
        options: [
          {
            text: "Vaincre le monstre",
            chapter: 2
          },
          {
            text: "En appeler à Poséidon, qui, pour vous récompenser de votre courage, vous transportera directement à Rome",
            chapter: 12
          }
        ]
      },
      5: {
        text: "Les Dieux sont heureux de vous laisser mourir dans des contrées désertiques. Si vous aviez décidé de rentrer chez vous, ils auraient sûrement préféré vous expédier avec leur magie à Rome que de vous laisser entrer…"
      },
      6: {
        text: "Vous vérifiez tranquillement que le singe est bien mort… Hélas, un dieu oriental semble le protéger !",
        conditionnalText: [
          {
            condition: { blessed: false },
            text: "Vous êtes incapable de contrer sa magie, et le macaque ressiscitera dans la seconde",
            options: [
              {
                text: "Combattre",
                chapter: 4
              }
            ]
          },
          {
            condition: { blessed: true },
            text: "Vous êtes béni par Poséidon, le sort du dieu oriental échoue et le macaque repose en paix. Peu à peu, l'équipage gagne du terrain sur les pirates, et le voyage va pouvoir continuer sans autre encombre",
            chapter: 12
          }
        ]
      },
      7: {
        text: "Plus vous vous éloignez d’Athènes, plus les terres deviennent désolées. Vous parvenez à vous ravitailler auprès d’un certain nombre de fermiers avant d’avoir à traverser, chargé de vos provisions, d’immenses contrées barbares.\n" +
        "Vous savez que vous devez vous diriger vers l’Est, mais deux chemins s’offrent à vous : l’un est sauvage et parsemé de ciguë, l’autre est mieux tracé mais il vous semble distinguer à une centaine de mètres des meubles en travers de la route ; vous pourrez contourner l’obstacle sans problème, mais s’il s’agit d’un guet-apens…",
        options: [
          {
            text: "Passer par le petit chemin sauvage",
            chapter: 8
          },
          {
            text: "Continuer",
            chapter: 9
          }
        ]
      },
      8: {
        text: "Vous tombez sur un petit homme chauve et à la laideur épouvantable. Sa barbe, sa démarche inélégante et maladroite, son nez hideux vous font penser à un satyre, mais quand vous l’entendez parler, vous vous rendez compte que vous faites face au pire philosophe de votre temps. Même Hadès n’en a pas voulu, malgré la dose importante de ciguë qu’on lui a fait ingurgiter !\n" +
        "« Ah ah, où allez-vous, voyageur esseulé ? Il est vrai qu’on compte plus facilement ses moutons que ses amis, mais vous faites peine à voir !\n" +
        "— Je me rends à Rome…\n" +
        "— Vous avez bien raison ! Pourquoi je dis ça moi ? De toute façon, si je l’ai dit ça devait être intelligent… Je ne vais nulle part pour ma part, mais comme vous, je ne suis ni Athénien, ni Grec, mais un citoyen du monde ! Vous pouvez voir mes photos de voyage sur facebook.  Cependant, quelles sont les raisons qui vous poussent à vous rendre si loin de chez vous ? Ne savez-vous pas que ceux qui désirent le moins de choses sont les plus près des dieux ? Certes, certes, l’animal est le seul homme à croire en des dieux… non c’est pas ça… les animaux sont les seuls dieux à… non… les dieux sont les seuls animaux à… heu…\n" +
        "— …\n" +
        "— Oui, enfin… Il s’agit d’une femme, n’est-ce pas ? Dans tous les cas, mariez-vous. Si vous tombez sur une bonne épouse, vous serez heureux. Si vous tombez sur une mauvaise, vous deviendrez philosophe, ce qui est excellent pour l'homme.\n" +
        "— Je n’en suis pas si sûr. \n" +
        "— Oh, petit chenapan ! Je te battrais, si je n’étais pas en colère ! »\n" +
        "La ciguë étant la seule arme à votre disposition et n’ayant aucun effet contre Socrate, vous choisissez de fuir. Peu à peu, vous semez le pseudo-satyre et continuez votre périple.",
        options: [
          {
            text: "Continuer",
            chapter: 10
          }
        ]
      },
      9: {
        text: "Tandis que vous vous approchez du meuble qui obstrue la voie, vous comprenez qu’il s’agit en fait d’un grand bureau en bois poli et d’une chaise qui fait votre taille. Des étincelles, un éclair écarlate, et dans une nitescence vive apparaît Hermès, le dieu des voyages.\n" +
        "« Tatatata… On pensait pouvoir passer la frontière comme ça, sans rien déclarer ? Va falloir me signer des papiers en quadruple exemplaires ! Ah, et ce formulaire !... »\n" +
        "Vous insultez copieusement Hermès, qui finit par vous ordonner de quitter la Grèce pour toujours. Zeus lui confirme par téléphone qu’il est d’accord avec lui, et que jamais il ne vous laissera revenir. Cela ne fait que conforter votre décision de partir.",
        options: [
          {
            text: "Continuer",
            chapter: 10
          }
        ]
      },
      10: {
        text: "Le temps a passé, et vous êtes presque à cours de provisions, bien que très loin de votre point d’arrivée. Votre périple s’annonce très mal, vous ne trouvez nulle part de quoi vous ravitailler dans ces terres barbares…",
        options: [
          {
            text: "Continuer malgré tout",
            chapter: 5
          },
          {
            text: "Rentrer",
            chapter: 12
          }
        ]
      },
      11: {
        text: "Vous priez Poséidon… Le dieu prend pitié de vous, et répond à votre appel dans une grande explosion d’écume.",
        options: [
          {
            text: "Demander d'être transporté par magie à Rome",
            chapter: 12
          },
          {
            text: "Demander qu'il tue le singe pour vous",
            chapter: 2
          },
          {
            text: "Demander sa bénédiction avant d'affronter le macaque",
            chapter: 4,
            items: [
              { blessed: true }
            ]
          }
        ]
      },
      12: {
        text: "Félicitations, vous êtes arrivé à Rome, la capitale du monde, la Ville éternelle ! Ici, les esclaves ont une chance de gagner décemment leur liberté dans les glorieuses arènes ! Et concernant les Dieux, dont les noms diffèrent totalement des vôtres, vous êtes sûr qu’un renouveau spirituel éblouissant vous attend."
      }
    }
  }
</script>