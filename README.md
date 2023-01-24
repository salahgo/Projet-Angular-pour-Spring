# Projet Angular pour Spring
## Consignes
Installez Node JS et lancez la commande `ng serve --port 8081` pour installer les dépendances.
Exécutez `npx ng serve --port 8081` pour un serveur de développement. Accédez à `http://localhost:8081/`. 
L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

## Aperçu

Voici les APIs que Spring Boot App exportera :

| Méthodes | URLs | Actions |
|---|---|---|
| POST | 	/api/livres | 	créer un nouveau livre
| GET  |	/api/livres |	récupérer tous les livres
| GET  | /api/livres/:id |	récupérer un livre par :id
| PUT  |	/api/livres/:id |	mettre à jour un livre par :id
| DELETE | 	/api/livres/:id |	supprimer un livre par :id
| DELETE |	/api/livres |	supprimer tous les livres
| GET 	 | /api/livres?titre=[mot-clé] |	trouver tous les livres que contient le titre