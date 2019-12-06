export class Article {
  private _idArticle: number;
  private _libelle: string;
  private _prix: number;
  private _test: boolean
  private _photo: string;
  private _dateFabrication: Date;
  private _qtes: number;

  constructor() {
  }

  public ajouter(idArticle: number, libelle: string, prix: number, test: boolean, photo: string, dateFabrication: Date, qtes: number) {
    this._idArticle = idArticle;
    this._libelle = libelle;
    this._prix = prix;
    this._test = test;
    this._photo = photo;
    this._dateFabrication = dateFabrication;
    this._qtes = qtes;
  }

  get idArticle(): number {
    return this._idArticle;
  }

  set idArticle(value: number) {
    this._idArticle = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get test(): boolean {
    return this._test;
  }

  set test(value: boolean) {
    this._test = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }

  get dateFabrication(): Date {
    return this._dateFabrication;
  }

  set dateFabrication(value: Date) {
    this._dateFabrication = value;
  }

  get qtes(): number {
    return this._qtes;
  }

  set qtes(value: number) {
    this._qtes = value;
  }
}



