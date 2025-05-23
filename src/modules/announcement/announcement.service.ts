import { Injectable } from '@nestjs/common';
import { pool } from '../../config/database.config';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';

@Injectable()
export class AnnouncementService {
  async create(dto: CreateAnnouncementDto) {
    const res = await pool.query(
      'INSERT INTO announcements (title, date, location, description, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [dto.title, dto.date, dto.location, dto.description, dto.imageUrl],
    );
    return res.rows[0];
  }

  async findAll() {
    const res = await pool.query('SELECT * FROM announcements ORDER BY date DESC');
    return res.rows;
  }

  async update(id: number, dto: CreateAnnouncementDto) {
    const res = await pool.query(
      'UPDATE announcements SET title = $1, date = $2, location = $3, description = $4, image_url = $5 WHERE id = $6 RETURNING *',
      [dto.title, dto.date, dto.location, dto.description, dto.imageUrl, id],
    );
    return res.rows[0];
  }

  async delete(id: number) {
    await pool.query('DELETE FROM announcements WHERE id = $1', [id]);
    return { message: 'Deleted successfully' };
  }
}
