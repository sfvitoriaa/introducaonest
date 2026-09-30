import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return 'Bem-vindo ao SENAI';
  }

  @Get('info')
  getInfo() {
    return {
      disciplina: 'Desenvolvimento Web',
      'carga-horaria': 80,
      semestre: 2,
      ativo: true
    };
  }
}