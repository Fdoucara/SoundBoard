
Création d'un SoundBoard utilisant 9 touches (a,r,u,y,t,o,z et i).

1. HTML
	-Créer des boutons dans des classes, leurs attribuer des id et les placer sur notre document à l'aide de Flexbox.
	-Placer les audios que l'on devra utiliser en mettant des id similaires aux boutons ce qui va nous faciliter la liaisons plus tard en JS.
2. CSS
	-Gestion de la disposition des boutons sur notre doc (régler les parametres des flexbox (row etc...)
	-Ajouter une classe qu'on va par la suite ajouter via le JS. 
3. JS
	-A l'aide d'export et import nous pourrons compiler les deux fichiers js sans devoir retapper nos fonctions.
	-Dans une fonction (event = keydown) nous allons recuperer les touches du clavier (keyCode).
	-Par la suite, nous allons créer un lien en les audios et le clavier (audio[`data-key={"$keyCode"}`]);
	-Realiser un auto.play() afin d'activer le son en fonction du keyCode obtenu.
	-Mettre un audio.currentTime = 0 (lorsque l'on retappe sur la touche le son recommence du debut sans attendre).
	-On ajoute la classe qu'on avait realisé sur le fichier css à l'aide d'un classList.add("nom classe").
	-Pour finir ajouter un evenement sur l'audio car nous voulons que lorsqu'il se termine la classe CSS disparait classList.remove("nom classe")