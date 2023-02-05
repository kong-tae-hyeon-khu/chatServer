## Develop Plan (feature/user)

1. <strong>Plan & Implement for User Schema </strong>

```
User Schema
1. Name : String
2. Messages : Message Reference (참조)
```

```
Message : Schema
1. Content : String
```

<strong>Goal : 서로 다른 스키마에서의 참조. 이를 통해 유저의 대화 내용과 유저를 따로 저장하여 서로 참조할 수 있도록 한다. </strong>

2. Implement API (for User Schema)
