import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import calcRoutes from '../src/routes/calc.js';

const app = express();
app.use('/api/calc', calcRoutes);

describe('Pruebas de integración de rutas', () => {
  it('GET /suma retorna 8', async () => {
    const res = await request(app).get('/api/calc/suma?a=5&b=3');
    expect(res.body.resultado).toBe(8);
  });

  it('GET /div con b=0 retorna error', async () => {
    const res = await request(app).get('/api/calc/div?a=5&b=0');
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('División por cero');
  });
});
