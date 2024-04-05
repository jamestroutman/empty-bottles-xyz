CREATE TYPE sales_contact_status AS ENUM ('new', 'contacted', 'closed');

create table sales_contact_submissions (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    email_address varchar(100),
    phone_number varchar(100),
    company_name varchar(100),
    contact_status sales_contact_status,
    inserted_at timestamp default timezone('est' :: text, now()) not null,
    updated_at timestamp default timezone('est' :: text, now()) not null,
);

alter table
    profile enable row level security;