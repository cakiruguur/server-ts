export interface IService {
  list(): void;
  find(): void;
  insert(data: object): void;
  update(data: object): void;
  delete(): void;
}
