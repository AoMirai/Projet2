# bordeaux-0219-diggn-share

## API

* **GET** /recipients
  * http://51.68.18.101:3002/diggnshare/api/recipients
  > Permet de récupérer tous les prestataires

* **GET** /recipients/:id
  * http://51.68.18.101:3002/diggnshare/api/recipients/:id
  > Permet de récupérer un prestataires en fonction de l'ID passé en paramètre

* **POST** /recipients/
  * http://51.68.18.101:3002/diggnshare/api/recipients/
  > Permet de sauvegarder un prestataires.
  ```js
    {
      "description": "",
      "member": "",
      "name": "",
      "photo": "",
      "planning": "",
      "playlist": "",
      "price": 0,
      "style": ""
    }
  ```

* **PUT** /recipients/:id
  * http://51.68.18.101:3002/diggnshare/api/recipients/:id
  > Permet de modifier un prestataires en fonction de l'ID passé en paramètre
  ```js
    {
      "name": "",
      "photo": ""
    }
  ```

* **DELETE** /recipients/:id
  * http://51.68.18.101:3002/diggnshare/api/recipients/:id
  > Permet de supprimer un prestataires en fonction de l'ID passé en paramètre