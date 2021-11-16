import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Chloe Gan',
      username: 'chloegan',
      password: '123chloegan',
    },
    {
      id: 2,
      name: 'Ezra Chai',
      username: 'ezrachai',
      password: '123chloegan',
    },
  ];

  findOne(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
