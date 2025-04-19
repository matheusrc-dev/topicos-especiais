import { Injectable } from '@nestjs/common';

export interface User {
  id?: number;
  name: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: "João"
    },
    {
      id: 2,
      name: "Maria"
    }
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(user: User): string {
    const newUser = {
      id: this.users.length + 1,
      ...user
    };

    this.users.push(newUser);
    return `Usuário criado com os seguintes dados: name: ${newUser.name} ID: ${newUser.id}`;
  }

  update(id: number, user: User): string {
    const userIndex = this.users.findIndex(item => item.id === id);
    if (userIndex === -1) {
      throw new Error(`[Erro] - Usuário com id ${id} não encontrado!`);
    }

    const updatedUser = {
      id: id,
      name: user.name
    }

    this.users.splice(userIndex, 1, updatedUser);
    return `Usuário com ID ${updatedUser.id} atualizado com os dados: name ${updatedUser.name}`;
  }

  remove(id: number): string {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error(`[Erro] - Usuário com id ${id} não encontrado!`);
    }

    this.users.splice(userIndex, 1);
    return `Usuário com ID ${id} removido`;
  }
}
