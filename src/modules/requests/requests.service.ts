import { Injectable } from '@nestjs/common';
import { pool } from '../../../database.config';

@Injectable()
export class RequestsService {
  async create(dto: any) {
    const { user_id, name, event_type, amount } = dto;
    const res = await pool.query(
      `INSERT INTO requests (user_id, name, event_type, amount) VALUES ($1, $2, $3, $4) RETURNING *`,
      [user_id, name, event_type, amount],
    );
    return res.rows[0];
  }

  async findAll() {
    const res = await pool.query(`SELECT * FROM requests ORDER BY created_at DESC`);
    return res.rows;
  }

  async findOne(id: number) {
    const res = await pool.query(`SELECT * FROM requests WHERE id = $1`, [id]);
    return res.rows[0];
  }
}
