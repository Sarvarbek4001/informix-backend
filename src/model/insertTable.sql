CREATE DATABASE infomix;

CREATE TABLE users(
    user_id bigserial PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    user_email VARCHAR(75),
    phone_number VARCHAR(30),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    is_connected boolean DEFAULT false,
    admin_id int DEFAULT NULL 
);

INSERT INTO users(first_name,last_name,user_email,phone_number) VALUES('Sarvar','Shodmonaliyev','shodmonaliyevsarvar@gmail.com','998976214001');

CREATE TABLE admin(
    admin_id bigserial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password text NOT NULL,
    role VARCHAR(50) NOT NULL
);
INSERT INTO admin(username,password,role) VALUES('akfa@gmail.com','Dev@11','ADMIN');

CREATE TABLE brand_files(
    id SERIAL NOT NULL PRIMARY KEY,
    filename TEXT UNIQUE NOT NULL,
    filepath TEXT NOT NULL,
    mimetype TEXT NOT NULL,
    size BIGINT NOT NULL
);


CREATE TABLE section(
    section_id bigserial PRIMARY KEY,
    section_name VARCHAR(50)
);
 INSERT INTO section(section_name) VALUES('section1');
 INSERT INTO section(section_name) VALUES('section2');

-- CREATE TABLE block(
--     block_id bigserial PRIMARY KEY,
--     title text NOT NULL,
--     content text NOT NULL,
--     b_row_reverse boolean DEFAULT false,
--     section_id int ,
--       FOREIGN KEY (section_id)
--         REFERENCES section(section_id)
--         ON DELETE CASCADE
-- );

CREATE TABLE block(
    block_id bigserial PRIMARY KEY,
    title_uz text NOT NULL,
    title_ru text NOT NULL,
    title_en text NOT NULL,
    content_uz text NOT NULL,
    content_ru text NOT NULL,
    content_en text NOT NULL,
    btn_text_uz VARCHAR(75) NOT NULL,
    btn_text_ru VARCHAR(75) NOT NULL,
    btn_text_en VARCHAR(75) NOT NULL,
    b_row_reverse boolean DEFAULT false,
    section_id int,
     FOREIGN KEY (section_id)
       REFERENCES section(section_id)
       ON DELETE CASCADE
);

