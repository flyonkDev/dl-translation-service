import { Type, Transform  } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Min,
  Max,
  MinLength,
  Matches,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ArrayUnique,
} from 'class-validator';

const LICENSE_CATEGORIES = ['A', 'B', 'C', 'D', 'E'] as const;
export type LicenseCategory = typeof LICENSE_CATEGORIES[number];

export class CreateApplicationDto {
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  @MinLength(2)
  firstName!: string;

  @IsString()
  @MinLength(2)
  lastName!: string;

  // code like "ES", "FR"
  @IsString()
  @MinLength(2)
  issueCountry!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(31)
  dobDay!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(12)
  dobMonth!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1900)
  @Max(2100)
  dobYear!: number;

  @IsIn(['male', 'female'])
  sex!: 'male' | 'female';

  @Type(() => Number)
  @IsInt()
  @IsIn([1, 2, 3])
  planYears!: 1 | 2 | 3;

  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @Transform(({ value }) => {
    if (value == null) return [];
    const arr = Array.isArray(value) ? value : String(value).split(',');
    return arr
      .map((v) => String(v).trim().toUpperCase())
      .filter(Boolean);
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(LICENSE_CATEGORIES.length)
  @ArrayUnique()
  @IsIn(LICENSE_CATEGORIES, { each: true })
  licenseCategories!: LicenseCategory[];

  @IsString()
  @MinLength(20)
  @Matches(/^data:image\//, { message: 'signatureDataUrl must be a data:image/* base64 string' })
  signatureDataUrl!: string;

  @IsString()
  @MinLength(10)
  verificationId!: string;
}
