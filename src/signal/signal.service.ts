import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSignalDto } from './dto/create-signal.dto';
import { UpdateSignalDto } from './dto/update-signal.dto';
import { Signal, SignalDocument } from './schema/signal.schema';

@Injectable()
export class SignalService {
  constructor(
    @InjectModel(Signal.name) private signalModel: Model<SignalDocument>,
  ) {}

  create(createSignalDto: CreateSignalDto) {
    const createdCat = new this.signalModel(createSignalDto);
    return createdCat.save();
  }

  findAll() {
    return this.signalModel.find().exec();
  }

  findOne(id: string) {
    return this.signalModel.findById(id).exec();
  }

  update(id: string, updateSignalDto: UpdateSignalDto) {
    return this.signalModel.findByIdAndUpdate(id, updateSignalDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.signalModel.findByIdAndRemove(id);
  }
}