-- section-1
INSERT INTO block(title,content,b_row_reverse,section_id) VALUES('Anticipate customer needs',
'CloudTalk gives you a 360° customer overview as soon as a call is
in the queue, giving you enough time to fully understand and
anticipate your customers needs. CloudTalks smart IVR and call
routing ensure that incoming calls are automatically routed to
the right person or department in your call center.',false,1);

INSERT INTO block(title,content,b_row_reverse,section_id) VALUES('Smart IVR: Decrease workload,Increase resolution efficiency',
'Whether you have 2 support representatives or 200, CloudTalks
smart Interactive Voice Response makes it easy to route calls to
the right people or departments at the right time. Choose from
various criteria like language preference, Product, Location, or
other and build your IVR routing tree with CloudTalks drag and
drop Call flow designer.',true,1);
-- section-1

-- section-2
INSERT INTO block(title,content,b_row_reverse,section_id) VALUES('Be smart about your support',
'CloudTalk Support arms you with insights so that you can
 measure and improve your customer service. With real-time
analytics, you can track the call activity, service level,
and customer sentiment of your inbound call center
software. This way, you can make better decisions and resolve
issues faster.',false,2);

INSERT INTO block(title,content,b_row_reverse,section_id) VALUES('Call transfers — Work effectively as a
team',
'Its ok if your agents do not have all the answers. With call
transfers, they can get someone on the phone who does — and
explain the situation to them in a private chat before going live
with the customer.',false,2);

-- section-2



CREATE TABLE block_img(
    b_img_id bigserial PRIMARY KEY,
    b_filename TEXT UNIQUE NOT NULL,
    b_filepath TEXT NOT NULL,
    b_mimetype TEXT NOT NULL,
    b_size BIGINT NOT NULL,
    block_id int,
     FOREIGN KEY(block_id)
      REFERENCES block(block_id)
       ON DELETE CASCADE
);



-- CREATE TABLE banner(
--     banner_id bigserial PRIMARY KEY,
--     banner_title text NOT NULL,
--     section_id BIGINT REFERENCES section(section_id)
-- );


CREATE TABLE banner(
    banner_id bigserial PRIMARY KEY,
    banner_title_uz text NOT NULL ,
    banner_title_ru text NOT NULL,
    banner_title_en text NOT NULL,
    section_id int,
    FOREIGN KEY(section_id)
        REFERENCES section(section_id)
        ON DELETE CASCADE
);

INSERT INTO banner(banner_title,section_id) VALUES('With CloudTalk cloud call center software,
all inbound calls are free.',1);

INSERT INTO banner(banner_title,section_id) VALUES('Save up to 40% time by utilizing CloudTalks smart
IVR and Call Flow Designer.',1);

INSERT INTO banner(banner_title,section_id) VALUES('Integrate your call center software with CRM or
helpdesk to get full customer context before a call is picked up.',1);

INSERT INTO banner(banner_title,section_id) VALUES(' 
Setup voicemails and automatic callbacks for when youre not available or your call center is too busy.',1);

INSERT INTO banner(banner_title,section_id) VALUES('Utilize business hours, call recording, and smart
dialing — some CloudTalks most popular features.',1);

INSERT INTO banner(banner_title,section_id) VALUES('Add comments on calls and update customer
information during or after a call. 2-way syne will make sure all your systems are always up-to-date.',1);

INSERT INTO banner(banner_title,section_id) VALUES('Service Level. Wait Times. Agent Status. Real-time
call statistics keep Supervisors up-to-date.',2);

INSERT INTO banner(banner_title,section_id) VALUES('Make data-driven decisions to improve your teams
performance. Monitor your call center quality and customer experience.',2);

-- CREATE TABLE prices(
--     price_id bigserial PRIMARY KEY,
--     price_title VARCHAR(50) NOT NULL,
--     price_number VARCHAR(20) NOT NULL,
--     price_sub_title VARCHAR(75)
-- );

CREATE TABLE prices(
    price_id bigserial PRIMARY KEY,
    price_title_uz VARCHAR(75) NOT NULL,
    price_title_ru VARCHAR(75) NOT NULL,
    price_title_en VARCHAR(75) NOT NULL,
    price_number VARCHAR(20) NOT NULL,
    price_sub_title_uz VARCHAR(75) NOT NULL,
    price_sub_title_ru VARCHAR(75) NOT NULL,
    price_sub_title_en VARCHAR(75) NOT NULL
);

INSERT INTO prices(price_title,price_number,price_sub_title) VALUES('Starter','$25','per user/month billed annually');

-- CREATE TABLE chance(
--     chance_id bigserial PRIMARY KEY,
--     chance_title TEXT NOT NULL,
--     price_id int,
--      FOREIGN KEY(price_id)
--       REFERENCES prices(price_id)
--        ON DELETE CASCADE
-- );

CREATE TABLE chance(
    chance_id bigserial PRIMARY KEY,
    chance_title_uz TEXT NOT NULL,
    chance_title_ru TEXT NOT NULL,
    chance_title_en TEXT NOT NULL,
    price_id int,
     FOREIGN KEY(price_id)
       REFERENCES prices(price_id)
        ON DELETE CASCADE
);

INSERT INTO chance(chance_title,price_id) VALUES('Unlimited inbound & intracompany calls',1);
INSERT INTO chance(chance_title,price_id) VALUES('Click to call',1);
INSERT INTO chance(chance_title,price_id) VALUES('Automated call distribution',1);
INSERT INTO chance(chance_title,price_id) VALUES('Mobile app',1);
INSERT INTO chance(chance_title,price_id) VALUES('Unlimited call queuing',1);
INSERT INTO chance(chance_title,price_id) VALUES('International numbers',1);
INSERT INTO chance(chance_title,price_id) VALUES('(160+ countries)',1);

