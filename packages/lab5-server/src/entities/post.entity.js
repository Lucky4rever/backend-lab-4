export class PostEntity {
  constructor({ id, title, description, author, date }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.date = date;
  }

  toString() {
    return `PostEntity: { id: ${this.id}, title: ${this.title}, description: ${this.description}, author: ${this.author}, date: ${this.date} }`;
  }
}
