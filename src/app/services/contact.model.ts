export interface Contact {
  id?: number;        // généré par Symfony, optionnel
  nom: string;
  email: string;
  message: string;
}
