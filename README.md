# Coding Book

프로젝트 목표

1. React, Redux 사용에 익숙
2. firebase DB사용법
3. 가능하면 node.js
4. 포트폴리오 등재!
5. 프로젝트 완성!!!!!!!

## ✍🏻 프로젝트 설명

블로그형 커뮤니티…. `더 할 설명이 없...`

전체적인 UI는 개발자 커뮤니티 사이트인 okky를, 게시글은 velog를 벤치마킹 했습니다. 

## 🖥️ 구현 해볼 기능들!

1. 로그인 (firebase 구글로그인)
2. markdown 게시글 작성!
3. 조회수와 추천
4. 스크랩
5. 댓글과 대댓글

## 디자인 시안과 컴포넌트 구조

1. 메인페이지

![image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7dd1d452-2063-4e1d-a81e-64cd812f6779/Untitled.png)

혹시 모르는 광고 넣을 양 옆.
메인 좌측에는 최신 글을, 우측에는 좋아요 많은 게시글을 (일일)
아래에는 조회수가 많은 게시글을 카드 UI로 vertical scroll slide 적용 해볼 것이다!

 1-1. 컴포넌트 구조

![image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/151f3e43-5f1b-47be-8b4e-82f0c05dbee4/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8_%ED%8A%B8%EB%A6%AC.png)

메인페이지에서 사용될 UI들을 컴포넌트화 시켜보았다

> 컴포넌트를 원자단위로 쪼개서 관리하는건 1인프로젝트에서 너무 비효율 적인거 같다고 생각이 든다..
그래서 이번 프로젝트는 최대한 조깨보되 내가 불편하지 않을 정도로만 하기로했다
>
