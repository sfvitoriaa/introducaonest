import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return the SENAI welcome message', () => {
      expect(appController.getHello()).toBe('Bem-vindo ao SENAI');
    });
  });

  describe('info', () => {
    it('should return the course information', () => {
      expect(appController.getInfo()).toEqual({
        disciplina: 'Desenvolvimento Web',
        'carga-horaria': 80,
        semestre: 2,
        ativo: true,
      });
    });
  });
});
