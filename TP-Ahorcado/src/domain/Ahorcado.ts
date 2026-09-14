export class Ahorcado {
   private palabra: string;
 
   constructor(palabra: string) {
     this.palabra = palabra;
   }
 
   palabraEnmascarada(): string {
     return this.palabra.split('').map(() => '_').join(' ');
   }
 }