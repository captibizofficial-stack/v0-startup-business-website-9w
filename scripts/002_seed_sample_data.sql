-- Seed sample data for Captibiz website
-- This script populates the database with sample data for testing and demonstration

-- Insert sample users
INSERT INTO users (email, password_hash, first_name, last_name, phone, company, role) VALUES
('admin@captibiz.com', '$2b$10$example_hash_admin', 'Admin', 'User', '+1 (555) 000-0001', 'Captibiz', 'admin'),
('john.doe@captibiz.com', '$2b$10$example_hash_consultant', 'John', 'Doe', '+1 (555) 000-0002', 'Captibiz', 'consultant'),
('jane.smith@captibiz.com', '$2b$10$example_hash_consultant', 'Jane', 'Smith', '+1 (555) 000-0003', 'Captibiz', 'consultant'),
('john@techstart.com', '$2b$10$example_hash_client', 'John', 'Smith', '+1 (555) 123-4567', 'TechStart Solutions', 'client'),
('sarah@greentech.com', '$2b$10$example_hash_client', 'Sarah', 'Johnson', '+1 (555) 987-6543', 'Green Energy Innovations', 'client'),
('michael@restaurantpro.com', '$2b$10$example_hash_client', 'Michael', 'Chen', '+1 (555) 456-7890', 'Restaurant Pro LLC', 'client');

-- Insert sample leads
INSERT INTO leads (name, email, phone, company, business_type, industry, services, timeline, budget, status, source, assigned_to) VALUES
('John Smith', 'john@techstart.com', '+1 (555) 123-4567', 'TechStart Solutions', 'startup', 'technology', ARRAY['Business Plan Writing'], 'Within 1 week', '$500-1000', 'converted', 'website', 2),
('Sarah Johnson', 'sarah@greentech.com', '+1 (555) 987-6543', 'Green Energy Innovations', 'existing', 'energy', ARRAY['Financial Modeling'], 'Within 2 weeks', '$1000-2000', 'converted', 'google-ads', 3),
('Michael Chen', 'michael@restaurantpro.com', '+1 (555) 456-7890', 'Restaurant Pro LLC', 'existing', 'restaurant', ARRAY['SBA Loan Application'], 'ASAP', '$2000+', 'converted', 'referral', 2),
('Elena Rodriguez', 'elena@fashionforward.com', '+1 (555) 321-0987', 'Fashion Forward LLC', 'startup', 'retail', ARRAY['Investor Visa Support'], 'Within 1 month', '$2000+', 'proposal-sent', 'social-media', 3),
('David Thompson', 'david@manufacturing.com', '+1 (555) 654-3210', 'Thompson Manufacturing', 'expansion', 'manufacturing', ARRAY['Business Plan Writing', 'Financial Modeling'], 'Within 2 weeks', '$1000-2000', 'qualified', 'website', 2);

-- Insert sample projects
INSERT INTO projects (client_id, lead_id, name, description, service_type, status, progress, assigned_consultant, start_date, due_date, total_value) VALUES
(4, 1, 'TechStart Business Plan', 'Comprehensive business plan for tech startup seeking Series A funding', 'Business Plan Writing', 'in-progress', 75, 2, '2024-01-10', '2024-01-20', 897.00),
(5, 2, 'Green Energy Financial Model', 'Financial modeling for solar energy project expansion', 'Financial Modeling', 'completed', 100, 3, '2024-01-08', '2024-01-18', 1297.00),
(6, 3, 'Restaurant SBA Loan Package', 'Complete SBA loan application package for restaurant expansion', 'SBA Loan Application', 'review', 90, 2, '2024-01-12', '2024-01-22', 1597.00);

-- Insert sample project milestones
INSERT INTO project_milestones (project_id, name, description, status, due_date, order_index) VALUES
-- TechStart Business Plan milestones
(1, 'Initial Consultation', 'Kickoff meeting and requirements gathering', 'completed', '2024-01-10', 1),
(1, 'Market Research', 'Industry analysis and competitive research', 'completed', '2024-01-12', 2),
(1, 'Financial Projections', 'Create 5-year financial projections', 'in-progress', '2024-01-15', 3),
(1, 'Draft Review', 'Client review of initial draft', 'pending', '2024-01-18', 4),
(1, 'Final Delivery', 'Final business plan delivery', 'pending', '2024-01-20', 5),

-- Green Energy Financial Model milestones
(2, 'Data Collection', 'Gather historical financial data', 'completed', '2024-01-08', 1),
(2, 'Model Development', 'Build comprehensive financial model', 'completed', '2024-01-12', 2),
(2, 'Scenario Analysis', 'Create multiple scenarios and projections', 'completed', '2024-01-15', 3),
(2, 'Final Review', 'Client review and final adjustments', 'completed', '2024-01-17', 4),
(2, 'Delivery', 'Final model delivery and training', 'completed', '2024-01-18', 5);

-- Insert sample documents
INSERT INTO documents (project_id, name, file_path, file_size, file_type, document_type, uploaded_by, is_client_visible) VALUES
(1, 'Business Plan Draft v1.pdf', '/documents/project_1/business_plan_draft_v1.pdf', 2457600, 'application/pdf', 'draft', 2, true),
(1, 'Market Research Report.pdf', '/documents/project_1/market_research.pdf', 1887436, 'application/pdf', 'research', 2, true),
(1, 'Financial Model.xlsx', '/documents/project_1/financial_model.xlsx', 876544, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'financial', 2, true),
(2, 'Solar Project Financial Model.xlsx', '/documents/project_2/solar_financial_model.xlsx', 1234567, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'final', 3, true),
(2, 'Scenario Analysis Report.pdf', '/documents/project_2/scenario_analysis.pdf', 987654, 'application/pdf', 'analysis', 3, true);

-- Insert sample messages
INSERT INTO messages (project_id, sender_id, recipient_id, message, is_read) VALUES
(1, 2, 4, 'Hi John, I''ve uploaded the first draft of your business plan. Please review and let me know your thoughts.', true),
(1, 4, 2, 'Thanks! I''ll review it today and get back to you with feedback.', true),
(1, 2, 4, 'Perfect! I''m also working on the financial projections and should have those ready by tomorrow.', false),
(2, 3, 5, 'Sarah, your financial model is complete. I''ve included three different scenarios as requested.', true),
(2, 5, 3, 'This looks fantastic! The projections are exactly what we needed for our investor presentation.', true);

-- Insert sample feedback
INSERT INTO feedback (project_id, client_id, satisfaction_rating, feedback_text, suggestions, would_recommend) VALUES
(2, 5, 5, 'Excellent work on the financial model. Jane was professional, responsive, and delivered exactly what we needed. The model helped us secure additional funding for our solar project.', 'Maybe provide a brief training session on how to use the model effectively.', true);

-- Insert sample contact submissions
INSERT INTO contact_submissions (name, email, phone, company, service, timeline, budget, message, status) VALUES
('Lisa Park', 'lisa@digitalmarketing.com', '+1 (555) 789-0123', 'Digital Marketing Pro', 'Pitch Deck Creation', 'Within 1 week', '$500-1000', 'I need a professional pitch deck for an upcoming investor meeting. Can you help?', 'new'),
('Robert Williams', 'robert@construction.com', '+1 (555) 234-5678', 'Williams Construction', 'Business Plan Writing', 'Within 2 weeks', '$1000-2000', 'Looking for help with a business plan for expansion into commercial construction.', 'new');
