/*
Postgres SQL
brew install postgresql
brew upgrade postgresql
postgres --version

1.Start/stop DB
sudo gem install lunchy
mkdir -p ~/Library/LaunchAgents
cp /usr/local/Cellar/postgresql/10.4/homebrew.mxcl.postgresql.plist ~/Library/LaunchAgents/
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
lunchy start postgres
lunchy stop postgres

2. Open postgres admin user
psql postgres
Quit cmd:
\q

3. Create password for Postgres:
ALTER USER postgres PASSWORD '123456'
4. Create role:
CREATE USER postgres SUPERUSER;

2
đổi tên table:
ALTER TABLE IF EXISTS table_name RENAME TO new_table_name;
Thêm FIELD vào TABLE:
ALTER TABLE members ADD COLUMN avatar VARCHAR;
Thêm varchar
ALTER TABLE members ALTER COLUMN avatar TYPE varchar(500);

5. Create data:
CREATE TABLE IF NOT EXISTS lists (
	id    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name        varchar(40) NOT NULL CHECK (name <> ''),
    priority    integer NOT NULL,
    description text,
    duedate 	date NOT NULL
);

CREATE TABLE IF NOT EXISTS datafilms (
	id    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name        varchar(255) NOT NULL,
    rate        varchar(255) NOT NULL,
    link        varchar(255) NOT NULL,
    img        varchar(500) NOT NULL,
    season        varchar(255) NOT NULL,
    eps        varchar(255) NOT NULL,
    content        varchar(500) NOT NULL,
    actor        varchar(255) NOT NULL,
    director        varchar(255) NOT NULL,
    category        varchar(255) NOT NULL,
    country        varchar(255) NOT NULL,
    tag        varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS members (
	id    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    username        varchar(40) NOT NULL,
    password        varchar(255) NOT NULL,
    email        varchar(255) NOT NULL,
    avatar        varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
	id    	integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	listId  integer REFERENCES lists(id),
	name    varchar(40) NOT NULL CHECK (name <> ''),
	isFinished boolean
);
Show all tables:
\dt
Insert data:
INSERT INTO lists(name,priority,description,duedate) VALUES
    ('make TodoList Nodejs project', 1, 'This is a training course','2018-07-24');

INSERT INTO lists(name,priority,description,duedate) VALUES
    ('make TodoList React Native project', 0, 'This is a RN training course','2018-08-25');

INSERT INTO tasks(listId,name,isFinished) VALUES
    (2, 'Make UI App in React Native', 'false');

INSERT INTO tasks(listId,name,isFinished) VALUES
    (2, 'Do some Components in React Native', 'false');

npm install --save sequelize
npm install --save pg pg-hstore
npm install -g sequelize-cli

*/
import { app } from './app';
import { PORT } from './constants';
import { listRouter } from './routers/listRouter';
import taskRouter from './routers/taskRouter';

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));