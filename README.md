# README


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|

## Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups



## Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Asociation
- has_many :users, through: :users_groups
- has_many :messages
- has_many :users_groups



## Users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|groups_id|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group