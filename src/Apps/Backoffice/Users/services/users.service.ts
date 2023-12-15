import { Injectable } from '@nestjs/common';
import { Role } from '../../../Auth/role.enum';

interface IUser {
    id: number;
    username: string;
    password: string;
    role: string;
}

@Injectable()
export class UsersService {
    private readonly mockedUsers: IUser[] = [
        {
            id: 1,
            username: 'boredmike',
            password: '1234',
            role: Role.Admin,
        },
        {
            id: 2,
            username: 'elixirceo',
            password: '1234',
            role: Role.Ceo,
        },
    ];

    async findOne(username: string): Promise<IUser | undefined> {
        return this.mockedUsers.find((user) => user.username === username);
    }
}
