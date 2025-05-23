import { Injectable } from '@nestjs/common';
import { pool } from '../../config/database.config';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  async getProfile(id: number) {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
  }

  async updateProfile(id: number, dto: UpdateProfileDto) {
    const res = await pool.query(
      `UPDATE users SET
         full_name = $1,
         date_of_birth = $2,
         address = $3,
         phone = $4,
         password = $5
       WHERE id = $6 RETURNING *`,
      [dto.fullName, dto.dateOfBirth, dto.address, dto.phone, dto.password, id]
    );
    return res.rows[0];
  }

  async getUploadedPhotos(userId: number) {
    const res = await pool.query('SELECT * FROM uploaded_photos WHERE user_id = $1', [userId]);
    return res.rows;
  }

  async getResponses(userId: number) {
    const res = await pool.query('SELECT * FROM responses WHERE user_id = $1', [userId]);
    return res.rows;
  }

  async getAllMembers() {
    const res = await pool.query('SELECT full_name, phone FROM users WHERE role = $1', ['user']);
    return res.rows;
  }
}
