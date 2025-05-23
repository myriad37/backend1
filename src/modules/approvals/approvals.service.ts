import { Injectable } from '@nestjs/common';
import { pool } from '../../config/database.config';

@Injectable()
export class ApprovalsService {
  async getAll() {
    const res = await pool.query('SELECT * FROM event_requests');
    return res.rows;
  }

  async approve(id: number) {
    await pool.query(
      'UPDATE event_requests SET status = $1 WHERE id = $2',
      ['approved', id],
    );
    return { message: 'Request approved' };
  }

  async reject(id: number) {
    await pool.query(
      'UPDATE event_requests SET status = $1 WHERE id = $2',
      ['rejected', id],
    );
    return { message: 'Request rejected' };
  }
}
