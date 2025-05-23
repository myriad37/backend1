import { Injectable } from '@nestjs/common';
import { pool } from '../../config/database.config';

export interface User {
  id: number;
  fullName: string;
  phone: string;
  role: 'admin' | 'user';
}

@Injectable()
export class AuthService {
  async validateUser(phone: string, password: string): Promise<User | null> {
    const result = await pool.query(
      'SELECT id, full_name, phone, role, password FROM users WHERE phone = ',
      [phone]
    );
    if (result.rowCount === 0) return null;

    const user = result.rows[0];
    if (user.password !== password) {
      return null;
    }

    return {
      id: user.id,
      fullName: user.full_name,
      phone: user.phone,
      role: user.role,
    };
  }
}
