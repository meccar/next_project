import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { AuthRepository } from '../auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  async createAuth(createAuthDto: CreateAuthDto) {
    return this.authRepository.create({
      ...createAuthDto,
      timestamp: new Date(),
      userId: '123', // for now just hard-code it
    });
  }

  async findAll() {
    return this.authRepository.find({});
  }

  async findOne(_id: string) {
    return this.authRepository.findOne({ _id });
  }

  async update(_id: string, updateAuthDto: UpdateAuthDto) {
    return this.authRepository.findOneAndUpdate(
      { _id },
      { $set: updateAuthDto },
    );
  }

  async remove(_id: string) {
    return this.authRepository.findOneAndDelete({ _id });
  }
}
