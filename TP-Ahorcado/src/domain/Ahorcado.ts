export class Ahorcado {
   private palabra: string;
 
   constructor(palabra: string) {
     this.palabra = palabra;
   }
 
   palabraEnmascarada(): string {
     return this.palabra.split('').map(() => '_').join(' ');
   }

   // Devuelve las vidas disponibles con las que arranca el juego (6 vidas)
   vidas(): number {
     return 6;
   }
 }
