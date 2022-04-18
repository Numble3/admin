# Numble 숏폼 챌린지 Admin 페이지

Numble 숏폼 챌린지 관리자 페이지입니다.  
git convention 양식을 준수하여 commit 부탁드립니다.

## git convention

| 태그이름 | 설명                                               |
| -------- | -------------------------------------------------- |
| feat     | 새로운 기능 추가                                   |
| fix      | 버그 수정                                          |
| design   | css등 사용자 UI 수정                               |
| style    | 코드 포맷 변경, 세미콜론 누락, 코드 수정 없는 경우 |
| refactor | 프로덕션 코드 리팩토링                             |
| comment  | 필요한 주석 추가 및 변경                           |
| docs     | 문서 수정                                          |
| rename   | 파일 또는 폴더명을 수정하거나 옮기는 작업          |
| remove   | 파일을 삭제하는 작업만 수행                        |

## 페이지 구성

[login](src/pages/login.tsx) 로그인  
[user](src/pages/user/index.tsx) 유저  
[user/detail](src/pages/user/detail.tsx) 유저 상세  
[main](src/pages/main/index.tsx) 메인 콘텐츠  
[main/detail](src/pages/main/detail.tsx) 메인 콘텐츠 상세
