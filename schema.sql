-- schema.sql
-- Database schema for community contributions app

-- Users table: stores app users (admin and user roles)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user (please change password hash for production)
INSERT INTO users (full_name, phone, password, role) VALUES
('Admin Name', '1234567890', 'adminpassword', 'admin');

-- Members table: community members
CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  address TEXT,
  photo_url TEXT,
  payment_status VARCHAR(10) NOT NULL CHECK (payment_status IN ('paid', 'pending', 'overdue')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Event requests made by members
CREATE TABLE event_requests (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES members(id),
  name VARCHAR(100) NOT NULL,
  event_type VARCHAR(100),
  amount NUMERIC(10, 2),
  status VARCHAR(10) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Uploaded photos by users
CREATE TABLE uploaded_photos (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  image_url TEXT NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Responses to requests or receipts
CREATE TABLE responses (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  type VARCHAR(50), -- e.g., 'request', 'receipt'
  content TEXT,
  status VARCHAR(20), -- 'approved', 'rejected'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Receipts uploaded by users with payment info
CREATE TABLE receipts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  image_url TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'approved', 'rejected', 'overdue')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bank summary table for monthly contributions
CREATE TABLE bank_summary (
  id SERIAL PRIMARY KEY,
  month DATE NOT NULL DEFAULT CURRENT_DATE,
  amount NUMERIC NOT NULL
);
-- request to the admin
CREATE TABLE IF NOT EXISTS requests (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES members(id),
  name VARCHAR(100) NOT NULL,
  event_type VARCHAR(100),
  amount NUMERIC(10, 2),
  status VARCHAR(10) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
