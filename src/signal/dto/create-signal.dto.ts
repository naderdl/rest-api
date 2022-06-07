import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateSignalDto {
  @MaxLength(10)
  @IsString()
  symbol: string;
  @IsNumber()
  buy: number;
  @IsNumber()
  sell: number;
}
