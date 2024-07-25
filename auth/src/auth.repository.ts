import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@nest-app/common';
import { AuthDocument } from './entities/auth.entity';

@Injectable()
export class AuthRepository extends AbstractRepository<AuthDocument> {
  protected readonly logger = new Logger(AuthRepository.name);
  constructor(
    @InjectModel(AuthDocument.name)
    protected readonly authModel: Model<AuthDocument>,
  ) {
    super(authModel);
  }
}
