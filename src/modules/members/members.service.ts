
import { Injectable } from '@nestjs/common';
import { pool } from '../../config/database.config';
export interface Member {
  id: number;
  fullName: string;
  phone: string;
  address?: string |null;
  photoUrl?: string |null;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  createdAt: Date;
}
interface MemberRow {
  id: number;
  full_name: string;
  phone: string;
  address: string | null;
  photo_url: string | null;
  payment_status: 'paid' | 'pending' | 'overdue';
  created_at: Date;
}
@Injectable()
export class MembersService {
  async findAll(): Promise<Member[]> {
    const result = await pool.query('SELECT * FROM members ORDER BY full_name');
    return result.rows.map((row: MemberRow) => ({
      id: row.id,
      fullName: row.full_name,
      phone: row.phone,
      address: row.address,
      photoUrl: row.photo_url,
      paymentStatus: row.payment_status,
      createdAt: row.created_at,
    }));
  }
  async findById(id: number): Promise<Member | null> {
    const result = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
    if (result.rowCount === 0) return null;
    const row: MemberRow = result.rows[0];
    return {
      id: row.id,
      fullName: row.full_name,
      phone: row.phone,
      address: row.address,
      photoUrl: row.photo_url,
      paymentStatus: row.payment_status,
      createdAt: row.created_at,
    };
  }
  async create(member: Omit<Member, 'id' | 'createdAt'>): Promise<Member> {
    const result = await pool.query(
      `INSERT INTO members (full_name, phone, address, photo_url, payment_status)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [member.fullName, member.phone, member.address || null, member.photoUrl || null, member.paymentStatus || 'pending']
    );
    const row: MemberRow = result.rows[0];
    return {
      id: row.id,
      fullName: row.full_name,
      phone: row.phone,
      address: row.address,
      photoUrl: row.photo_url,
      paymentStatus: row.payment_status,
      createdAt: row.created_at,
    };
  }
  async updatePaymentStatus(id: number, status: 'paid' | 'pending' | 'overdue'): Promise<void> {
    await pool.query('UPDATE members SET payment_status = $1 WHERE id = $2', [status, id]);
  }
  async searchByName(search: string): Promise<Member[]> {
    const result = await pool.query(
      'SELECT * FROM members WHERE full_name ILIKE $1 ORDER BY full_name',
      [`%${search}%`]
    );
    return result.rows.map((row: MemberRow) => ({
      id: row.id,
      fullName: row.full_name,
      phone: row.phone,
      address: row.address,
      photoUrl: row.photo_url,
      paymentStatus: row.payment_status,
      createdAt: row.created_at,
    }));
  }
}
