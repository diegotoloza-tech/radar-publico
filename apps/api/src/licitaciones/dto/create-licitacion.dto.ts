import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateLicitacionDto {
  @IsString()
  @MaxLength(50)
  codigo: string

  @IsString()
  @MaxLength(500)
  nombre: string

  @IsOptional()
  @IsString()
  descripcion?: string

  @IsOptional()
  @IsString()
  @MaxLength(255)
  organismo?: string

  @IsOptional()
  @IsString()
  @MaxLength(100)
  region?: string

  @IsOptional()
  @IsString()
  @MaxLength(50)
  estado?: string

  @IsOptional()
  @IsDateString()
  fechaPublicacion?: string

  @IsOptional()
  @IsDateString()
  fechaCierre?: string
}