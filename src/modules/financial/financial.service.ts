import { Injectable } from '@nestjs/common';
import { pool } from '../../config/database.config';
import { CreateReceiptDto } from './dto/create-receipt.dto';

@Injectable()
export class FinancialService {
  async getSummary() {
    const [pending, overdue, inBank] = await Promise.all([
      pool.query('SELECT * FROM receipts WHERE status = $1', ['pending']),
      pool.query('SELECT * FROM receipts WHERE status = $1', ['overdue']),
      pool.query('SELECT * FROM bank_summary'),
    ]);

    return {
      pending: pending.rows,
      overdue: overdue.rows,
      inBank: inBank.rows,
    };
  }

  async getReceiptsByStatus(status: string) {
    const result = await pool.query('SELECT * FROM receipts WHERE status = $1', [status]);
    return result.rows;
  }

  async uploadReceipt(dto: CreateReceiptDto) {
    const result = await pool.query(
      `INSERT INTO receipts (user_id, image_url, status, amount)
       VALUES ($1, $2, 'pending', $3)
       RETURNING *`,
      [dto.userId, dto.imageUrl, dto.amount],
    );
    return result.rows[0];
  }

  async updateReceiptStatus(id: number, status: 'approved' | 'rejected') {
    const result = await pool.query(
      'UPDATE receipts SET status = $1 WHERE id = $2 RETURNING *',
      [status, id],
    );

    if (status === 'approved') {
      await pool.query(
        'INSERT INTO bank_summary (month, amount) VALUES (CURRENT_DATE, $1)',
        [result.rows[0].amount],
      );
    }

    return { message: `Receipt ${id} marked as ${status}` };
  }
}
