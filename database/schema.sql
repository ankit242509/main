CREATE DATABASE job_tracker;

USE job_tracker;

CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    status ENUM('Applied', 'Interview', 'Rejected', 'Offered', 'On Hold') NOT NULL,
    applied_date DATE,
    notes TEXT
);
