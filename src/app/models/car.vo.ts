export interface Car {
  id?: number;
  model: string;
  firstRegistration: string;
  origin: 'USA' | 'Germany';
  description?: string;
  carDetails?: {
    kmPerGallon?: number;
    cylinders?: number;
    Displacement?: number;
    horsepower?: number;
    weight?: number;
    acceleration?: number;
  };
}
