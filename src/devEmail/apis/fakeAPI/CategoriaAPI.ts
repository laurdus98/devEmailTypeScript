import { CategoriaEnum } from "../../model/Categoria";

export const CategoriaAPI = {
  categorie: [
    {
      id: 1,
      updateAt: "2020-02-10T00:00:00",
      updateBy: "admin",
      tipo: CategoriaEnum.SocialNetwork,
      categoria: {
        id: 1,
        updateAt: "2020-02-10T00:00:00",
        updateBy: "admin",
        contenuto: "Messaggio 1",
        messaggi: {
          id: 1,
          updateAt: "2020-02-10T00:00:00",
          updateBy: "admin",
          notifica: false
        }
      }
    },
    {
      id: 2,
      updateAt: "2020-02-10T00:00:00",
      updateBy: "admin",
      tipo: CategoriaEnum.Promozioni,
      categoria: {
        id: 2,
        updateAt: "2020-02-10T00:00:00",
        updateBy: "admin",
        contenuto: "Messaggio 2",
        messaggi: {
          id: 2,
          updateAt: "2020-02-10T00:00:00",
          updateBy: "admin",
          notifica: false
        }
      }
    },
    {
      id: 3,
      updateAt: "2020-02-10T00:00:00",
      updateBy: "admin",
      tipo: CategoriaEnum.SocialNetwork,
      categoria: {
        id: 2,
        updateAt: "2020-02-10T00:00:00",
        updateBy: "admin",
        contenuto: "Messaggio 2",
        messaggi: {
          id: 2,
          updateAt: "2020-02-10T00:00:00",
          updateBy: "admin",
          notifica: false
        }
      }
    }
  ]
};
