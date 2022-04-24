import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

@Injectable()
export class AppService {
  async getHello() {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table;');
      client.release();
      return result;
    } catch (e) {
      return 'Error: ' + e;
    }
  }
}
