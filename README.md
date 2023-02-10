## Develop Plan (feature/user)

1. <strong>Plan & Implement for User Schema </strong>

```
User Schema
1. Name : String

```

```
Message : Schema
1. Content : String
2. ChatBy : Mongoose.Object (User)
```

<strong>Goal : 서로 다른 스키마를 참조. 이를 통해 유저의 대화 내용과 유저를 따로 저장하여 서로 참조할 수 있도록 한다. </strong>

2. Implement API (for User Schema)
